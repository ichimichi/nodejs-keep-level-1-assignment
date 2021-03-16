const userModel = require("./user.entity");
const bcrypt = require("bcryptjs");

const addUser = (user) => {
  return new Promise((resolve, reject) => {
    let newUser = new userModel();
    newUser.userName = user.username;
    newUser.password = bcrypt.hashSync(user.password, 10);

    newUser.save((error, addedUser) => {
      if (error) {
        reject({
          message: "username is already exist",
          status: 500,
        });
      } else {
        resolve({
          userInfo: addedUser.userName,
          status: 201,
        });
      }
    });
  });
};

const loginUser = (user) => {
  return new Promise((resolve, reject) => {
    userModel.findOne({ userName: user.username }, (error, dbUser) => {
      if (error) {
        reject({
          message: "You are not registered user",
          status: 500,
        });
      } else {
        if (!dbUser) {
          reject({
            message: "You are not registered user",
            status: 500,
          });
        } else if (bcrypt.compareSync(user.password, dbUser.password)) {
          resolve({
            message: "Successfully login user",
            user: {
              userName: dbUser.userName,
            },
            status: 200,
          });
        } else {
          reject({
            message: "Password is incorrect",
            status: 500,
          });
        }
      }
    });
  });
};

module.exports = {
  addUser,
  loginUser,
};
