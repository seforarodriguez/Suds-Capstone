import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const NewCleaningReq = () => {

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
            propertyId: 0,
            dateNeeded: Date.now(),
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
                navigate("/myProperties")
            })
    }


    return (
       window.alert("cleaning Request has been sent!")
    )
}