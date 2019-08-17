console.log(`Config in ${process.env.NODE_ENV} mode`);

if (!process.env.RIOT_API_KEY || !process.env.GOOGLE_CLIENTID || !process.env.MONGODB_CONNECTION_STRING) throw new Error('env variables not found...');

const config = {
  // riot stuff
  riotAPI: {
    Endpoint: 'https://na1.api.riotgames.com/lol',
    Key: process.env.RIOT_API_KEY,
  },
  mongoDB: {
    connectionString: process.env.MONGODB_CONNECTION_STRING,
  },
  google: {
    clientId: process.env.GOOGLE_CLIENTID,
  },
};

module.exports = config;
