var express = require('express');
var router = express.Router();
var controller = require('../controllers/locations');

// POST a new location for user
router.post('/:name/:lat.:lng', controller.saveLocation);

// GET all location for user 'name' since 'since' days
router.get('/:name/:since', controller.findLocationsSince);

module.exports = router;
