import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import WishlistCard from "../../components/WishlistCard/WishlistCard";
import * as ticketmasterService from "../../utilities/ticketmaster-service";
// import * as wishlistAPI from "../../utilities/wishlists-api";

export default function EventDetailPage({ event, setEvent }) {

  // const [event, setEvent] = useState({});

  const { eventId } = useParams();

  const [wishlist, setWishlist] = useState();

  const navigate = useNavigate();

  useEffect(function () {
    async function getEvent() {
      const event = await ticketmasterService.getEventDetails(eventId);
      setEvent(event);
      console.log('test');
    }
    getEvent();
  }, [eventId]);

  async function handleAddToWishlist() {
    const addEvent = await ticketmasterService.addEventToWishlist(event);
    console.log(addEvent);
    setWishlist(wishlist);
    navigate('/wishlist')
  }

  // async function handleAddToWishlist() {
  //   const addEvent = await wishlistAPI.addEventToWishlist(user._id, event.id);
  //   setWishlist(addEvent);
  // }

  // const handleAddToWishlist = async () => {
  //   const addEvent = await wishlistAPI.addEventToWishlist(user._id, event._id);
  //   console.log(addEvent)
  //   setWishlist(addEvent);
  // }

return (
  <>
    <div>
      {/* <img
          src={
            event.images.find((img) => img.ratio == "16_9" && img.width > 500).url
          }
          alt={event.name}
        /> */}
      <h1>{event.name}</h1>
      {/* <WishlistCard wishlist={wishlist} /> */}
      <button onClick={handleAddToWishlist}>Add Event to Your Wishlist</button>
      {/* <button>Add Event to Your Wishlist</button> */}
    </div>
  </>
);
}