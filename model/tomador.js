// Model tomador responsável por acesso ao banco de dados do mongo.

var mongo = require('.././config/db/config');

var tomador = function () {

	var _insert = function () {
		var connection = mongo();

		connection().open( function(err, mongoclient){
			mongoclient.collection("tomador", function(err, collection){
				collection.insert({
					nome: "Jadson Mezzari Dagostin",
					idade: 29,
					suditos: 10
				});

				mongoclient.close();
			});
		});
	};

	var _update = function () {
		return 'atualizado com sucesso';
	};

	var _remove = function () {
		return 'removido com sucesso';
	};

	var _findAll = function () {
		console.log('model get all');
		var connection = mongo();

		connection().open( function(err, mongoclient){
			mongoclient.collection("tomador", function(err, collection){

				collection.find().toArray(function(err, result){
					mongoclient.close();
					console.log(result);
				});
			});
		});
	};

	var _findById = function () {
		return 'buscar por id';
	};

	return {
		insert: _insert,
		update: _update,
		remove: _remove,
		findAll: _findAll,
		findById: _findById
	}
}

module.exports = tomador();