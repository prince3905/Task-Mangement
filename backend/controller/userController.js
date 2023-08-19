const User = require('../model/user');

const createUser = async (req, res) => {
  try {
    const { id, name } = req.body;
    const user = new User({ id, name });
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};


module.exports = { createUser, getAllUsers };