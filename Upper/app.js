import express from 'express';
const app = express(); 

import path from 'path';
console.log(path.resolve('public/pages/frontpage.html'));

import jokes from './util/jokes.js';

app.get('/', (req, res) => {
    res.sendFile(path.resolve('public/pages/frontpage/frontpage.html'));
});






const PORT = 8080;
app.listen(PORT, (error) => {
 if(error) {
   console.log(error);
 } else {
   console.log('Server started on ', PORT);
 }
});