import Task from "./Task.js";
import { useEffect, useState } from "react";
import TaskForm from "./TaskForm.js";

function Tasks() {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = () => {
    fetch("http://127.0.0.1:5000/tasks")
      .then((response) => response.json())
      .then((data) => setTasks(data));
  };

  useEffect(fetchTasks, []);

  const addTask = (taskInfo) => {
    fetch(`http://localhost:5000/tasks/`, {
      method: "POST",
      body: JSON.stringify({
        description: taskInfo.description,
        title: taskInfo.title,
      }),
      headers: {
        "Content-type": "application/json",
      },
    }).then(() => {
      fetchTasks();
    });
  };

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Complete</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <Task
              key={task.id}
              id={task.id}
              title={task.title}
              description={task.description}
              completed={task.completed}
              fetchTasks={fetchTasks}
              tasks={tasks}
              setTasks={setTasks}
            />
          ))}
        </tbody>
      </table>
      <TaskForm addTask={addTask} />
    </div>
  );
}

export default Tasks;
