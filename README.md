# 📝 Notes App

A full-stack notes application built while learning the **MERN stack**.
The project started as a React frontend and has been extended with an Express + MongoDB backend for persistent note storage.

## 🚀 Tech Stack

### Frontend

* React
* Vite
* Tailwind CSS
* Axios

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* dotenv

## ✨ Features

* Create notes
* Display all notes
* Delete notes
* Persistent storage using MongoDB
* REST API using Express
* React state management with hooks
* Frontend ↔ Backend communication using Axios
* Environment variables for sensitive configuration

## 📁 Project Structure

```text
Notes-App/
│
├── Backend/
│   ├── src/
│   │   ├── db/
│   │   │   └── db.js
│   │   ├── models/
│   │   │   └── note.model.js
│   │   └── app.js
│   ├── server.js
│   ├── package.json
│   └── package-lock.json
│
├── public/
├── src/
│   ├── pages/
│   │   └── Notes.jsx
│   ├── App.jsx
│   └── ...
│
├── .gitignore
├── package.json
├── package-lock.json
└── vite.config.js
```

## 🔌 API Endpoints

### Get all notes

```http
GET /notes
```

Returns all notes stored in MongoDB.

### Create a note

```http
POST /notes
```

Example request body:

```json
{
  "title": "My Note",
  "description": "Learning MERN stack"
}
```

### Delete a note

```http
DELETE /notes/:id
```

Deletes a note using its MongoDB `_id`.

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/zaudin48/Notes-App.git
cd Notes-App
```

### 2. Install frontend dependencies

```bash
npm install
```

### 3. Install backend dependencies

```bash
cd Backend
npm install
```

### 4. Configure environment variables

Create:

```text
Backend/.env
```

Add your MongoDB connection string and other backend configuration.

Example:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

> Do not commit your `.env` file. It contains private configuration and is excluded through `.gitignore`.

## ▶️ Running Locally

You need to run the frontend and backend separately.

### Start the backend

From the `Backend` folder:

```bash
node server.js
```

Or, if using nodemon:

```bash
npx nodemon server.js
```

The backend runs on:

```text
http://localhost:5000
```

### Start the frontend

From the project root:

```bash
npm run dev
```

Vite will provide the local frontend URL in the terminal.

## 🔄 How It Works

```text
React Frontend
      │
      │ Axios
      ▼
Express REST API
      │
      │ Mongoose
      ▼
MongoDB
```

When a user creates a note:

```text
User submits form
       ↓
React sends POST request
       ↓
Express receives the data
       ↓
Mongoose creates the note
       ↓
MongoDB stores the note
       ↓
Backend returns the created note
       ↓
React updates the notes state
```

## 🔐 Environment Variables

Sensitive information such as MongoDB credentials should be stored in `.env` and never committed to GitHub.

The project `.gitignore` excludes environment files and dependencies such as:

```text
.env
node_modules/
dist/
```

## 🌱 Current Status

This project is actively being developed while learning full-stack development with the MERN stack.

### Completed

* [x] React frontend
* [x] Create notes
* [x] Display notes
* [x] Delete notes
* [x] Express backend
* [x] MongoDB integration
* [x] Mongoose model
* [x] Axios API communication
* [x] Environment variable setup

### Planned

* [ ] Edit notes
* [ ] User authentication
* [ ] User-specific notes
* [ ] Improved error handling
* [ ] Production backend deployment
* [ ] Production API configuration
* [ ] Better UI/UX

## 🎯 Purpose

This project is primarily a learning project built to understand how the different parts of the MERN stack work together:

**MongoDB → Express → React → Node.js**

It is also being used to practice REST APIs, React state management, database operations, Git/GitHub, and deployment.

## 👨‍💻 Author

**Zaudin Khan**

GitHub:
https://github.com/zaudin48
