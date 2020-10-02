const app = require('./server');

app.listen(app.get('port'), () => {
    console.log('servidor escuchando en el puerto ', app.get('port'));
})