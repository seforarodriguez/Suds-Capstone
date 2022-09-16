import { useEffect, useState } from 'react';


export const PropertiesList = () => {

    const [properties, setProperties] = useState([])
    const [filteredProperties, setFilteredProperties] = useState([])
    const [dirtyProperties, updateDirtyProperties] = useState(false)

    const localSudsUser = localStorage.getItem("suds_user")
    const SudsUserObject = JSON.parse(localSudsUser)
    
    //this is fetching the properties
    useEffect(
        () => {
            fetch(' http://localhost:8088/properties')
                .then(response => response.json())
                .then((propertiesArray) => {
                    setProperties(propertiesArray)
                })
        },
        [] // When this array is empty, you are observing initial component state
    )

    useEffect(()=> {
        if (SudsUserObject.host){
            const allMyPropertiesArray = properties.filter(property => property.userId === SudsUserObject.id)
            setFilteredProperties(allMyPropertiesArray)

        } else {
            setFilteredProperties(properties)
        }

    },[properties])

  //  this is filtering the ones that have the clean status as false aka they are dirty
    useEffect(
        () => {
            if (dirtyProperties) {
            //if openOnly is true we are going to filter the tickets
            const dirtyPropertiesArray = filteredProperties.filter(property => property.cleanStatus === false)
            setFilteredProperties(dirtyPropertiesArray)
        } else {
            setFilteredProperties(properties)
            }
        },
        [dirtyProperties]
    )

    //I need extra code to make all the properties for that user to show... small bug with the usestate
    return <>
        <h2> My Properties </h2>
        <button onClick={() =>   dirtyProperties === false ? updateDirtyProperties (true) : updateDirtyProperties(false)}>These Properties are dirty</button>
        <section className="allProperties">
            {
                filteredProperties.map(property => {
                    return <div key={property.id}>
                        <ul>
                            <li>{property.name}</li>
                            <li>{property.street}, {property.city} {property.zipCode}</li>
                            <li>{property.houseSize}</li>
                        </ul>
                    </div>
                })
            }
        </section>

    </>

} //closing bracket