import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const PropertiesList = () => {

    const [properties, setProperties] = useState([])
    const [filteredProperties, setFilteredProperties] = useState([])
    const [dirtyProperties, updateDirtyProperties] = useState(false)

    const localSudsUser = localStorage.getItem("suds_user")
    const SudsUserObject = JSON.parse(localSudsUser)

    const { userId } = useParams()

    //this is fetching the properties

    useEffect(
        () => {
            SudsUserObject.host ?
                fetch(`http://localhost:8088/properties?_expand=user&userId=${SudsUserObject.id}`)
                    .then(response => response.json())
                    .then((propertiesArray) => {
                        setProperties(propertiesArray)
                    })
                : fetch(`http://localhost:8088/properties?cleanStatus=false`)
                    .then(response => response.json())
                    .then((propertiesArray) => {
                        setProperties(propertiesArray)
                    })
        },
        []
    )

    useEffect(() => {
        if (SudsUserObject.host) {
            const allMyPropertiesArray = properties.filter(property => property.userId === SudsUserObject.id)
            setFilteredProperties(allMyPropertiesArray)
        } else {
            setFilteredProperties(properties)
        }

    }, [properties])

    //  this is filtering the ones that have the clean status as false aka they are dirty
    useEffect(() => {
        if (dirtyProperties) {
        //Only is true we are going to filter the tickets
        const dirtyPropertiesArray = filteredProperties.filter(property => property.cleanStatus === false)
         setFilteredProperties(dirtyPropertiesArray)
        }else {
      setFilteredProperties(properties)
        }},
        [dirtyProperties]
    )

//I need extra code to make all the properties for that user to show... small bug with the usestate
    return <>
        <h2> My Properties </h2>
        <button onClick={() => dirtyProperties === false ? updateDirtyProperties(true) : updateDirtyProperties(false)}>These Properties are dirty</button>
        <section className="allProperties">
            {
                filteredProperties.map(property => {
                    return <div key={property.id}>
                        <ul>
                            <li>{property.name}</li>
                            <li>{property.street}, {property.city} {property.zipCode}</li>
                            <li> {property.houseSize}</li>
                            {
                                property.cleanStatus === false? 
                                <button onClick={() => <></>}> Request Cleaning</button> 
                                : ""
                            }
                        </ul>
                    </div>
                })
            }
        </section>
    
    </>
    
} //closing bracket

//when request cleaning button is clicked
//the id of the property should be stored and create a cleaning request object
//that cleaning request object should be put into the database
//and then that should populate the data in the cleaners