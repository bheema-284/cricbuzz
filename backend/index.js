const express = require('express');
const mongoose = require('mongoose');
const connect = require('./src/Configs/db');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

const NewsController = require('./src/Controllers/news.controller');
const LatestPhotoController = require('./src/Controllers/latest_photos.controller');
const FeedController = require('./src/Controllers/feed.controller');
const MiniFeedController = require('./src/Controllers/minifeed.controller');
const ScheduleController = require('./src/Controllers/schedule.controller');
const VideosController = require('./src/Controllers/videos.controller');
app.use('/news', NewsController);
app.use('/latestphoto', LatestPhotoController);
app.use('/feed', FeedController);
app.use('/minifeed', MiniFeedController);
app.use('/schedule', ScheduleController);
app.use('/videos', VideosController);

module.exports = app;
