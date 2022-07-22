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
  const addTask = task => {
/* verificar que tarea ingresada tenga texto.
trim quita espacios al inicio y al final */
if (task.text.trim()){
  /* quitar cualquier espacio al principio y al final con trim  */
task.text = task.text.trim();
/* tomar estado actual de tareas (todas las tareas que tengo) 
y agregar al principio la nueva en un arreglo.
... perador spread convierte las tareas del arreglo en objetos
individuales */
const updatedTasks = [task, ...tasks];
/* A setTasks le paso las tareas actualizadas */
setTasks(updatedTasks)

}
  }


  /* Lo siguiente es la lista del componente en jsx */
  return (
    <>
    {/* Al dar click y enviar el formulario pasamos el prop onSubmit y le 
    pasamos agregarTarea */}
      <TaskForm onSubmit={addTask}/> 
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
          /* al mostrar una lista debemos pasar un prop llamado Key 
          que debe ser único */
          key={task.id}
          id={task.id}
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