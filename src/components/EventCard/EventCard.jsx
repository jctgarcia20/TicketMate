import { Link } from "react-router-dom";

export default function EventCard({ event, /*eventDetails*/}) {
  return (
    <div className="eventCard">
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
      </div>
      <footer>
        <button
          // onClick={async () => {
          //   await eventDetails(event.id);
          // }}
        >
          See Details
        </button>
      </footer>
    </div>
  );
}