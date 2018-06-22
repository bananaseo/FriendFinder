//Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//Express App
var app = express();
var PORT = process.env.PORT || 3000; 


//Express App body parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Router
require("./app/routing/apiRoutes")(app); 
require("./app/routing/htmlRoutes")(app); 

  
//Start server
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});