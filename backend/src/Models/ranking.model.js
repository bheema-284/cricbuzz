// Ranking Model

const mongoose = require("mongoose");

const rankingSchema = new mongoose.Schema(
  {
    position: { type: Number, required: true },
    player: [{ img: String, name: String, country: String }],
    rating: { type: Number, required: true },
  },
  { timestamps: true, versionKey: false },
);

const ranking = new mongoose.model("ranking", rankingSchema);

module.exports = ranking;
