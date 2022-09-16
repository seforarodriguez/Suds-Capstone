import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const NewPropertyForm = () => {
    /*
        TODO: Add the correct default properties to the
        initial state object
    */
    const [property, update] = useState({
        name: "",
        street: "",
        city: "",
        zipCode: "",
        houseSize: "",
        cleaningTime: 0,
        cleanStatus: true
    })
    /*
        TODO: Use the useNavigation() hook so you can redirect
        the user to the property list
    */

    const navigate = useNavigate()

    const localSudsUser = localStorage.getItem("suds_user")
    const SudsUserObject = JSON.parse(localSudsUser)

    const handleSaveButtonClick = (event) => {
        event.preventDefault()

        // TODO: Create the object to be saved to the API
       
        const propertiesToSendToAPI = {
            userId: SudsUserObject.id,
            name: property.name,
            street: property.street,
            city: property.city,
            zipCode: property.zipCode,
            houseSize: property.houseSize,
            cleaningTime: parseInt(property.cleaningTime),
            cleanStatus: property.cleanStatus
        }

        // TODO: Perform the fetch() to POST the object to the API
        return fetch(` http://localhost:8088/properties`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(propertiesToSendToAPI)
        })
            .then(response => response.json())
            .then(() => {
                navigate("/myProperties")
            })
    }


    return (
        <form className="PropertiesForm">
            <h2 className="Properties Form__title">New Service Properties</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="propertyName">Name your property</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Name your property"
                        value={property.name}
                        onChange={
                            (event) => {
                                const copy = { ...property }
                                copy.name = event.target.value
                                update(copy)
                            }
                        } />
                </div>
                <div className="form-group">
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Street number and name"
                        value={property.street}
                        onChange={
                            (event) => {
                                const copy = { ...property }
                                copy.street = event.target.value
                                update(copy)
                            }
                        } />
                </div>
                <div className="form-group">
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Zipcode"
                        value={property.zipCode}
                        onChange={
                            (event) => {
                                const copy = { ...property }
                                copy.zipCode = event.target.value
                                update(copy)
                            }
                        } />
                </div>
                <div className="form-group">
                    <label htmlFor="propertyName">Name your property</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="What city is this in...?"
                        value={property.city}
                        onChange={
                            (event) => {
                                const copy = { ...property }
                                copy.city = event.target.value
                                update(copy)
                            }
                        } />
                </div>
                <div className="form-group">
                    <label htmlFor="productType">House Size</label>
                    <select id="productType" value={property.houseSize}
                            onChange={(evt) => {
                                const copy = {...property}
                                copy.houseSize = evt.target.value
                                update(copy)
                            }}
                        >
                        <option value={0}>Choose your Property's Size...</option>
                        <option value={1}>S</option>
                        <option value={2}>M</option>
                        <option value={3}>L</option> 
                    </select>
                     </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Is this clean?</label>
                    <input type="checkbox"
                        value={property.cleanStatus}
                        onChange={
                            (event) => {
                                const copy = { ...property }
                                copy.cleanStatus = event.target.checked
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            <button onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
                className="btn btn-primary">
                Submit Property
            </button>
        </form>
    )
}