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
  const deleteTask = () => {
    fetch(`http://127.0.0.1:5000/tasks/${id}`, { method: "DELETE" }).then(
      () => {
        //   fetchTasks();

        const existingTasks = [...tasks];
        const newTasks = existingTasks.filter((task) => task.id !== id);
        setTasks(newTasks);
      }
    );
  };

  const completeTask = () => {
    fetch(`http://127.0.0.1:5000/tasks/${id}`, {
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
            onChange={completeTask}
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
