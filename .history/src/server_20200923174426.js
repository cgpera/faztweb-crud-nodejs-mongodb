const express = require('express');
const path = require('path');

// initializations
const app = express();

// setting
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));

// middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


// global variables


// routes
app.get('/', (req, res) => {
    res.send('hola mundo');
})


// static files
app.use(express.static(path.join(__dirname, 'public')));


module.exports = app;