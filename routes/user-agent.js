var express = require('express');
var router  = express.Router();

/* GET user-agent */
router.get('/', function(req, res) {
  res.json({
  	'user-agent': 'return the user-agent here'
  });
});

module.exports = router;
