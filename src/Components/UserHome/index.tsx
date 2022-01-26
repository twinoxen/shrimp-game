import {
  IonAccordion, IonAccordionGroup, IonApp, IonCol, IonContent, IonGrid, IonItem, IonLabel, IonList, IonPage, IonRow,
} from '@ionic/react';
import React, { useState } from 'react';
import StickyNav from '../StickyNav';

function UserHome() {
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  function toggle() {
    console.log('hello');
    setShow(true);
  }

  return (
    <IonPage>
      <IonContent>
        <IonGrid>
          <IonRow className="ion-justify-content-center">
            <IonCol size-md={6}>

              <IonAccordionGroup>
                <IonAccordion value="colors">
                  <IonItem slot="header">
                    <IonLabel>Colors</IonLabel>
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
                <IonAccordion value="shapes">
                  <IonItem slot="header">
                    <IonLabel>Shapes</IonLabel>
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
                <IonAccordion value="numbers">
                  <IonItem slot="header">
                    <IonLabel>Numbers</IonLabel>
                  </IonItem>

                  <IonList slot="content">
                    <IonItem>
                      <IonLabel>1</IonLabel>
                    </IonItem>
                    <IonItem>
                      <IonLabel>2</IonLabel>
                    </IonItem>
                    <IonItem>
                      <IonLabel>3</IonLabel>
                    </IonItem>
                  </IonList>
                </IonAccordion>
              </IonAccordionGroup>

            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
      <StickyNav toggleModal={toggle}/>
    </IonPage>
  );
}

export default UserHome;
