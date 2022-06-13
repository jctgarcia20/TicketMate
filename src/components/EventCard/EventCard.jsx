import { Link, useNavigate } from "react-router-dom";
import * as ticketmasterService from "../../utilities/ticketmaster-service";

export default function EventCard({ event }) {

  // const navigate = useNavigate();

  // const check = { 
  //   name: event.name,
  //   image: event.images[0].url,
  // };

  // async function handleAddToWishlist() {
  //   const addEvent = await ticketmasterService.addEventToWishlist(check);
  //   console.log(addEvent);
  //   console.log(event);
  //   navigate('/wishlist')
  // }

  return (
    <div className="eventCard">
      <br />
      <header>
        <img
          src={
            event.images.find((img) => img.ratio === "16_9" && img.width > 500).url
          }
          alt={event.name}
        />
      </header>
      <div>
        <h5>{event.name}</h5>
        <p>
          {new Date(event.dates.start.localDate).toLocaleDateString()}
          {event._embedded ? ` at ${event._embedded.venues[0].name}` : ""}
        </p>
        <p>
          {event._embedded.venues[0].city.name} 
        </p>
        <p>
          {event._embedded ? `${event._embedded.venues[0].country.name}` : ""}
        </p>
      </div>
      <footer>
        <Link to={`/events/${event.id}`}>
          <button>
            See Details
          </button>
        </Link>
        {/* <button onClick={handleAddToWishlist}>Add Event to Your Wishlist</button> */}
      </footer>
      <br />
    </div>
  );
}