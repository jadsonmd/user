var express = require('express');
var TomadorController = require('.././controller/tomador');

var router = express.Router();

//POST (create)
router.post('/', function(req, res){
	console.log('rota post');
	TomadorController.insert();
});


//GET (ready)
router.get('/', function(req, res){
	console.log('rota get all');
	TomadorController.findAll();
});


//GET by ID (ready)
router.get('/:id', function(req, res){
	console.log('rota get by id');
	TomadorController.findById();
});


//PUT by ID (update)
router.put('/:id', function(req, res){
	console.log('rota put by id');
	TomadorController.update();
});


//DELETE by ID (remover)
router.delete('/:id', function(req, res){
	console.log('rota delete');
	TomadorController.deleta();
});

module.exports = router;