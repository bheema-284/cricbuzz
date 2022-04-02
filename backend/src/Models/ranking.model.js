// Ranking Model

<<<<<<< HEAD
<<<<<<< HEAD
const mongoose = require('mongoose');
=======
const mongoose = require("mongoose");
>>>>>>> 4af8c24708255c4227f26351d2f75b9c8e36e229
=======
const mongoose = require("mongoose");
>>>>>>> 40ee7dbc56a2c171a9633d757c493d4a7758d66b

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

<<<<<<< HEAD
<<<<<<< HEAD
const ranking = new mongoose.model('ranking', rankingSchema);
=======
const ranking = new mongoose.model("ranking", rankingSchema);
>>>>>>> 4af8c24708255c4227f26351d2f75b9c8e36e229
=======
const ranking = new mongoose.model("ranking", rankingSchema);
>>>>>>> 40ee7dbc56a2c171a9633d757c493d4a7758d66b

module.exports = ranking;
