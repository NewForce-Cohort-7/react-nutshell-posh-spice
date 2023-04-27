//Created by Kiersten White - Contains all functions and elements to update message list

import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import "./Message.css"
import { GetMessageAndUserDetails } from "./MessageAPIManager"
import { Messages } from "./Message"

export const MessageList = () => {
        const [messages, setMessages] = useState([])
        const [filteredMessages, setFiltered] = useState([])
        const navigate = useNavigate()
        const localNutshellUser = localStorage.getItem("nutshell_user")
        const nutshellUserObject = JSON.parse(localNutshellUser)

        
        useEffect(
            () => {
                GetMessageAndUserDetails()
                    .then((messageArray) => {
                        setMessages(messageArray)
                    })
            }, [] //messages goes into brackets to show live edits
        )

            
    
    return <>
                <article className="messageList">
                <h2>New Messages</h2>
                    {
                        messages.map(
                            (messageObject) => < Messages key={`message--${messageObject.id}`}
                            currentUser={nutshellUserObject}
                            messageObject={messageObject}
                            />  
                        )
                    }
                </article>
            </>           
}

