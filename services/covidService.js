const axios = require('axios');
const { apinjasApiKey, apifyApiKey, apifyDatasetId } = require('../config/defaultConfig');

const fetchCovidDataFromApiNinjas = async (country) => {
    try {
        const response = await axios.get('https://api.api-ninjas.com/v1/covid19', {
            headers: {
                'X-Api-Key': apinjasApiKey,
            },
            params: { country },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching data from ApiNinjas:', error);
        throw new Error('Error fetching data from ApiNinjas');
    }
};

const fetchCovidDataFromApify = async () => {
    try {
        const response = await axios.get(`https://api.apify.com/v2/datasets/${apifyDatasetId}/items`, {
            headers: { Authorization: `Bearer ${apifyApiKey}` },
        });
    } catch (error) {
        console.error('Error fecthing data from Apify:', error);
        throw new Error('Error fetching data from Apify');
    }
}

module.exports = { fetchCovidDataFromApiNinjas, fetchCovidDataFromApify };