//import from todos.js
const {getTodos} = require('./todos.js');

//get data and dsilay to the user
function displayTodos() {
    const todos = getTodos()
        .map((item, index) => `${(index + 1)}. ${item}`)
        .join('\n')

    console.log(todos);
}

displayTodos()