import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
import { Nav } from 'react-bootstrap';
import { IconContext } from 'react-icons';
import { BsPatchCheck, BsWallet } from 'react-icons/bs';
import { BiUserCircle } from 'react-icons/bi';
import { IonFooter, IonCol, IonToolbar, IonRow } from '@ionic/react';

function StickyNav({ toggleModal }) {
  return (
    <IonFooter className="justify-content-center">
      <IconContext.Provider value={{size: '3em'}}>
        <IonToolbar>
          <IonRow className="ion-justify-content-center">
            <IonCol size-xs={3} className="ion-text-center">
              <BsWallet />
            </IonCol>
            <IonCol size-xs={3} className="ion-text-center">
              <BsPatchCheck onClick={() => toggleModal()} />
            </IonCol>
            <IonCol size-xs={3} className="ion-text-center">
              <BiUserCircle />
            </IonCol>
          </IonRow>
        </IonToolbar>
      </IconContext.Provider>
    </IonFooter>
=======
import { Container, Row, Col } from 'react-bootstrap';
import { FaHome } from 'react-icons/fa';
=======
import {
  Container, Row, Col, Navbar, Card, Nav,
} from 'react-bootstrap';
import { IconContext } from 'react-icons';
import { BsPatchCheck, BsWallet } from 'react-icons/bs';
import { BiUserCircle } from 'react-icons/bi';
>>>>>>> feat: quick modal

function StickyNav({ toggleModal }) {
  return (
<<<<<<< HEAD
    <Container>
      <Row>
        <Col>
          <FaHome />
        </Col>
      </Row>
    </Container>
>>>>>>> prep for rebase
=======
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
>>>>>>> feat: quick modal
  );
}

export default StickyNav;
