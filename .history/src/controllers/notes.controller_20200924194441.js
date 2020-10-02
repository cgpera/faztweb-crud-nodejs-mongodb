const notesCtrl = {};

notesCtrl.renderNoteForm = (req, res) => {
    res.send('note add');
}

notesCtrl.createNewNote = (req, res) => {
    res.send('new note');
}

module.exports = notesCtrl;