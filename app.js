//import libraries
var express = require('express');
var bodyParser = require('body-parser');
var mongo = require('mongodb');
var monk = require('monk');
var path = require('path');
var http = require('http').Server(app);

//create neccessary objects
var app = express();
var router = express.Router();


//you need to update wp with your own database name
var db = monk('localhost:27017/database_name');


//use objects in app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function(req,res,next){
    req.db = db;
    next();
});

//STUDENTS
app.use('/', router);

//create
router.post('/students', function(req, res){

	console.log(req.body);
	req.db.collection('students').insert(req.body, function(e, docs){
		res.json(docs);
	});
});

//get all
router.get('/students', function(req, res) {
    req.db.collection('students').find({},{"limit": 100},function(e,docs){
        res.json(docs);
    });
});

//get by _id
router.get('/students/:id', function(req, res){
	req.db.collection('students').findOne(req.params.id, function(e, doc){
		res.json(doc);
	})
});

//update (by _id)
router.put('/students/:id', function(req, res){
	req.db.collection('students').update({_id: req.params.id}, {
		//constructor props
		name: req.body.name, 
		yob: req.body.yob,
	});
	req.db.collection('students').findOne(req.params.id, function(e, doc){
		res.json(doc);
	})

});

//delete (by _id)
router.delete('/student/:id', function(req, res){
	req.db.collection('students').remove({_id: req.params.id}, function(e, doc){
		res.json(doc);
	})
});

module.exports = app;
app.set( 'port', ( process.env.PORT || 8080 ));

// Start node server
app.listen( app.get( 'port' ), function() {
  console.log( 'Node server is running on port ' + app.get( 'port' ));
});
