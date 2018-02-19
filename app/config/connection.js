// Dependencies
var Sequelize = require("sequelize");

// Create a mysql connectiom with sequelize 
var sequelize = new Sequelize("sequelize_chirpy", "root", "StephenDKlein360", {
    host: "localhost",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});

module.exports = sequelize;