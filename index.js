/**
 * library imports
 */
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('./config/consul');
require('./src/notification/consumer');

/**
 * configuration imports
 */
require('./config/database');

const app = express();
app.use(bodyParser.json());

/**
 * routers imports
 */
const restaurant = require('./src/routes/restaurant');
app.use('/search', restaurant);

const PORT = process.env.PORT || 4444;
const IP_ADDRESS = process.env.IP_ADDRESS || '127.0.0.1';
console.log('enviornment', process.env.NODE_ENV);
mongoose.connection.once('open', () => {
    console.log('connected to database...');
    app.listen(PORT, () => {
        console.log('Restaurant server is running at IP, Port Number ', IP_ADDRESS, PORT);
    });
});
mongoose.connection.on('error', (error) => {
    console.log('Database Error : ', error);
});

app.get('/', (req, res) => {
    res.send('Restaurant Server Started process id is ' + process.pid +' and port is '+ PORT);
});

module.exports = app;