import { Outlet, Route, Routes } from "react-router-dom"
import { PropertiesList } from "../home/Propertieslist"


export const ApplicationViews = () => {
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
        </Routes>
    )
}