const result = require('dotenv').config({ path: `./src/config.${process.env.NODE_ENV || 'development'}.env` });

console.log(`Config in ${process.env.NODE_ENV} mode`);

if (result.error) {
  throw result.error;
}

const config = {
  // riot stuff
  riotAPI: {
    Endpoint: 'https://na1.api.riotgames.com/lol',
    Key: process.env.RIOT_API_KEY,
  },
  mongoDB: {
    connectionString: 'mongodb://mongo:27017',
  },
  google: {
    clientId: process.env.GOOGLE_CLIENTID,
  },
};

module.exports = config;
