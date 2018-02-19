// Load dependencies
var Chirp = require("../models/chirp.js");

// Setup routes
// and export the routes
module.exports = function(app) {

    // get all the chirps
    // When the all route is hit run a callback function
    // use Sequelize to query the database for all chirps
    // .then run another callback function that gives results in json
    app.get("/api/all", function(req, res) {
        Chirp.findAll({}).then(function(results) {

            res.json(results);
        });
    });

    // Add a new chirp using the "POST" method
    app.post("/api/new", function(req, res) {

        // Tests and debugging 
        console.log("Chirp data:");
        console.log("--------------");
        console.log(req.body);

        Chirp.create({
            author: req.body.author,
            body: req.body.body,
            created_at: req.body.created_at
        }).then(function(results) {
            res.end();
        })
    })
}
