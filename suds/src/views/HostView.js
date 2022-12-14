import { Outlet, Route, Routes } from "react-router-dom"
import { NewCleaningReq } from "../cleaningServices/cleaningReq"
import { NewPropertyForm } from "../hostHome/PropertiesForm"
import { PropertiesList } from "../hostHome/PropertiesHostList"


export const HostView = () => {
	return (
        <Routes>
            <Route path="/loggedin" element={
                <>
                    <h1>Suds: Cleaning Made Easy</h1>
                    <div>your best Helper!</div>

                    <Outlet />
                </>
            }>
            </Route>
            <Route path="myProperties" element={< PropertiesList/>} />
            <Route path="createNewProperty" element={< NewPropertyForm />} />
            <Route path="requestAcleaning/:propertyId" element={< NewCleaningReq />} />
        </Routes>
    )
}