import { IonPage, IonContent, IonGrid, IonRow, IonCol, IonButton, IonImg, IonItem, IonLabel, IonList, IonListHeader } from '@ionic/react';
import React from 'react';
import * as auth from '../../lib/auth';
import Logo from '../../assets/shrimpgamepink.png';

function LandingPage() {
  return (
    <IonPage>
      <IonRow className="ion-justify-content-center">
        <IonImg src={Logo} alt="shrimp games logo" />
      </IonRow>
      <IonRow className="ion-justify-content-center">
        <IonCol size-md={6} className="ion-justify-content-center ion-align-content center">
          <IonRow className="ion-justify-content-center">
            <h3>an IRL NFT scavenger hunt at Miami Hack Week for a $1,000 cash prize</h3>
          </IonRow>
          <IonRow className="ion-justify-content-center">
            <h5>SEARCH | COMPETE | SPOT</h5>
          </IonRow>
          <IonList>
            <IonListHeader>
              <IonLabel>The Rules:</IonLabel>
            </IonListHeader>
            <IonItem>
              <IonLabel> There are 10 SPOT locations across Miami Hack Week </IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>
                Collect at least 5 Shrimpgames SPOTs by Friday at 2pm (expo start) 
              </IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel> Receive the final envelope at the MHW expo Friday at 3pm </IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel> 1st team to find the final SPOT will receive $1,000 grand prize </IonLabel>
            </IonItem>
          </IonList>
        </IonCol>
      </IonRow>
      <IonContent>
        <IonGrid>
          <IonRow className="ion-justify-content-center">
            <IonCol size-md={6}>
              <IonButton onClick={auth.loginWithGoogle} type="button">Login with google</IonButton>
              <IonButton onClick={auth.logout} type="button">Log out</IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
}

export default LandingPage;
