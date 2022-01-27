import { IonPage, IonContent, IonGrid, IonRow, IonCol, IonButton } from '@ionic/react';
import React from 'react';
import * as auth from '../../lib/auth';

function LandingPage() {

  return (
    <IonPage>
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