// Dependencies

var express = require("express");
var bodyParser = require("body-parser");

// Set up the express app
var app = express();

// Set up process environment port
var PORT = process.env.PORT || 8080;

// Setup the express app to handle data parsing
// "MiddleWare"
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// use express to set a static directory
app.use(express.static("app/public"));

// require the api routes
require("./app/routes/api-routes.js")(app);

// Start the server
app.listen(PORT, function() {
    console.log("Application listening on PORT " + PORT);
});
