import express from 'express';
const app = express(); 

import path from 'path';
console.log(path.resolve('public/pages/frontpage.html'));

app.use(express.static('public')); // Dette er så den kan se billeder, javascript osv. 

import jokes from './util/jokes.js';
console.log(await jokes.getJokes());

app.get('/', (req, res) => {
    res.sendFile(path.resolve('public/pages/frontpage/frontpage.html'));
});

app.get('/irl', (req, res) => {
    res.sendFile(path.resolve('public/pages/IRLQuests/IRL.html'));
});

app.get('/jokes', (req, res) => {
    res.sendFile(path.resolve('public/pages/jokes/jokes.html'));
});


const PORT = 8080;
app.listen(PORT, (error) => {
 if(error) {
   console.log(error);
 } else {
   console.log('Server started on ', PORT);
 }
});