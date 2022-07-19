import React from "react"
import "../styles/Task.css"
import { AiOutlineCloseCircle } from "react-icons/ai";

function Task({ text, completed }) {
  return (
    /* A continuación asignar nombre de clase condicional  */
    <div className={completed ? "taskContainer completed" : "taskContainer"}>

      <div className="taskText">
        {text}
      </div>
      <div className="taskContainerIcons">
        {/* Se le puede agregar al ícono una clase, 
        se le pasa como prop */}
        <AiOutlineCloseCircle className="iconTask" />
      </div>
    </div>
  )
}

export default Task