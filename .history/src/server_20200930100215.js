const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const morgan = require('morgan');
const methodOverride = require('method-override');
const flash = require('connect-flash');
const session = require('express-session');

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
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
// app.use(express.json());
app.use(session({
    secret: 'palabrasecreta',
    resave: true,
    saveUninitialized: true
}));
app.use(flash());


// global variables
app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg');
    next();
});

// routes
app.use(require('./routes/index.routes'));
app.use(require('./routes/notes.routes'));

// static files
app.use(express.static(path.join(__dirname, 'public')));


module.exports = app;