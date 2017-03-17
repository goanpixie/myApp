// modules=========================================================================

var express  = require( 'express'),
    path     = require( 'path')
    bp       = require('body-parser'),
    mongoose = require( 'mongoose');
    app      = express(),
    root     = __dirname;

// configuration=========================================================================

app.use( express.static( path.join( root, './client' )));
app.use( express.static( path.join( root, './bower_components' )));
app.use(bp.json());
// parse application/vnd.api+json as json
// app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 
// parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: true })); 

//load mongoose first before routes======================================================

require("./server/config/mongoose.js");

//connects to routes=====================================================================

require("./server/config/routes.js")(app);

//shout-out to the server================================================================
app.listen( 8000, function() {
  console.log( `Action!!! on port 8000` );
});