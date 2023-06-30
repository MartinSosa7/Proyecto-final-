//defino controlador para el manejo de CRUD
const usuarioCtrl = require('./../controllers/usuario.controller');
const autCtrl = require('./../controllers/auth.controller')

//creamos el manejador de rutas
const express = require('express');
const router = express.Router();

//definimos las rutas para la gestion de usuario
router.post('/', usuarioCtrl.createUsuario);
router.post('/login', usuarioCtrl.loginUsuario);
router.get('/filtro/:dni', autCtrl.verifyToken, usuarioCtrl.getUsuarioByPersona);

//exportamos el modulo de rutas
module.exports = router;