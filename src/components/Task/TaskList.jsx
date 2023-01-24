import { useContext } from "react";
import { TaskContext } from "../../contexts/TaskContext";
import TaskCard from "./TaskCard";

function TaskList() {
  const { tasks, funcDele } = useContext(TaskContext);

  if (tasks.length === 0) {
    return <h1 className="text-white text-4xl font-bold text-center"> no hay tareas aun</h1>;
  }
  return (
    <div className="grid grid-cols-4 gap-2">
      {tasks.map((task) => (
        <TaskCard  key={task.id} task={task}></TaskCard>
      ))}
    </div>
  );
}

export default TaskList;
