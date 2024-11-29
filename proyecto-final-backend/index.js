const express = require('express');
const cors = require('cors');
const { mongoose } = require('./database');

var app = express();

//middlewares
app.use(express.json({ limit: '100mb' }));
app.use(cors({ origin: 'http://localhost:4200' }));

//Cargamos el modulo de direccionamiento de rutas
app.use('/api/usuario', require('./routes/usuario.route.js'));
app.use('/api/persona', require('./routes/persona.route.js'));
app.use('/api/rol', require('./routes/rol.route.js'));
app.use('/api/area', require('./routes/area.route.js'));
app.use('/api/anuncio', require('./routes/anuncio.route.js'));
app.use('/api/formulario', require('./routes/formulario.route.js'));


//setting
app.set('port', process.env.PORT || 3000);

//starting the server
app.listen(app.get('port'), () => {
    console.log(`Server started on port`, app.get('port'));
});