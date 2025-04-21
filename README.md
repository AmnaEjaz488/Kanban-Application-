# Kanban Board Application

A full-stack Kanban board application with secure login functionality, built using **React**, **Express**, **Sequelize**, and **PostgreSQL**. The application supports user authentication via **JSON Web Tokens (JWT)** and provides a secure, session-based experience for managing tasks.

---

## Features

- **Secure Login Page**: Users can log in with a username and password.
- **JWT Authentication**: Secure authentication using JSON Web Tokens.
- **Kanban Board**: A task management board with columns for different task statuses.
- **Session Management**: Automatic session expiration after inactivity.
- **Error Handling**: Displays error messages for invalid login attempts.
- **Logout Functionality**: Users can log out, which clears their session.

---

## Technologies Used

### Frontend:
- **React**: For building the user interface.
- **Vite**: For fast development and production builds.

### Backend:
- **Express**: For building the RESTful API.
- **Sequelize**: For database ORM and schema management.
- **PostgreSQL**: For the relational database.

### Authentication:
- **bcryptjs**: For password hashing.
- **jsonwebtoken**: For generating and verifying JWTs.

---

## Installation

### Prerequisites
- Node.js (v16 or higher)
- PostgreSQL (v12 or higher)

