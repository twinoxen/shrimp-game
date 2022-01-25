import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import StickyNav from '../StickyNav';

function UserHome() {
  return (
    <>
      <Container>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
      </Container>
      <StickyNav />
    </>
  );
}

export default UserHome;
