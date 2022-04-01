// Ranking Model

const mongoose = require('mongoose');

const rankingSchema = new mongoose.Schema(
  {
    position: { type: Number, required: true },
    player_img: { type: String, required: true },
    player_name: { type: String, required: true },
    player_country: { type: String, required: true },
    rating: { type: Number, required: true },
  },
  { timestamps: true, versionKey: false },
);

const ranking = new mongoose.model('ranking', rankingSchema);

module.exports = ranking;
