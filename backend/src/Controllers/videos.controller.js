const Videos = require("../Models/videos.model");
const express = require("express");

const router = express.Router();

router.post("", async (req, res) => {
  try {
    const videos = await Videos.create(req.body);
    return res.status(200).send(videos);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

router.get("", async (req, res) => {
  try {
    const videos = await Videos.find().lean().exec();
    return res.status(200).send(videos);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const videos = await Videos.findById(req.params.id);
    return res.status(200).send(videos);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const videos = await Videos.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
      .lean()
      .exec();
    return res.status(200).send(videos);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const videos = await Videos.findByIdAndDelete(req.params.id).lean().exec();
    return res.status(200).send(videos);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

module.exports = router;
