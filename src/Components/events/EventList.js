import { useEffect, useState } from "react"
import { getEventsSortedByDate } from "./EventApiManager"
import { Event } from "./Event"
import { EventForm } from "./EventForm"
import "./Events.css"

export const EventsList = ({event, updateEvents}) => {
    const [events, setEvents] = useState([])
    const [showForm, setShowForm] = useState(false)
    const [filteredEvents, setFilteredEvents] = useState([])

const localNutshellUser = localStorage.getItem("nutshell_user")
const nutshellUserObject = JSON.parse(localNutshellUser)

useEffect(
    () => {
        getEventsSortedByDate()
        .then((eventsArray) => {
            setEvents(eventsArray)
        })
    },
    []
)
//Filter through events so only events the logged in user created, will show
useEffect(
    () => {
        const myEvents = events.filter(event => event.userId === nutshellUserObject.id)
        setFilteredEvents(myEvents)
    },[events]
)
//Terenary operator that opens up a form in the JSX to create a new event. Closes the form and shows event list once create button is pressed
return (
!showForm ? <>    
<h2>Events</h2>
<button onClick={() => setShowForm(true)}> Create New Event</button>

<article className="events">
{
    filteredEvents.map(
        (event) => <Event key={`event--${event.id}`} currentUser={nutshellUserObject}
                           eventObject={event}
                           setFilteredEvents={setEvents}
        />
    )
}
</article>

</>
:
<EventForm setShowForm={setShowForm}/>
)
}