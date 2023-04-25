import "./NavBar.css"
import { Link, useNavigate } from "react-router-dom"


export const NavBar = () => {
    // const localNutshellUser = localStorage.getItem("nutshell_user")
    // const nutshellUserObject = JSON.parse(localNutshellUser)

    const navigate = useNavigate()

    return(

    <ul className="navbar">
         {
                localStorage.getItem("nutshell_user")
                    ? <li className="navbar__item navbar__logout">
                        <Link className="navbar__link" to="" onClick={() => {
                            localStorage.removeItem("nutshell_user")
                            navigate("/", {replace: true})
                        }}>Logout</Link>
                    </li>
                    : ""
            }
    </ul>
    )
}

