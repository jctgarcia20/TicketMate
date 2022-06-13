// const Wishlist = require('../../models/wishlist')
// const Event = require('../../models/event')
// const User = require('../../models/user');

// module.exports = {
//   addEventToWishlist,
//   getWishlist
// }

// async function addEventToWishlist(req, res) {
//   // const wishlist = await Event.findOne({ user: req.body.userId })
//   // if (wishlist) {
//   //   let wishlistUser = wishlist.user.includes(req.user._id);
//   //   if (wishlistUser) return
//   //   wishlist.user.push(req.user._id);
//   //   await wishlist.save();
//   //   res.json(wishlist);
//   // } else {
//   //   req.body.user = req.user._id;
//   //   const newWishlist = new Event(req.body);
//   //   await newWishlist.save();
//   //   res.json(newWishlist);
//   // }
//   const wishlist = await Wishlist.findOne({ user: req.body.userId })
//   if (wishlist) {
//     if (!wishlist.events.includes(req.body.eventId)) {
//       wishlist.events.push(req.body.eventId)
//       wishlist.save();
//     }
//   } else {
//     const newWishList = await Wishlist.create({ user: req.body.userId, events: req.body.eventId })
//     res.json(newWishList);
//   }
//   res.json(wishlist)
// }

// async function getWishlist(req, res) {
//   // const wishlist = await Event.findOne({ user: req.params.userId }).sort("-createdAt");
//   // res.json(wishlist);
//   const wishlist = await Wishlist.findOne({ user: req.params.userId }).populate('events')
//   if(wishlist) res.json(wishlist.events)
//   else {
//     res.json([])
//   }
// }