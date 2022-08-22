

const userModel = require('../models/userModel');

const allUsers = async (req, res) => {
  try {
    let users = await userModel.getAllUsers();
    console.log(`Three users firts ${JSON.stringify(users)} at day ${req.today}`);
    res.status(200).send(users);
  } catch (error) {
    console.log(error)
  }
}

const userById = async (req, res) => {
  try {
    let { id } = req.params
    let oneUser = await userModel.getUserById(id);
    console.log(`Three users firts ${JSON.stringify(oneUser)} at day ${req.today}`);
    res.status(200).send(oneUser);
  } catch (error) {
    console.log(error)
  }
}

const getUsersLimit = async (req, res) => {
  try {
    let users = await userModel.getUsersFirts();
    console.log(`Three users firts ${JSON.stringify(users)} at day ${req.today}`);
    res.status(200).send(users);
  } catch (error) {
    console.log(error)
  }
}

const userController = {
  getUsersLimit,
  userById,
  allUsers
}

module.exports = userController;