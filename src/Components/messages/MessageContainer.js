//Created by Kiersten White

import { MessageEdit } from "./MessageEdit";
import { MessageForm } from "./MessageForm";
import { MessageList } from "./MessageList";
import { Counter } from "./MessageCounter";

export const MessageContainer = () => {
    return <>
        <MessageForm />
        <Counter />
        <MessageList />
        {/* <MessageEdit /> */}
    </>
}