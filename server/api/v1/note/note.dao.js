const noteModel = require("./note.entity");
const { v4: uuidv4 } = require("uuid");

const addNote = (note, userId) => {
  return new Promise((resolve, reject) => {
    let newNote = new noteModel();
    newNote.id = uuidv4();
    newNote.title = note.title;
    newNote.text = note.text;
    newNote.status = note.status;
    newNote.userId = userId;
    newNote.createdOn = new Date();
    newNote.modifiedOn = new Date();

    newNote.save((error, addedNote) => {
      if (error) {
        reject({
          message: "Internal Server Error",
          status: 500,
        });
      } else {
        resolve({
          text: addedNote.text,
          id: addedNote.id,
          status: 201,
        });
      }
    });
  });
};

const getAllNotes = (userId) => {
  return new Promise((resolve, reject) => {
    noteModel.find({ userId: userId }, (error, notes) => {
      if (error) {
        reject({
          message: "Internal Server Error",
          status: 500,
        });
      } else {
        resolve({
          message: "Successfully retrieved notes",
          notes: notes,
          status: 200,
        });
      }
    });
  });
};

const updateNote = (id, note) => {
  return new Promise((resolve, reject) => {
    note.modifiedOn = new Date();
    noteModel.findOneAndUpdate(
      { id: id },
      note,
      { new: true },
      (error, updatedNote) => {
        if (error) {
          reject({
            message: "Internal Server Error",
            status: 500,
          });
        } else {
          resolve({
            message: "Successfully updated note",
            text: updatedNote.text,
            status: 200,
          });
        }
      }
    );
  });
};

module.exports = {
  addNote,
  getAllNotes,
  updateNote,
};
