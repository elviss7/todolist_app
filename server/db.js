const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Password@123',
    database:'todomanager', 
})

module.exports = connection;