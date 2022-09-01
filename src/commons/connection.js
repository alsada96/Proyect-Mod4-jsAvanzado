/* Importing the mysql and config files. */
import mysql from "promise-mysql";
import config  from "./../config";

/* Creating a connection to the database. */
const connection = mysql.createConnection({
    host: config.host,
    database: config.database,
    user: config.user,
    password: config.password   
});

const getConnection = () => {
    return connection
};

module.exports = {
    getConnection
}; 