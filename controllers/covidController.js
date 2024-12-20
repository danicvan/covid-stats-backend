const { fetchCovidDataFromApiNinjas } = require('../services/covidService');

const getCovidData = async (req, res, country) => {
    try {
        const apininjasData = await fetchCovidDataFromApiNinjas(country);
        res.json(apininjasData);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { getCovidData };