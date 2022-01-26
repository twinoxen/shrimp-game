import React from 'react';
import {
  Container, Row, Col, Navbar, Card, Nav,
} from 'react-bootstrap';
import { IconContext } from 'react-icons';
import { BsPatchCheck, BsWallet } from 'react-icons/bs';
import { BiUserCircle } from 'react-icons/bi';
import {
  IonFooter, IonGrid, IonRow, IonCol, IonToolbar,
} from '@ionic/react';

function StickyNav({ toggleModal }) {
  return (
    <IonFooter className="justify-content-center">
      <IonToolbar>
        <IonRow className="ion-justify-content-center">
          <IonCol size-xs={3} className="ion-text-center">
            <ion-icon name="wallet-outline" />
          </IonCol>
          <IonCol size-xs={3} className="ion-text-center">
            <BsPatchCheck onClick={() => toggleModal()} />
          </IonCol>
          <IonCol size-xs={3} className="ion-text-center">
            Profile
          </IonCol>
        </IonRow>
      </IonToolbar>

      <Nav.Item className="mx-5">
      <ion-icon name="wallet-outline"></ion-icon>
      </Nav.Item>

      <Nav.Item className="mx-5">
        <BsPatchCheck onClick={() => toggleModal()} />
      </Nav.Item>

      <Nav.Item className="mx-5">
        <BiUserCircle />
      </Nav.Item>
    </IonFooter>
  );
}

export default StickyNav;
