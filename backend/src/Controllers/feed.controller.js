const Feed = require("../Models/feed.model");
const express = require("express");

const router = express.Router();

router.post("", async (req, res) => {
  try {
    const feed = await Feed.create(req.body);
    return res.status(200).send(feed);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

router.get("", async (req, res) => {
  try {
    const feed = await Feed.find().lean().exec();
    return res.status(200).send(feed);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const feed = await Feed.findById(req.params.id);
    return res.status(200).send(feed);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const feed = await Feed.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
      .lean()
      .exec();
    return res.status(200).send(feed);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const feed = await Feed.findByIdAndDelete(req.params.id).lean().exec();
    return res.status(200).send(feed);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

module.exports = router;
