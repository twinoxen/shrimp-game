import {
  IonPage,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
  IonImg,
  div,
  IonLabel,
  IonList,
  IonListHeader,
<<<<<<< HEAD
=======
  IonFooter,
  IonTitle,
  IonText,
>>>>>>> prep for rebase
} from '@ionic/react'
import React from 'react'
import * as auth from '../../lib/auth'
import Logo from '../../assets/shrimpgamepink.png'

function LandingPage() {
  return (
    <IonPage>
      <IonContent color="dark">
        <IonGrid>
          <IonRow className="ion-justify-content-center">
            <IonImg src={Logo} alt="shrimp games logo" />
          </IonRow>
          <IonRow className="ion-justify-content-center">
            <IonCol
              size-md={6}
              className="ion-justify-content-center ion-align-content center"
            >
              <IonRow className="ion-justify-content-center">
                <h3>
                  an IRL NFT scavenger hunt at Miami Hack Week for a $1,000 cash
                  prize
                </h3>
              </IonRow>
              <IonRow className="ion-justify-content-center">
                <h5>SEARCH | COMPETE | SPOT</h5>
              </IonRow>
              <IonRow className="ion-justify-content-center">
                <IonCol size-md={6} size-xs={10} className="ion-justify-content-center">
                  <IonButton onClick={auth.loginWithGoogle} type="button">
                    Login with google
                  </IonButton>
                  <IonButton onClick={auth.logout} type="button">
                    Log out
                  </IonButton>
                </IonCol>
              </IonRow>
              <IonList style={{ backgroundColor: '#222428', color: '#fdfdfd' }}>
                <IonListHeader className="ion-padding-bottom">
                  <IonLabel style={{ color: '#fdfdfd' }}>The Rules:</IonLabel>
                </IonListHeader>
                <div
                  className="ion-padding-bottom"
                  style={{ background: '#222428', color: '#fdfdfd' }}
                >
                  There are 10 SPOT locations across Miami Hack Week
                </div>
                <div
                  className="ion-padding-bottom"
                  style={{ backgroundColor: '#222428', color: '#fdfdfd' }}
                >
                  Collect at least 5 Shrimpgames SPOTs by Friday at 2pm (expo
                  start)
                </div>
                <div
                  className="ion-padding-bottom"
                  style={{ backgroundColor: '#222428', color: '#fdfdfd' }}
                >
                  Receive the final envelope at the MHW expo Friday at 3pm{' '}
                </div>
                <div
                  className="ion-padding-bottom"
                  style={{ backgroundColor: '#222428', color: '#fdfdfd' }}
                >
                  1st team to find the final SPOT will receive $1,000 grand
                  prize
                </div>
              </IonList>
            </IonCol>
          </IonRow>
          <IonRow className="ion-justify-content-center">
            <IonListHeader className="ion-padding-bottom">
              <IonLabel style={{ color: '#fdfdfd' }}>The Spots:</IonLabel>
            </IonListHeader>
            <IonCol
              color="dark"
              size-md={2}
              className="ion-justify-content-center"
            >
              <div style={{ backgroundColor: '#222428', color: '#fdfdfd' }}>
                <IonLabel>Shrimp Society House</IonLabel>
              </div>
              <div style={{ backgroundColor: '#222428', color: '#fdfdfd' }}>
                <IonLabel>CIC Miami</IonLabel>
              </div>
              <div style={{ backgroundColor: '#222428', color: '#fdfdfd' }}>
                <IonLabel>HF0 Hacker Village</IonLabel>
              </div>
              <div style={{ backgroundColor: '#222428', color: '#fdfdfd' }}>
                <IonLabel>La Tropical</IonLabel>
              </div>
              <div style={{ backgroundColor: '#222428', color: '#fdfdfd' }}>
                <IonLabel>Hacker HQ (Annex)</IonLabel>
              </div>
            </IonCol>
            <IonCol
              color="dark"
              size-md={2}
              className="ion-justify-content-center"
            >
              <div style={{ backgroundColor: '#222428', color: '#fdfdfd' }}>
                <IonLabel>Threshold House</IonLabel>
              </div>
              <div style={{ backgroundColor: '#222428', color: '#fdfdfd' }}>
                <IonLabel>Polygon House</IonLabel>
              </div>
              <div style={{ backgroundColor: '#222428', color: '#fdfdfd' }}>
                <IonLabel>TrueWorks House</IonLabel>
              </div>
              <div style={{ backgroundColor: '#222428', color: '#fdfdfd' }}>
                <IonLabel>Usage.Ai House</IonLabel>
              </div>
              <div style={{ backgroundColor: '#222428', color: '#fdfdfd' }}>
                <IonLabel>Quicknode</IonLabel>
              </div>
            </IonCol>
            <IonListHeader className="ion-padding-bottom">
              <IonLabel style={{ color: '#fdfdfd' }}>Powered by SpotX</IonLabel>
            </IonListHeader>
            <div>
              SPOT: Solana Proof of thing Solana Proof of Thing is a protocol
              that allows anyone to create location-based NFTs. Similar to
              POAPs, SPOTs act as earned collectibles on the Solana ecosystem.
            </div>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  )
}

export default LandingPage
