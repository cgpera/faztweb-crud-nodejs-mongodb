const notesCtrl = {};

notesCtrl.renderNoteForm = (req, res) => {
    res.send('note add');
}

notesCtrl.createNewNote = (req, res) => {
    res.send('new note');
}

notesCtrl.renderNotes = (req, res) => {
    res.send('view all notes');
}

module.exports = notesCtrl;