import {IonContent, IonGrid, IonRow, IonCol, IonButton, IonImg, IonTitle} from '@ionic/react';
import React from 'react';
import Logo from '../../assets/shrimpgamepink.png';


function ShrimpGameRules() {
  return (
    <IonContent color="dark">
      <IonGrid>
        <IonRow className="ion-justify-content-center">
          <IonCol>
            <IonImg src={Logo} alt="shrimp games logo" />
            <IonRow>
              <h1>Welcome to the ShrimpGame</h1>
              <h3>an IRL NFT scavenger hunt at Miami Hack Week for a $1,000 cash prize</h3>
              <p>SEARCH | COMPETE | SPOT</p>
            </IonRow>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonContent>
  );
}

export default ShrimpGameRules;
