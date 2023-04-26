//Created by Kiersten White

import { MessageEdit } from "./MessageEdit";
import { MessageForm } from "./MessageForm";
import { MessageList } from "./MessageList";

export const MessageContainer = () => {
    return <>
        <MessageForm />
        <MessageList />
        {/* <MessageEdit /> */}
    </>
}