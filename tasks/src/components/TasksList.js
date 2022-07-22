import React, { useState } from 'react'
import TaskForm from './TaskForm'
import Task from './Task';
import "../styles/TasksList.css"

function TasksList() {
  /* USESTATE usamos una constante y un arreglo con dos elementos, 
  El estado que queremos mantener y 
  La función que vamos a usar para actualizar ese estado
  Inicialmente "task" será un arreglo vacío y se marca después de useState
    */
   
  const [tasks, setTasks] = useState([]);
/* Lo que va a ocurrir cuando agregamos una tarea */
  const addTask = tarea => {
    console.log("Tarea agregada");
    console.log(tarea);
  }


  /* Lo siguiente es la lista del componente en jsx */
  return (
    <>
      <TaskForm /> 
      {/* El sig div va a contener una lista de componentes */} 
      <div className='tasksListContainer'>
        {/* para renderizar una lista de componentes Task, 
        c/u con sus propios valores para props.
        1o. Uso llaves porque voy a usar un método de arreglos de js.
        2o. Tomamos el arreglo "tasks" que definí en useState como estado 
        que va a contener todas las tareas y llamo función .map.
        .MAP toma c/u de las tareas las pasa 1 por 1 como el argumento de otra función
        realiza lo que especifiquemos con esa tarea. 
        ej. Crear un componente Tarea para cada una de las tareas en el arreglo
        */}
        {
          tasks.map((task) =>
          <Task 
          texto={task.text}
          completed={task.completed}
          />
          )
        }
      </div>
    </>
  )
}

export default TasksList