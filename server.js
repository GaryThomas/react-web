var express = require('express');

var app = express();
var port = process.env.PORT || 3000;

// Redirect any https traffic to http (since heroku doesn't handle it)

app.use(function (req, res, next)) {
    if (req.headers['x-forwarded-proto'] === 'http') {
      next();
    } else {
      res.redirect('http://' + res.hostname + res.url);
    }
};

app.use(express.static('public'));
app.listen(port, function () {
  console.log('Express server running on port #' + port);
});
