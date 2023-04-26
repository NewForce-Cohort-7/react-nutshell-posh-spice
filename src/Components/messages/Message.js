import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Message.css"
import { MessageList } from "./MessageList";

export const Messages = () => {
    const [messages, setMessages] = useState([])
    const [users, setUsers] = useState([])
    const navigate = useNavigate()

    const localNutshellUser = localStorage.getItem("nutshell_user")
    const nutshellUserObject = JSON.parse(localNutshellUser)
}