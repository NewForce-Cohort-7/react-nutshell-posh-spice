import { useEffect, useState } from "react"
import { EventForm } from "./EventForm"
import { EventsList } from "./EventList"
import { getEventsSortedByDate } from "./EventApiManager"

export const EventContainer = () => {

    const [events, setEvents] = useState([])

    useEffect(() => {
        getEventsSortedByDate()
        .then((returnedEvents) => setEvents(returnedEvents))
    },[])


    return (
        <>
        <EventsList events={events} updateEvents={setEvents}/>
        </>
    )
}