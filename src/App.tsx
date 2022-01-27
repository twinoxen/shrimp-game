import React, { useEffect, useState, createContext } from 'react';
import { Route, Redirect } from 'react-router-dom'
import './App.css';
import {
  IonApp, IonButton, IonContent, IonModal, IonRouterOutlet, setupIonicReact, IonRow, IonCol, IonText, IonGrid, IonInput,
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
import { checkUser, createUser } from './lib/db';

setupIonicReact();


async function check(isLoggedIn, setUser) {
  const result = await checkUser(isLoggedIn);
  const fullUser = localStorage.getItem('fullUser');

  if (result.visits) {
    setUser(result);
  }
  const newUser = createUser(isLoggedIn, JSON.parse(fullUser));
  console.log(newUser);
  // setUser(newUser);
}

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const isLoggedIn = localStorage.getItem('token');
  const [show, setShow] = useState(false);
  const [walletModel, setWalletModel] = useState(false)
  const [user, setUser] = useState(null);
  const [userWallet, setUserWallet] = useState('No wallet connected')

  // const AppContext = createContext([user, setUser]);

  useEffect(() => {
    // Get wallet user wallet from db
    // if (walletFromDb) {
    //   setUserWallet(walletFromDb)
    // }
  
  }, [])

  function toggle() {
    console.log('hello');
    setShow(!show);
  }

  function toggleWalletModel() {
    setWalletModel(!walletModel)
  }

  function submitWallet() {
    // Save user wallet in db
    console.log('Submitted wallet: ' + userWallet)
  }

  function HomePage(loggedIn, toggle) {
    if (isLoggedIn) {
      return (
        <UserHome toggleModal={toggle} toggleWalletModel={toggleWalletModel} />
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
            <Route path="/" render={() => HomePage(isLoggedIn, toggle)} exact />
            <Route render={() => <Redirect to={'/'} />} />
          </IonRouterOutlet>
        </IonReactRouter>
      </IonApp>
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
                <IonButton onClick={() => setShow(!show)}>Close</IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
          <QrScanner />
        </IonContent>
      </IonModal>

      <IonModal isOpen={walletModel} trigger="trigger-button">
        <IonContent>
          <IonGrid>
            <IonRow className="ion-justify-content-around">
              <IonCol size-xs={6} className="ion-text-center">
                <IonText className="ion-align-items-center">
                  <h2>Connect your SOL wallet</h2>
                </IonText>
              </IonCol>
              <IonCol
                size-xs={6}
                className="ion-text-right ion-align-itesms-center"
              >
                <IonButton onClick={() => setWalletModel(!walletModel)}>
                  Close
                </IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
          <IonInput
            placeholder="Wallet"
            onIonChange={(e) => setUserWallet(e.detail.value!)}
          />
          <p>Your Wallet: {userWallet}</p>
          <IonButton onClick={() => submitWallet()}>Submit</IonButton>
        </IonContent>
      </IonModal>
    </>
  )
}

export default App;
