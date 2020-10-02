const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const morgan = require('morgan');

// initializations
const app = express();

// setting
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), '/layouts'),
    partialsDir: path.join(app.get('views'), '/partials'),
    extname: '.hbs'
}));
app.set('view engine', '.hbs');


// middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


// global variables


// routes
app.use(require('./routes/index.routes'));
app.use(require('./routes/notes.routes'));

// static files
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));


module.exports = app;