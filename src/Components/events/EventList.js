import { useEffect, useState } from "react"
import { getEventsSortedByDate } from "./EventApiManager"
import { Event } from "./Event"
import { EventForm } from "./EventForm"
import "./Events.css"

export const EventsList = () => {
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
//Function to find the name of each month
const getMonthName = (monthNum) => {
    const date = new Date()
    date.setMonth(monthNum - 1)
    return date.toLocaleString('en-US', { month: 'long' })
}

const listOfEvents = (filteredEvents) => {
    {
     return filteredEvents.map(
            (event) => <Event key={`event--${event.id}`} currentUser={nutshellUserObject}
                               eventObject={event}
                               setFilteredEvents={setEvents}
            />
        )
    }
}

//Function that looks through each event, splits the date to find the number corresponding to each month, adds 1 to a counter for each event in that month, then prints JSX with a list of the events under the corresponding month name and counter of events
const eventsByMonth = () => {
    
    const eventsArray = []
    
    for(let i = 1; i < 13; i++){

        const monthlyEvents = []
        let eventCount = 0

        events.forEach(event => {
            const [,eventMonth] = event.date.split("-")

            if(parseInt(eventMonth) === i){
                monthlyEvents.push(event)
                eventCount++
            }
        })
        
        if(eventCount !== 0){
        eventsArray.push(
            <div className="event__list" key={`events--${i}`}>
                <h2>{getMonthName(i)}({eventCount})</h2>
                <div>{listOfEvents(monthlyEvents)}</div>
            </div>
        )
        }
    }
    return eventsArray
}


//Terenary operator that opens up a form in the JSX to create a new event. Closes the form and shows event list once create button is pressed
return (
!showForm ? <>    
<h2>Events</h2>
<button onClick={() => setShowForm(true)}> Create New Event</button>

<article className="events">
    <div>
            {eventsByMonth()}
    </div>
</article>

</>
:
<EventForm setShowForm={setShowForm}/>
)
}