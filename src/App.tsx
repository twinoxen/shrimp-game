import React, { useEffect, useState, createContext } from 'react';
import { Route, Redirect } from 'react-router-dom'
import './App.css';
import {
  IonApp, IonButton, IonContent, IonModal, IonRouterOutlet, setupIonicReact, IonRow, IonCol, IonText, IonGrid, IonInput, IonSpinner, IonPage, IonCard, IonToast,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import UserHome from './Components/UserHome';
import LandingPage from './Components/LandingPage';
import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
import QrScanner from './Components/QrScanner';
import { checkUser, createUser, saveWalletAddress } from './lib/db';
import { Container } from 'react-bootstrap';

setupIonicReact();

async function check(isLoggedIn, setUser) {
  const token = localStorage.getItem('token');
  const result = await checkUser(isLoggedIn);
  console.log('isLoggedIn', isLoggedIn);
  console.log('this is the user result', result);
  const fullUser = localStorage.getItem('fullUser');

  if (result.visitedHouses) {
    setUser(result);
    return;
  }
  const newUser = await createUser(isLoggedIn, JSON.parse(fullUser));
  console.log(newUser);
  // setUser(newUser);
}

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const isLoggedIn = localStorage.getItem('token');
  const [show, setShow] = useState(false);
  const [walletModel, setWalletModel] = useState(false);
  const [user, setUser] = useState(null);
  const [userWallet, setUserWallet] = useState('No wallet connected');
  const [showToast1, setShowToast1] = useState(false);

  function toggle() {
    console.log('hello');
    setShow(!show);
  }

  function toggleWalletModel() {
    setWalletModel(!walletModel);
  }

  async function submitWallet(token, address) {
    // Save user wallet in db
    console.log('this is the address', address)
    const result = await saveWalletAddress(token, address)
    console.log (result)


    console.log(`Submitted wallet: ${userWallet}`);
  }

  function HomePage(user, loggedIn, toggle) {
    if (isLoggedIn && user) {
      console.log('this is the user', user)
      return (
        <UserHome user={user} toggleModal={toggle} toggleWalletModel={toggleWalletModel} />
      );
    } else if (isLoggedIn) {
      return (
        <IonPage>
          <IonContent>
            <IonGrid className="ion-align-items-center">
              <IonRow className="ion-justify-content-center ion-margin-vertical">
                <IonSpinner />
              </IonRow>
            </IonGrid>
          </IonContent>
        </IonPage>
      )
    }
    return <LandingPage />;
  }

  useEffect(() => {
    if (isLoggedIn) {
      setLoggedIn(true);
      check(isLoggedIn, setUser);
    }
  }, []);

  return (
    <>
      <IonApp>
        <IonReactRouter>
          <IonRouterOutlet id="root">
            <Route path="/" render={() => HomePage(user, isLoggedIn, toggle)} exact />
            <Route render={() => <Redirect to={'/'} />} />
          </IonRouterOutlet>
        </IonReactRouter>
      </IonApp>
                  {/* QR MODAL */}
      <IonModal isOpen={show} trigger="trigger-button">
        <IonContent>
          <IonGrid>
            <IonRow className="ion-justify-content-around">
              <IonCol size-xs={6} className="ion-text-center">
                <IonText className="ion-align-items-center">
                  <h2>Spot Scan In</h2>
                </IonText>
              </IonCol>
              <IonCol
                size-xs={6}
                className="ion-text-right ion-align-itesms-center"
              >
                <IonButton onClick={() => {
                  setShow(!show)
                  window.location.reload();
                  }}>Close</IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
          <QrScanner />
        </IonContent>
      </IonModal>
                  {/* WALLET MODAL */}
      <IonModal isOpen={walletModel} trigger="trigger-button">
        <IonContent>
          <IonGrid>
            <IonRow className="ion-justify-content-around" style={{background: 'black'}}>
              <IonCol size-xs={6} className="ion-text-center">
                <IonText className="ion-align-items-center">
                  <h4 style={{color:'white'}}>Connect your SOL wallet</h4>
                </IonText>
              </IonCol>
              <IonCol
                size-xs={6}
                className="ion-text-right ion-align-itesms-center"
              >
                <IonButton onClick={() => {
                  setWalletModel(!walletModel)
                  }}>
                  Close
                </IonButton>
              </IonCol>
            </IonRow>

            <IonRow className="ion-justify-content-center ion-margin-vertical">
              <IonCol size-xs={10}>
                <IonCard>
                    <IonInput
                    placeholder="Enter a SOLANA wallet address to submit"
                    onIonChange={(e) => setUserWallet(e.detail.value!)}
                    />
                </IonCard>
              </IonCol>
            </IonRow>

            <IonToast
              isOpen={showToast1}
              onDidDismiss={() => {
                setShowToast1(false);
                setWalletModel(!walletModel);
                window.location.reload();
              }}
              message="Updating Wallet, Check Back Later"
              duration={1500}
            />

            <IonRow className="ion-justify-content-center ion-margin-vertical">
              <IonCol size-xs={10}>
                  <Container>
                      <span>Your Current Wallet:</span>
                      <p>
                        {user ? `${user.walletAddress}`: 'no wallet found'}
                      </p>
                    </Container>
              </IonCol>
              <IonCol className="ion-text-center" size-xs={10}>
                <IonButton onClick={() => {
                    submitWallet(isLoggedIn, userWallet)
                    setShowToast1(true)
                  }}>Submit</IonButton>
              </IonCol>
            </IonRow>

          </IonGrid>
        </IonContent>
      </IonModal>
    </>
  );
}

export default App;
