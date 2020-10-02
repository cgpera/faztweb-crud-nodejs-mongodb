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
    newNote.user = req.user.id;
    await newNote.save();
    req.flash('success_msg', 'Protocolo agregado exitosamente a la BD');
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

notesCtrl.updateNote = async(req, res) => {
    const { title, description } = req.body;
    const notaModificada = await Note.findByIdAndUpdate(req.params.id, { title, description });
    req.flash('success_msg', 'Protocolo modificado...');
    res.redirect('/notes');
}

notesCtrl.deleteNote = async(req, res) => {
    const notaBorrada = await Note.findByIdAndDelete(req.params.id);
    req.flash('success_msg', 'Protocolo eliminado...');
    res.redirect('/notes');
}

module.exports = notesCtrl;