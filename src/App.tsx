import React, { useEffect, useState, createContext } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import {
  IonApp, IonButton, IonContent, IonModal, IonRouterOutlet, setupIonicReact, IonRow, IonCol, IonText, IonGrid,
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

  if (result.visits) {
    setUser(result);
  }
  const fullUser = localStorage.getItem('fullUser');
  const newUser = createUser(isLoggedIn, JSON.parse(fullUser));
  console.log(newUser);
  // setUser(newUser);
}

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const isLoggedIn = localStorage.getItem('token');
  const [show, setShow] = useState(false);
  const [user, setUser] = useState(null);

  // const AppContext = createContext([user, setUser]);

  function toggle() {
    console.log('hello');
    setShow(!show);
  }

  function HomePage(loggedIn, toggle) {
    if (isLoggedIn) {
      return <UserHome toggleModal={toggle} />;
    }
    return <LandingPage />;
  }

  useEffect(() => {
    if (isLoggedIn) {
      setLoggedIn(true);
      check(isLoggedIn, setUser);
    }
  }, [loggedIn]);

  return (
    <>
      <IonApp>
        <IonReactRouter>
          <IonRouterOutlet id="root">
            <Route
              path="/"
              render={() => HomePage(isLoggedIn, toggle)}
              exact
            />
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
              <IonCol size-xs={6} className="ion-text-right ion-align-itesms-center">
                <IonButton onClick={() => setShow(!show)}>Close</IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
          <QrScanner />
        </IonContent>
      </IonModal>
    </>
  );
}

export default App;
