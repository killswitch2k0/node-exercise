//import the getTodods func from services
const todosServices = require('../services/todos_json');

//invoke the getTodos in the func of the same name in controller
function getTodos (req, res) {
    const todos = todosServices.getTodos();
    res.json(todos);
}

function removeTodo (req, res) {
    const todoId = req.params.todoId;
    const filteredToDo = todoServices.deleteTodo(todoId);
    res.json(filteredToDo);
}

function createTodo(req, res) {
    const newTodo = req.body;
    todoServices.addTodo(newTodo);
    res.json(newTodo);
}

function updateTodo(req, res) {
    const todoId = req.params.todoId;
    const keyToUpdate = req.body.keyToUpdate
    const newTitle = req.body.newTitle
    todoServices.updateTodo(todoId, keyToUpdate, newTitle);
    res.json(updatedTodo);
}

module.exports = {getTodos, removeTodo, createTodo, updateTodo}