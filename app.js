'use strict';

require('./config/db/config');
const express = require('express');
const app = express();

const RotaAPI = require('./routes/index');
const Tomador = require('./routes/tomador');


app.use('/', RotaAPI);
app.use('/tomador', Tomador);


app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + server.address().port);
});