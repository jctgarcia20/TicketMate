const express = require('express');
const router = express.Router();
const eventsCtrl = require('../../controllers/api/events');

const token = process.env.API_KEY;
const rootURL = 'https://app.ticketmaster.com/discovery/v2/';



module.exports = router;