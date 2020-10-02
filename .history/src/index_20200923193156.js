require('dotenv').config;

const app = require('./server');
require('./database');

app.listen(app.get('port'), () => {
    console.log('servidor escuchando en el puerto ', app.get('port'));
})