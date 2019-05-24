
var bodyParser = require('body-parser');
var express = require('express');
var mongodb = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var app = express();
var fs = require('fs');
var emailCheck = require('email-check');

  app.use('/', express.static('public'));  
  app.use(express.static(__dirname + '/images'));
 

  app.use(function (req, res, next) {// for giving required access
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
  
	app.use(bodyParser.urlencoded({extended: true}));// data format of get and post method
	app.use(bodyParser.json());    
  var url = "mongodb://127.0.0.1:27017/cow_db";//url to store data
  
  mongodb.connect(url, function (err, db) {// create connection to mongodb
    if (err) console.log(err);
    else {
        console.log(url);
        console.log('Server Started');
        app.listen(3000, function () {
            console.log('Listening server Started');
        });
    }


    app.get('/', function (req, res, next) {// method to send response to mobile client
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,PUT,PATCH,DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        res.setHeader('Access-Control-Allow-Credentials', true);
    });
	app.post('/userData/', function (req, res, next) {// get method to receive request    
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");   
		res.header("Access-Control-Allow-Headers", "Content-type,Accept,X-Custom-Header"); 	   
        var titleId = req.body.list.userId;
		console.log(titleId);
         db.collection('log').find({'s': titleId}).toArray(function (err, db) {// search query to select database items of requested cow id
          console.log(db);		 
		  res.send({result: true, 'msg': 'data retrieved', data: db});// sending request as a db
            
        });     
    });
	app.post('/deleteData/', function (req, res, next) {// get method to receive request    
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");   
		res.header("Access-Control-Allow-Headers", "Content-type,Accept,X-Custom-Header"); 	   
        var titleId = req.body.list.cownNumber;
		 var userId = req.body.list.userId;
        db.collection('log').findOneAndDelete({'s': userId,'id':titleId}).toArray(function (err, db) {// search query to select database items of requested cow id		
          // console.log(db);		 
            
        });  
			// res.send({result: true, 'msg': 'data retrieved', data: db});// sending request as a db		
    });
	app.post('/checkemail/', function (req, res, next) {// get method to receive request    
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");   
		res.header("Access-Control-Allow-Headers", "Content-type,Accept,X-Custom-Header"); 	   
        // var titleId = req.body.list.cownNumber;
		 var userId = req.body.logs.email;
		 var emailsts;
       emailCheck(userId)
  .then(function (res) {
	  if(res){
		  emailsts="true";
	  console.log("Email Exist");}
  
  else{
	  emailsts="true";console.log('Invalid');}
    // Returns "true" if the email address exists, "false" if it doesn't. 
  })
  if(emailsts)
  { res.send({result: true, 'msg': 'data stored'});}
else{ res.send({result: false, 'msg': 'data stored'});}
 
  
			// res.send({result: true, 'msg': 'data retrieved', data: db});// sending request as a db		
    });
	 app.post('/search', function (req, res, next) {// get method to receive request       
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");   
		res.header("Access-Control-Allow-Headers", "Content-type,Accept,X-Custom-Header");
        console.log("true");	    
        var titleId = req.body.reguser.emailid;
		var passid = req.body.reguser.passid;        		
        db.collection('RegisteredUser').find({'email': titleId,'pass':passid}).toArray(function (err, db) {// search query to select database items of 
		res.send({result: true, 'msg': 'data retrieved', data: db});// sending request as a db
        console.log(titleId);
        });        
});
    app.post('/users', function (req, res, next) {//post method to retrieve the requested items	
        var params = req.body.logs;// storing requested logs in params variable
        console.log(req.body.logs);
        db.collection('log').insert(params, function (err, result) {// query to insert the requested items into mongodb
            assert.equal(err, null);
            console.log("Inserted a document into the log collection in Mongo.");
            fs.appendFile('logs/logs.dat', JSON.stringify(params), function (err) {// append the requested items in log.dat
                if (err)
                    console.error(err);
                    console.log('Logs added to log.dat file!'+JSON.stringify(params));
				});

        });
        res.send({result: true, 'msg': 'data stored'});
    })
	
	app.post('/register', function (req, res, next) {//post method to retrieve the requested items	
        var params = req.body.logs;// storing requested logs in params variable
        console.log(req.body.logs);
        db.collection('RegisteredUser').insert(params, function (err, result) {// query to insert the requested items into mongodb
            assert.equal(err, null);
            console.log("Inserted a document into the log collection in Mongo.");
            fs.appendFile('logs/logs.dat', JSON.stringify(params), function (err) {// append the requested items in log.dat
                if (err)
                    console.error(err);
                    console.log('Logs added to log.dat file!'+JSON.stringify(params));
            });

        });
        res.send({result: true, 'msg': 'data stored'});
    })
	
 app.post('/products_men', function (req, res, next) {//post method to retrieve the requested items
        var params = req.body.logs;// storing requested logs in params variable
        console.log(req.body.logs);
        db.collection('MenProducts').insert(params, function (err, result) {// query to insert the requested items into mongodb
            assert.equal(err, null);
            console.log("Inserted a document into the log collection in Mongo.");           

        });
        res.send({result: true, 'msg': 'data stored'});
    })
	app.post('/products_Women', function (req, res, next) {//post method to retrieve the requested items
        var params = req.body.logs;// storing requested logs in params variable
        console.log(req.body.logs);
        db.collection('WomenProducts').insert(params, function (err, result) {// query to insert the requested items into mongodb
            assert.equal(err, null);
            console.log("Inserted a document into the log collection in Mongo.");           

        });
		 res.send({result: true, 'msg': 'data stored'});
    })
		app.post('/products_Kids', function (req, res, next) {//post method to retrieve the requested items
        var params = req.body.logs;// storing requested logs in params variable
        console.log(params);
        db.collection('KidsProducts').insert(params, function (err, result) {// query to insert the requested items into mongodb
            assert.equal(err, null);
            console.log("Inserted a document into the log collection in Mongo.");           

        });
		
        res.send({result: true, 'msg': 'data stored'});
    })
        // res.send({result: true, 'msg': 'data stored'});
    // })
 app.post('/products_Sale', function (req, res, next) {//post method to retrieve the requested items
        var params = req.body.logs;// storing requested logs in params variable
        console.log(req.body.logs);
        db.collection('SaleProducts').insert(params, function (err, result) {// query to insert the requested items into mongodb
            assert.equal(err, null);
            console.log("Inserted a document into the log collection in Mongo.");           

        });
        res.send({result: true, 'msg': 'data stored'});
    })
app.post('/BagMongo', function (req, res, next) {// get method to receive request       
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");   
		res.header("Access-Control-Allow-Headers", "Content-type,Accept,X-Custom-Header");
        console.log("true");	    
        var titleId = req.body.list.name;
		var genId = req.body.list.pGen;
		console.log(titleId);
		console.log(genId);
		if(genId=='Women')
		{
        db.collection('WomenProducts').find({'Product': titleId}).toArray(function (err, db) {// search query to select database items of 
		res.send({result: true, 'msg': 'data retrieved', data: db});// sending request as a db
        console.log(db);
        });  
		}
		if(genId=='Kids')
		{
        db.collection('KidsProducts').find({'Product': titleId}).toArray(function (err, db) {// search query to select database items of 
		res.send({result: true, 'msg': 'data retrieved', data: db});// sending request as a db
        console.log(db);
        });  
		}
		else if(genId=='Men')
		{
		console.log('Entered');
		db.collection('MenProducts').find({'Product': titleId}).toArray(function (err, db) {// search query to select database items of 
		res.send({result: true, 'msg': 'data retrieved', data: db});// sending request as a db
        console.log(db);
        });				
		}	
else if(genId=='Sale')
				{
				db.collection('SaleProducts').find({'Product': titleId}).toArray(function (err, db) {// search query to select database items of 
				res.send({result: true, 'msg': 'data retrieved', data: db});// sending request as a db
				console.log(db);
				});	
				}	
			
});
});
  