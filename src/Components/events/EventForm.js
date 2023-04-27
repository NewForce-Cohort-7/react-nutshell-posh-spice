import { useState } from "react"
import { createNewEvent, getEvents } from "./EventApiManager"
import { useNavigate } from "react-router-dom"

export const EventForm = ({ setShowForm }) => {
    const [event, updateEvent] = useState({
        name: "",
        date: "",
        location: ""
    });

const localNutshellUser = localStorage.getItem("nutshell_user")
const nutshellUserObject = JSON.parse(localNutshellUser)
const navigate = useNavigate()

const handleCreateNewEventClick = (e) => {
    e.preventDefault()

    const eventToSendToAPI = {
        userId: nutshellUserObject.id,
        name: event.name,
        date: event.date,
        location: event.location
    }

    return createNewEvent(eventToSendToAPI)
        .then(() => {
            setShowForm(false)
        })
        .then(getEvents())
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
                    (e) => {
                        const copy = {...event}
                        copy.name = e.target.value
                        updateEvent(copy)
                    }
                } />
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
                    (e) => {
                        const copy = {...event}
                        copy.date = e.target.value
                        updateEvent(copy)
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
                    (e) => {
                        const copy = {...event}
                        copy.location = e.target.value
                        updateEvent(copy)
                    }
                } />
            </div>
        </fieldset>
        <button
        onClick={(clickEvent) => handleCreateNewEventClick(clickEvent)}
        className="create-event-btn">
            Create Event
            </button>
    </form>
)
}