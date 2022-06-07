import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import HomePage from '../HomePage/HomePage';
import EventsListPage from '../EventsListPage/EventsListPage';
import ConcertsPage from '../ConcertsPage/ConcertsPage';
import SportsPage from '../SportsPage/SportsPage';
import MorePage from '../MorePage/MorePage';
import CartPage from '../CartPage/CartPage';
import MyOrdersPage from '../MyOrdersPage/MyOrdersPage';
import NavBar from '../../components/NavBar/NavBar';
import SearchBar from '../../components/SearchBar/SearchBar';
// import TicketmasterService from '../../utilities/ticketmaster-service';
import './App.css';

function App() {
  const [user, setUser] = useState(getUser());

  const [searchResults, setSearchResults] = useState({});

  const [keyword, setKeyword] = useState("");

  // const search = async (zipcode = "") => {
  //   const eventResults = TicketmasterService.eventSearch(keyword, zipcode);

  //   const finalResults = [
  //     await eventResults
  //   ];

  //   setSearchResults({
  //     events: finalResults[0]._embedded?.events ?? []
  //   });
  // };

  return (
    <main className="App">
      {user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            {/* Route components in here */}
            <Route path="/" element={<HomePage />} />
            <Route
              path="/Events"
              element={
                <EventsListPage
                  results={searchResults}
                  keyword={keyword}
                  // setKeyword={setKeyword}
                  // resultsSearch={search}
                />
              }
            />
            <Route path="/concerts" element={<ConcertsPage />} />
            <Route path="/sports" element={<SportsPage />} />
            <Route path="/more" element={<MorePage />} />
            <Route path="/orders" element={<MyOrdersPage />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
      <SearchBar
        keyword={keyword}
        setKeyword={setKeyword}
        // searchBar={search}
      />
    </main>
  );
}

export default App;
