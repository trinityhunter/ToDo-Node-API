const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController');

router.get('/', todoController.getTodo)
router.post('/add', todoController.addTodo);
router.put('/update/:id', todoController.updateTodo);
router.delete('/delete/:id', todoController.deleteTodo);

module.exports = router;