// import { Link } from "react-router-dom";
// import * as ticketmasterService from "../..//utilities/ticketmaster-service";

// export default function WishlistCard({ event, wishlist }) {

//   const [userWishlist, setUserWishlist] = useState();

//   useEffect(() => {
//     async function getUserWishlist() {
//       const userWishlist = await ticketmasterService.getWishlist();
//       setUserWishlist(userWishlist);
//     }
//     getUserWishlist();
//   }, [wishlist]);

//   return (
//     <>
//       <div>
//         <p>{event.name}</p>
//         <Link to={`/events/${event.id}`}>
//           <button>See Details</button>
//         </Link>
//       </div>
//     </>
//   );
// }