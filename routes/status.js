var express = require('express');
var router  = express.Router();

/* GET custom status code */
router.get('/:code/', function(req, res) {
  
  res.json({
  	//'statusCode':res.statusCode
    'status': req.params.code
	
	
  });
});

module.exports = router;


// acha remember params[:somthing] from rails?
// you used to specify params in routes like this:
// match '/my/path/with/:param', and could simply use the
// param in controller like this:
// params[:param] haan thora yaad hai , 
// chalo kuch nahi, node is very similar, you specify the path kust like that
// in app.js, we've initiliazed this routes as:
// app.use('/status',         route('status')       )
// the first var is the path, but in this case it's incomplete
// it should be
// app.use('/status/:code', route('status')       )
// but that won't work since the param is in a different file aka app.js
// we need to o use it in status.js
// ye node ki thori si gandgi hai
// but no issue, 
// you can specify the param here
// samajh aai?
// we're loading the first slug from app.js it's /status
// we load the second one in status.js, it's :code
// together they form /status/:code
// we specify routes in app.js, for easy understanding of all routes
// but their user params, such as :code in this example should be used in 
// individual files, in this case status.js
//aik aur ch.eez bta , yahan jo tu nay param ka method call kiya hai is sey 
//miltay jultay methds kay liye main express ki api ref dekha karoun ya node?
//pehle express phir node
// this is how we access params, req.params.paramname
//main lounge may baitha hoon..HONSLA lmao