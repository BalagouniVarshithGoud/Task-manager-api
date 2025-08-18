# Task Manager API  

This project is a **Task Manager REST API** built with **Node.js, Express, and MongoDB**. It allows users to sign up, log in, and manage tasks securely. Authentication is handled with JWT, and passwords are hashed using bcrypt.  

### ✨ Features  
- User signup and login with JWT  
- Create, read, update, and delete tasks  
- Task title must be at least 3 characters  
- `/health` endpoint to check API status  

### 📂 Main Files  
- `server.js` → Starts server and connects to DB  
- `app.js` → Sets up routes and middlewares  
- `controllers/` → Logic for auth and tasks  
- `models/` → MongoDB schemas (User, Task)  
- `middleware/` → JWT authentication  
- `config/db.js` → Database connection  

### 🚀 How to Run  
1. Install dependencies:  
   ```bash
   npm install
2. create .env file
   MONGODB_URI=your_mongo_uri
JWT_SECRET=your_secret
PORT=3000
3.start the server
   npm start
API runs on http://localhost:3000
