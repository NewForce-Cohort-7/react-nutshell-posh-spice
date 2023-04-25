import { Outlet, Route, Routes } from "react-router-dom"
import { MessageForm } from "../messages/MessageForm"
import { MessageList } from "../messages/MessageList"


export const ApplicationViews = () => {
    return (
        <Routes>
        <Route path="/" element={
            <>
                <h1>Nutshell</h1>
                <div>Dashboards for Nutty People</div>
                <MessageForm />
                <MessageList />

                <Outlet />
            </>
        }>
            {/* <Route path="" element={ <MessageForm /> } /> */}
            {/* <Route path="" element={ <MessageList /> } />   NOTE: For some reason, it will only go to the first route...*/} 
        </Route>
    </Routes>
    )
}