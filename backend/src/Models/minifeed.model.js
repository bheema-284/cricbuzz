// Mini Feed's Model

const mongoose = require("mongoose");

const minifeedSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    heading: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
    content: { type: String, required: true },
  },
  { timestamps: true, versionKey: false },
);

const minifeed = new mongoose.model("minifeed", minifeedSchema);

module.exports = minifeed;
