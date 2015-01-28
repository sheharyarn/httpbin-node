var express = require('express');
var router  = express.Router();
/* GET custom status code */
router.get('/:code/', function(req, res) {
    var status_code = parseInt(req.params.code);

    if (!isInt(status_code) || status_code<=100 || status_code>=600 ){

  	     res.status(400).json({'error':'incorrect status code'})

  	     console.log('400: incorrect status code ');
    }
  else{
        var http_status = res.status(status_code);
        console.log(http_status);
    	res.status(status_code).json({
    		'status': status_code
        });
	}
});

function isInt(value){
    return !isNaN(value) && (function(x) { return (x | 0) === x; })(parseFloat(value))
}

module.exports = router;
