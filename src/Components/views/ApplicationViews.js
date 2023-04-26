import { Outlet, Route, Routes } from "react-router-dom"
import { MessageForm } from "../messages/MessageForm"
import { MessageList } from "../messages/MessageList"
import { MessageContainer } from "../messages/Message"
import { MessageEdit } from "../messages/MessageEdit"


export const ApplicationViews = () => {
    return (
        <Routes>
        <Route path="/" element={
            <>
                <h1>Nutshell</h1>
                    <div>Dashboards for Nutty People</div>
                        <MessageContainer />
                
                        <Outlet />
            </>
        }>
           
        </Route>

            <Route path="/editmessage/:messageId" element={<MessageEdit />}></Route>
    </Routes>
    )
}