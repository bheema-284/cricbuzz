const Schedule = require("../Models/schedule.model");
const express = require("express");

const router = express.Router();

router.post("", async (req, res) => {
  try {
    const schedule = await Schedule.create(req.body);
    return res.status(200).send(schedule);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

router.get("", async (req, res) => {
  try {
    const schedule = await Schedule.find().lean().exec();
    return res.status(200).send(schedule);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const schedule = await Schedule.findById(req.params.id);
    return res.status(200).send(schedule);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const schedule = await Schedule.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
      .lean()
      .exec();
    return res.status(200).send(schedule);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const schedule = await Schedule.findByIdAndDelete(req.params.id)
      .lean()
      .exec();
    return res.status(200).send(schedule);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

module.exports = router;
