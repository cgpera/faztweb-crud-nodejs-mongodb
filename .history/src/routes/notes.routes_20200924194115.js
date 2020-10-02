const { Router } = require('express');

const router = Router();

const { renderNoteForm } = require('../controllers/notes.controller');

router.get('/notes/add', renderNoteForm);

module.exports = router;