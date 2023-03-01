const express = require('express');
const app = express();

app.use(express.json());
app.use(express.static('public'))

console.log(app);

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
const timestamps = [
    {id: '1', timestamp: new Date().toUTCString()},
];

app.get('/test', (req, res) => {
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

app.post('/api/clicked', (req, res) => {
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