// import the type of data for the onChange
import { ChangeEvent, FormEvent, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { ITask } from "../interfaces/ITask";

// create a interface for config of the type of data for the parameter
interface ITaskFormProps {
  // received the function for props, (task: ITask) ---> define the type first, and set the property of the interface with she, execute and return a type of data void
  addNewTask: (task: ITask) => void;
}
// define the type of data for the handlerOnChangue ********
type HandlerOnChangue = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

const initialState = {
  title: "",
  description: "",
}
// asign the interface for props(destructuring)
export default function TaskForm({ addNewTask }: ITaskFormProps) {
  const [task, setTask] = useState(initialState);

  // { e --> {destructuring: {destructuring}} }: ChangeEvent<HTMLInputElement> -----> asign the type of data imported and where he from<fromHTMLInput | fromHTMLTextArea> ************
  const handlerOnChangue = ({ target: { name, value } }: HandlerOnChangue) => {
    setTask({ ...task, [name]: value });
  };

  const handlerOnSubmit = (e: FormEvent<HTMLFormElement>):any => {
    e.preventDefault();
    addNewTask(task);
    setTask(initialState);
  }
  return (
    <div className="card card-body bg-secondary text-white">
      <h1> add task</h1>

      <form onSubmit={handlerOnSubmit}>
        <input
          type="text"
          placeholder="write a title"
          name="title"
          className="form-control mb-3 rounded-0 shadow-none border-0"
          onChange={handlerOnChangue}
          value={task.title}
        />

        <textarea
          name="description"
          rows={2}
          placeholder="write a description"
          className="form-control mb-3 shadow-none border-0"
          onChange={handlerOnChangue}
          value={task.description}
        ></textarea>

        <button className="btn btn-primary">
          save
          <AiOutlinePlus />
        </button>
      </form>
    </div>
  );
}
