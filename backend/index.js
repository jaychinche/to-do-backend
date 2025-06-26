const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://chinchejay:tUVfNmJ0jt1i8pak@cluster0.zsnmc35.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

const todoSchema = new mongoose.Schema({
  task: String,
});

const Todo = mongoose.model('Todo', todoSchema);

app.get('/todos', async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
});

app.post('/todos', async (req, res) => {
  console.log("fef");
  const { task } = req.body;
  const todo = new Todo({ task });
  await todo.save();
  res.status(201).json(todo);
});

app.listen(3001, () => console.log('Backend running on port 3001'));
