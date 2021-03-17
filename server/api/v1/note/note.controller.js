const noteService = require("./note.service");

const addNote = (note, userId) => {
  return noteService.addNote(note, userId);
};

const getAllNotes = (userId) => {
  return noteService.getAllNotes(userId);
};

const updateNote = (id, note) => {
  return noteService.updateNote(id, note);
};

module.exports = {
  addNote,
  getAllNotes,
  updateNote,
};
