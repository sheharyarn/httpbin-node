var express = require('express');
var router  = express.Router();

/* GET status code */
router.get('/', function(req, res) {
  res.json({

    'status': res.statusCode
  });
});

module.exports = router;
