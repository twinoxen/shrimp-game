import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import UserHome from './Components/UserHome';
import LandingPage from './Components/LandingPage';
import 'bootstrap/dist/css/bootstrap.min.css';

const currentHomepage = (loggedIn: boolean): JSX.Element => {
  if (loggedIn) {
    return <UserHome />;
  }
  return <LandingPage />;
};

function App() {
  const [loggedIn, setLoggedIn] = useState(true);
  return (
    <Routes>
      <Route path="/" element={currentHomepage(loggedIn)} />
    </Routes>
  );
}

export default App;
