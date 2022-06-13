import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import * as ticketmasterService from "../../utilities/ticketmaster-service";

export default function EventDetailPage({ event, setEvent }) {

  const { eventId } = useParams();

  const navigate = useNavigate();

  const check = {
    name: event.name,
    image: event.images?.find((img) => img.ratio === "16_9" && img.width > 500).url
  };

  useEffect(function () {
    async function getEvent() {
      const event = await ticketmasterService.getEventDetails(eventId);
      setEvent(event);
      console.log('test');
      console.log(event);
    }
    getEvent();
  }, []);

  async function handleAddToWishlist() {
    const addEvent = await ticketmasterService.addEventToWishlist(check);
    console.log(addEvent);
    console.log(event);
    navigate('/wishlist')
  }

  return (
    <>
      <div>
        <h1>{event.name}</h1>
        <img
          src={
            event.images?.find((img) => img.ratio === "16_9" && img.width > 500).url
          }
          alt={event.name}
        />
        <p>
          Venue:
          <br />
          {event._embedded?.venues[0]?.name}
        </p>
        <p>
          City:
          <br />
          {event._embedded?.venues[0]?.city.name}
        </p>
        <p>
          Country:
          <br />
          {event._embedded ? `${event._embedded.venues[0].country.name}` : ""}
        </p>
        <p>
          Date/Time of Event:
          <br />
          {event.dates?.start?.dateTime
            ? new Date(event.dates.start.dateTime).toLocaleString()
            : ""}
        </p>
        <p>
          Prices:
          <br />
          {event.priceRanges
            ? `$${event.priceRanges[0].min} - $${event.priceRanges[0].max}`
            : ""}
        </p>
        <p>{event.description ?? ""}</p>
        <p>{event.info ?? ""}</p>
        <p>{event.pleaseNote ?? ""}</p>
        <p>{event.additionalInfo ?? ""}</p>
      </div>
      <button onClick={handleAddToWishlist}>Add Event to Your Wishlist</button>
    </>
  );
}