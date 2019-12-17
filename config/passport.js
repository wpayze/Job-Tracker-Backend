var JwtStrategy = require('passport-jwt').Strategy;
var ExtractJwt  = require('passport-jwt').ExtractJwt;

// load up the candidate model
var Candidate = require('../models/candidate');
var config = require('../config/database'); // get db config file

module.exports = function(passport) {
  var opts = {};
  
  opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('JWT');
  opts.secretOrKey    = config.secret;

  passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
    Candidate.findOne( {id: jwt_payload.id} , function(err, candidate) {
          if (err) {
              return done(err, false);
          }

          if (candidate) {
              done(null, candidate);
          } else {
              done(null, false);
          }
      });
  }));

};