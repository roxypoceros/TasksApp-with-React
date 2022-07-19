import React from "react"
import "../styles/TaskForm.css"

function TaskForm() {
    return (
        <form className="task-form">
            <input
                className="inputTask"
                type="text"
                placeholder="Write your task"
                name="text"
            />
            <button className="taskBtn">
                Add task
            </button>
        </form>
    )
}

export default TaskForm