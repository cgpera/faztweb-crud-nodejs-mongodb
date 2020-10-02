const { Router } = require('express');

const router = Router();

const {
    renderNoteForm,
    createNewNote,
    renderNotes
} = require('../controllers/notes.controller');


// Nueva Nota              
router.get('/notes/add', renderNoteForm);

router.post('/notes/add', createNewNote);

// Obtener todas las Notas
router.get('/notes', renderNotes);

module.exports = router;