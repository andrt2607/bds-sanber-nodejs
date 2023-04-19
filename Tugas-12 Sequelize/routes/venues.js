var express = require('express');
const { createVenue, findAllVenues, findVenueById, updateVenue, deleteVenue } = require('../controllers/venues_controller');
var router = express.Router();

router.get('/venues', findAllVenues)
router.post('/venues', createVenue)
router.get('/venues/:id', findVenueById)
router.put('/venues/:id', updateVenue)
router.delete('/venues/:id', deleteVenue)

module.exports = router;
