
# Simple Task Management Web Application

The Simple Task Management Web Application is a full-stack project designed to manage tasks efficiently. It enables users to create, read, update, and delete (CRUD) tasks through a user-friendly interface. The application is built using React for the frontend and Django for the backend, with a RESTful API facilitating communication between the two.

## Features
* Task Management: Add, view, edit, and delete tasks.
* Task status: Pending, In progress, Completed.
* Responsive Design: Optimized for various devices using React.
* RESTful API: Secure communication between frontend and backend.

## Architecture
* Frontend: Built with React, featuring a responsive and user-friendly interface.
* Backend: Developed using Django with the Django REST Framework (DRF) to create a RESTful API.
* Database: SQLite is used for simplicity, though other databases are supported.
* Routing: React Router is used for navigation between pages in the frontend.

## Installation
### Prerequisites
* Node.js and npm for the React frontend.
* Python and pip for the Django backend.

### Steps to Set Up

* Clone the repository:
git clone <repository-url>
cd <repository-folder>

#### Backend Setup:

1. Navigate to the backend folder:
cd testserver

2. Install dependencies:
pip install -r requirements.txt

3. Apply migrations:
python manage.py migrate

4. Start the backend server:
python manage.py runserver

#### Frontend Setup:

1. Navigate to the frontend folder:
cd testclient

2. Install dependencies:
npm install

3. Start the React development server:
npm start