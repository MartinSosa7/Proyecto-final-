//defino controlador para el manejo de CRUD
const personaCtrl = require('./../controllers/persona.controller');
const autCtrl = require('./../controllers/auth.controller')

//creamos el manejador de rutas
const express = require('express');
const router = express.Router();


//definimos las rutas para la gestion de persona
router.get('/:id', personaCtrl.getPersona);
router.get('/',personaCtrl.getPersonas);
router.post('/', personaCtrl.createPersona);
router.put('/update/:id', personaCtrl.editPersona);
router.delete('/eliminar/:id', personaCtrl.deletePersona);
router.get('/filtro/:rol', personaCtrl.getPersonaByType);
router.post('/login', personaCtrl.loginUsuario);

//sin tokens
/**
router.get('/:id', personaCtrl.getPersona);
router.get('/',personaCtrl.getPersonas);
router.post('/', personaCtrl.createPersona);
router.put('/update/:id', personaCtrl.editPersona);
router.delete('/eliminar/:id', personaCtrl.deletePersona);
router.get('/filtro/:dni', personaCtrl.getPersonaByDni);
router.post('/addRol/:idPersona/rol', personaCtrl.addRol);
router.delete('/delete/:idPersona/rol/:idRol', personaCtrl.deleteRol); 
*/

//exportamos el modulo de rutas
module.exports = router;