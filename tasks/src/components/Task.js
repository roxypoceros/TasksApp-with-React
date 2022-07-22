import React from "react"
import "../styles/Task.css"
import { AiOutlineCloseCircle } from "react-icons/ai";

/* Task tiene 5 props:
id único para cada tarea
texto de la tarea
si la tarea fue completada (T/F)
2funciones que se llaman en caso de que ocurra un evento:
completar tarea (cuando den click en texto)
y borrar tarea */
function Task({ id, text, completed, completeTask, deleteTask }) {
  return (
    /* A continuación asignar nombre de clase condicional  */
    <div className={completed ? "taskContainer completed" : "taskContainer"}>

      <div className="taskText"
      /* onClick necesita que su valor sea una función.
      Función anómima se va a ejecutar y va a llamar a completeTask (pasada como prop)*/
      onClick={() => completeTask(id)}>
        
        {text}
      </div>
      <div className="taskContainerIcons"
      onClick={() => deleteTask(id)}>
        {/* Se le puede agregar al ícono una clase, 
        se le pasa como prop */}
        <AiOutlineCloseCircle className="iconTask" />
      </div>
    </div>
  )
}

export default Task