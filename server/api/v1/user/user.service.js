const userDAO = require("./user.dao");

const getUser = (id) => {
  return userDAO.getUser(id);
};

const addUser = (user) => {
  return userDAO.addUser(user);
};

const loginUser = (user) => {
  return userDAO.loginUser(user);
};

module.exports = {
  getUser,
  addUser,
  loginUser,
};
