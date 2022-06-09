import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import EventCard from "../../components/EventCard/EventCard";

import * as ticketmasterService from "../../utilities/ticketmaster-service";

export default function EventsListPage() {

  // const eventList = events.map((event, idx) => (
  //   <EventCard
  //     event={event}
  //     idx={idx}
  //   />
  // ));

  // const handleSearch = () => {
  //   document.getElementById("searchBtn").hidden = true;
  //   resultsSearch();
  // };  

  const [event, setEvent] = useState([]);

  // const [list, setList] = useState();

  const [eventList, setEventList] = useState([])

  useEffect(() => {
    const getEvent = async () => {
      const events = await ticketmasterService.getAllEvents();
      setEvent(events);
      setEventList();
    }
    getEvent();
  }, []);

  return (
    <>
      <h1>Event Page</h1>
      {/* <p>
        {event.map((event, idx) => <EventCard event={event} key={idx}/>)}
      </p> */}
      {/* <div>
        {eventList.map((event) => (
            <EventCard event={event} />
          ))}
      </div> */}
    </>
  );
}