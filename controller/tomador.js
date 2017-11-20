//Controller Tomador responsável por regras de negocio.

var TomadorDAO = require('.././model/tomador');

var tomador = function () {

	var _insert = function () {
		return 'inserido com sucesso';
	};

	var _update = function () {
		return 'atualizado com sucesso';
	};

	var _deleta = function () {
		return 'removido com sucesso';
	};

	var _findAll = function () {
		console.log('controller get all');
		TomadorDAO.findAll();
	};

	var _findById = function () {
		return 'buscar por id';
	};

	return {
		insert: _insert,
		update: _update,
		deleta: _deleta,
		findAll: _findAll,
		findById: _findById
	}
}

module.exports = tomador();