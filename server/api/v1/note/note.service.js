const noteDAO = require("./note.dao");

const addNote = (note, userId) => {
  return noteDAO.addNote(note, userId);
};

const getAllNotes = (userId) => {
  return noteDAO.getAllNotes(userId);
};

const updateNote = (id, note) => {
  return noteDAO.updateNote(id, note);
};

module.exports = {
  addNote,
  getAllNotes,
  updateNote,
};
