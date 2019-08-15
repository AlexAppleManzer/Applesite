/* eslint-disable no-unused-vars */
const should = require('should');
const sinon = require('sinon');

const sut = require('../../services/mapperService');

describe('mapperService Unit Tests', () => {
  it('summonerDTOtoEntity should map a DTO to an entity', () => {
    const dto = {
      name: 'test',
      alias: 'alex',
    };

    const entity = sut.summonerDTOtoEntity(dto);

    entity.name.should.be.exactly('test');
    entity.alias.should.be.exactly('alex');
  });

  it('summonerEntityToDTO should map a entity to an dto', () => {
    const entity = {
      id: 'test',
      name: 'alex',
      alias: 'alexa',
      ranks: [{
        queueType: 'nice',
        rank: 'one',
        tier: '1',
        leaguePoints: 10,
      },
      {
        queueType: 'asdf',
        rank: 'two',
        tier: '1',
        leaguePoints: 20,
      }],
    };

    const dto = sut.summonerEntitytoDTO(entity);

    dto.name.should.be.exactly('alex');
    dto.alias.should.be.exactly('alexa');
    dto.ranks.should.be.instanceof(Array).and.have.lengthOf(2);
  });
});
