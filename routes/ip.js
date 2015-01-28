var express = require('express');
var router = express.Router();

/* GET client ip */
router.get('/', function(req, res) {
    res.json({
        'origin': req.ip
  });
});

module.exports = router;
