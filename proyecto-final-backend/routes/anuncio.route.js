//defino controlador para el manejo de CRUD
const anuncioCtrl = require('./../controllers/anuncio.controller');

//creamos el manejador de rutas
const express = require('express');
const router = express.Router();

//definimos las rutas para la gestion de producto
router.get('/:id', anuncioCtrl.getAnuncio);
router.get('/', anuncioCtrl.getAnuncios);
router.post('/', anuncioCtrl.createAnuncio);
router.put('/update/:id', anuncioCtrl.editAnuncio);
router.delete('/eliminar/:id', anuncioCtrl.deleteAnuncio);
router.get('/filtro/:name', anuncioCtrl.getAnuncioByName);

//exportamos el modulo de rutas
module.exports = router;
