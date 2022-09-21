import { Outlet, Route, Routes } from "react-router-dom"
import { CleaningRequestEdit } from "../cleaningServices/cleaningReqEdit"
import { PropertiesCleanerList } from "../hostHome/PropertiesCleanerList"


export const CleanerView = () => {
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
            <Route path="myProperties" element={< PropertiesCleanerList/>} />
            <Route path="cleaningRequests/:requestId" element={< CleaningRequestEdit/>} />
        </Routes>
    )
}
//why is this rendering withmyProperties in front of cleaning requests?
