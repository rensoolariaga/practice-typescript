// import the interface for set the config the prop interface
import { ITask } from "../interfaces/ITask";
import TaskCard from "./TaskCard";

// i create the interface for the props of the
interface ITaskListProps {
  // tasks: ITask[] -----> asign the interface imported for the property of the interface
  tasks: ITask[];
  deleteTask: (id:number) => void;
}

// { tasks }: ITaskListProps -----> asign the interface for the props (destructuring) created with another interface
export default function TaskList({ tasks, deleteTask }: ITaskListProps) {
  return (
    <>
      {/* import and use the component sendind for props the task(obj mapped) */}
      {tasks.map((task) => (
        <div className="col-md-4 p-2" key={task.id}>
          <TaskCard task={task} deleteTask={deleteTask} />
        </div>
      ))}
    </>
  );
}
