// Photos Model

const mongoose = require("mongoose");

const photosSchema = new mongoose.Schema(
  {
    img: { type: String, required: true },
    title: { type: String, required: true },
    images: [{ image: String, content: String }],
  },
  { timestamps: true, versionKey: false },
);

const photos = new mongoose.model("photos", photosSchema);

module.exports = photos;
