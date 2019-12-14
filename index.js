/**
 * library imports
 */
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

/**
 * configuration imports
 */
const config = require('./config/config');
const database = require('./config/database');

const app = express();
app.use(bodyParser.json());

/**
 * routers imports
 */
const restaurant = require('./src/routes/restaurant');
app.use('/search', restaurant);


mongoose.connection.once('open', () => {
    console.log('connected to database...');
    app.listen(config.port, () => {
        console.log('Restaurant server is running at port ', config.port);
    });
});
mongoose.connection.on('error', (error) => {
    console.log('Database Error : ', error);
});

app.get('/', (req, res) => {
    res.send('Restaurant Server Started');
});
