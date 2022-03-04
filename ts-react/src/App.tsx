// import useRef for make the "autoFocus" post finish action 
import React, { useState, useRef } from "react";

// set a type for use in the events
type FormElement = React.FormEvent<HTMLFormElement>;

// set the interface for use in the states for set
interface ITask {
  name: string;
  done: boolean;
}

function App(): JSX.Element {
  // useState<string> ------> set the type of data or interface what i want to support for the state
  const [newTask, setNewTask] = useState<string>("");
  // ITask[] ----> set the type of data for the interface [{}, {}...]
  const [tasks, setTasks] = useState<ITask[]>([]);

  const taskInput = useRef<HTMLInputElement>(null);

  // const handlerOnChange = (e: FormElement) => {
  //   e.preventDefault();
  //   console.log(`soy el evento: ${e}`)
  //   // setTask(e.target.value)
  // };

  const addTask = (name:string):void => {
    // i can define the type of data with the interface too (explicit)
    const task:ITask[] = [...tasks, { name, done: false }];
    setTasks(task);
  };
  
  const toggleDoneTask = (i:number):void => {
    const doneTask:ITask[] = [...tasks];
    doneTask[i].done = !doneTask[i].done;
    setTasks(doneTask);
  };

  const removeTask = (i: number):void => {
    const removeTask:ITask[]  = [...tasks];
    removeTask.splice(i, 1);
    setTasks(removeTask);
  };

  // e: FormElement ---> set the event with the type of data defined for me
  const handlerOnSubmit = (e: FormElement) => {
    e.preventDefault();
    addTask(newTask);
    setNewTask("");
    // finished the action ejecute the "autoFocus"
    taskInput.current?.focus();
  };

  return (
    <div className="container p-4">
      <div className="card">
        <div className="card-body">
          <form onSubmit={handlerOnSubmit}>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setNewTask(e.target.value)}
              value={newTask}
              ref={taskInput}
              autoFocus
            />
            <button className="btn btn-success btn-block mt-2">Submit</button>
          </form>
        </div>
      </div>
      {
        // mapping the array of tasks: t:ITask --> i define the the files to matched i: number --> set the type of data for the parameter index for the keys
        tasks.map((t:ITask, i:number) => (
          <div className="card card-body mt-2" key={i}>
              <h2 style={{textDecoration: t.done ? 'line-through' : ''}}>{t.name}</h2>
              <div>
                <button className="btn btn-secondary" onClick={() => toggleDoneTask(i)}>
                  { t.done ? '✓' : '✗'}
                </button>
                <button className="btn btn-danger" onClick={() => removeTask(i)}>
                  🗑
                </button>
              </div>

          </div>
  ))
      }
    </div>
  );
}

export default App;
