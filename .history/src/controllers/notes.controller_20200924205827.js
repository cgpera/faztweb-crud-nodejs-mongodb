const notesCtrl = {};

notesCtrl.renderNoteForm = (req, res) => {
    res.render('./notes/new-note');
}

notesCtrl.createNewNote = (req, res) => {
    res.send('new note');
}

notesCtrl.renderNotes = (req, res) => {
    res.send('view all notes');
}

notesCtrl.renderEditForm = (req, res) => {
    res.send('edit note');
}

notesCtrl.updateNote = (req, res) => {
    res.send('actualizar nota');
}

notesCtrl.deleteNote = (req, res) => {
    res.send('borra nota');
}

module.exports = notesCtrl;