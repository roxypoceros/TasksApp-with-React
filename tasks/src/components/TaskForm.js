import React, { useState } from "react"
import "../styles/TaskForm.css"

function TaskForm(props) {
/* Texto escrito por usuario, hay que manejar estado que
empieza con una cadena de texto vacía (string) */

const [input, setInput] = useState("");

const handleInputChange = e => {
  /* usar funcion setInput y le vamos a pasar algo 
  que va a obtener/apuntar (target) al valor (value) 
  de lo escrito en input (e) */
  setInput(e.target.value)
  console.log(e.target.value)

}

/* Función al dar click en btn que dice Add Task 
e se recibe como un argumento cuando se da click al btn*/
  const handleSubmit = e => {
    /* crear una tarea nueva que tiene id (creado con pqt externo)
     y texto escrito por usuario 
     */
    const newTask = {
      id: "33334",
      text: "Hiiii!"
    }

  }

    return (
        <form className="task-form">
            <input
                className="inputTask"
                type="text"
                placeholder="Write your task"
                name="text"
/* onChange es un event listener para detectar cambio y llamara a la 
función handleInputChange */
                onChange={handleInputChange}
            />
            <button className="taskBtn">
                Add task
            </button>
        </form>
    )
}

export default TaskForm