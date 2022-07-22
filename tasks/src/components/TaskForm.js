import React, { useState } from "react";
import "../styles/TaskForm.css";
import { v4 as uuidv4 } from "uuid";

function TaskForm(props) {
  /* Texto escrito por usuario, hay que manejar estado que
empieza con una cadena de texto vacía (string) */

  const [input, setInput] = useState("");

  const handleInputChange = e => {
    /* usar funcion setInput y le vamos a pasar algo 
  que va a obtener/apuntar (target) al valor (value) 
  de lo escrito en input (e) */
    setInput(e.target.value);
  };

  /* Función al dar click en btn que dice Add Task 
e se recibe como un argumento cuando se da click al btn*/
  const handleSubmit = e => {
    /* para evitar que se vuelva a cargar el formulario cuando 
    lo enviamos usamos el sig. método */
    e.preventDefault();
    console.log("enviando formulario");
    /* crear una tarea nueva que tiene id (creado con pqt externo:
      uuid para crear id únicos https://www.npmjs.com/package/uuid)
     y texto escrito por usuario 
     */
    const newTask = {
      id: uuidv4(),
      text: input,
      completed: false
    };
    /* Permite agregar la nueva tarea a la lista de tareas cuando
    se envia el formulario */
    props.onSubmit(newTask);
  };

  return (
    <form
      className="task-form"
      /* onSubmit es un event listener que se usa cuando se envia formulario
y llamaremos a la función handleSubmit */
      onSubmit={ handleSubmit }>
      <input
        className="inputTask"
        type="text"
        placeholder="Write your task"
        name="text"
        /* onChange es un event listener para detectar cambio y llamara a la 
función handleInputChange */
        onChange={ handleInputChange }
      />
      <button className="taskBtn">Add task</button>
    </form>
  );
}

export default TaskForm;
