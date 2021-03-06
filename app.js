var express = require('express');
var app = express();

app.set('port', process.env.PORT || 3333);
app.set('views', __dirname + '/template');
app.set('view engine', 'ejs');
app.engine('ejs', require('ejs-locals'));

app.use(express.static(__dirname + '/www'));
app.use(app.router);

app.get('/', function (req, res) {
	res.render('index', {title: 'Test'});
});

app.listen(app.get('port'), function () {
	console.log('server started');
});