import { Outlet, Route, Routes } from "react-router-dom"
import { TaskList } from "../tasks/TaskList"
import { NewTaskButton } from "../tasks/TaskForm"
import { TaskContainer } from "../tasks/TaskContainer"
import { TaskEdit } from "../tasks/TaskEdit"


export const ApplicationViews = () => {
    return (
        <Routes>
        <Route path="/" element={
            <>
                <h1>Nutshell</h1>
                <div>Dashboards for Nutty People</div>
                <TaskContainer/>
                <Outlet />

            </>
        }>
            <Route path="" element={<></>} />
        </Route>
    </Routes>
    )
}