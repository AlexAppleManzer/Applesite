/* eslint-disable no-param-reassign */
const express = require('express');
const passport = require('passport');
const controller = require('../controllers/usersController');

function routes() {
  const usersRouter = express.Router();
  usersRouter.use(passport.authenticate('google-id-token', { session: false }));
  usersRouter.route('/summoners')
    .post(controller.post)
    .get(controller.query);
  usersRouter.route('/summoners/:id')
    .get(controller.get)
    .put(controller.put)
    .delete(controller.del);
  return usersRouter;
}

module.exports = routes();
