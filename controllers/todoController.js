const Todo = require('../models/todo');

exports.deleteTodo = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedTodo = await Todo.findByIdAndDelete(id);

    if (!deletedTodo) {
      return res.status(404).json({ message: 'Todo not found' });
    }

    res.status(200).json({
      message: 'Todo deleted successfully',
      todo: deletedTodo,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error deleting todo',
      error: error.message,
    });
  }
};

exports.updateTodo = async (req, res) => {
  const { id } = req.params;
  const { title, description, dueDate, priority, completed } = req.body;

  try {
    const updatedTodo = await Todo.findByIdAndUpdate(
      id,
      { title, description, dueDate, priority, completed },
      { new: true }
    );

    if (!updatedTodo) {
      return res.status(404).json({ message: 'Todo not found' });
    }

    res.status(200).json({
      message: 'Todo updated successfully',
      todo: updatedTodo,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error updating todo',
      error: error.message,
    });
  }
};

exports.getTodo = async (req, res) => {

  try {

    const todos = await Todo.find();
    res.status(200).json(todos);
    
  } catch (error) {
    res.status(500).json({
      message: 'Error getting todo',
      error: error.message,
    });
  }

};

exports.addTodo = async (req, res) => {
  try {
    const { title, description, dueDate, priority, userId } = req.body;

    const newTodo = new Todo({
      title,
      description,
      dueDate,
      priority,
      userId
    });
    
    const savedTodo = await newTodo.save();
    
    res.status(201).json({
      message: 'Todo added successfully',
      todo: savedTodo,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error adding todo',
      error: error.message,
    });
  }
};