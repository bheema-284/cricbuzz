const mongoose = require("mongoose");

const newsSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    time: { type: String, required: true },
    image: { type: String, required: true },
    content: { type: String, required: true },
  },
  { timestamps: true, versionKey: false },
);

export const news = new mongoose.model("news", newsSchema);
