/* eslint-disable no-underscore-dangle */
const Summoner = require('../models/summonerModel');

function summonerMapperService() {
  function summonerDTOtoEntity(dto) {
    const entity = new Summoner();
    entity.name = dto.name;
    entity.alias = dto.alias;
    return entity;
  }

  function summonerEntitytoDTO(entity) {
    const dto = { };
    dto.summonerId = entity.summonerId;
    dto._id = entity._id;
    dto.name = entity.name;
    dto.alias = entity.alias;
    dto.ranks = entity.ranks;
    return dto;
  }

  function summonerEntityArraytoDTO(entityArray) {
    const dto = {
      items: entityArray.docs.map(item => summonerEntitytoDTO(item)),
      total_count: entityArray.total,
    };
    dto.items = entityArray.docs;
    return dto;
  }

  return { summonerDTOtoEntity, summonerEntitytoDTO, summonerEntityArraytoDTO };
}

module.exports = summonerMapperService();
