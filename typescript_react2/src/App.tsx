import "./App.css";
import { useState } from "react";
import logo from "./logo.svg";
import { ITask } from "./interfaces/ITask";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

// i create the interface for the custom type of props
interface IAppProps {
  // title?: string -----> the ? is for declarate optional the property
  title?: string;
}

// { title }: IAppProps ---> asign the interface for the props (destructuring) with the config
export function App({ title }: IAppProps) {
  // useState<ITask[]> -------> asign the interface por the types of data the state received
  const [tasks, setTasks] = useState<ITask[]>([
    {
      id: 1,
      title: "Title",
      description: "description",
      completed: false,
    },
  ]);

  const addNewTask = (task: ITask) => {

    const getCurrentTimestamp = ():number => new Date().getTime();

    setTasks([...tasks, {...task, id: getCurrentTimestamp(), completed: false }]);
  };

  const deleteTask = (id:number) => setTasks(tasks.filter((task) => task.id !== id));

  return (
    <div className="bg-dark" style={{ height: "100vh" }}>
      <nav className="mavbar navbar-dark bg-primary">
        <div className="container">
          <a href="/" className="navbar-brand">
            <img src={logo} alt="react logo" style={{ width: "4rem" }} />
            {title && <h1>{title}</h1>}
          </a>
        </div>
      </nav>
      {/* if i send a type of data string (or number, array, etc), tsc help me with the methods {title.allMethods}*/}
      <main className="container p-4">
        {/* import and use the component sendind for props the tasks state */}
        <div className="row">
          <div className="col-md-4">
            <TaskForm addNewTask={addNewTask} />
          </div>
          <div className="col-md-8">
            <div className="row">
              <TaskList tasks={tasks} deleteTask={deleteTask} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
