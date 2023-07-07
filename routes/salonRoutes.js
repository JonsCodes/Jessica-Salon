const express = require('express');
const router = express.Router();
const Salon = require('../models/salon');

// Route to fetch salon data
router.get('/salon', async (req, res) => {
  try {
    const salonData = await Salon.find();
    res.json(salonData);
  } catch (error) {
    console.error('Error fetching salon data:', error);
    res.status(500).json({ message: 'Server Error' });
  }
});

// Route to save salon data
router.post('/salon', async (req, res) => {
  try {
    const { name, address, phone } = req.body;
    const newSalon = new Salon({ name, address, phone });
    await newSalon.save();
    res.json(newSalon);
  } catch (error) {
    console.error('Error saving salon data:', error);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
