const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');
const taskController = require('../controller/taskController');

// Create a new user
router.post('/users', userController.createUser);
router.get('/users', userController.getAllUsers);

// Create a new task
router.post('/tasks', taskController.createTask);
router.get('/tasks', taskController.getAllTasks);
router.delete('/tasks/:id', taskController.deleteTaskById);
router.put('/tasks/:taskId/update-user', taskController.updateTaskUser);

module.exports = router;