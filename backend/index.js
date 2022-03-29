const express = require("express");
const mongoose = require("mongoose");
const connect = require("./src/Configs/db");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const NewsController = require("./src/Controllers/news.controller");

app.use("/news", NewsController);

module.exports = app;
