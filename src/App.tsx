import React from 'react';
import {
  Routes, Route, Link, Navigate,
} from 'react-router-dom';
import './App.css';
import * as auth from './lib/auth';
import UserHome from './Components/UserHome';
import LandingPage from './Components/LandingPage';

function RequireAuth({ children }: { children: JSX.Element }) {
  const isLoggedIn = localStorage.getItem('token');

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

function App() {
  // const [loggedIn, setLoggedIn] = useState(false);
  return (
    <>
      shrimp game
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/user-home">User home</Link></li>
        </ul>
      </nav>
      <button onClick={auth.loginWithGoogle} type="button">Login with google</button>
      <button onClick={auth.logout} type="button">Log out</button>
      <Routes>
        <Route path="/LandingPage" element={<LandingPage />} />
        <Route path="/login" element={<LandingPage />} />
        <Route
          path="/user-home"
          element={(
            <RequireAuth>
              <UserHome />
            </RequireAuth>
          )}
        />
      </Routes>

    </>
  );
}

export default App;
