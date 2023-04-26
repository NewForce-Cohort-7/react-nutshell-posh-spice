//Created by Kiersten White - Contains all functions and elements to update message list

import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import "./Message.css"
import { GetMessageAndUserDetails } from "./MessageAPIManager"

export const MessageList = () => {
        const [messages, setMessages] = useState([])
        const navigate = useNavigate()
        const localNutshellUser = localStorage.getItem("nutshell_user")
        const nutshellUserObject = JSON.parse(localNutshellUser)

        // const handleSaveButtonClick = (event) => {
        //     event.preventDefault()
        //     console.log("You clicked me!")
        // }


        useEffect(
            () => {
                GetMessageAndUserDetails()
                    .then((messageArray) => {
                        setMessages(messageArray)
                    })
            }, [] //messages goes into brackets to show live edits (ticket #18)
        )
    
    return <>
                <article className="messageList">
                <h2>New Messages</h2>
                    {
                        messages.map(
                            (messageObject) => {
                                return <section className="individualMessage" key={`message--${messageObject.id}`}>
                                            <strong>{messageObject.user.username}:</strong> {messageObject.message} 
                                            <button
                                            onClick={() => navigate(`/editMessage/${messageObject.id}`)}
                                            className="editMessage_button">Edit</button>
                                        </section>

                                        // Add a conditional for edit: If messageId === user.messageId, show button
                                        // else ""
                            }
                        )
                    }

                </article>
            </>           
}

