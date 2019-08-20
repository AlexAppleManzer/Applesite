/* eslint-disable no-param-reassign */
const express = require('express');
const passport = require('passport');
const controller = require('../controllers/summonersController');

function routes() {
  const summonersRouter = express.Router();

  summonersRouter.route('/summoners')
    .post(passport.authenticate('google-id-token', { session: false }), controller.post)
    .get(controller.query);
  summonersRouter.route('/summoners/:id')
    .get(controller.get)
    .put(passport.authenticate('google-id-token', { session: false }), controller.put)
    .delete(passport.authenticate('google-id-token', { session: false }), controller.del);
  return summonersRouter;
}

module.exports = routes();
