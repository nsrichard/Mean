var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.engine('html', require('ejs').renderFile);
app.use(express.static(__dirname + '/public'));
app.use(bodyParser());
/*app.use(bodyParser.urlencoded({
	extended: true
}));*/
require('./routes.js')(app);

var server = app.listen(3000, function() {
    console.log('App corriendo por puerto %d', server.address().port);
});
