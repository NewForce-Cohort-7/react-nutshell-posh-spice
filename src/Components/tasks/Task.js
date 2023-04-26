import { Link, useFetcher, useNavigate } from "react-router-dom"
import { deleteTask, editTask, getTasks } from "./TaskAPIManager"
import { useState } from "react"

export const Task = ({taskObject}) => {
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

        return editTask(taskObject)
            .then(r => r.json())
            .then(()=>{
                getTasks()
            })

    }
    return <section className="task" key={`task--${taskObject.id}`}>
        <header className="task__header">    
        <Link to={`/tasks/${taskObject.id}/edit`}><button>Edit</button></Link>
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

}