import { useEffect, useState } from "react"
import { getTasks } from "./TaskAPIManager"
import { TaskForm } from "./TaskForm"
import { Task } from "./Task"

export const TaskList = () => {
    const [showForm, setShowForm] = useState(false)
    const [tasks, setTasks] = useState([])
    const [filter, setFiltered] = useState([])

    const localNutshellUser = localStorage.getItem("nutshell_user")
    const nutshellUserObject = JSON.parse(localNutshellUser)
    useEffect(
        () => {
            getTasks()
            .then((taskArray)=>{
                setTasks(taskArray)
            })
        },
        []
    )

    useEffect(
        () => {
            const myTasks = tasks.filter(task => task.userId === nutshellUserObject.id)
            setFiltered(myTasks)
        },
        [tasks]
    )
    return (
        !showForm ?
    
    <>
    <h1 className="todo__header">To-Do List</h1>

    <article className="tasks">
    
<button className="newTask__button" onClick={
        ()=> setShowForm(true)}>Create New Task</button>


    {
        tasks.map(
            (task) => 
                <Task 
                key={`task--${task.id}`} 
                setTasks={setTasks}
                currentUser={nutshellUserObject}
                taskObject={task}
                />
            )
        }
    
    </article>
    </>
:<>
<TaskForm setShowForm={setShowForm}/>
<article className="tasks">
    {
        tasks.map(
            (task) => <Task
            key={`task--${task.id}`}
            setTasks={setTasks}
            currentUser={nutshellUserObject}
            taskObject={task}
            />
        )
    }

</article>
</>


    )
}