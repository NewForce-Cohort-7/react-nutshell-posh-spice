//Created by Kiersten White
// Retrieves Message and User Details from the API, sends props to the children

import { useState, useEffect } from "react"
import "./Message.css"
import { GetMessageAndUserDetails, GetMessages } from "./MessageAPIManager"
import { Messages } from "./Message"

export const MessageList = () => {
        const [messages, setMessages] = useState([])
        const localNutshellUser = localStorage.getItem("nutshell_user")
        const nutshellUserObject = JSON.parse(localNutshellUser)

        useEffect(
            () => {
                GetMessageAndUserDetails()
                    .then((messageArray) => {
                        setMessages(messageArray)
                    })
            }, [] //messages goes into brackets to show live edits, which is not *technically* the correct way to do it but works
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

