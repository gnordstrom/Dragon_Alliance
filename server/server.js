const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const config = require('./config.js');
const port = config.port;

const sunglasses = require('./dummy_data/sunglasses.json');
const surfTeam = require('./dummy_data/surf-team.json');


app.use(bodyParser.json());
app.use(cors());

app.get('/api/getSunglasses', (req, res, next) => {
    res.status(200).send(sunglasses)
});

app.get('/api/getSurfTeam', (req, res, next) => {
    res.status(200).send(surfTeam)
})

app.listen(port, () => console.log(`Server is now live on port ${port}`));