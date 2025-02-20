## Objective
A lightweight web application with a React-based frontend and a Flask-powered backend, designed for task management. Users can create, delete and mark tasks as completed, providing a seamless and efficient way to organize daily responsibilities.

## Features:

* Display a list of tasks.
* Add a new task.
* Delete a task.
* Mark a task as completed.

#### Frontend

* Framework: React

#### Backend

* Framework: Flask
* Database: SQLite

_________________________________________________________________________________________________________________________________

## Task Manager Backend
The backend part of the Task manager project using Python Flask to create a simple task list with an ability to view existing tasks, add new tasks, delete and mark a task as completed. 

Includes:
- core functionality to view, add, delete and update tasks
- validation for POST, PATCH and DELETE requests
- intergation tests for endpoints and error messages

### Instructions on running the app:
1. python -m venv venv
2. source venv/bin/activate
3. pip install -r requirements.txt
4. flask run

## Task Manager Frontend
The frontend part of the Task manager project using ReactJS to create a simple task list with an ability to view existing tasks, add new tasks, delete and mark a task as completed.

Includes:
- ux to view, add, delete and update tasks
- unit tests for form validation

### Instructions on running the app:
Depends on a backend part of the app: https://github.com/diakymenko/task_manager_backend
1. Set environment variable REACT_APP_TASK_API_URL, default is http://127.0.0.1:5000
2. npm start
