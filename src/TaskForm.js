import { useState } from "react";
import React from "react";
import './TaskForm.css';

const defaultData = {
  title: "",
  description: "",
};

const TaskForm = ({ addTask }) => {
  const [formData, setFormData] = useState(defaultData);

  const [errors, setErrors] = useState({});

  const onFormChange = (event) => {
    const stateName = event.target.name;
    const inputValue = event.target.value;

    const newFormData = { ...formData };
    newFormData[stateName] = inputValue;

    setFormData(newFormData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    let newErrors = {};
    if (!formData.title) {
      newErrors.title = "Title should not be empty";
      
    }
    if (!formData.description) {
      newErrors.description = "Description should not be empty";
  
    }
    if (Object.keys(newErrors).length === 0) {
      addTask(formData);
      setFormData(defaultData);
    }
    setErrors(newErrors);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
      <div className="container">
        <div className="title_container">
        <label className="form_text" htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={onFormChange}
          placeholder="enter your title..."
        />
        <div className="error_msg">
        {errors.title ? <p>Title should not be empty</p> : null}
        </div>
        </div>

        <div className="description_container">
        <label className="form_text" htmlFor="description">Description</label>
        <input
          type="text"
          name="description"
          id="description"
          value={formData.description}
          onChange={onFormChange}
          placeholder="enter your description..."
        />
        <div className="error_msg">
        {errors.description ? <p>Description should not be empty</p> : null}
          </div>
          </div>
   
        <div className="btn_container">
        <input className="btn btn-primary" type="submit" value="Add Task" />
        </div>
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
