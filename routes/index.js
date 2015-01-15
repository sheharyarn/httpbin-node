var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'httpbin-node' });
});

module.exports = router;

// any who
// right now you'll be dealing with two kinds of responses
// html and json
// json is simple, you just do res.json and pass in a js object
// in html's case, you need  ot  use a templater
// in node we use, //jade
// yeh comments rub na karein, useful hain meray liay k 
// k
// acha in the sbove method we call res.render index, and a js {} object
// intdex is the anme of the `view` we wil use
// you might remember we initialzed jade in app.js
//yes
// acha, the js object we pass along is basically like those @variables we 
// used in rails
// hyou created them in the controller and used them in views
// think of {} object as a hash/dictionary of variables that we 
// want to use in our views
// in this case, we passed a variable called 'title' and it's value 'http...'
// now we go into index.jade since we 're using it in our res