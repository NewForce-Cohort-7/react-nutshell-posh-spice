import { useState } from "react"
import { EventForm } from "./EventForm"
import "./Events.css"
import { EventEditForm } from "./EventEditForm"

export const Event = ({eventObject, currentUser, setFilteredEvents}) => {
const [showEdit, setShowEdit] = useState(false)

let todaysDate = new Date().toISOString().split('T')[0]
//Terenary operator that checks if the day of the even has passed, if it does, it takes away the ability to edit the event. Once it checks that, then the rest of the events will have a button that will open up the edit form for that event.
    return ( 
    todaysDate > eventObject.date ? 

        <section className="event__finished" key={`event--${eventObject.id}`}>
        <header className="event__header">{eventObject.name}</header>
            <div>{eventObject.date}</div>
            <div>{eventObject.location}</div> 
     </section> 
     
    :

    !showEdit ? 
         <section className="event" key={`event--${eventObject.id}`}>
        <header className="event__header">{eventObject.name}</header>
            <div>{eventObject.date}</div>
            <div>{eventObject.location}</div>
            <button onClick={() => setShowEdit(true)}>Edit Event</button>
    </section>
   
    : 

    <EventEditForm eventObject={eventObject} setEvents={setFilteredEvents} setShowEdit={setShowEdit}/>

    )

}
