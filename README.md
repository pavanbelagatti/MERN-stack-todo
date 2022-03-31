# MERN-stack-todo
**This is a simple todo app that is built with MERN stack [MongoDB, Express, React and Node.js]**

## Prerequisites
1. Node.js installed
2. MongoDB free account
3. Postman for testing the endpoints of the Backend API

## How to playaround?
Make sure you clone the repository with the commnd `git clone https://github.com/pavanbelagatti/MERN-stack-todo.git` on your terminal/local

Once you clone the repository, you will see two folders namely - *client* and *server*. 
server folder holds all the backend code and client folder holds the frontend code.

Go to the server folder with the command `cd server` and create a .env file with the command `touch .env`
This is where you specify your mongodb string to connect with your application. 
Add that mongodb string you get after creating a database. The string looks similar to the example shown below,

`MONGO_URI = mongodb+srv://<username>:<password>@cluster0.p7eeh.mongodb.net/<add your database name>?retryWrites=true&w=majority`

### Backend

Go to the server folder and run the command `npm install` to make sure all the required packages are installed.

Run the command `npm run dev' to start the backend server. You should see your server running sucessfully on the port 8000 along with the message database connected.

### Frontend

Go to the client folder and run the command `npm install` to make sure all the required packages are installed.

Run the command '`npm start` and you should see the frontend starting on the port 3000. 


