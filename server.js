const express = require('express');
const cors = require('cors');
const covidRoutes = require('./routes/covidRoutes');
const { port } = require('./config/defaultConfig');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', covidRoutes);

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});