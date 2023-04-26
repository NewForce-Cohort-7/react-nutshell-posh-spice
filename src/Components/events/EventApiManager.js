export const createNewEvent = (eventToSendToAPI) => {
    return fetch(`http://localhost:8088/events`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
    },
    body: JSON.stringify(eventToSendToAPI)
    })
    .then(response => response.json())
}
export const getEventsSortedByDate = () => {
    return fetch(`http://localhost:8088/events?_sort=date&_order=asc`)
    .then(response => response.json())
}
export const editEvent = (eventObject) => {
    return fetch(`http://localhost:8088/events/${eventObject.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(eventObject)
    })
    .then(response => response.json())
}
export const getEventsById = (eventObject) => {
    return fetch(`http://localhost:8088/events/${eventObject.id}`)
    .then(response => response.json())
}
export const getEvents = () => {
    return fetch(`http://localhost:8088/events`)
    .then(response => response.json())
}