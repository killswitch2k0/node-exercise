//using Router function to export routes via express to index.js

const router = require('express').Router();

//import the funcs from controller file
const todosController = require('../controller/todos-controller')
const {verifyUser} = require('middlewares\auth.middleware.js');
const {verifyIfAdmin} = require('middlewares\auth.middleware.js');


//run the todosController with http methods

router.get('/api/todos', verifyUser, verifyIfAdmin, todosController.getTodos);

router.post('/api/todos/', verifyUser, verifyIfAdmin, todosController.createTodo);

router.delete('/api/todos/:todoId', verifyUser, verifyIfAdmin, todosController.removeTodo);

router.put('/api/todos/:todoId', verifyUser, verifyIfAdmin, todosController.updateTodo);

module.exports = router;