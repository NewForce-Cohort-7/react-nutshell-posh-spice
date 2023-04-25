import "./Nutshell.css"
import { Outlet, Route, Routes } from 'react-router-dom';
import { Login } from './auth/Login';
import { Register } from './auth/Register';
import { Authorized } from "./views/Authorized";
import { NavBar } from "./nav/NavBar";
import { ApplicationViews } from "./views/ApplicationViews";

function Nutshell() {
  return (
      <Routes>
          <Route>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            <Route path="*" element={
			          <Authorized>
				          <>
					          <NavBar />
					          <ApplicationViews />
			          	</>
			        </Authorized>
            } />
            
      </Route>
    </Routes>
    )
}

export default Nutshell;

{/* <Route path="/" element={
  <>
    <div className="Dashboard">
        <header className="App-header">
          <h1>Welcome to Nutshell</h1>
        </header>
  </div>
<Outlet />
</>
}> */}