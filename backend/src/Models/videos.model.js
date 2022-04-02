<<<<<<< HEAD
<<<<<<< HEAD
const mongoose = require('mongoose');
=======
// Videos Model

const mongoose = require("mongoose");
>>>>>>> 4af8c24708255c4227f26351d2f75b9c8e36e229
=======
// Videos Model

const mongoose = require("mongoose");
>>>>>>> 40ee7dbc56a2c171a9633d757c493d4a7758d66b

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

<<<<<<< HEAD
<<<<<<< HEAD
const videos = new mongoose.model('videos', videosSchema);
=======
const videos = new mongoose.model("videos", videosSchema);
>>>>>>> 4af8c24708255c4227f26351d2f75b9c8e36e229
=======
const videos = new mongoose.model("videos", videosSchema);
>>>>>>> 40ee7dbc56a2c171a9633d757c493d4a7758d66b

module.exports = videos;
