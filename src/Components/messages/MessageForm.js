//Created by Kiersten White
//Exports MessageForm, which renders the JSX to submit a new message

import { useState } from "react";
import { GetMessages } from "./MessageAPIManager";
import "./Message.css"

export const MessageForm = () => {

    const [message, update] = useState({
        username: "",
        message: "",
    })

    const localNutshellUser = localStorage.getItem("nutshell_user")
    const nutshellUserObject = JSON.parse(localNutshellUser)

    const handleSaveButtonClick = (event) => {
        event.preventDefault()
        console.log("You clicked the button.")

        const messageToSendToAPI = {
            userId: nutshellUserObject.id,
            message: message.message
         
    }
           return GetMessages(messageToSendToAPI)
            .then(() => {
                update({ message: ""})
            })
    }

    return (
        <form className="messageForm">
            <h2 className="messageForm_title">Send a new message</h2>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="message"></label>
                        <input
                            required autoFocus
                            type="text"
                            className="message" // className="form-control" gives it a specific styling
                            placeholder="Type message here"
                            value={message.message}
                            onChange={
                                (evt) => {
                                    const copy = {...message}
                                    copy.message = evt.target.value
                                    update(copy)
                                }
                            } />
                    </div>
                </fieldset>
                <button
                    onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
                    className="sendMessage_button">
                        Send Message
                    </button>
        </form>
    )

}

