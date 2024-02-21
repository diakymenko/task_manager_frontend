import Task from "./Task.js";
import { useEffect, useState } from "react";
import TaskForm from "./TaskForm.js";

function Tasks() {
  const [tasks, setTasks] = useState([]);

  const url = process.env.REACT_APP_TASK_API_URL;
  console.log(url);

  const fetchTasks = () => {
    fetch(`${url}/tasks`)
      .then((response) => response.json())
      .then((data) => setTasks(data));
  };

  useEffect(fetchTasks, []);

  const addTask = (taskInfo) => {
    fetch(`${url}/tasks/`, {
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
