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
import { FireBaseInstance } from './lib/firebase';

setupIonicReact();

async function checkUser(token) {
  const db = FireBaseInstance.firestore();
  const Users = db.collection('users');
  let currentUser;
  try {
    await Users.where('authId', '==', token).get()
      .then((querySnapshot) => {
        const items = [];
        querySnapshot.forEach((doc) => {
          items.push(doc.data());
        });
        currentUser = items[0];
        console.log('this is the user', currentUser);
      });

    if (user) {
      return user;
    }
    console.log('No Game user for ', token);

    return `No Game user for ${token}`;
    // return createUser(currentUser);
  } catch (err) {
    return err;
  }
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
      const check = checkUser(isLoggedIn);
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
