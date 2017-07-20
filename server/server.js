const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const config = require('./config.js');
const port = config.port;
const connectionString = config.herokuConnect;

// Express
const app = module.exports = express();


// Middleware
app.use(bodyParser.json());
let corsOptions = {
    origin: `http://localhost:3000`
}
app.use(cors(corsOptions));

// Massive Database
massive(connectionString).then( dbInstance => {
    app.set('db', dbInstance);
    // set schema file on server initiation
    dbInstance.set_schema()
        .then( () => console.log('Tables successfully reset'))
        .catch( (err) => console.log('Try again', err))
})    

const controller = require('./controller.js');
// Endpoints
app.get('/api/dbSurfers', controller.getSurfers)



// Auth
app.get('/auth/me', (req, res, next) => {
    if (!req.user) res.status(400).send('Nobody is logged in!')
    else res.status(500).send(req.user)
})

app.listen(port, () => console.log(`Server is now live on port ${port}`));