import { Outlet, Route, Routes } from "react-router-dom"


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
        </Routes>
    )
}