const mongoose = require('mongoose');
const location = mongoose.Schema({
    address: {
        type: String
    },
    locality: {
        type: String
    },
    city: {
        type: String
    },
    latitude: {
        type: String
    },
    longitude: {
        type: String
    },
    zipcode: {
        type: String
    },
    country_id: {
        type: String
    }
});

module.exports = location;