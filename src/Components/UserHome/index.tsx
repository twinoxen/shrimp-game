/* eslint-disable max-len */
import React, { useState } from 'react';
import {
  IonAccordion, IonAccordionGroup, IonCard, IonCol, IonContent, IonGrid, IonItem, IonLabel, IonList, IonPage, IonRow,
} from '@ionic/react';
import StickyNav from '../StickyNav';

function UserHome({ toggleModal }) {
  const [fullscreen, setFullscreen] = useState(true);

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
      <StickyNav toggleModal={toggleModal} />

      {/* <StickyNav key={0} toggleModal={toggle.bind(this)} /> */}
    </IonPage>
  );
}

export default UserHome;
