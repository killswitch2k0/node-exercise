const { readFileSync, writeFileSync } = require('fs');

// read the file todos.txt and return an array of todos.
function getTodos() {
    const value = JSON.parse(readFileSync('./data.json').toString())

    return value;
}

function getTodosByUser () {

}

function setTodos(todos) {
    const value = JSON.stringify(todos);
    writeFileSync('./data.json', value);
}

function addTodo({title, description,user,isDone,category,priority,status}) {
    const currentTodos = getTodos();
    currentTodos.push({
        id: btoa(Math.random()),
        title,
        description,
        user,
        isDone,
        category,
        priority,
        status
    });
    setTodos(currentTodos)
}

function deleteTodo(id) {
    const currentTodos = getTodos();

    const filteredTodos = currentTodos.filter(todo => todo.id !== id);
    
    setTodos(filteredTodos)
    return(filteredTodos)
}

function updateTodo(id, updatedTodoc) {
    const currentTodos = getTodos();

    const indexToRemove = id - 1;
    currentTodos[indexToRemove] = updatedTodo;

    setTodos(currentTodos)
    return(currentTodos)
}

module.exports = {
    getTodos,
    addTodo,
    deleteTodo, 
    updateTodo
}