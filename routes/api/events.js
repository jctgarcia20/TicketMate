const express = require('express');
const router = express.Router();
const eventsCtrl = require('../../controllers/api/events');

// router.post('/search', eventsCtrl.search);

// router.get('/all', eventsCtrl.getAllEvents);

router.post('/search', eventsCtrl.searchEvents);

router.get('/all', eventsCtrl.getAllEvents);



module.exports = router;