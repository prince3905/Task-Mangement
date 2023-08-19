const Task = require('../model/Task');

const createTask = async (req, res) => {
    console.log(req.body)
  try {
    const { taskName, Expiry_date, User, Important, Created_on } = req.body;
    const task = new Task({
      task: taskName, 
      expiry_date: Expiry_date,
      user: User,
      important: Important,
      created_on: Created_on
    });
    await task.save();
    res.status(201).json(task);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const getAllTasks = async (req, res) => {
    try {
      const tasks = await Task.find();
      res.status(200).json(tasks);
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };

  const deleteTaskById = async (req, res) => {
    const taskId = req.params.id;
  
    try {
      const deletedTask = await Task.findByIdAndDelete(taskId);
      if (!deletedTask) {
        return res.status(404).json({ message: 'Task not found' });
      }
      res.status(200).json({ message: 'Task deleted successfully' });
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };

  const updateTaskUser = async (req, res) => {
    console.log(req.params)
    console.log(req.body)
    try {
      const { taskId } = req.params;
      const { newUserId } = req.body;
  
      const updatedTask = await Task.findByIdAndUpdate(
        taskId,
        { user: parseInt(newUserId) }, 
        { new: true }
      );
  
      if (!updatedTask) {
        return res.status(404).json({ error: 'Task not found' });
      }
      console.log(updatedTask)
  
      res.status(200).json(updatedTask);
    } catch (error) {
      console.error('Error updating task user:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };

module.exports = { createTask, getAllTasks, deleteTaskById, updateTaskUser};
