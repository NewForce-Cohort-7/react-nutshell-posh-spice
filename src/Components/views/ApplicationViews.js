import { Outlet, Route, Routes } from "react-router-dom"
import { TaskList } from "../tasks/TaskList"
import { NewTaskButton } from "../tasks/TaskForm"
import { TaskContainer } from "../tasks/TaskContainer"
import { TaskEdit } from "../tasks/TaskEdit"
import { MessageContainer } from "../messages/MessageContainer"
import { MessageEdit } from "../messages/MessageEdit"
import { EventsList } from "../events/EventList"
import { EventContainer } from "../events/EventContainer"


export const ApplicationViews = () => {
    return (
        <Routes>
        <Route path="/" element={
            <>
                <h1>Nutshell</h1>
                    <div>Dashboards for Nutty People</div>
                <TaskContainer/>                        
                <MessageContainer />
                
                        <Outlet />

            </>
        }>
            <Route path="" element={<EventContainer/>} />
        </Route>

            <Route path="/editmessage/:messageId" element={<MessageEdit />}></Route>
    </Routes>
    )
}