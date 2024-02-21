import React from "react";

function Task({
  id,
  title,
  description,
  completed,
  fetchTasks,
  tasks,
  setTasks,
}) {

  const url = process.env.REACT_APP_TASK_API_URL;

  const deleteTask = () => {
    fetch(`${url}/tasks/${id}`, { method: "DELETE" }).then(
      () => {
        const existingTasks = [...tasks];
        const newTasks = existingTasks.filter((task) => task.id !== id);
        setTasks(newTasks);
      }
    );
  };

  const flipTask = () => {
    fetch(`${url}/tasks/${id}`, {
      method: "PATCH",
      body: JSON.stringify({
        completed: !completed,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then(() => {
      fetchTasks();
    });
  };

  const isChecked = completed ? "checked" : "";
  const taskStatus = completed ? "Completed" : "Complete task";

  return (
    <tr>
      <th scope="row">{id}</th>
      <td>{title}</td>
      <td>{description}</td>
      <td>
        <div className="form-check">
          <input
            className="form-check-input"
            onChange={flipTask}
            type="checkbox"
            checked={isChecked}
            id={id}
          />
          <label className="form-check-label" htmlFor={id}>
            {taskStatus}
          </label>
        </div>
      </td>
      <td>
        <button className="btn btn-primary" onClick={deleteTask}>
          Delete task
        </button>
      </td>
    </tr>
  );
}

export default Task;