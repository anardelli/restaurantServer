const restaurantSchema = require('../models/restaurant.schema');

function searchRestaurant(req) {
    let innerQuery = [];
    if (req.locality) {
        innerQuery.push({ 'location.locality': req.locality });
    }
    if (req.city) {
        innerQuery.push({ 'location.city': req.city });
    }
    if (req.average_cost_for_two) {
        innerQuery.push({ 'average_cost_for_two': { $lt: req.average_cost_for_two } });
    }
    if (req.cuisines) {
        innerQuery.push({ 'cuisines': req.cuisines });
    }
    if (req.name) {
        innerQuery.push({ 'name': name });
    }
    if (req.aggregate_rating) {
        innerQuery.push({ 'aggregate_rating': req.aggregate_rating });
    }
    if (req.dishName) {
        innerQuery.push({ 'menu': { $elemMatch: { name: req.dishName } } });
    }
    let filter = { $and: innerQuery };
    return new Promise((resolve, reject) => {
        restaurantSchema.find(filter).then((data) => {
            resolve(data);
        }).catch((error) => {
            reject(error);
        });
    });
}

module.exports = {
    searchRestaurant
};