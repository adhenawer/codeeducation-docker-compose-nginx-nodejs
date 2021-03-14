const express = require('express')
const app = express()
const port = 3000
const connection = require('./connection.js')

connection.query(`INSERT INTO people(name) values('Rodolfo Moraes')`)

var getPeople = function(callback) {
    connection.query('SELECT * FROM people', function (err, res, fields) {
        if (err) return callback(err);
        if (res.length) {
            callback(null, res);
        }
    })
}

app.get('/', (req,res) => {
    getPeople(function (err, results) {
        let html = "<h1>Full Cycle Rocks!</h1>"
        html += "<ul>"
        results.map(result => {
            html += `<li>${result.name}</li>`
        })
        html += "</ul>"
        res.send(html)
    });
})

app.listen(port, ()=> {
    console.log('Rodando na porta ' + port)
})