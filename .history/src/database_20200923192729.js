const mongoose = require('mongoose');

const MONGODB_URI = 'mongodb://localhost/notes-app'
    // mongoose.connect(MONGODB_URI, {
    //         useNewUrlParser: true,
    //         useUnifiedTopology: true
    //     })
    //     .then(db => console.log('DataBase conectada'))
    //     .catch(err => console.log(err));
const db = mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

console.log(db);