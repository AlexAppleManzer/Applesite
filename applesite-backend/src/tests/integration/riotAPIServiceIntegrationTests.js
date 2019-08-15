/* eslint-disable no-unused-vars */
const should = require('should');
const sinon = require('sinon');

const sut = require('../../services/riotAPIService');

describe('RiotApiService Integration Tests', () => {
  it('getSummoner should return a summoner from RIOT API', async () => {
    const result = await sut.getSummoner('Appl3man');
    result.should.have.property('data');
    result.data.should.have.property('id');
  });

  it('getRank should return a summonerRank from RIOT API', async () => {
    const result = await sut.getRank('Dks5QxuILtxCvhWtIoOJibjAGF3kEzdFOIph4vTvyc2qjeE');
    result.should.have.property('data');

    result.data[0].should.be.ok();
  });
});
