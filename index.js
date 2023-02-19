const express = require('express');
const { getTodos, addTodo, updateTodo } = require('./todos_json');
const app = express();

//to make express parse json files
app.use(express.json());

app.get('/api/todos', (req, res) =>{
    const newTodo = req.body; res.json(getTodos())
});

app.post('/api/todos', (req, res) =>{
    
});
app.delete('/api/todos', (req, res) =>{});
app.put('/api/todos', (req, res) =>{});

app.listen(4444, () => console.log('app is running'));