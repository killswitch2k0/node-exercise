//using module export via app function for index.js

module.exports = (app) => {
    const { getTodos, addTodo, updateTodo, deleteTodo } = require('./todos_json');

app.get('/api/todos', (req, res) =>{
    const newTodo = req.body; res.json(getTodos());
    console.log(req.query);
});

app.post('/api/todos/', (req, res) =>{
    const newTodo = req.body;
    addTodo(newTodo);
    res.json(newTodo);
});
app.delete('/api/todos/:todoId', (req, res) =>{
    const todoId = req.params.todoId;
    const filteredToDo = deleteTodo(todoId);
    res.json(filteredToDo);
});
app.put('/api/todos/:todoId', (req, res) =>{
    const todoId = req.params.todoId;
    const update = updateTodo(todoId, "updated")
    res.json(update);
});
}