const MiniFeed = require("../Models/minifeed.model");
const express = require("express");

const router = express.Router();

router.post("", async (req, res) => {
  try {
    const minifeed = await MiniFeed.create(req.body);
    return res.status(200).send(minifeed);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

router.get("", async (req, res) => {
  try {
    const minifeed = await MiniFeed.find().lean().exec();
    return res.status(200).send(minifeed);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const minifeed = await MiniFeed.findById(req.params.id);
    return res.status(200).send(minifeed);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const minifeed = await MiniFeed.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
      .lean()
      .exec();
    return res.status(200).send(minifeed);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const minifeed = await MiniFeed.findByIdAndDelete(req.params.id)
      .lean()
      .exec();
    return res.status(200).send(minifeed);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

module.exports = router;
