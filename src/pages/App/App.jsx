import { useState, useEffect } from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import HomePage from '../HomePage/HomePage';
import EventSearchPage from '../EventSearchPage/EventSearchPage';
import EventDetailPage from '../EventDetailPage/EventDetailPage';
import WishListPage from '../WishListPage/WishListPage';
import CartPage from '../CartPage/CartPage';
import MyOrdersPage from '../MyOrdersPage/MyOrdersPage';
import NavBar from '../../components/NavBar/NavBar';
import * as ticketmasterService from "../../utilities/ticketmaster-service";
import './App.css';

function App() {
  const [user, setUser] = useState(getUser());

  // const [event, setEvent] = useState();

  // const { eventId } = useParams();

  // useEffect(function () {
  //   async function getEvent() {
  //     const event = await ticketmasterService.getEventDetails(eventId);
  //     setEvent(event);
  //     console.log('test');
  //   }
  //   getEvent();
  // }, [eventId]);

  // if(!event) return null;

  return (
    <main className="App">
      {user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            {/* Route components in here */}
            <Route path="/" element={<HomePage />} />
            {/* <Route path="/search" element={<EventSearchPage />} /> */}
            <Route path="/events" element={<EventSearchPage />} />
            <Route path="/events/:eventId" element={<EventDetailPage />} />
            <Route path="/wishlist" element={<WishListPage />} />
            <Route path="/orders" element={<MyOrdersPage />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}

export default App;
