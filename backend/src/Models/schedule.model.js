// Schedule Model

const mongoose = require("mongoose");

const scheduleSchema = new mongoose.Schema(
  {
    match: { type: String, required: true },
    venue: { type: String, required: true },
  },
  { timestamps: true, versionKey: false },
);

const schedule = new mongoose.model("schedule", scheduleSchema);

module.exports = schedule;
