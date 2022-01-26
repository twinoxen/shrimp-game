<<<<<<< HEAD
import {
  IonAccordion, IonAccordionGroup, IonApp, IonCard, IonCol, IonContent, IonGrid, IonItem, IonLabel, IonList, IonPage, IonRow,
} from '@ionic/react';
import React, { useState } from 'react';
=======
import React, { useState } from 'react';
// import { Routes, Route, Link } from 'react-router-dom';
import { Container, Row, Accordion, Button, Modal } from 'react-bootstrap';
import AccordionBody from 'react-bootstrap/esm/AccordionBody';
>>>>>>> feat: quick modal
import StickyNav from '../StickyNav';

function UserHome() {
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  function toggle() {
    console.log('hello');
    setShow(true);
  }

  return (
<<<<<<< HEAD
    <IonPage>
      <IonContent>
        <IonGrid>
          <IonRow className="ion-justify-content-center">
            <IonCol size-md={6}>

              {/* visitedHouses */}
              <IonCard>
                <IonAccordionGroup>
                  <IonAccordion value="visitedHouses">
                    <IonItem slot="header" className="padding-vertical">
                      <IonLabel className="padding-vertical">
                        Visited Spots
                      </IonLabel>
                    </IonItem>

                    <IonList slot="content">
                      <IonItem>
                        <IonLabel>Red</IonLabel>
                      </IonItem>
                      <IonItem>
                        <IonLabel>Green</IonLabel>
                      </IonItem>
                      <IonItem>
                        <IonLabel>Blue</IonLabel>
                      </IonItem>
                    </IonList>
                  </IonAccordion>
                </IonAccordionGroup>
              </IonCard>

              {/* unvisitedHouses */}
              <IonAccordionGroup>
                <IonAccordion value="unvisitedHouses">
                  <IonItem slot="header" className="padding-vertical">
                    <IonLabel>Spots to Visit</IonLabel>
                  </IonItem>

                  <IonList slot="content">
                    <IonItem>
                      <IonLabel>Circle</IonLabel>
                    </IonItem>
                    <IonItem>
                      <IonLabel>Triangle</IonLabel>
                    </IonItem>
                    <IonItem>
                      <IonLabel>Square</IonLabel>
                    </IonItem>
                  </IonList>
                </IonAccordion>
              </IonAccordionGroup>

            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
      <StickyNav toggleModal={toggle} />
    </IonPage>
=======
    <>
      <Container className="pt-5">
        <Row className="justify-content-lg-center">
          {/* Visited Houses Accordian */}
          <Accordion defaultActiveKey="0" className="mb-5">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Visited Houses</Accordion.Header>
              <AccordionBody>
                <Button>example house</Button>
              </AccordionBody>
            </Accordion.Item>
          </Accordion>

          {/* Remaining Houses Accordian */}
          <Accordion defaultActiveKey="1">
            <Accordion.Item eventKey="1">
              <Accordion.Header>Remaining Houses</Accordion.Header>
              <AccordionBody>
                <Button variant="light" disabled>example house</Button>
              </AccordionBody>
            </Accordion.Item>
          </Accordion>
        </Row>
      </Container>

      <StickyNav key={0} toggleModal={toggle.bind(this)} />

      <Modal show={show} fullscreen={true} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>Modal body content</Modal.Body>
      </Modal>
    </>
>>>>>>> feat: quick modal
  );
}

export default UserHome;
