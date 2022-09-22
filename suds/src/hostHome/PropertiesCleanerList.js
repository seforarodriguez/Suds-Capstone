import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./propertiesList.css"

export const PropertiesCleanerList = () => {

    const [cleaningRequests, setCleaningRequests] = useState([])

    const navigate = useNavigate()

    const localSudsUser = localStorage.getItem("suds_user")
    const SudsUserObject = JSON.parse(localSudsUser)

    //this is fetching the properties that are dirty for them to pick
    useEffect(
        () => {
            SudsUserObject.host ?
                fetch(`http://localhost:8088/properties?_expand=user&userId=${SudsUserObject.id}`)
                    .then(response => response.json())
                    .then((propertiesArray) => {
                        setCleaningRequests(propertiesArray)
                    })
                : fetch(`http://localhost:8088/cleaningRequests?_expand=property&jobCompleted=false`)
                    .then(response => response.json())
                    .then((propertiesArray) => {
                        setCleaningRequests(propertiesArray)
                    })
        },
        []
    )

    const handleSaveButtonClick = (id) => {
        return navigate(`/cleaningRequests/${id}`)
    }


    //I need extra code to make all the properties for that user to show... small bug with the usestate
    return <>
        <h2> Properties to clean </h2>
        <section className="allProperties">
            {
                cleaningRequests.map(request => {
                    return <section className='eachDirtyProperty' key={request.id}>
                        <div>{request.property.name}</div>
                        <div>It needs to be cleaned before: {request.dateNeeded}</div>
                        <div>{request.property.street}, {request.property.city} {request.property.zipCode}</div>
                        <div>{request.property.houseSize}</div>
                        <button value={true} onClick={() => {
                            handleSaveButtonClick(request.id)
                        }}>I will clean it!</button>
                    </section>
                })
            }
        </section>

    </>

} //closing bracket