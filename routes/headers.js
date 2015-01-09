var express = require('express');
var router  = express.Router();

/* GET headers */
router.get('/', function(req, res) {
  res.json({
    'headers': req.headers
  });
});

module.exports = router;
