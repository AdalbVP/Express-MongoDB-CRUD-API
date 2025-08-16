# Express MongoDB CRUD API 
This project is a simple REST API built with **Node.js, Express** and **MongoDB**.
It desmotrates the basic **CRUD operations** (create, Read, Update, Delete) using a MongoDB database.

The goal of this project was to learn how to connect a Node.js server to a database, handle HTTP requests, and structure a backend API.

---
## Tecnologies Used
- **Node.js** - JavaScript runtime environment.
- **Express.js** - Web Framework for building APIs.
- **MongoDB** - NoSQL database for storing data.
- **Mongoose** - ODM to interact with MongoDB.
- **Postman** - Used for testing API endpoints.

---

## Features
- Create a new record.
- Get all records.
- Get a single record by ID.
- Update a record by ID.
- Delete a record by ID.

---

## Installation & Setup
1. Clone the repository:
 bash  
git clone https://github.com/AdalbVP/Express-MongoDB-CRUD-API.git  
cd Express-MongoDB-CRUD-API  
3. Install dependencies
 npm install
4. Create a .env file and set your MongoDB connection string:
  MONGO_URI = your_mongodb_connection_string
5. Run the server
  The server will run on http://localhost:3000

---

## API Endpoints
| Method | Endpoint       | Description            |
|--------|---------------|------------------------|
| GET    | /api/items     | Get all items         |
| GET    | /api/items/:id | Get item by ID        |
| POST   | /api/items     | Create new item       |
| PUT    | /api/items/:id | Update item by ID     |
| DELETE | /api/items/:id | Delete item by ID     |

---

## Learning Outcomes
- Setting up a basic Node.js backend project.
- Connecting Node.js with MongoDB using Mongoose.
- Handling CRUD operations in a REST API.
- Using Postman for testing API endpoints.

---

## Project Inspiration
This project was built by following the tutorial:
[Build a REST API with Node.js, Express & MongoDB - Crash Course] (https://www.youtube.com/watch?v=2jqok-WgelI)

---

## License 
This project is for educational purposes. Feel free to fork and adapt it.
