<<<<<<< HEAD
<<<<<<< HEAD
const mongoose = require('mongoose');
=======
// Photos Model

const mongoose = require("mongoose");
>>>>>>> 4af8c24708255c4227f26351d2f75b9c8e36e229
=======
// Photos Model

const mongoose = require("mongoose");
>>>>>>> 40ee7dbc56a2c171a9633d757c493d4a7758d66b

const photosSchema = new mongoose.Schema(
  {
    img: { type: String, required: true },
    title: { type: String, required: true },
    images: [{ image: String, content: String }],
  },
  { timestamps: true, versionKey: false },
);

<<<<<<< HEAD
<<<<<<< HEAD
const photos = new mongoose.model('photos', photosSchema);
=======
const photos = new mongoose.model("photos", photosSchema);
>>>>>>> 4af8c24708255c4227f26351d2f75b9c8e36e229
=======
const photos = new mongoose.model("photos", photosSchema);
>>>>>>> 40ee7dbc56a2c171a9633d757c493d4a7758d66b

module.exports = photos;
