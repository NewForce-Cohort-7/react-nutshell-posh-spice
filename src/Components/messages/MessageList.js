//Created by Kiersten White - Contains all functions and elements to update message list

import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import "./Message.css"
import { GetMessageAndUserDetails } from "./MessageAPIManager"

export const MessageList = () => {
        const [messages, setMessages] = useState([])

        useEffect(
            () => {
                GetMessageAndUserDetails()
                    .then((messageArray) => {
                        setMessages(messageArray)
                    })
            }
        )
    
    return <>
                <article className="messageList">
                <h2>New Messages</h2>
                    {
                        messages.map(
                            (messageObject) => {
                                return <section className="individualMessage" key={`message--${messageObject.id}`}>
                                            <strong>{messageObject.user.username}:</strong> {messageObject.message}
                                        </section>
                            }
                        )
                    }

                </article>
            </>           
}

