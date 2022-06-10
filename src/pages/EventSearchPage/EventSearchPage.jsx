import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import EventCard from "../../components/EventCard/EventCard";
import * as ticketmasterService from "../../utilities/ticketmaster-service";
import './EventSearchPage.css'

export default function EventSearchPage(/*{ handleEventSearch, setEventList, eventList, getEventSearch }*/) {

  // Search for Events using keywords
  const [eventSearch, setEventSearch] = useState("");
  // Search for Events using zipcode
  // const [zipcodeSearch, setZipcodeSearch] = useState("");
  // Render List of Events via keywords
  const [eventList, setEventList] = useState([]);
  // Render List of Events via zipcode
  // const [zipcodeList, setZipcodeList] = useState([]);

  // const navigate = useNavigate();

  // const [query, setQuery] = useState('');

  // const handleEventSearch = (evt) => {
  //   setEventSearch(evt.target.value);
  // };

  // function handleEventSearch(e) {
  //   e.preventDefault();
  //   fetchEvent(eventSearch);
  // };

  // *****************************************************************
  // const handleEventSearch = (data, e) => {
  //   e.preventDefault();
  //   console.log(data)
  //   fetchEvent(eventSearch);
  // };

  // const fetchEvent = async (search) => {
  //   const event = await ticketmasterService.search(search);
  //   setEventList(event)
  // };
  // *****************************************************************

  async function handleEventSearch(evt) {
    evt.preventDefault();
    const events = await ticketmasterService.search(eventSearch);
    console.log('hitting');
    setEventList(events);
    // setEventSearch("");
  }

  // function handleZipSearch(e) {
  //   e.preventDefault();
  //   fetchZip(zipcodeSearch);
  // };


  // ****************************************************************
  // const handleZipSearch = (data, e) => {
  //   e.preventDefault();
  //   console.log(data)
  //   fetchZip(zipcodeSearch);
  // };

  // const fetchZip = async (search) => {
  //   const zipcode = await ticketmasterService.search(search);
  //   setZipcodeList(zipcode);
  // };
  // ****************************************************************

  // function handleEventSearch(searchWord) {
  //   setQuery(searchWord);
  //   console.log(query);
  //   getEventSearch(searchWord);
  // }

  // async function getEventSearch(searchWord) {
  //   console.log('hitting')
  //   const eventResult = await ticketmasterService.search(searchWord);
  //   setEventList(eventResult);
  //   console.log(eventResult)
  //   // navigate("/events");
  // };

  // async function getEventSearch(searchWord) {
  //   const eventResult = await ticketmasterService.search(searchWord);
  //   setEventList(eventResult);
  //   // navigate("/events");
  //   console.log(eventList);
  // };

  return (
    <>
      <h1>Search for Events</h1>

      <form onSubmit={handleEventSearch}>
        {/* <SearchBar getEventSearch={getEventSearch} />
        <div>
          {eventList.map((event) => (
            <EventCard event={event} />
          ))}
        </div> */}

        {/* <input
          id='zipcodeInput'
          placeholder='Enter zipcode'
          value={zipcodeSearch}
          // onSubmit={handleZipSearch}
          onChange={(e) => setZipcodeSearch(e.target.value)}
        /> */}
        <input
          id="keywordInput"
          type="text"
          placeholder='Search concerts, sports and more...'
          value={eventSearch}
          // onClick={handleEventSearch}
          onChange={(evt) => setEventSearch(evt.target.value)}
        // onChange={handleEventSearch}
        // onKeyUp={(e) => {
        //   if (e.key === 'Enter') handleSearch();
        // }}
        />
        <button
          id='searchBtn'
          // handleEventSearch={handleEventSearch}
          // onClick={() => handleEventSearch(eventSearch)}
        >
          Search
        </button>
      </form>

      <div>
        {eventList.map((event) => (
          <EventCard event={event} key={event.id} />
        ))}
      </div>
      {/* <div>
          {zipcodeList.map((event) => (
            <EventCard event={event} key={event.id} />
          ))}
        </div> */}
    </>
  );
}