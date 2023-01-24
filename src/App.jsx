import TaskList from "./components/Task/TaskList.jsx";
import TaskForm from "./components/Task/TaskForm.jsx";


function App() {
  return (
    <main className="bg-zinc-900 h-screen">
      <div className="container mx-auto p-10">
      <TaskForm />
      <TaskList  />
      </div>
    </main>
  );
}

export default App;
