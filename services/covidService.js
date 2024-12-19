const axios = require('axios');
const { apinjasApiKey, apifyApiKey } = require('../config/defaultConfig');

const fetchCovidDataFromApiNinjas = async () => {
    try {
        const response = await axios.get('https://api.api-ninjas.com/v1/covid19', {
            headers: {
                'Authorization': 'Bearer YOUR_API_KEY'
            }
        });
        return response.data;
    } catch (error) {
        throw new Error('Error fetching data from ApiNinjas');
    }
};

const fetchCovidDataFromApify = async () => {
    try {
        const response = await axios.get(`https://api.apify.com/v2/datasets/YOUR_DATASET_ID/items`, {
            headers: { Authorization: `Bearer ${apifyApiKey}` },
        });
    } catch (error) {
        throw new Error('Error fetching data from Apify');
    }
}

module.exports = { fetchCovidDataFromApiNinjas, fetchCovidDataFromApify };