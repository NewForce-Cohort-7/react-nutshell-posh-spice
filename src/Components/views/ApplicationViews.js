import { Outlet, Route, Routes } from "react-router-dom"
import { MessageForm } from "../messages/MessageForm"


export const ApplicationViews = () => {
    return (
        <Routes>
        <Route path="/" element={
            <>
                <h1>Nutshell</h1>
                <div>Dashboards for Nutty People</div>
                {/* <MessageForm /> */}

                <Outlet />
            </>
        }>
            <Route path="" element={ <MessageForm /> } /> 
        </Route>
    </Routes>
    )
}