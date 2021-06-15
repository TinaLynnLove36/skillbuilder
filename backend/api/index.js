var express = require('express');
var app = express();
var jwt = require('express-jwt');
var jwks = require('jwks-rsa');
var guard = require('express-jwt-permissions')();

var port = process.env.PORT || 8080;

var jwtCheck = jwt({
      secret: jwks.expressJwtSecret({
          cache: true,
          rateLimit: true,
          jwksRequestsPerMinute: 5,
          jwksUri: 'https://skillbuilder.us.auth0.com/.well-known/jwks.json'
    }),
    audience: 'https://skillbuilder.com',
    issuer: 'https://skillbuilder.us.auth0.com/',
    algorithms: ['RS256']
});

app.use(jwtCheck);

app.get('/skillbuilder', guard.check(['read:skills']), function (req, res) {
    res.json({
        skill1: "This is the first skill",
        skill2: "This is the second skill",
    });
});

app.listen(port);