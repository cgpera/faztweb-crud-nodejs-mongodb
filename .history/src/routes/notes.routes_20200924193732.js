const { Router } = require('express');

const router = Router();

const { renderNoteForm } = require('../controllers/notes.controller');

router.get('/notes', renderNoteForm);

module.exports = router;