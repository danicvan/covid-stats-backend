const { fetchCovidDataFromApiNinjas, fetchCovidDataFromApify } = require('../services/covidService');

const getCovidData = async (req, res) => {
    try {
        const apininjasData = await fetchCovidDataFromApiNinjas();
        const apifyData = await fetchCovidDataFromApify();

        res.status(200).json({
            message: 'Data fetched successfully',
            apininjasData,
            apifyData,
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { getCovidData };