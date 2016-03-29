var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.set('port', (process.env.PORT || 5000));

mongoose.connect('mongodb://localhost/vinyls');
// mongoose.model

app.get('/*', function(req, res){
    var file = req.params[0] || '/views/index.html';
    res.sendFile(path.join(__dirname, '/public', file));
});

app.listen(app.get('port'), function(){
    console.log('listening on port #', app.get('port'));
});

module.exports = app;
