var express = require('express');
var app = express();

app.use('/static', express.static('public'));

app.get('/files', function (req, res) {
  res.send('POST request to the homepage');
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});