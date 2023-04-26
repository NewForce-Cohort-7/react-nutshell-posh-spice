import { useEffect, useState } from "react"
import { getTasks, sendTask } from "./TaskAPIManager"



export const TaskForm = ({setShowForm}) => {

    const [task, update] = useState({
        description:"",
        complete: false,
        completionDate:""
    })

    const localNutshellUser = localStorage.getItem("nutshell_user")
    const nutshellUserObject = JSON.parse(localNutshellUser)

    const handleSaveButtonClick = (event) => {
        event.preventDefault()
        
        const taskToSendToAPI = {
            id: task.id,
            userId: nutshellUserObject.id,
            description: task.description,
            complete: false,
            completionDate: task.completionDate
        }
    return sendTask(taskToSendToAPI)
        .then(()=>{
            setShowForm(false)
        })

    }
    return (
        <form className="TaskForm">
            <h2 className="TaskForm__title">New Task</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Brief description of Task"
                        value={task.description}
                        onChange={
                            (evt) => {
                                const copy = {...task}
                                copy.description = evt.target.value
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="completionDate">Expected Completion Date:</label>
                    <input
                        required autoFocus
                        type="date"
                        className="form-control"
                        placeholder="When to Complete"
                        value={task.completionDate}
                        onChange={
                            (evt) => {
                                const copy = {...task}
                                copy.completionDate = evt.target.value
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            <button
                onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
                className="btn btn-primary">
                Add Task
            </button>
            </form>

    )
}