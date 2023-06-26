//defino controlador para el manejo de CRUD
const rolCtrl = require('./../controllers/rol.controller');

//creamos el manejador de rutas
const express = require('express');
const router = express.Router();

//definimos las rutas para la gestion de rol
router.get('/:id', rolCtrl.getRol);
router.get('/', rolCtrl.getRoles);
router.post('/', rolCtrl.createRol);
router.put('/update/:id', rolCtrl.editRol);
router.delete('/eliminar/:id', rolCtrl.deleteRol);


//exportamos el modulo de rutas
module.exports = router;