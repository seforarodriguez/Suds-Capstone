import { Outlet, Route, Routes } from "react-router-dom"
// import { TicketForm } from "../serviceTickets/TicketForm"
// import { TicketContainer } from "../tickets/TicketContainer"
// import { TicketList } from "../tickets/TicketList"
// import { TicketSearch } from "../tickets/TicketSearch"

export const ApplicationViews = () => {
	return (
        <Routes>
            <Route path="/" element={
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