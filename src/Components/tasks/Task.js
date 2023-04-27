import { Link, useFetcher, useNavigate } from "react-router-dom"
import { deleteTask, editTask, getTasks } from "./TaskAPIManager"
import { useState } from "react"
import { TaskEdit } from "./TaskEdit"

export const Task = ({taskObject, setTasks}) => {
    const [showEdit, setShowEdit] = useState(false)
    const navigate = useNavigate()

    const FinishButton = () => {
            return <button onClick={CloseTask} className="task__finish">Complete Task</button>
        }

    const DeleteButton = () => {
            return <button onClick={
                () => deleteTask(taskObject)
                .then(()=>{
                    getTasks()
                })
            }
              className="task__delete">Delete</button>
    }


    const CloseTask = () => {
        const copy = {
            userId: taskObject.userId,
            description: taskObject.description,
            complete: true,
            dateCompleted: new Date()   
        }

        return editTask(taskObject, copy)
            .then(getTasks)

    }
    return (
    !showEdit ?
    <section className="task" key={`task--${taskObject.id}`}>
        <header className="task__header">    
        <button onClick={() => setShowEdit(true)}>Edit</button>
        </header>
        <section>{taskObject.description}</section>
        <section>{taskObject.completionDate}</section>
        <footer className="task__buttons">
            {
                FinishButton()
            }
            {
                DeleteButton()
            }
        </footer>
    </section>
    :

    <TaskEdit taskObject={taskObject} setTasks={setTasks} setShowEdit={setShowEdit}/>

    )
}