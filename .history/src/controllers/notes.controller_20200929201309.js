const notesCtrl = {};

const Note = require('../models/Note');

notesCtrl.renderNoteForm = (req, res) => {
    res.render('notes/new-note');
}

notesCtrl.createNewNote = async(req, res) => {
    const { title, description } = req.body;
    const newNote = new Note({
        title,
        description
    });
    console.log(newNote);
    await newNote.save();
    res.redirect('/notes');
}

notesCtrl.renderNotes = async(req, res) => {
    const notes = await Note.find({}).lean();
    res.render('notes/all-notes', { notes });
}

notesCtrl.renderEditForm = async(req, res) => {
    const id = req.params.id;
    const nota = await Note.findById(id).lean();
    res.render('notes/edit-note', { nota });
}

notesCtrl.updateNote = (req, res) => {
    console.log(req.body);
    res.send('actualizar nota');
}

notesCtrl.deleteNote = async(req, res) => {
    const notaBorrada = await Note.findByIdAndDelete(req.params.id);
    console.log(notaBorrada);
    res.redirect('/notes');
}

module.exports = notesCtrl;