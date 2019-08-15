const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const config = require('./config');
const auth = require('./configurations/authentication');


const app = express();
if (process.env.ENV === 'Test') {
  // eslint-disable-next-line no-unused-vars
  const db = mongoose.connect('mongodb://localhost/Summoner_Test');
} else {
  // eslint-disable-next-line no-unused-vars
  const db = mongoose.connect(config.mongoDB.connectionString);
}
const port = process.env.PORT || 3000;
const summonerRouter = require('./routes/summonersRouter');

// configures authentication
auth(app);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

app.use('/', summonerRouter);

app.server = app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Running on port ${port}`);
});

module.exports = app;
