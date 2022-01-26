import React from 'react';
import { Link } from 'react-router-dom';

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

function LandingPage() {
  return (
    <>
      <>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/SecondPage">test second page</Link>
      </>
      <Routes>
        <Route path="/SecondPage" element={<SecondPage />} />
        <Route path="about" element={<About />} />
      </Routes>
      <main>
        <h2>no auth Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav>
        <Link to="/about">About</Link>
      </nav>
    </>
  );
}

export default LandingPage;
