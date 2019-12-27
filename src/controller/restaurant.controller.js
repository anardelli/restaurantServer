const restaurantService = require('../services/restaurant');
const Response = require('../response');


function searchRestaurant(req, res) {
    console.log('inside search Restaurant contoller method');
    const response = new Response();
    console.log('body...', req.body);
    restaurantService.searchRestaurant(req.body).
        then((result) => {
            response.data.result = result;
            response.status.statusCode = 200;
            response.status.message = "Restaurant searched succesfully !";
            res.status(200).json(response);
        }).catch((err) => {
            response.status.statusCode = '500';
            response.status.message = "Unable to search restaurant !";
            res.status(500).json(response);
        });
}

module.exports = { searchRestaurant };