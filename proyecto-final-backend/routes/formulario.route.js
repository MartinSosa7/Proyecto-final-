//defino controlador para el manejo de CRUD
const formularioCtrl = require('./../controllers/formulario.controller');

//creamos el manejador de rutas
const express = require('express');
const router = express.Router();

//definimos las rutas para la gestion de producto
router.get('/:id', formularioCtrl.getForm);
router.get('/', formularioCtrl.getForms);
router.post('/', formularioCtrl.createForm);
router.put('/update/:id', formularioCtrl.editForm);
router.delete('/eliminar/:id', formularioCtrl.deleteForm);

//exportamos el modulo de rutas
module.exports = router;