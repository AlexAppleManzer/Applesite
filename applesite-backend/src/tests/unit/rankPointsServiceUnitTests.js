/* eslint-disable no-unused-vars */
const should = require('should');
const sinon = require('sinon');

const sut = require('../../services/rankPointsService');

describe('mapperService Unit Tests', () => {
  it('getPoints Should return appropriate points when called', () => {
    const result = sut.getPoints('DIAMOND', 'III', 45);
    result.should.be.exactly(5145);
  });

  it('getPoints should throw error when bad call to it', () => {
    (() => { sut.getPoints('bad', 'III', 45); }).should.throw('Did not understand Tier: bad');
    (() => { sut.getPoints('DIAMOND', 'bad', 45); }).should.throw('Did not understand Rank: bad');
    (() => { sut.getPoints('DIAMOND', 'III', 'bad'); }).should.throw('Expected leaguePoints to be a number');
  });
});
