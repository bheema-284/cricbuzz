const Photos = require('../Models/photos.model');
const express = require('express');

const router = express.Router();

router.post('', async (req, res) => {
  try {
    const photos = await Photos.create(req.body);
    return res.status(200).send(photos);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

router.get('', async (req, res) => {
  try {
    const photos = await Photos.find().lean().exec();
    return res.status(200).send(photos);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const photos = await Photos.findById(req.params.id);
    return res.status(200).send(photos);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

router.patch('/:id', async (req, res) => {
  try {
    const photos = await Photos.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
      .lean()
      .exec();
    return res.status(200).send(photos);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const photos = await Photos.findByIdAndDelete(req.params.id).lean().exec();
    return res.status(200).send(photos);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

module.exports = router;
