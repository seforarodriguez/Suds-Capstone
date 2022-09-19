import { useEffect, useState } from 'react';

export const PropertiesCleanerList = () => {

    const [cleaningRequests, setCleaningRequests] = useState([])
    const [filteredProperties, setFilteredProperties] = useState([])
    const [dirtyProperties, updateDirtyProperties] = useState(false)

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
                : fetch(`http://localhost:8088/cleaningRequests?_expand=property`)
                    .then(response => response.json())
                    .then((propertiesArray) => {
                        setCleaningRequests(propertiesArray)
                    })
        },
        []
    )



//I need extra code to make all the properties for that user to show... small bug with the usestate
    return <>
        <h2> Properties to clean </h2>
        <section className="allProperties">
            {
                cleaningRequests.map(request => {
                    return <div key={request.id}>
                        <ul>
                            <li>{request.property.name}</li> 
                            <li>{request.property.street}, {request.property.city} {request.property.zipCode}</li>
                            <li> {request.property.houseSize}</li>
                        </ul>
                        <button onClick={() => <></>}>I will clean it!</button>
                    </div>
                })
            }
        </section>
    
    </>
    
} //closing bracket