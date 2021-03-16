// write your db connection code here

const mongoose = require("mongoose");
const { appConfig } = require("../config/appConfig");

const initializeMongooseConnection = () => {
  return mongoose.connect(appConfig.dbURL, { useNewUrlParser: true });
};

module.exports = initializeMongooseConnection;
