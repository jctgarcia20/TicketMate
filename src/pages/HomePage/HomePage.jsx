import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import EventCard from '../../components/EventCard/EventCard';

export default function HomePage() {
  return (
    <>
      {/* <div></div> */}
      <div className="container">
        <img src="https://i.imgur.com/pEJudMo.jpg" className='cover' />
        <h1 className='slogan'>Just One Ticket Away.</h1>
        <h4 className='slogan2'>Shop for the most in demand events using the world's 
          largest ticket marketplace.
        </h4>
      </div>
    </>
  );
}