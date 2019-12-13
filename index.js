const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://imdeepanshugpt:mindtree@301nodejs-xkhjj.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.connection.once('open', () => {
    console.log('conneted to database');
});
app.listen(4000, () => {
    console.log('Server is running at port 4000');
});