const express = require('express');
const { getCovidData } = require('../controllers/covidController');

const router = express.Router();

router.get('/', (req, res) => getCovidData(req, res, req.query.country));

module.exports = router;