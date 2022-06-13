import * as ticketmasterService from "../../utilities/ticketmaster-service";
import { useState, useEffect, Link } from "react";
import WishlistCard from "../../components/WishlistCard/WishlistCard";
import EventDetailPage from "../EventDetailPage/EventDetailPage";

export default function WishListPage({ event, wishlist, user }) {

  const [userWishlist, setUserWishlist] = useState();

  useEffect(() => {
    async function getUserWishlist() {
      const userWishlist = await ticketmasterService.getWishlist();
      setUserWishlist(userWishlist);
      console.log(userWishlist);
    }
    getUserWishlist();
  }, [wishlist]);



  return (
    <>
      <h1>My Wishlist</h1>
      
      {userWishlist && userWishlist.map((event, idx) => 
        <div key={idx} >
          {event.name}
          {/* {event.image} */}
          <img src={event.image} alt="" />
        </div>)}

      {/* {event.name} */}
    </>
  );
}