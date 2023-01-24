import { useContext, useState } from "react";
import { TaskContext } from "../../contexts/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const valor = useContext(TaskContext);
  const crearTarea = valor.createTask;
  const handleSubmit = (e) => {
    e.preventDefault();

    crearTarea(title, description);
    setTitle("");
    setDescription("");
  };

  return (
    <div className="max-w-md mx-auto rounded">
      <form onSubmit={handleSubmit} className="bg-slate-800 text-center px-2 mb-4">
        <h1 className="text-2xl font-bold text-white mb-3 text-center">Crea tu tarea</h1>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className=" rounded bg-slate-300 p-3 w-full mb-2 "
          placeholder="Escribe tu tarea"
        />
        <textarea
          onChange={(e) => setDescription(e.target.value)}
          className="bg-slate-300 rounded p-3 w-full mb-2"
          value={description}
          placeholder="descripcion tu tarea"
        />
        <button className="bg-indigo-500 hover:bg-indigo-200 px-3 mb-2 mx-auto py1 rounded text-white">Guardar</button>
      </form>
    </div>
  );
}

export default TaskForm;
