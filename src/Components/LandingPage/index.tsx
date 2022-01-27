import { IonPage, IonContent, IonGrid, IonRow, IonCol, IonButton, IonImg, IonItem, IonLabel, IonList, IonListHeader, IonFooter, IonTitle, IonText } from '@ionic/react';
import React from 'react';
import * as auth from '../../lib/auth';
import Logo from '../../assets/shrimpgamepink.png';

function LandingPage() {
  return (
    <IonPage>
      <IonContent color="dark">
        <IonGrid>
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
                  <IonLabel>
                    1st team to find the final SPOT will receive $1,000 grand prize
                  </IonLabel>
                </IonItem>
              </IonList>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol color="dark" size-md={2} className="ion-justify-content-center">
              <IonItem>
                <IonLabel>Shrimp Society House</IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel>CIC Miami</IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel>HF0 Hacker Village</IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel>La Tropical</IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel>Hacker HQ (Annex)</IonLabel>
              </IonItem>
            </IonCol>
            <IonCol color="dark" size-md={2} className="ion-justify-content-center">
              <IonItem>
                <IonLabel>Threshold House</IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel>Polygon House</IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel>TrueWorks House</IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel>Usage.Ai House</IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel>Quicknode</IonLabel>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow className="ion-justify-content-center">
            <IonCol size-md={6} className="ion-justify-content-center">
              <IonButton onClick={auth.loginWithGoogle} type="button">Login with google</IonButton>
              <IonButton onClick={auth.logout} type="button">Log out</IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
      <IonFooter className="ion-no-border">
        <IonTitle>
          powered by SpotX
        </IonTitle>
        <IonText>
          SPOT: Solana Proof of thing
          Solana Proof of Thing is a protocol that allows anyone to create 
          location-based NFTs. Similar to POAPs, SPOTs act as earned collectibles 
          on the Solana ecosystem.
        </IonText>
      </IonFooter>
    </IonPage>
  );
}

export default LandingPage;
