import EventCard from "../../components/EventCard/EventCard";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import TicketmasterService from '../../utilities/ticketmaster-service';

export default function EventsListPage({ events }) {

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

  return (
    <>
      <h1>Event Page</h1>
      {/* <ul>{eventList}</ul> */}
    </>
  );
}