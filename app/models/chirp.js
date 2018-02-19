// Dependencies

// reference to the standard sequelize library
var Sequelize = require("sequelize");
// This sequelize references the conection in the config folder
var sequelize = require("../config/connection.js");

// new sequelize model for the database
var Chirp = sequelize.define("chirps", {
    author: {
        type: Sequelize.STRING,
    },
    body: {
        type: Sequelize.STRING
    },
    created_at: {
        type: Sequelize.DATE
    }
}, {
    timestamps: false
});

// sync with the database
Chirp.sync();

module.exports = Chirp;