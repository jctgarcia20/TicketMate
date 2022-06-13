import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import * as ticketmasterService from "../../utilities/ticketmaster-service";

export default function EventDetailPage({ event, setEvent }) {

  const { eventId } = useParams();

  useEffect(function () {
    async function getEvent() {
      const event = await ticketmasterService.getEventDetails(eventId);
      setEvent(event);
      console.log('test');
      console.log(event);
    }
    getEvent();
  }, []);

return (
  <>
    <div>
      <h1>{event.name}</h1>
    </div>
  </>
);
}