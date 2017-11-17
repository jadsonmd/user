'use strict';

const express = require('express');

const routes = require('./routes/index');
const tomador = require('./routes/tomador');
const UsersAPI = require('./modules/Users');

const app = express();

app.use('/', routes);
app.use('/tomador', tomador);

app.use('/api/users', UsersAPI);


app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + server.address().port);
});