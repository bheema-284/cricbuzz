// Ranking Model

const mongoose = require("mongoose");

const rankingSchema = new mongoose.Schema(
  {
    position: { type: Number, required: true },
    player: [{ type: String }],
    rating: { type: Number, required: true },
  },
  { timestamps: true, versionKey: false },
);

const ranking = new mongoose.model("ranking", rankingSchema);

module.exports = ranking;
