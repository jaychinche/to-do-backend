const axios = require('axios');

async function createTodo() {
  try {
    const response = await axios.post('http://localhost:3001/todos', {
      task: 'Sample todo from script'
    });
    console.log('Todo created:', response.data);
  } catch (error) {
    console.error('Error creating todo:', error.response ? error.response.data : error.message);
  }
}

createTodo();
