import { Link } from "react-router-dom";

export default function EventCard({ event }) {
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
          {/* {event._embedded ? `, ${event._embedded.venues[0].state.name}` : ""} */}
        </p>
        <p>
          {event._embedded ? `${event._embedded.venues[0].country.name}` : ""}
        </p>
      </div>
      <footer>
        <Link to={`/events/${event.id}`}>
          <button
            // onClick={() => {
            //   getEvent(event.id)
            //   await eventDetails(event.id);
            // }}
          >
            See Details
          </button>
        </Link>
      </footer>
      <br />
    </div>
  );
}