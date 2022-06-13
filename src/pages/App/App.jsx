import { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import HomePage from '../HomePage/HomePage';
import EventSearchPage from '../EventSearchPage/EventSearchPage';
import EventDetailPage from '../EventDetailPage/EventDetailPage';
import WishListPage from '../WishListPage/WishListPage';
import NavBar from '../../components/NavBar/NavBar';
import './App.css';

function App() {
  const [user, setUser] = useState(getUser());

  const [event, setEvent] = useState({});

  const [wishlist, setWishlist] = useState();

  return (
    <main className="App">
      {user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            {/* Route components in here */}
            <Route path="/" element={<HomePage />} />
            <Route path="/events" element={<EventSearchPage />} />
            <Route path="/events/:eventId" element={<EventDetailPage
              event={event}
              setEvent={setEvent}
              wishlist={wishlist}
              setWishlist={setWishlist}
            />} />
            <Route path="/wishlist" element={<WishListPage event={event} user={user} wishlist={wishlist} setWishlist={setWishlist} />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}

export default App;
