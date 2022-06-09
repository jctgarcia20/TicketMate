import { useState } from "react";
import { useNavigate } from "react-router-dom";
import EventCard from "../../components/EventCard/EventCard";
import './EventSearchPage.css'

import * as ticketmasterService from "../../utilities/ticketmaster-service";

export default function EventSearchPage({ handleEventSearch, setEventList, eventList, getEventSearch }) {

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

  const [zipcodeList, setZipcodeList] = useState([]);

  const navigate = useNavigate();

  const [query, setQuery] = useState('');

  function handleZipSearch(e) {
    e.preventDefault();
    fetchZip(zipcodeSearch);
  }
  
  const handleChange = (evt) => {
    setEventSearch(evt.target.value);
  };

  function handleEventSearch(searchWord) {
    setQuery(searchWord);
    console.log(query);
    getEventSearch(searchWord);
  }

  // async function getEventSearch(searchWord) {
  //   const eventResult = await ticketmasterService.search(searchWord);
  //   setEventList(eventResult);
  //   // navigate("/events");
  //   console.log(eventList);
  // };

  const fetchZip = async (search) => {
    const zipcode = await ticketmasterService.search(search);
    setZipcodeList(zipcode);
  };

  return (
    <div>
      <h1>Search for Event</h1>
      {/* <SearchBar getEventSearch={getEventSearch} />
      <div>
        {eventList.map((event) => (
            <EventCard event={event} />
          ))}
      </div> */}


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
          // onChange={(e) => setEventSearch(e.target.value)}
          onChange={handleChange}
          // onKeyUp={(e) => {
          //   if (e.key === 'Enter') handleSearch();
          // }}
        />
      </form>
      <button
        id='searchBtn'
        handleEventSearch={handleEventSearch}
        onClick={() => handleEventSearch(eventSearch)}
      >
        Search
      </button>

      {/* <div>
        {eventList.map((event) => (
          <EventCard event={event} key={event.id} />
        ))}
      </div>
      <div>
        {zipcodeList.map((event) => (
          <EventCard event={event} key={event.id} />
        ))}
      </div> */}
    </div>
  );
}