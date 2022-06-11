const Event = require('../../models/event');
const fetch = require('node-fetch')

module.exports = {
  searchEvents,
  getAllEvents,
  getEventDetails,
};

const API_URL = 'https://app.ticketmaster.com/discovery/v2/';
const key = process.env.API_KEY;
// const secret = process.env.API_SECRET;

async function searchEvents(req, res) {
  const event = await fetch(`https://app.ticketmaster.com/discovery/v2/events?apikey=${process.env.API_KEY}&keyword=${req.body.query}&locale=*`).then(res => res.json());
  console.log(event)
  if (!event._embedded) return res.json({error: `Search does not exist`});
  // ).then(res => res.json()).then(data => data._embedded.events)
  // res.json(event.data);
  // res.json(event.search_results);
  res.json(event._embedded.events);
}

async function getAllEvents(req, res) {
  const events = await Event.findById(req.params.id);
  console.log(events);
  res.json(events);
}

async function getEventDetails(req, res) {
  const event = await fetch(`https://app.ticketmaster.com/discovery/v2/events/${req.body.params}?apikey=${process.env.API_KEY}&locale=*`).then(res => res.json());
  // const event = await fetch(`https://app.ticketmaster.com/discovery/v2/events?apikey=${process.env.API_KEY}&id=${req.body.params}&locale=*`).then(res => res.json());
  console.log(event)
  res.json(event);
  // res.json(event._embedded.events);
}