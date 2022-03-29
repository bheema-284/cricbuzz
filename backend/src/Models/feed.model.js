// Main Feed's Model

const mongoose = require("mongoose");

const feedSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    heading: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
    content: { type: String, required: true },
  },
  { timestamps: true, versionKey: false },
);

const feed = new mongoose.model("feed", feedSchema);

module.exports = feed;
