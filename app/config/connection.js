// Dependencies
var Sequelize = require("sequelize");
var mysql = require("mysql");

// if (process.env.JAWSDB_URL) {
//     connection = mysql.createConnection(process.env.JAWSDB_URL);
// } else {
//     connection = mysql.createConnection({
//         host: 'localhost',
//         user: 'root',
//         password: 'StephenDKlein360',
//         database: 'sequelize_chirpy'
//     });
// };
if (process.env.JAWSDB_URL) {
    sequelize = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    var sequelize = new Sequelize("sequelize_chirpy", "root", "StephenDKlein360", {
        host: "localhost",
        dialect: "mysql",
        pool: {
            max: 5,
            min: 0,
            idle: 10000
        }
    });
}
// Create a mysql connectiom with sequelize 


module.exports = sequelize;