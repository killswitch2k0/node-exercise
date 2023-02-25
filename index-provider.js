//to use express 'npm install express'
const express = require('express');

//to use cors 'npm install cors'
const cors = require('cors');

const app = express();

//gets the routes functions
const tododsRoutes = require('./routes/todos-provider.js')

//to make express parse json files
app.use(express.json());

//to override cors policy
app.use(cors());
 
//run the router on app from routes file
tododsRoutes(app);

app.listen(4444, () => console.log('app is running'));