import { Outlet, Route, Routes } from "react-router-dom"


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
            <Route path="" element={<></>} /> 
        </Route>
    </Routes>
    )
}