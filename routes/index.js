var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  console.log('chegou aqui');

  res.end();
});

module.exports = router;