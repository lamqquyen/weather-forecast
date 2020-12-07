const express = require('express');
const path = require('path');
const app = express();
const axios = require('axios');
const cors = require('cors');

const BASE_API_URL = 'https://www.metaweather.com/api/location'

app.get('/api/search', async (req, res) => {
  try {
    const {query} = req.query
    const request = `${BASE_API_URL}/search/?query=${query}`;
    const result = await axios.get(request);
    res.send(result.data);
  } catch (error) {
    res.status(400).send('Fail to fetch location query.');
  }
});


app.get('/api/weather/:woeid', async (req, res) => {
  try {
    const {woeid} = req.params
    const request = `${BASE_API_URL}/${woeid}/`;
    const result = await axios.get(request);
    res.send(result.data);
  } catch (error) {
    res.status(400).send('Fail to fetch weather data.');
  }
});

app.use(express.static(path.join(__dirname, '../build')));

app.use(cors())

const PORT = process.env.PORT || 3002

app.listen(PORT, () => {
  console.log(`Proxy server started on port ${PORT}`);
});
