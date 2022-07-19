import "../src/styles/App.css";
import CatLogo from "./components/CatLogo";
import TaskForm from "./components/TaskForm";

function App() {
  return (
    <>
    <div className="tasksApp">
    <CatLogo />
    <div className="mainListOfTasks">
      <h1>My Tasks</h1>
      <TaskForm />

    </div>
    </div>
    </>
  );
  
}

export default App;
