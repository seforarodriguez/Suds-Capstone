import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
    
    // useEffect(() => {
    //     fetch(` http://localhost:8088/cleaningRequests`, {
    //         method: "PUT",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify(cleaningRequests)
    //     })
    //         .then(response => response.json())
    //         .then(() => {
                
    //         })
        
    // }, []
    // )


//I need extra code to make all the properties for that user to show... small bug with the usestate
    return <>
        <h2> Properties to clean </h2>
        <section className="allProperties">
            {
                cleaningRequests.map(request => {
                    return <section key={request.id}>
                        <ul>
                            <li>{request.property.name}</li> 
                            <li>It needs to be cleaned before: {request.dateNeeded}</li>
                            <li>{request.property.street}, {request.property.city} {request.property.zipCode}</li>
                            <li>{request.property.houseSize}</li>
                        </ul>
                        <button value= {true} onClick={() => {
                            handleSaveButtonClick(request.id)
                        }}>I will clean it!</button>
                    </section>
                })
            }
        </section>
    
    </>
    
} //closing bracket