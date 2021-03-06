const passport = require('passport');
// eslint-disable-next-line prefer-destructuring
const CustomStrategy = require('passport-custom').Strategy;
const { OAuth2Client } = require('google-auth-library');
const config = require('../config');
const User = require('../models/userModel');

const client = new OAuth2Client(config.google.clientId);

function googleAuth(app) {
  passport.use('google-id-token', new CustomStrategy(
    async (req, done) => {
      const bearerheader = req.headers.authorization;
      if (typeof bearerheader === 'undefined') {
        console.log(req.authorization);
        done(`Did not understand auth token ${req.headers.authorization}`, null);
        return;
      }
      const bearer = bearerheader.split(' ');
      const bearerToken = bearer[1];
      req.token = bearerToken;

      const ticket = await client.verifyIdToken({
        idToken: req.token,
        audience: config.jwt.clientId,
      });
      const user = await User.findById(ticket.getPayload().sub).exec();

      done(null, user);
    },
  ));

  app.use(passport.initialize());
}

module.exports = googleAuth;
