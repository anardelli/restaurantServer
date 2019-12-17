const mongoose = require('mongoose');
const location = require('./location.schema');
const dish = require('./dish.schema');

const restaurantModel = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    location: location,
    average_cost_for_two: {
        type: String
    },
    price_range: {
        type: String
    },
    currency: {
        type: String
    },
    photos_url: {
        type: String
    },
    menu_url: {
        type: String
    },
    aggregate_rating: {
        type: String
    },
    has_online_delivery: {
        type: String
    },
    is_delivering_now: {
        type: String
    },
    has_table_booking: {
        type: String
    },
    cuisines: {
        type: String
    },
    phone_numbers: {
        type: String
    },
    photos: {
        type: Array
    },
    all_reviews: {
        type: Array
    },
    menu: [dish]
});

module.exports = mongoose.model('restaurants', restaurantModel);