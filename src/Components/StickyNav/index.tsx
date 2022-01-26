import React from 'react';
import {
  Container, Row, Col, Navbar, Card, Nav,
} from 'react-bootstrap';
import { IconContext } from 'react-icons';
import { BsPatchCheck, BsWallet } from 'react-icons/bs';
import { BiUserCircle } from 'react-icons/bi';

function StickyNav({ toggleModal }) {
  return (
    <Navbar fixed="bottom" className="justify-content-center">
      <IconContext.Provider value={{ size: '3em' }}>
        <Nav.Item className="mx-5">
          <BsWallet />
        </Nav.Item>

        <Nav.Item className="mx-5">
          <BsPatchCheck onClick={() => toggleModal()} />
        </Nav.Item>

        <Nav.Item className="mx-5">
          <BiUserCircle />
        </Nav.Item>
      </IconContext.Provider>
    </Navbar>
  );
}

export default StickyNav;
