const httpClient = require('axios');
const options = require('../config');

function riotAPI() {
  async function getSummoner(name) {
    const reqOptions = {
      headers: {
        'X-Riot-Token': options.riotAPI.Key,
      },
    };

    return httpClient.get(`${options.riotAPI.Endpoint}/summoner/v4/summoners/by-name/${encodeURI(name)}`, reqOptions);
  }

  async function getRank(summonerId) {
    const reqOptions = {
      headers: {
        'X-Riot-Token': options.riotAPI.Key,
      },
      url: `${options.riotAPI.Endpoint}/league/v4/entries/by-summoner/${summonerId}`,
      method: 'GET',
    };
    return httpClient(reqOptions);
  }

  return { getSummoner, getRank };
}

module.exports = riotAPI();
