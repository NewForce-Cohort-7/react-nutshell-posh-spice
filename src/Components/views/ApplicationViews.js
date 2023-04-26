import { Outlet, Route, Routes } from "react-router-dom"
import { EventsList } from "../events/EventList"
import { EventContainer } from "../events/EventContainer"


export const ApplicationViews = () => {
    return (
        <Routes>
        <Route path="/" element={
            <>
                <h1>Nutshell</h1>
                <div>Dashboards for Nutty People</div>

                <Outlet />
            </>
        }>
            <Route path="" element={<EventContainer/>} /> 
        </Route>
    </Routes>
    )
}