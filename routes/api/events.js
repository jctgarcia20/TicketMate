const express = require('express');
const router = express.Router();
const eventsCtrl = require('../../controllers/api/events');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.post('/search', eventsCtrl.searchEvents);

router.get('/all', eventsCtrl.getAllEvents);

router.post('/eventId/details', eventsCtrl.getEventDetails);

router.post('/add', eventsCtrl.addEventToWishlist);

router.get('/wishlist', eventsCtrl.getWishlist);

router.delete('/:id', eventsCtrl.deleteEventWishlist);

module.exports = router;