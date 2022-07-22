import "../src/styles/App.css";
import CatLogo from "./components/CatLogo";
import TasksList from "./components/TasksList";

function App() {
  return (
    <>
      <div className="tasksApp">
        <CatLogo />
        <div className="mainListOfTasks">
          <h1>My Tasks</h1>
          <TasksList />

        </div>
      </div>
    </>
  );

}

export default App;
