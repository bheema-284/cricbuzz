// Videos Model

const mongoose = require("mongoose");

const videosSchema = new mongoose.Schema(
  {
    image: { type: String, required: true },
    title: { type: String, required: true },
    content: { type: String, required: true },
    time: { type: String, required: true },
    video_link: { type: String, required: false },
  },
  { timestamps: true, versionKey: false },
);

const videos = new mongoose.model("videos", videosSchema);

module.exports = videos;
