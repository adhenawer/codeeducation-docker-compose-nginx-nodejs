
function connectDatabase() {
    const config = {
        host: 'db',
        user: 'root',
        password: 'root',
        database: 'nodedb'
    };
    const mysql = require('mysql')
    connection = mysql.createConnection(config)
    return connection;
}

module.exports = connectDatabase();