import * as ticketmasterService from "../../utilities/ticketmaster-service";
import { useState, useEffect } from "react";
import "./WishListPage.css";

export default function WishListPage({ event, wishlist, setWishlist, user }) {

  const [userWishlist, setUserWishlist] = useState();

  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    async function getUserWishlist() {
      const userWishlist = await ticketmasterService.getWishlist();
      setUserWishlist(userWishlist);
      console.log(userWishlist);
    }
    getUserWishlist();
  }, [refresh]);

  async function deleteEventWishlist(id) {
    const removeEvent = await ticketmasterService.deleteEventWishlist(id);
    setRefresh(!refresh);
  }

  return (
    <>
      <h1 className="wishTitle">My Wishlist</h1>
      
      {userWishlist && userWishlist.map((event, idx) => 
        <div key={idx} >
          <header>
            <img src={event.image} alt={event.name} />
          </header>
          <div className="eventName">
            {event.name}
          </div>
          <footer>
            <button className="removeBtn" onClick={() => {deleteEventWishlist(event._id)}}>REMOVE</button>
          </footer>
          <br />
          <br />
        </div>)}
    </>
  );
}