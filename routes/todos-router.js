//using Router function to export routes via express to index.js

const router = require('express').Router();

//import the funcs from controller file
const todosController = require('../controller/todos-controller')

//run the todosController with http methods
router.get('/api/todos', todosController.getTodos);

router.post('/api/todos/', todosController.createTodo);

router.delete('/api/todos/:todoId', todosController.removeTodo);

router.put('/api/todos/:todoId', todosController.updateTodo);

module.exports = router;