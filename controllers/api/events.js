const Event = require('../../models/event');
const fetch = require('node-fetch')

module.exports = [
  search,
  getAllEvents,
];

const API_URL = 'https://app.ticketmaster.com/discovery/v2/';
const key = process.env.API_KEY;
const secret = process.env.API_SECRET;

async function search(req, res) {
  const event = await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?size=100&apikey=${key}&secret=${secret}&keyword=${eventSearch}&postalCode=${zipcodeSearch}`
  ).then(res => res.json());
  res.json(event.data);
}

async function getAllEvents(req, res) {
  const events = await Event.find({users: req.user._id}, );
  console.log(events);
  res.json(events);
}