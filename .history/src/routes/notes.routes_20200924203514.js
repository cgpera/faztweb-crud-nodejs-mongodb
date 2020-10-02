const { Router } = require('express');

const router = Router();

const {
    renderNoteForm,
    createNewNote,
    renderNotes,
    renderEditForm,
    updateNote
} = require('../controllers/notes.controller');


// Nueva Nota              
router.get('/notes/add', renderNoteForm);

router.post('/notes/add', createNewNote);

// Obtener todas las Notas
router.get('/notes', renderNotes);

// Edit Notes
router.get('/notes/edit/:id', renderEditForm);

router.put('/notes/edit/:id', updateNote);

module.exports = router;