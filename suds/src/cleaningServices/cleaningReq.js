import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

export const NewCleaningReq = ({propId}) => {

    const {propertyId} = useParams()
    
    const [toClean, updateToclean] = useState({
        propertyId: 0,
        dateNeeded: "",
        jobCompleted: false
    })
    

    const navigate = useNavigate()

    const localSudsUser = localStorage.getItem("suds_user")
    const SudsUserObject = JSON.parse(localSudsUser)

    const handleSaveButtonClick = (event) => {
        event.preventDefault()

        // TODO: Create the object to be saved to the API
       
        const propertyToCleanToAPI = {
            propertyId: parseInt(propertyId),
            dateNeeded: toClean.dateNeeded,
            jobCompleted: false
        }

        // TODO: Perform the fetch() to POST the object to the API
        return fetch(` http://localhost:8088/cleaningRequests`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(propertyToCleanToAPI)
        })
            .then(response => response.json())
            .then(() => {
                window.alert("Your request has been sent")
                navigate("/myProperties")
            })
    }




    return (
        <form className="CleaningForm">
            <h2 className="Properties Form__title">New Cleaning request</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="propertyName">Cleaning Details</label>
                    <input
                        required autoFocus
                        type="date"
                        className="form-control"
                        value={toClean.dateNeeded}
                        onChange={
                            (event) => {
                                const copy = {...toClean}
                                copy.dateNeeded = event.target.value
                                updateToclean(copy)
                            }
                        } />
                </div>
            </fieldset> 
           
            <button onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
                className="btn btn-primary">
                Submit Property
            </button>
        </form>
    ) //closing the return
}