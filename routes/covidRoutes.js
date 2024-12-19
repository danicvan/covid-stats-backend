const express = require('express');
const { getCovidData } = require('../controllers/covidController');

const router = express.Router();

router.get('/covid-data', getCovidData);

module.exports = router;