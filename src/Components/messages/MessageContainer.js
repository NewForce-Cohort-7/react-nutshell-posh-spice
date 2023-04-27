//Created by Kiersten White
// Imports all message componenets into one container, which is displayed via ApplicationViews.js

import { MessageForm } from "./MessageForm";
import { MessageList } from "./MessageList";

export const MessageContainer = () => {
    return <>
        <MessageForm />
        <MessageList />
    </>
}