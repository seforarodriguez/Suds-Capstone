import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

export const CleaningRequestEdit = () => {

    const navigate = useNavigate()
    const localSudsUser = localStorage.getItem("suds_user")
    const SudsUserObject = JSON.parse(localSudsUser)


    const [propertyToClean, updatePropToClean] = useState({
        propertyId: 0,
        dateNeeded: 0,
        jobCompleted: false
    })

    const { requestId } = useParams()

    //Get the propertyToClean state from the API.
    useEffect(() => {
        fetch(`http://localhost:8088/cleaningRequests?_expand=property&id=${requestId}`)
            .then(response => response.json())
            .then((data) => {
                const requestObject = data[0]
                updatePropToClean(requestObject)
            })
    }, [])

    const handleSaveButtonClick = (event) => {
        event.preventDefault()


        // TODO: Write the fetch for the PUT request to replace the object being edited

        return fetch(` http://localhost:8088/cleaningRequests/${requestId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(propertyToClean)
        })
            .then(response => response.json())
            .then(() => {
                window.alert("All the dirt has been washed away and updated!")
                navigate("/myProperties")
            })

    }


    return <form className="AcceptanceForm">
        <section>
            <h2 className="YesToClean">Accepting to Clean the Property</h2>
            <div>Property's Name {propertyToClean?.property?.name}</div>
            <div>Address: {propertyToClean?.property?.street}</div>
            <div>zipCode {propertyToClean?.property?.zipCode}</div>
            <div>This will only take {propertyToClean?.property?.cleaningTime} hours to clean</div>
        </section>

        <fieldset>
            <div className="form-group">
                <label htmlFor="name">If you're up to the challenge and called the owner mark this as done</label>
                <input type="checkbox"
                    onChange={
                        (evt) => {
                            const copy = { ...propertyToClean }
                            copy.jobCompleted = true
                            copy.cleanerId = SudsUserObject.id
                            updatePropToClean(copy)
                        }
                    } />
            </div>
        </fieldset>
        <button
            onClick={(event) => handleSaveButtonClick(event)}
            className="btn btn-primary">
            Save Edits
        </button>
    </form>
}