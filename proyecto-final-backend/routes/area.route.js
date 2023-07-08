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
router.delete('/:id', areaCtrl.deleteArea);
router.get('/filtro/:name', areaCtrl.getAreaByName);

//rutas para las funciones de Anuncios
router.post('/anuncio/:idArea', areaCtrl.addAnuncio);
router.get('/area/:idArea/anuncio/:idAnuncio', areaCtrl.getAnuncio);
router.put('/area/:idArea/anuncio/:idAnuncio', areaCtrl.editAnuncio);
router.delete('/area/:idArea/anuncio/:idAnuncio', areaCtrl.deleteAnuncio);

//exportamos el modulo de rutas
module.exports = router;