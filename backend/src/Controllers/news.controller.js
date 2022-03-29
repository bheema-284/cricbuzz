const News = require("../Models/news.models");
const express = require("express");

const router = express.Router();

router.post("", async (req, res) => {
  try {
    const news = await News.create(req.body);
    return res.status(200).send(news);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

router.get("", async (req, res) => {
  try {
    const news = await News.find().lean().exec();
    return res.status(200).send(news);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const news = await News.findById(req.params.id);
    return res.status(200).send(news);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const news = await News.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
      .lean()
      .exec();
    return res.status(200).send(news);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const news = await News.findByIdAndDelete(req.params.id).lean().exec();
    return res.status(200).send(news);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

module.exports = router;
