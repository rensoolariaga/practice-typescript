// import the interface for set the config the prop interface
import { ITask } from "../interfaces/ITask";

// i create the interface for the props of the
interface ITaskCardProps {
  // task: ITask ------> asign the interface imported for the property of the interface, in this case dont use the ITask[] because task is the obj mapped 
  task: ITask;
  deleteTask: (id: number) => void;
}

export default function TaskCard({ task, deleteTask }: ITaskCardProps) {
  return (
    <div className="card card-body bg-secondary rounded-0 text-white">
      <h2>{task.title}</h2>
      <p>{task.id}</p>
      <p>{task.description}</p>
      <button className="btn btn.danger" onClick={() => task.id && deleteTask(task.id)}>
        Delete
      </button>
    </div>
  );
}
