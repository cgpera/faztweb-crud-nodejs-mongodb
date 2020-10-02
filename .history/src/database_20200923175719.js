const mongoose = require('mongoose');

const MONGODB_URI = 'mongodb://localhost/notes-app'
mongoose.connect(MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(db => console.log('DataBase is connected'))
    .catch(err => console.log(err));