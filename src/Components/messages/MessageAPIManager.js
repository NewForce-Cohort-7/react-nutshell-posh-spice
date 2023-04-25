//Created by Kiersten White

//POST Function - MessageForm.js
export const GetMessages = (messageToSendToAPI) => {
    return fetch(`http://localhost:8088/messages`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(messageToSendToAPI)
    })
        .then(res => res.json())
}

// FETCH Function - MessageList.js
export const GetMessageAndUserDetails = () => {
    return fetch (`http://localhost:8088/messages?_expand=user`)
                    .then(response => response.json())
}