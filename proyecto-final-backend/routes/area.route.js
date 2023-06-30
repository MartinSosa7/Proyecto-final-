//defino controlador para el manejo de CRUD
const areaCtrl = require('./../controllers/area.controller');

//creamos el manejador de rutas
const express = require('express');
const router = express.Router();

//definimos las rutas para la gestion de producto
router.get('/:id', areaCtrl.getArea);
router.get('/', areaCtrl.getAreas);
router.post('/', areaCtrl.createArea);
router.put('/update/:id', areaCtrl.editArea);
router.delete('/eliminar/:id', areaCtrl.deleteArea);
router.get('/filtro/:name', areaCtrl.getAreaByName);

//exportamos el modulo de rutas
module.exports = router;