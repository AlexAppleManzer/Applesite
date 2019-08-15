const mapper = require('../services/mapperService');
const manager = require('../business/summonersManager');

/* eslint-disable no-underscore-dangle */
function summonersController() {
  async function post(req, res) {
    if (!req.body.name) {
      res.status(400);
      return res.send('Title is required');
    }
    if (!req.body.alias) {
      res.status(400);
      return res.send('alias is required');
    }

    try {
      // Get SummonerID and ranks from RIOTAPI
      const result = await manager.createSummoner(req.body);
      res.status(201);
      return res.json({ _id: result._id });
    } catch (err) {
      res.status(500);
      return res.json({ err: err.message });
    }
  }

  async function get(req, res) {
    if (!req.params.id) {
      res.status(400);
      return res.send('ID is required');
    }
    try {
      const entity = await manager.getSummoner(req.params.id);
      res.status(200);
      return res.json(mapper.summonerEntitytoDTO(entity));
    } catch (err) {
      res.status(500);
      return res.json({ err: err.message });
    }
  }

  async function query(req, res) {
    try {
      const queryParams = {};
      if (req.query.sortByTFT === '-1') {
        queryParams.sortByTFT = -1;
      } else if (req.query.sortBySoloQ === '-1') {
        queryParams.sortBySoloQ = -1;
      }

      if (req.query.page) queryParams.page = parseInt(req.query.page, 10);
      if (req.query.limit) queryParams.limit = parseInt(req.query.limit, 10);

      const entities = await manager.querySummoner(queryParams);
      res.status(200);
      return res.json(mapper.summonerEntityArraytoDTO(entities));
    } catch (err) {
      res.status(500);
      return res.json({ err: err.message });
    }
  }

  async function put(req, res) {
    if (!req.params.id) {
      res.status(400);
      return res.send('id is required');
    }
    if (!req.body.alias) {
      res.status(400);
      return res.send('alias is required');
    }

    try {
      // Get SummonerID and ranks from RIOTAPI
      const result = await manager.updateSummoner(req.params.id, req.body);
      res.status(201);
      return res.json({ _id: result._id });
    } catch (err) {
      res.status(500);
      return res.json({ err: err.message });
    }
  }

  // eslint-disable-next-line no-unused-vars
  function patch(req, res) {
    // throw new NotImplementedException("Patch is not implemented yet...");
  }

  async function del(req, res) {
    if (!req.params.id) {
      res.status(400);
      return res.send('ID is required');
    }
    try {
      await manager.deleteSummoner(req.params.id);
      return res.sendStatus(204);
    } catch (err) {
      res.status(500);
      return res.json({ err: err.message });
    }
  }

  return {
    post, get, query, put, patch, del,
  };
}

module.exports = summonersController();
