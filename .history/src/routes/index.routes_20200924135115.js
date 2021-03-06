const { Router } = require('express');
const { indexCtrl } = require('../controllers/index.controller');

const router = Router();

router.get('/', indexCtrl.renderIndex());

router.get('/about', (req, res) => {
    res.render('about');
});


module.exports = router;