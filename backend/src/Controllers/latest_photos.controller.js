const Latest_photos = require("../Models/latest_photos.model");
const express = require("express");

const router = express.Router();

router.post("", async (req, res) => {
  try {
    const latest_photos = await Latest_photos.create(req.body);
    return res.status(200).send(latest_photos);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

router.get("", async (req, res) => {
  try {
    const latest_photos = await Latest_photos.find().lean().exec();
    return res.status(200).send(latest_photos);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const latest_photos = await Latest_photos.findById(req.params.id);
    return res.status(200).send(latest_photos);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const latest_photos = await Latest_photos.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      },
    )
      .lean()
      .exec();
    return res.status(200).send(latest_photos);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const latest_photos = await Latest_photos.findByIdAndDelete(req.params.id)
      .lean()
      .exec();
    return res.status(200).send(latest_photos);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

module.exports = router;
