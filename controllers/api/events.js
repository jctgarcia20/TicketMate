const Event = require('../../models/event');
const fetch = require('node-fetch')

module.exports = {
  searchEvents,
  getAllEvents,
  getEventDetails,
  addEventToWishlist,
  getWishlist,
  deleteEventWishlist,
}

async function searchEvents(req, res) {
  const event = await fetch(`https://app.ticketmaster.com/discovery/v2/events?apikey=${process.env.API_KEY}&keyword=${req.body.query}&locale=*`).then(res => res.json());
  console.log(event)
  if (!event._embedded) return res.json({error: `Search does not exist`});
  res.json(event._embedded.events);
}

async function getAllEvents(req, res) {
  const events = await Event.findById(req.params.id);
  console.log(events);
  res.json(events);
}

async function getEventDetails(req, res) {
  const event = await fetch(`https://app.ticketmaster.com/discovery/v2/events/${req.body.params}?apikey=${process.env.API_KEY}&locale=*`).then(res => res.json());
  console.log(event)
  res.json(event);
}

async function addEventToWishlist(req, res) {
  const wishlist = await Event(req.body);
  req.body.user = req.user._id;
  const newWishList = new Event(req.body); 
  await newWishList.save();
  res.json(newWishList)
}

async function getWishlist(req, res) {
  const wishlist = await Event.find({ user: req.user._id }).sort("-createdAt");
  console.log(wishlist)
  console.log(req.user._id)
  res.json(wishlist);
}

async function deleteEventWishlist(req, res) {
  const removeEvent = await Event.findByIdAndDelete(req.params.id);
  console.log(removeEvent)
  res.json(removeEvent);
}