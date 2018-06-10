// server.js
var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');
var bodyParser = require('body-parser');
var cors = require('cors')

app = express();
app.use(cors())

app.get('/api/search', function (req, res) {

    let yelpAPI = require('yelp-api');
    
    // Create a new yelpAPI object with your API key
    let apiKey = 'm_BZmuLCFPEpmbog8phIbcLB4cyENu6WmHRk0gwe5eD5vthgebXQ_wG2OwywT7qYThJUPrG36JOJkpJOHvXsEDHaqGT7qLmX9mYiGfn-qDv6t-3_gK7pkz-1iZUWW3Yx';
    let yelp = new yelpAPI(apiKey);
    
    // Set any parameters, if applicable (see API documentation for allowed params)
    // let zipcode='07003'
    // if (req.query.zip){
    //     zipcode=req.query.zip;
    // }
    //let params = [{ location: '10314', term : 'food', limit:10 }];
    let param={};
    if (req.query.zip){
        param.location=req.query.zip;
    }

    if (req.query.term){
        param.term=req.query.term;
    }

    if (req.query.limit){
        param.limit=req.query.limit;
    }

    //let params = [{ location: zipcode, term : 'food', limit:10, radius:40000 }];
 
    let params = [param];
    // Call the endpoint
    yelp.query('businesses/search', params)
    .then(data => {
    // Success
    //console.log(data);
    res.send(data);
    })
    .catch(err => {
    // Failure
    console.log(err);
    });    
  })

app.get('/api', function (req, res) {
    res.send('hello world')
  })



app.use(serveStatic(__dirname + "/dist"));
app.use(bodyParser.urlencoded( { extended: true } ));
app.use(bodyParser.json());

console.log('got here.');

/*********************************************************** */

// let yelpAPI = require('yelp-api');
 
// // Create a new yelpAPI object with your API key
// let apiKey = 'm_BZmuLCFPEpmbog8phIbcLB4cyENu6WmHRk0gwe5eD5vthgebXQ_wG2OwywT7qYThJUPrG36JOJkpJOHvXsEDHaqGT7qLmX9mYiGfn-qDv6t-3_gK7pkz-1iZUWW3Yx';
// let yelp = new yelpAPI(apiKey);
 
// // Set any parameters, if applicable (see API documentation for allowed params)
// let params = [{ location: '10314' }];
 
// // Call the endpoint
// yelp.query('businesses/search', params)
// .then(data => {
//   // Success
//   console.log(data);
// })
// .catch(err => {
//   // Failure
//   console.log(err);
// });

/************************************************************ */
var port = process.env.PORT || 5000;


var router = express.Router();              // get an instance of the express Router
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});


app.listen(port);
console.log('server started '+ port);


