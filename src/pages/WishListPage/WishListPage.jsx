import WishlistCard from "../../components/WishlistCard/WishlistCard";
import EventDetailPage from "../EventDetailPage/EventDetailPage";

export default function WishListPage({ event }) {
  return (
    <>
      <h1>My Wishlist</h1>
      {/* <WishlistCard user={user} wishlist={wishlist} /> */}
      {event.name}
    </>
  );
}