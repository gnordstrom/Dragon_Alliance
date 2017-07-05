const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const config = require('./config.js');
const port = config.port;

const sunglasses = require('./dummy_data/sunglasses.json');


app.use(bodyParser.json());

app.get('/api/getSunglasses', (req, res, next) => {
    res.status(200).send(sunglasses)
});

app.listen(port, () => console.log(`Server is now live on port ${port}`));