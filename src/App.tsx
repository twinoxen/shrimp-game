import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import UserHome from './Components/UserHome';
import LandingPage from './Components/LandingPage';

const currentHomepage = (loggedIn: boolean): JSX.Element => {
  if (loggedIn) {
    return <UserHome />;
  }
  return <LandingPage />;
};

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <Routes>
      <Route path="/SecondPage" element={<SecondPage />} />
      <Route path="about" element={<About />} />
      <Route path="/" element={currentHomepage(loggedIn)} />
    </Routes>
  );
}

export default App;
