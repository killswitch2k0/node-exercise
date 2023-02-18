//import from todos.js
const {getTodos, addTodo, deleteTodo, updateTodo} = require('./todos.js');

//get data and dspilay to the user
function displayTodos() {
    const todos = getTodos()
        .map((item, index) => `${(index + 1)}. ${item}`)
        .join('\n')

    console.log(todos);
}

const ops = process.argv[2];
 
if (ops === 'create') {
    console.log('creating...')
    addTodo(process.argv[3]);
    displayTodos();
    console.log('Done!')
}
else if (ops === 'read') {
    console.log('reading...')
    displayTodos();
    console.log('Violla!')
}
else if (ops === 'update') {
    console.log('updating...')
    updateTodo(Number(process.argv[3]), process.argv[4]);
    displayTodos();
    console.log('updated succsessfully')
}
else if (ops === 'delete') {
    deleteTodo(Number(process.argv[3]));
    console.log('deleting...')
    displayTodos();
    console.log('deleted succsessfully')
}
else {
    console.log("Incorrect operator! Use CRUD...")
    displayTodos();
    console.log('Try again...')
}

// displayTodos()