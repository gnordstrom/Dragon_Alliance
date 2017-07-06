const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');

const app = express();
const config = require('./config.js');
const port = config.port;

let corsOptions = {
    origin: `http://localhost:${port}`
}
app.use(bodyParser.json());
app.use(cors(corsOptions));


// DB
let db = massive.connectSync({
  connectionString: config.herokuConnect
})

app.set('db', db);

db.set_schema( (err, data) => {
    if (err) console.log(err);
    else console.log('All tables successfully reset!');
});
    


const sunglasses = require('./dummy_data/sunglasses.json');
const surfTeam = require('./dummy_data/surf-team.json');



app.get('/api/getSunglasses', (req, res, next) => {
    res.status(200).send(sunglasses)
});


app.get('/api/dbSurfers', (req, res, next) => {
    db.getSurfers( (err, surfers) => {
        console.log(surfers);
        res.status(200).send(surfers);
    })
})
// app.get('/api/getSurfTeam', (req, res, next) => {
//     res.status(200).send(surfTeam)
// })

app.listen(port, () => console.log(`Server is now live on port ${port}`));