var express = require('express');

var app = express();
var port = process.env.PORT || 3000;

// Redirect any https traffic to http (since openWeatherMap doesn't handle it for free accounts)

app.use(function (req, res, next) {
    if (req.headers['x-forwarded-proto'] === 'https') {
      res.redirect('http://' + res.hostname + res.url);
    } else {
      next();
    }
});

app.use(express.static('public'));
app.listen(port, function () {
  console.log('Express server running on port #' + port);
});
