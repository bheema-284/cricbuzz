<<<<<<< HEAD
const express = require('express');
const mongoose = require('mongoose');
const connect = require('./src/Configs/db');
const cors = require('cors');
require('dotenv').config();
=======
const express = require("express");
const mongoose = require("mongoose");
const connect = require("./src/Configs/db");
const cors = require("cors");
require("dotenv").config();
<<<<<<< HEAD
>>>>>>> 4af8c24708255c4227f26351d2f75b9c8e36e229
=======
>>>>>>> 40ee7dbc56a2c171a9633d757c493d4a7758d66b

const app = express();

app.use(cors());
app.use(express.json());

<<<<<<< HEAD
<<<<<<< HEAD
const NewsController = require('./src/Controllers/news.controller');
const LatestPhotoController = require('./src/Controllers/latest_photos.controller');
const FeedController = require('./src/Controllers/feed.controller');
const MiniFeedController = require('./src/Controllers/minifeed.controller');
const ScheduleController = require('./src/Controllers/schedule.controller');
const VideosController = require('./src/Controllers/videos.controller');
const PhotosController = require('./src/Controllers/photos.controller');
const RankingController = require('./src/Controllers/ranking.controller');

app.use('/news', NewsController);
app.use('/latestphoto', LatestPhotoController);
app.use('/feed', FeedController);
app.use('/minifeed', MiniFeedController);
app.use('/schedule', ScheduleController);
app.use('/videos', VideosController);
app.use('/photos', PhotosController);
app.use('/ranking', RankingController);
=======
=======
>>>>>>> 40ee7dbc56a2c171a9633d757c493d4a7758d66b
const NewsController = require("./src/Controllers/news.controller");
const LatestPhotoController = require("./src/Controllers/latest_photos.controller");
const FeedController = require("./src/Controllers/feed.controller");
const MiniFeedController = require("./src/Controllers/minifeed.controller");
const ScheduleController = require("./src/Controllers/schedule.controller");
const VideosController = require("./src/Controllers/videos.controller");
const PhotosController = require("./src/Controllers/photos.controller");
const RankingController = require("./src/Controllers/ranking.controller");

app.use("/news", NewsController);
app.use("/latestphoto", LatestPhotoController);
app.use("/feed", FeedController);
app.use("/minifeed", MiniFeedController);
app.use("/schedule", ScheduleController);
app.use("/videos", VideosController);
app.use("/photos", PhotosController);
app.use("/ranking", RankingController);
// app.use("/player_rankings", RankingController);
<<<<<<< HEAD
>>>>>>> 4af8c24708255c4227f26351d2f75b9c8e36e229
=======
>>>>>>> 40ee7dbc56a2c171a9633d757c493d4a7758d66b

module.exports = app;
