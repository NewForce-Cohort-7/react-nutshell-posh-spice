import { useEffect, useState } from "react"
import { editEvent, getEventsSortedByDate } from "./EventApiManager";

export const EventEditForm = ({eventObject, setEvents, setShowEdit}) => {
//Initial state of the event we edit
    const [event, setEvent] = useState({
        name: eventObject.name,
        date: eventObject.date,
        location: eventObject.location,
        userId: eventObject.userId
    })
//Save button will edit the event, get events, and then update them to show in real time when clicked
//last .then closes the edit form
const handleSaveButtonClick = (e) => {
    e.preventDefault()
const saveEvent = {...event}
saveEvent.id = eventObject.id
 editEvent(saveEvent)
.then(() => getEventsSortedByDate())
.then((updatedEvent) => setEvents(updatedEvent))
.then(() => setShowEdit(false))

};
return (
    <form className="eventForm">
        <h2 className="eventForm__title">New Event</h2>
        <fieldset>
            <div className="form-group">
                <label htmlFor="name">Event Name:</label>
                <input
                required autoFocus
                type="text"
                className="form-control"
                placeholder="What is the name of your event?"
                value={event.name}
                onChange={
                    (evt) => {
                        const copy = {...event}
                        copy.name = evt.target.value
                        setEvent(copy)
                    }
                } 
                
                />
            </div>
        </fieldset>
        <fieldset>
            <div className="form-group">
                <label htmlFor="date">Date:</label>
                <input
                required autoFocus
                type="date"
                className="form-control"
                placeholder="When is the event?"
                value={event.date}
                onChange={
                    (evt) => {
                        const copy = {...event}
                        copy.date = evt.target.value
                        setEvent(copy)
                    }
                } />
            </div>
        </fieldset>
        <fieldset>
            <div className="form-group">
                <label htmlFor="location">Event Location:</label>
                <input
                required autoFocus
                type="text"
                className="form-control"
                placeholder="Where is your event?"
                value={event.location}
                onChange={
                    (evt) => {
                        const copy = {...event}
                        copy.location = evt.target.value
                        setEvent(copy)
                    }
                } />
            </div>
        </fieldset>
        <button
        onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
        className="edit-event-btn">
           Save Event Details
            </button>
    </form>
)
}