import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import "./NavBar.css";

export default function NavBar({ user, setUser }) {

  function handleLogOut() {
    // Remove token using the user service
    userService.logOut();
    // Update user state in App
    setUser(null);
  }

  return (
    <nav>
      <Link className='nav-left' id="home" to="/">TicketMate</Link>
      &nbsp; &nbsp;
      <Link className='nav-left' to="/events">Find an Event</Link>
      &nbsp; &nbsp;
      <Link className='nav-left' to="/wishlist">My Wishlist</Link>
      &nbsp; &nbsp;
      <Link className='nav-right' to="" onClick={handleLogOut}>Log Out</Link>
      <span className='nav-right' >Welcome, {user.name}</span>
      &nbsp; &nbsp;
    </nav>
  );
}