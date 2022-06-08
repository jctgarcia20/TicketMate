import { useState } from "react";
import { useNavigate } from "react-router-dom";
import EventCard from "../EventCard/EventCard";
import './SearchBar.css'

import * as ticketmasterService from "../../utilities/ticketmaster-service";

export default function SearchBar() {

  // const [zipcode, setZipcode] = useState('');
  // const searchHistory = useNavigate();

  // const handleSearch = async () => {
  //   document.getElementById("searchBtn").hideen = true;
  //   try {
  //     await searchBar(zipcode);
  //     searchHistory.push('/results');
  //   } catch {
  //     // placeholder
  //   }
  // }

  const [eventSearch, setEventSearch] = useState("");

  const [zipcodeSearch, setZipcodeSearch] = useState("");

  const [eventList, setEventList] = useState([]);

  const [zipcodeList, setZipcodeList] = useState([]);

  function handleZipSearch(e) {
    e.preventDefault();
    fetchZip(zipcodeSearch);
  }

  function handleEventSearch(e) {
    e.preventDefault();
    fetchEvent(eventSearch);
  }

  const fetchEvent = async (search) => {
    const event = await ticketmasterService.search(search);
    setEventList(event);
  };

  const fetchZip = async (search) => {
    const zipcode = await ticketmasterService.search(search);
    setZipcodeList(zipcode);
  };

  return (
    <div>
      <form onSubmit={handleZipSearch}>
        <input 
          id='zipcodeInput'
          placeholder='Enter zipcode'
          value={zipcodeSearch}
          onChange={(e) => setZipcodeSearch(e.target.value)}
        />
      </form>
      <form onSubmit={handleEventSearch}>
        <input 
          id='keywordInput'
          placeholder='Search concerts, sports and more...'
          value={eventSearch}
          onChange={(e) => setEventSearch(e.target.value)}
          // onKeyUp={(e) => {
          //   if (e.key === 'Enter') handleSearch();
          // }}
        />
      </form>
      <button
        id='searchBtn'
        onClick={handleEventSearch}
      >
        Search
      </button>

      <div>
        {eventList.map((event) => (
          <EventCard event={event} key={event.id} />
        ))}
      </div>
      <div>
        {zipcodeList.map((event) => (
          <EventCard event={event} key={event.id} />
        ))}
      </div>
    </div>
  );
}