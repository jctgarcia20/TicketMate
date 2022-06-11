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

  // const [event, setEvent] = useState();

  // const {id} = useParams();

  // console.log(id);

  // async function getEvent(eventId) {
  //   const getEvents = await ticketmasterService.getEventDetails(eventId);
  //   setEvent(getEvents);
  //   console.log(id);
  // }
  // getEvent();
// }, [eventId]);

return (
  <>
    <div>
      {/* <h1>{event._embedded.events.name}</h1> */}
      {/* <h1>{event.name}</h1> */}
      <h1>hello</h1>
    </div>
  </>
);
}