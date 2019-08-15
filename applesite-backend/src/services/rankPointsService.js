function rankPointsService() {
  function getTierPoints(tier) {
    if (tier === 'CHALLENGER') {
      return 8000;
    }
    if (tier === 'GRANDMASTER') {
      return 7000;
    }
    if (tier === 'MASTER') {
      return 6000;
    }
    if (tier === 'DIAMOND') {
      return 5000;
    }
    if (tier === 'PLATINUM') {
      return 4000;
    }
    if (tier === 'GOLD') {
      return 3000;
    }
    if (tier === 'SILVER') {
      return 2000;
    }
    if (tier === 'BRONZE') {
      return 1000;
    }
    if (tier === 'IRON') {
      return 0;
    }

    throw new Error(`Did not understand Tier: ${tier}`);
  }

  function getRankPoints(rank) {
    if (rank === 'I') {
      return 300;
    }
    if (rank === 'II') {
      return 200;
    }
    if (rank === 'III') {
      return 100;
    }
    if (rank === 'IV') {
      return 0;
    }

    throw new Error(`Did not understand Rank: ${rank}`);
  }

  function getPoints(tier, rank, leaguePoints) {
    if (typeof leaguePoints !== typeof 45) throw new Error('Expected leaguePoints to be a number');

    return getRankPoints(rank) + getTierPoints(tier) + leaguePoints;
  }

  return { getPoints };
}

module.exports = rankPointsService();
