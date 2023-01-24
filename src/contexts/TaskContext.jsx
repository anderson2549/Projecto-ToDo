import { useState, useEffect,createContext } from "react";
import { tasks as data } from "./../tasks";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);

  
  function createTask(title,description) {
    const newTask={
      id:tasks.length,
      title:title,
      description:description
    } 
      setTasks([...tasks, newTask]);
  }
  
  function deleteTask(id){
   console.log(id)
   setTasks(tasks.filter(tasks=>tasks.id!==id))
  }
  useEffect(() => {
    setTasks(data);
  }, []);
  return (
    <TaskContext.Provider value={{
      tasks,
      deleteTask,
      createTask
    }}>
      {props.children}
    </TaskContext.Provider>
  )
}
