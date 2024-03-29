## Objective
Your task is to create a simple web application that features a React frontend and a Flask backend. The application will be a "Task Manager" where users can add, delete, and mark tasks as completed. You are free to modify any code already provided and add any dependencies you need. Creativity is encouraged. The only requirements are that the application should have a React frontend and a Flask backend using the REST architecture, and it should be able to perform the basic CRUD operations for tasks. Please be sure to include instructions for running your application in your submission.

## Requirements

Please extend the provided code to meet the following requirements:
* Display a list of tasks.
* Add a new task.
* Delete a task.
* Mark a task as completed.

You are free to modify the code in any way you like, but ensure your final result is a functional web application that meets the above requirements.

#### Frontend

* Framework: React
* Styling: Feel free to use plain CSS for stlying, ideally we recommend using Bootstrap which is already in the dependencies.

#### Backend

* Framework: Flask
* Database: Use SQLite for simplicity. The database should have at least one table named tasks with columns for id, title, description, and completed.

_________________________________________________________________________________________________________________________________
## Instructions

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
____________________________________________________________________________________________________________________________
#### Development
Implement the required features as described above.

#### Documentation
Update this README to include instructions on how to set up and run your application.
Briefly describe your application's architecture and the decisions you made during development.

#### Submission
Please submit your completed test through coderbytes

#### Evaluation Criteria

* Functionality: The application works as described.
* Code Quality: Clean, modular, and well-organized code.
* Design: A user-friendly interface and a sensible API design.
* Documentation: Clear instructions on setting up and running your application, along with a concise explanation of your architecture and choices.

*Bonus Points*

* Implement authentication for users to manage their tasks.
* Deploy the application to a cloud service (Heroku, AWS, etc.).
* Write unit tests for both frontend and backend.
* Implement additional features that you think would be useful to have in a task manager application.