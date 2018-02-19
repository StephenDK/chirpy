// Dependencies
var Sequelize = require("sequelize");

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'StephenDKlein360',
        database: 'sequelize_chirpy'
    });
};

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