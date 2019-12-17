const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

const restaurantController = require('../controller/restaurant.controller');

router.use(bodyParser.json());
router.post('/', restaurantController.searchRestaurant);

module.exports = router;