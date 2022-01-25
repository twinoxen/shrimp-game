import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import UserHome from './Components/UserHome';
import LandingPage from './Components/LandingPage';

function SecondPage() {
  return (
    <>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav>
        <Link to="/about">About</Link>
      </nav>
    </>
  );
}

function About() {
  return (
    <>
      <main>
        <h2>Who are we?</h2>
        <p>
          That feels like an existential question, don&apos;t you
          think?
        </p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}

const currentHomepage = (loggedIn: boolean): JSX.Element => {
  if (loggedIn) {
    return <UserHome />;
  }
  return <LandingPage />;
};

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <>
      {/* <>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/SecondPage">test second page</Link>
      </> */}
      <Routes>
        <Route path="/SecondPage" element={<SecondPage />} />
        <Route path="about" element={<About />} />
        <Route path="/" element={currentHomepage(loggedIn)} />
      </Routes>
    </>
  );
}

export default App;
