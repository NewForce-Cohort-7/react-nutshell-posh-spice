export const getUsers = () => {
    return fetch(`http://localhost:8088/users`)
    .then (r=>r.json())
}

export const getTasks = () => {
    return fetch(`http://localhost:8088/tasks`)
    .then (r=>r.json())
}

export const sendTask = (taskData) => {
    return fetch(`http://localhost:8088/tasks`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body:JSON.stringify(taskData)
    })
}
export const deleteTask = (taskObject) => {
    return fetch(`http://localhost:8088/tasks/${taskObject.id}`, {
        method: "DELETE"
        }
    )
}

export const editTask = (taskObject) => {
    return fetch(`http://localhost:8088/tasks/${taskObject.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body:JSON.stringify(taskObject)
    })
        .then (r=>r.json())
}
