const riotAPI = require('../services/riotAPIService');
const Summoner = require('../models/summonerModel');
const rankPoints = require('../services/rankPointsService');

function summonersManager() {
  async function getRanksFromRiot(id) {
    const riotSummonerRanks = await riotAPI.getRank(id);

    const result = {};
    riotSummonerRanks.data.forEach((rank) => {
      const r = {};
      r.queueType = rank.queueType;
      r.rank = rank.rank;
      r.tier = rank.tier;
      r.leaguePoints = rank.leaguePoints;
      r.points = rankPoints.getPoints(r.tier, r.rank, r.leaguePoints);
      result[rank.queueType] = r;
    });

    return result;
  }

  async function createSummoner(dto) {
    const summoner = new Summoner({
      name: dto.name,
      alias: dto.alias,
    });

    const riotSummoner = await riotAPI.getSummoner(summoner.name);
    summoner.summonerId = riotSummoner.data.id;
    summoner.name = riotSummoner.data.name;

    summoner.ranks = await getRanksFromRiot(summoner.summonerId);
    await summoner.save();
    return summoner;
  }

  async function getSummoner(id) {
    const query = Summoner.findById(id);

    const entity = await query.exec();
    return entity;
  }

  async function querySummoner(params) {
    const sort = { };
    if (params.sortByTFT === -1) {
      sort['ranks.RANKED_TFT.points'] = -1;
    } else if (params.sortBySoloQ === -1) {
      sort['ranks.RANKED_SOLO_5x5.points'] = -1;
    }

    return Summoner.paginate({}, {
      page: params.page + 1 || 1,
      limit: params.limit || 10,
      sort,
    });
  }

  async function updateSummoner(id, dto) {
    const entity = await getSummoner(id);
    if (!entity) throw new Error('Could not find summoner in Database');

    entity.alias = dto.alias;
    entity.ranks = await getRanksFromRiot(entity.summonerId);

    await entity.save();
    return entity;
  }

  async function deleteSummoner(id) {
    const summoner = await getSummoner(id);
    await summoner.remove();
  }

  return {
    createSummoner,
    getSummoner,
    querySummoner,
    updateSummoner,
    deleteSummoner,
  };
}

module.exports = summonersManager();
