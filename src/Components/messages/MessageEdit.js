import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GetIndividualMessages, GetMessageAndReplace } from "./MessageAPIManager";

export const MessageEdit = () => {

    const [message, editMessage] = useState({
        message: "",
        username: "",
        messageId: 0
    })

    const { messageId } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        GetIndividualMessages(messageId)
            .then((data) => {
                editMessage(data)
            })
    }, [ messageId ])

    const handleSaveButtonClick = (event) => {
        event.preventDefault()

        GetMessageAndReplace(message)
        .then(() => {
            navigate("/")
        })
    }

    return <form className="messageEditForm">
        <h2 className="messageEdit_title">Edit Your Message</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <textarea
                        required autoFocus
                        type="text"
                        className="form-control"
                        value={message.message}
                        onChange={
                           (evt) => {
                            const copy = {...message}
                            copy.message = evt.target.value
                            editMessage(copy)
                           } 
                        }>{message.message}</textarea>
                </div>
            </fieldset>
            <button
                onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
                className="btn btn-primary">
                    Update Message
                </button>
    </form>
}