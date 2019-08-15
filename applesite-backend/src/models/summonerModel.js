const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const { Schema } = mongoose;

const summonerModel = new Schema({
  summonerId: { type: String },
  name: { type: String },
  alias: { type: String },
  ranks: {
    updated: { type: Date, default: Date.now },
    RANKED_TFT: {
      queueType: { type: String },
      rank: { type: String },
      tier: { type: String },
      leaguePoints: { type: Number },
      points: { type: Number },
    },
    RANKED_SOLO_5x5: {
      queueType: { type: String },
      rank: { type: String },
      tier: { type: String },
      leaguePoints: { type: Number },
      points: { type: Number },
    },
    RANKED_FLEX_SR: {
      queueType: { type: String },
      rank: { type: String },
      tier: { type: String },
      leaguePoints: { type: Number },
      points: { type: Number },
    },
  },
});
summonerModel.plugin(mongoosePaginate);

module.exports = mongoose.model('Summoner', summonerModel);
