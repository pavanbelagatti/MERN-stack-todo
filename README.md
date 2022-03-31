# MERN-stack-todo
**This is a simple todo app that is built with MERN stack [MongoDB, Express, React and Node.js]**

## Prerequisites
1. Node.js - download and install the latest Node.js available from this [link](https://nodejs.org/en/).
2. MongoDB free account from this [link](https://www.mongodb.com/cloud)
3. Postman for testing the endpoints of the Backend API, this is optional but really good to verify the api end points in our backend to see everything is working as expected. You can download postman from this [link](https://www.postman.com/downloads/)

## How to playaround?
Make sure you clone the repository with the commnd `git clone https://github.com/pavanbelagatti/MERN-stack-todo.git` on your terminal/local

Once you clone the repository, you will see two folders namely - *client* and *server*. 
server folder holds all the backend code and client folder holds the frontend code.

Go to the server folder with the command `cd server` and create a .env file with the command `touch .env`
This is where you specify your mongodb string to connect with your application. 

Create an account in mongodb Atlas and create a cluster (by default Cluster0 will be created). Then, create a database user and connect the database to your application using the 'Connect your application' method. You should see a string and keep it safe and we will specify the same in our .env file. 

Add that mongodb string you get after creating a database. The string looks similar to the example shown below,

`MONGO_URI = mongodb+srv://<username>:<password>@cluster0.p7eeh.mongodb.net/<add your database name>?retryWrites=true&w=majority`

### Backend

Go to the server folder and run the command `npm install` to make sure all the required packages are installed.

Run the command `npm run dev' to start the backend server. You should see your server running sucessfully on the port 8000 along with the message database connected.

### Frontend

Go to the client folder and run the command `npm install` to make sure all the required packages are installed.

Run the command '`npm start` and you should see the frontend starting on the port 3000. 
