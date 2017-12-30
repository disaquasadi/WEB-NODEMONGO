//import libraries
var express = require('express');
var bodyParser = require('body-parser');
var mongo = require('mongodb');
var monk = require('monk');
var path = require('path');
// var http = require('http').Server(app);

//create neccessary objects
var app = express();
var router = express.Router();

// var http = require('http');
// var app = http.createServer(function(req,res){
//     res.setHeader('content-type', 'application/json; charset=utf-8');
//     res.send(JSON.stringify({ a: 1 }));
// });

//use objects in app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    // res.send(JSON.stringify({}));
  })

app.use(function(req,res,next){
    req.db = db;
    next();
});

//you need to update wp with your own database name
var db = monk('mongodb://imhikarucat:12345abcde@ds157444.mlab.com:57444/a2-webpro-s3-2017');

//SERVER SIDE ROUTING
router.get('/students', function(req, res, next) {
   console.log(req.method);
   next();
});

router.get('/products', function(req, res, next){
    console.log(req.method);
    next();
});

router.get('/categories', function(req, res, next){
    console.log(req.method);
    next();
});

router.get('/shoppingcarts', function(req, res, next){
    console.log(req.method);
    next();
});

router.get('/orders', function(req, res, next){
    console.log(req.method);
    next();
});

app.use('/', router);

////////////////
//STUDENTS
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
	req.db.collection('students').update({_id: req.params.id}, {name: req.body.name, yob: req.body.yob});
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

//create
router.post('/students', function(req, res){

	console.log(req.body);
	req.db.collection('students').insert(req.body, function(e, docs){
		res.json(docs);
	});
});
////////////////

////////////////
//PRODUCTS
//get all
router.get('/products', function(req, res) {
    req.db.collection('products').find({},{"limit": 100},function(e,docs){
        res.json(docs);
    });
});

//get by _id
router.get('/products/:id', function(req, res){
	req.db.collection('products').findOne(req.params.id, function(e, doc){
		res.json(doc);
	})
});

//update (by _id)
router.put('/products/:id', function(req, res){
    req.db.collection('products').update({_id: req.params.id}, 
        {
            id: req.body.id,
            name: req.body.name, 
            price: req.body.price, 
            description: req.body.description, 
            brand: req.body.brand, 
            producer: req.body.producer,
            inventory: req.body.inventory,
            imageurl: req.body.imageurl,
        });
	req.db.collection('products').findOne(req.params.id, function(e, doc){
		res.json(doc);
	})

});

//delete (by _id)
router.delete('/products/:id', function(req, res){
	req.db.collection('products').remove({_id: req.params.id}, function(e, doc){
		res.json(doc);
	})
});

//create
router.post('/products', function(req, res){

	console.log(req.body);
	req.db.collection('products').insert(req.body, function(e, docs){
		res.json(docs);
	});
});
////////////////

////////////////
//CATEGORIES
//get all
router.get('/categories', function(req, res) {
    req.db.collection('categories').find({},{"limit": 100},function(e,docs){
        res.json(docs);
    });
});

//get by _id
router.get('/categories/:id', function(req, res){
	req.db.collection('categories').findOne(req.params.id, function(e, doc){
		res.json(doc);
	})
});

//update (by _id)
router.put('/categories/:id', function(req, res){
    req.db.collection('categories').update({_id: req.params.id}, 
        {
            id: req.body.id,
            name: req.body.name,
        });
	req.db.collection('categories').findOne(req.params.id, function(e, doc){
		res.json(doc);
	})

});

//delete (by _id)
router.delete('/categories/:id', function(req, res){
	req.db.collection('categories').remove({_id: req.params.id}, function(e, doc){
		res.json(doc);
	})
});

//create
router.post('/categories', function(req, res){

	console.log(req.body);
	req.db.collection('categories').insert(req.body, function(e, docs){
		res.json(docs);
	});
});
////////////////

////////////////
//SHOPPING CARTS
//get all
router.get('/shoppingcarts', function(req, res) {
    req.db.collection('shoppingcarts').find({},{"limit": 100},function(e,docs){
        res.json(docs);
    });
});

//get by _id
router.get('/shoppingcarts/:id', function(req, res){
	req.db.collection('shoppingcarts').findOne(req.params.id, function(e, doc){
		res.json(doc);
	})
});

//update (by _id)
router.put('/shoppingcarts/:id', function(req, res){
    req.db.collection('shoppingcarts').update({_id: req.params.id}, 
        {
            id: req.body.id,
            name: req.body.name, 
            price: req.body.price, 
            description: req.body.description, 
            brand: req.body.brand, 
            producer: req.body.producer,
            inventory: req.body.inventory,
            imageurl: req.body.imageurl,
        });
	req.db.collection('shoppingcarts').findOne(req.params.id, function(e, doc){
		res.json(doc);
	})

});

//delete (by _id)
router.delete('/shoppingcarts/:id', function(req, res){
	req.db.collection('shoppingcarts').remove({_id: req.params.id}, function(e, doc){
		res.json(doc);
	})
});

//create
router.post('/shoppingcarts', function(req, res){

	console.log(req.body);
	req.db.collection('shoppingcarts').insert(req.body, function(e, docs){
		res.json(docs);
	});
});
////////////////

////////////////
//ORDERS
//get all
router.get('/orders', function(req, res) {
    req.db.collection('orders').find({},{"limit": 100},function(e,docs){
        res.json(docs);
    });
});

//get by _id
router.get('/orders/:id', function(req, res){
	req.db.collection('orders').findOne(req.params.id, function(e, doc){
		res.json(doc);
	})
});

//update (by _id)
router.put('/orders/:id', function(req, res){
    req.db.collection('orders').update({_id: req.params.id}, 
        {
            id: req.body.id,
            name: req.body.name, 
        });
	req.db.collection('orders').findOne(req.params.id, function(e, doc){
		res.json(doc);
	})

});

//delete (by _id)
router.delete('/orders/:id', function(req, res){
	req.db.collection('orders').remove({_id: req.params.id}, function(e, doc){
		res.json(doc);
	})
});

//create
router.post('/orders', function(req, res){

	console.log(req.body);
	req.db.collection('orders').insert(req.body, function(e, docs){
		res.json(docs);
	});
});
////////////////

module.exports = app;
app.set( 'port', ( process.env.PORT || 8080 ));

// Start node server
app.listen( app.get( 'port' ), function() {
  console.log( 'Node server is running on port ' + app.get( 'port' ));
});
