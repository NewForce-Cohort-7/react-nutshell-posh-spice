import { useNavigate } from "react-router-dom";
import { ThumbsCounter } from "./ThumbsCounter";
import "./Message.css"

export const Messages = ({messageObject, currentUser}) => {

    const navigate = useNavigate()

    return( 
    
        messageObject.userId === currentUser.id ?
            <section className="individualMessage" key={`message--${messageObject.id}`}>
                <strong>{messageObject.user.username}:</strong> {messageObject.message} 
                    < ThumbsCounter />
                    <button onClick={() => navigate(`/editMessage/${messageObject.id}`)}
                        className="editMessage_button">Edit</button> 
            </section>

        : 
            <section className="individualMessage" key={`message--${messageObject.id}`}>
                <strong>{messageObject.user.username}:</strong> {messageObject.message}
                < ThumbsCounter />
            </section>
    )
}