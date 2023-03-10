const express = require('express');
const app = express();

app.use(express.json());
app.use(express.static('web')); // Hvis der er JS, billeder, som skal op på html, skal denne benyttes. 

console.log(app);

/*
const tanksUtil = require('./util/tanks.js');
console.log(tanksUtil.getTanks());

const { getTanks } = require('./util/tanks.js'); // Her får jeg en bestemt function ved hjælp af { }
console.log(getTanks());
*/

// assignment Serve a page called museum guards

app.get('/museum-guards', (req, res) => {
    res.sendFile(__dirname + "/web/museum/museum-guards.html");
});

/* Time */
app.get('/time/time', (req, res) => {
    res.send({
        timeUTC: new Date(),
        timeLocal: Date(),
        unixTimestamp: Date.now()
    });
});

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

app.get('/time/day', (req, res) => {
    res.send({
        data: days[new Date().getDay()]
    });
});

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

app.get('/time/month', (req, res) => {
    res.send({
        data: months[new Date().getMonth()]
    });
});
/* Time */

// Opgave til aflevering.

let timestampId = 1;
const timestamp = [
    {id: '1', timestamp: new Date().toUTCString()},
];

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/web/time/time.html");
});

// API
app.get('/api/timestamp', (req, res) => {
    res.send({data: timestamp})
});

app.post('/api/timestamp', (req, res) => {
    const timestamps = { id: ++timestampId, timestamps : new Date().toUTCString()};
    timestamp.push(timestamps);
    res.send(timestamps);
});

let clicked = 0;

app.get('/api/clicked', (req, res) => {
    res.send({data: clicked})
});

app.put('/api/clicked', (req, res) => {
    res.send({data: ++clicked})
});
// API

const PORT = 8080;
app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
        return;
    }
    console.log("Server is running on port", PORT);
});