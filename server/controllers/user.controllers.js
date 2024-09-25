const User = require("../models/user.schema");

const getAllUsers = async (req, res) => {
  try {
    const allUsers = await User.find({});
    res.status(200).json(allUsers);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error.message });
  }
};

const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    console.log(user);
    res.status(201).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error.message });
  }
};

const getOneUser = async (req, res) => {
  const userId = req.params.id;
  try {
    const singleUser = await User.findById(userId);
    console.log(singleUser);
    res.status(200).json(singleUser);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedUser = await User.findByIdAndDelete(id);
    res.status(200).json(deletedUser);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedUser = await User.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(updatedUser);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

module.exports = {
  getAllUsers,
  createUser,
  getOneUser,
  deleteUser,
  updateUser,
};
