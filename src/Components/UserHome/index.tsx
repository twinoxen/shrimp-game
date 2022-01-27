import React, { useState } from 'react';
import {
  IonAccordion, IonAccordionGroup, IonApp, IonCard, IonCol, IonContent, IonGrid, IonItem, IonLabel, IonList, IonPage, IonRow,
} from '@ionic/react';
import { Modal } from 'react-bootstrap'
import StickyNav from '../StickyNav'
import  QrScanner from '../QrScanner/index'

function UserHome() {
  const [fullscreen, setFullscreen] = useState(true)
  const [show, setShow] = useState(false)

  function toggle() {
    console.log('hello')
    setShow(true)
  }

  return (
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

      <StickyNav key={0} toggleModal={toggle.bind(this)} />

      <Modal show={show} fullscreen={true} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Spot Scan In</Modal.Title>
        </Modal.Header>
        <QrScanner />
        {/* <Modal.Body>Modal body content</Modal.Body> */}
      </Modal>
    </IonPage>
  )
}

export default UserHome
