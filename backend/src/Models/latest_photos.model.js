// Latest Photos Model

const mongoose = require("mongoose");

const latestphotoSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    time: { type: String, required: true },
    img: { type: String, required: true },
  },
  { timestamps: true, versionKey: false },
);

const latestphoto = new mongoose.model("latestphoto", latestphotoSchema);

module.exports = latestphoto;
