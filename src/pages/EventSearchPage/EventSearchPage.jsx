import { useState } from "react";
import EventCard from "../../components/EventCard/EventCard";
import * as ticketmasterService from "../../utilities/ticketmaster-service";
import './EventSearchPage.css'

export default function EventSearchPage({ getEvent }) {

  // Search for Events using keywords
  const [eventSearch, setEventSearch] = useState("");
  // Render List of Events via keywords
  const [eventList, setEventList] = useState([]);

  async function handleEventSearch(evt) {
    evt.preventDefault();
    const events = await ticketmasterService.search(eventSearch);
    console.log(events);
    setEventList(events);
  }

  return (
    <>

      <form className="searchForm" onSubmit={handleEventSearch}>
        <br />
        <br />
        <h1>Search for Events</h1>
        <input
          id="keywordInput"
          type="text"
          placeholder='Search concerts, sports and more...'
          value={eventSearch}
          onChange={(evt) => setEventSearch(evt.target.value)}
        />
        <button className='searchBtn'>
          Search
        </button>
      </form>

      <div>
        {!eventList.error ? eventList.map((event) => (
          <EventCard event={event} key={event.id} getEvent={getEvent} />
        )): eventList.error}
      </div>
    </>
  );
}