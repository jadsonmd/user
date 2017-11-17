var express = require('express');
var router = express.Router();


//POST (create)
router.post('/tomador', function(req, res){
	console.log('post');
});


//GET (ready)
router.get('/tomador', function(req, res){
	console.log('get all');
});


//GET by ID (ready)
router.get('/tomador/:id', function(req, res){
	console.log('get by id');
});


//PUT by ID (update)
router.put('/tomador/:id', function(req, res){
	console.log('put by id');
});


//DELETE by ID (remover)
router.delete('/tomador/:id', function(req, res){
	console.log('delete');
});

module.exports = router;