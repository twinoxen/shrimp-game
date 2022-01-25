import React from 'react';
import { Link } from 'react-router-dom';

function UserHome() {
  return (
    <>
      <main>
        <h2>auth approved Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav>
        <Link to="/about">About</Link>
      </nav>
    </>
  );
}

export default UserHome;
