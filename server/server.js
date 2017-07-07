const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const config = require('./config.js');
const controller = require('./controller.js');
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

// Endpoints
app.get('/api/dbSurfers', controller.getSurfers)



app.listen(port, () => console.log(`Server is now live on port ${port}`));