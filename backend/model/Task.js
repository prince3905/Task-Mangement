const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  task: { type: String, required: true },
  expiry_date: { type: String, required: true },
  user: { type: Number, required: true },
  important: { type: Boolean, default: false },
  created_on: { type: String },
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
