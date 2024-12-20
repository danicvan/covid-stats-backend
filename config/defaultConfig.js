require('dotenv').config();

module.exports = {
    port: process.env.PORT || 5000,
    apinjasApiKey: process.env.APININJAS_API_KEY,
    apifyApiKey: process.env.APIFY_API_KEY,
    apifyDatasetId: process.env.APIFY_DATASET_ID,
}