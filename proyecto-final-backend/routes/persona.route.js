//defino controlador para el manejo de CRUD
const personaCtrl = require('./../controllers/persona.controller');
const autCtrl = require('./../controllers/auth.controller')

//creamos el manejador de rutas
const express = require('express');
const router = express.Router();

/**
//definimos las rutas para la gestion de persona
router.get('/:id',autCtrl.verifyToken, personaCtrl.getPersona);
router.get('/', autCtrl.verifyToken,personaCtrl.getPersonas);
router.post('/', personaCtrl.createPersona);
router.put('/update/:id',autCtrl.verifyToken, personaCtrl.editPersona);
router.delete('/eliminar/:id',autCtrl.verifyToken, personaCtrl.deletePersona);
router.get('/filtro/:dni',autCtrl.verifyToken, personaCtrl.getPersonaByDni);
*/

router.get('/:id', personaCtrl.getPersona);
router.get('/',personaCtrl.getPersonas);
router.post('/', personaCtrl.createPersona);
router.put('/update/:id', personaCtrl.editPersona);
router.delete('/eliminar/:id', personaCtrl.deletePersona);
router.get('/filtro/:dni', personaCtrl.getPersonaByDni);
router.post('/addRol/:idPersona/rol', personaCtrl.addRol);
router.delete('/delete/:idPersona/rol/:idRol', personaCtrl.deleteRol); 


//exportamos el modulo de rutas
module.exports = router;