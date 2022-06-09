import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import EventCard from '../../components/EventCard/EventCard';
import * as ticketmasterService from "../../utilities/ticketmaster-service";

export default function HomePage() { 
  const [eventList, setEventList] = useState([])

  const navigate = useNavigate();

  async function getEventSearch(searchWord) {
    console.log('hitting')
    const eventResult = await ticketmasterService.search(searchWord);
    setEventList(eventResult);
    console.log(eventResult)
    navigate("/events");
  };
  
  console.log('wtf');
  return (
    <>
      <h1>Landing Page</h1>
    </>
  );
}