import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import * as ticketmasterService from "../../utilities/ticketmaster-service";

export default function EventDetailPage() {

  const [event, setEvent] = useState();

  const { eventId } = useParams();

  useEffect(function () {
    async function getEvent() {
      const event = await ticketmasterService.getEventDetails(eventId);
      setEvent(event);
      console.log('test');
    }
    getEvent();
  }, [eventId]);

  // if(!event) return null;

  return (
    <>
    <div>
      {/* <h1>{event.name}</h1> */}

    </div>
    <h1>hello</h1>
    </>
  );
}