import * as ticketmasterService from "../../utilities/ticketmaster-service";
import { useState, useEffect, Link } from "react";
import { useNavigate } from "react-router-dom";
import WishlistCard from "../../components/WishlistCard/WishlistCard";
import EventDetailPage from "../EventDetailPage/EventDetailPage";

export default function WishListPage({ event, wishlist, setWishlist, user }) {

  const [userWishlist, setUserWishlist] = useState();

  const [refresh, setRefresh] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    async function getUserWishlist() {
      const userWishlist = await ticketmasterService.getWishlist();
      setUserWishlist(userWishlist);
      console.log(userWishlist);
    }
    getUserWishlist();
  }, [refresh]);

  // async function deleteEventWishlist() {
  //   const removeEvent = await ticketmasterService.deleteEventWishlist(event._id);
  //   const updateWishlist = event.filter(event => event._id !== removeEvent._id);
  //   setWishlist(updateWishlist);
  //   navigate('/wishlist')
  // }

  async function deleteEventWishlist(id) {
    const removeEvent = await ticketmasterService.deleteEventWishlist(id);
    setRefresh(!refresh);
  }

  return (
    <>
      <h1>My Wishlist</h1>
      
      {userWishlist && userWishlist.map((event, idx) => 
        <div key={idx} >
          <header>
            <img src={event.image} alt={event.name} />
          </header>
          <div>
            {event.name}
          </div>
          <footer>
            <button onClick={() => {deleteEventWishlist(event._id)}}>REMOVE</button>
          </footer>
        </div>)}
    </>
  );
}