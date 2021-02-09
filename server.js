var express = require('express');
var app = express();
var path = require('path');

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/verse1.txt.'));
});

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/verse3.txt.'));
});


app.listen(8000);