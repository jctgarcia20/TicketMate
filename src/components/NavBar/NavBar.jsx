import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function NavBar({ user, setUser }) {

  function handleLogOut() {
    // Remove token using the user service
    userService.logOut();
    // Update user state in App
    setUser(null);
  }

  return (
    <nav>
      <Link className='nav-left' to="/">Home</Link>
      &nbsp; | &nbsp;
      <Link className='nav-right' to="/events">Find an Event</Link>
      &nbsp; | &nbsp;
      <Link className='nav-right' to="/wishlist">Wishlist</Link>
      &nbsp; | &nbsp;
      <span>Welcome, {user.name}</span>
      &nbsp; | &nbsp;
      <Link className='nav-right' to="" onClick={handleLogOut}>Log Out</Link>
    </nav>
  );
}