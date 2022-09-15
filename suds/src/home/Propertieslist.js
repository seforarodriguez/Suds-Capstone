import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';



export const PropertiesList = () => {

    const [properties, setProperties] = useState([])

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

    return <>
        <h2> My Properties </h2>
        <section className="allProperties">
            {
                properties.map(property => {
                    return <div>
                        <ul>
                            <li>{property.name}</li>
                            <li>{property.street}, {property.city} {property.zipCode}</li>
                            <li>{property.houseSize}</li>
                        </ul>
                        <Button variant="secondary">Delete</Button>{' '}
                        <Button variant="secondary">Edit</Button>{' '}
                    </div>

                })
            }
        </section>

    </>

} //closing bracket