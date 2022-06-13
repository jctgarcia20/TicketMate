import { useState } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';
import "./AuthPage.css";

export default function AuthPage({ setUser }) {
  const [showSignUp, setShowSignUp] = useState(false);
  return (
    <main className='AuthPage'>
        <h1 className='title'>TicketMate</h1>
        <div class='box'>
          <div class='wave -one'></div>
          <div class='wave -two'></div>
          <div class='wave -three'></div>
        </div>
        <button onClick={() => setShowSignUp(!showSignUp)}>{showSignUp ? 'LOG IN' : 'SIGN UP'}</button>
        {showSignUp ?
          <SignUpForm setUser={setUser} />
          :
          <LoginForm setUser={setUser} />
        }
      
    </main>
  );
}