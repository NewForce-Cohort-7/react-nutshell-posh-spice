import { useState } from "react"
import { editTask, getTasks } from "./TaskAPIManager"

export const TaskEdit = ({taskObject, setTasks, setShowEdit}) => {
    const [task, setTask] = useState({
        userId: taskObject.userId,
        description: taskObject.description,
        complete: taskObject.complete,
        completionDate: taskObject.completionDate
    })

    const handleSaveButtonClick = (evt) => {
        evt.preventDefault()
    const saveTask = {...task}
    saveTask.id = taskObject.id
    editTask(saveTask)
        .then(() => getTasks())
        .then((updatedTask) => setTasks(updatedTask))
        .then(() => setShowEdit(false))
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
                        setTask(copy)
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
                        setTask(copy)
                    }
                } />
        </div>
    </fieldset>
    <button
                onClick={(evt) => handleSaveButtonClick(evt)}
                className="btn btn-primary">
                Save Edits
            </button>
    </form>
            )
}