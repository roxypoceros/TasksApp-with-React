import "../src/styles/App.css";
import CatLogo from "./components/CatLogo";
import Task from "./components/Task";

function App() {
  return (
    <>
    <div className="tasksApp">
    <CatLogo />
    <div className="mainListOfTasks">
      <h1>My Tasks</h1>
      <Task text="Learn React" />

    </div>
    </div>
    </>
  );
  
}

export default App;
