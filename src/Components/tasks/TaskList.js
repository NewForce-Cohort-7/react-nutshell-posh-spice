import { useEffect, useState } from "react"
import { getTasks } from "./TaskAPIManager"
import { TaskForm } from "./TaskForm"
import { Task } from "./Task"

export const TaskList = () => {
    const [showForm, setShowForm] = useState(false)
    const [tasks, setTasks] = useState([])
    const [filteredTasks, setFiltered] = useState([])

    const localNutshellUser = localStorage.getItem("nutshell_user")
    const nutshellUserObject = JSON.parse(localNutshellUser)
    useEffect(
        () => {
            getTasks()
                .then((taskArray) => {
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
    const incompleteTasks = filteredTasks.filter(task => !task.complete)
    const completedTasks = filteredTasks.filter(task => task.complete)

    return (
        !showForm ?
            //THIS IS THE SECTION WHERE ONLY THE BUTTON FOR CREATE TASKS
            <>
                <h1 className="todo__header">To-Do List</h1>

                <article className="tasks">

                    <button className="newTask__button" onClick={
                        () => setShowForm(true)}>Create New Task</button>

                    <h2 className="todo__subheader">Incomplete Tasks</h2>
                    <section className="tasks__incomplete">
                        {
                            incompleteTasks.map(
                                (task) =>
                                    <Task
                                        key={`task--${task.id}`}
                                        setTasks={setTasks}
                                        currentUser={nutshellUserObject}
                                        taskObject={task}
                                    />
                            )
                        }
                    </section>
                    <h2 className="todo__subheader">Completed Tasks</h2>
                    <section className="tasks__completed">
                        {
                            completedTasks.map(
                                (task) =>
                                    <Task
                                        key={`task--${task.id}`}
                                        setTasks={setTasks}
                                        currentUser={nutshellUserObject}
                                        taskObject={task}
                                    />
                            )
                        }
                    </section>
                </article>
            </>
            : <>
                <TaskForm setShowForm={setShowForm} />
                <h1 className="todo__header">To-Do List</h1>

                <article className="tasks">

                    <button className="newTask__button" onClick={
                        () => setShowForm(true)}>Create New Task</button>

                    <h2 className="todo__subheader">Incomplete Tasks</h2>
                    <section className="tasks__incomplete">
                        {
                            incompleteTasks.map(
                                (task) =>
                                    <Task
                                        key={`task--${task.id}`}
                                        setTasks={setTasks}
                                        currentUser={nutshellUserObject}
                                        taskObject={task}
                                    />
                            )
                        }
                    </section>
                    <h2 className="todo__subheader">Completed Tasks</h2>
                    <section className="tasks__completed">
                        {
                            completedTasks.map(
                                (task) =>
                                    <Task
                                        key={`task--${task.id}`}
                                        setTasks={setTasks}
                                        currentUser={nutshellUserObject}
                                        taskObject={task}
                                    />
                            )
                        }
                    </section>
                </article>
            </>
    )
}