const { Router } = require('express');
const { indexCtrl } = require('../controllers/index.controller');

const router = Router();

router.get('/', renderIndex());

router.get('/about', renderAbout());


module.exports = router;