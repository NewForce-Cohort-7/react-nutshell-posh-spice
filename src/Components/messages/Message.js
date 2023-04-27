import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Message.css"
import { MessageList } from "./MessageList";

export const Messages = ({messageObject, currentUser}) => {

    const navigate = useNavigate()

    return( 
    
        messageObject.userId === currentUser.id ?
    
    
    <section className="individualMessage" key={`message--${messageObject.id}`}>
    <strong>{messageObject.user.username}:</strong> {messageObject.message} 
        <button
        onClick={() => navigate(`/editMessage/${messageObject.id}`)}
        className="editMessage_button">Edit</button>
            </section>

        : <section className="individualMessage" key={`message--${messageObject.id}`}>
            <strong>{messageObject.user.username}:</strong> {messageObject.message} 
            </section>

    )

}