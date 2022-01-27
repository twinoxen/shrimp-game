import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import {
  IonApp, IonButton, IonContent, IonModal, IonRouterOutlet, setupIonicReact, modalController, IonHeader, IonRow, IonCol, IonText, IonGrid,
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

setupIonicReact();
function HomePage(loggedIn, toggle) {
  if (loggedIn) {
    return <UserHome toggleModal={toggle} />;
  }
  return <LandingPage />;
}

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const isLoggedIn = localStorage.getItem('token');
  const [show, setShow] = useState(false);

  // const RequireAuth = ({ children }: { children: JSX.Element }) => {

  //   if (!isLoggedIn) {
  //     setLoggedIn(false)
  //     return <Navigate to="/login" replace />;
  //   }

  //   setLoggedIn(true)

  //   return children;
  // }
  function toggle() {
    console.log('hello');
    setShow(!show);
  }

  useEffect(() => {
    if (isLoggedIn) {
      setLoggedIn(true);
    }
  }, [loggedIn]);

  return (
    <>
      {/* <Routes>
        <Route path="/LandingPage" element={<LandingPage />} />
        <Route path="/login" element={<LandingPage />} />
        <Route
          path="/user-home"
          element={(
            <RequireAuth>
              <UserHome />
            </RequireAuth>
          )}
        />
      </Routes> */}
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
              <IonCol size-xs={6} className="ion-text-right ion-align-items-center">
                <IonButton onClick={() => setShow(!show)}>Close</IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
          <QrScanner />
        </IonContent>
      </IonModal>

    </>
    // <Routes>
    //   <Route path="/SecondPage" element={<SecondPage />} />
    //   <Route path="about" element={<About />} />
    //   <Route path="/" element={currentHomepage(loggedIn)} />
    // </Routes>
  );
}

export default App;
