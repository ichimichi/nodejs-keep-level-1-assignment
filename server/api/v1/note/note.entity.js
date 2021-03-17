const mongoose = require("mongoose");

const noteSchema = mongoose.Schema({
  id: {
    type: String,
    unique: true,
    required: true,
  },
  title: {
    type: String,
  },
  text: {
    type: String,
  },
  status: {
    type: String,
  },
  userId: {
    type: String,
    required: true,
  },
  createdOn: {
    type: Date,
    required: true,
  },
  modifiedOn: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model("note", noteSchema);
