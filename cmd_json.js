const { getTodos, addTodo, deleteTodo, updateTodo } = require('./todos_json.js');

// get the todos from getTodos() and display properly to the user
function displayTodos() {
    const todos = getTodos()
        .map((item) => `${item.id}
        Id: ${item.id}
        Priority: ${item.priority}
        Title: ${item.title}
        Description: ${item.description}
        User: ${item.user}
        Category: ${item.category}
        Done? ${item.isDone ? 'Yes' : 'No'}`)
        .join('\n\n')

    console.log(todos);
}

const operation = process.argv[2];

if (operation === 'create') {
    addTodo(process.argv[3]);
    console.log('added successfully');
} else if(operation === 'update') {
    updateTodo(process.argv[3], process.argv[4]);
    console.log('updated successfully');
} else if(operation === 'delete') {
    deleteTodo(process.argv[3])
    console.log('deleted successfully')
} else {
    displayTodos();
}