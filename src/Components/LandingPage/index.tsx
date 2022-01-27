import {
  IonPage,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
  IonImg,
  IonLabel,
  IonList,
  IonListHeader,
  IonCard,
} from '@ionic/react'
import React from 'react'
import * as auth from '../../lib/auth'
import Logo from '../../assets/shrimpgamepink.png'

function LandingPage() {
  return (
    <IonPage color="dark">
      <IonContent color="dark">
        <IonList style={{background: 'black'}}>
          <IonGrid>
          <IonRow className="ion-justify-content-center ion-margin-vertical">
            <IonImg src={Logo} alt="shrimp games logo" className="ion-margin-vertical"/>
          </IonRow>
          </IonGrid>
        </IonList>
        <IonList style={{background: 'black'}}>
          <IonGrid>
            <IonRow className="ion-justify-content-center">
              <IonCol
                size-md={6}
                className="ion-justify-content-center ion-align-content center"
              >
                <IonRow className="ion-justify-content-center">
                  <h3>
                    An IRL NFT scavenger hunt at Miami Hack Week for a $1,000 cash
                    prize
                  </h3>
                </IonRow>
                <IonRow className="ion-justify-content-center">
                  <h5>SEARCH | COMPETE | SPOT</h5>
                </IonRow>
                <IonRow className="ion-justify-content-center">
                  <IonCol size-xs={6} className="ion-justify-content-center">
                    <IonButton onClick={auth.loginWithGoogle} type="button">
                      Login with google
                    </IonButton>
                    {/* <IonButton onClick={auth.logout} type="button">
                      Log out
                    </IonButton> */}
                  </IonCol>
                </IonRow>
                <IonCard style={{ backgroundColor: '#222428', color: '#fdfdfd' }}>
                  <IonList style={{ backgroundColor: '#222428', color: '#fdfdfd' }}>
                      <IonListHeader className="ion-padding-bottom">
                        <h3 style={{ color: '#fdfdfd' }}>The Rules:</h3>
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
                </IonCard>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonList>
        <IonList style={{background: 'black'}}>
          <IonGrid>
            <IonRow className="ion-justify-content-center">
              <IonListHeader className="ion-padding-bottom">
                <h2 style={{ color: '#fdfdfd' }}>The Spots:</h2>
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
                  <IonLabel>Cerveceria La Tropical</IonLabel>
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
        </IonList>
      </IonContent>
    </IonPage>
  )
}

export default LandingPage
