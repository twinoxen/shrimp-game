import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
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

setupIonicReact();
function HomePage(loggedIn) {
  if (loggedIn) {
    return <UserHome />;
  }
  return <LandingPage />;
}

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const isLoggedIn = localStorage.getItem('token');

  // const RequireAuth = ({ children }: { children: JSX.Element }) => {

  //   if (!isLoggedIn) {
  //     setLoggedIn(false)
  //     return <Navigate to="/login" replace />;
  //   }

  //   setLoggedIn(true)

  //   return children;
  // }
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
              render={() => HomePage(isLoggedIn)}
              exact
            />
          </IonRouterOutlet>
        </IonReactRouter>
      </IonApp>

    </>
    // <Routes>
    //   <Route path="/SecondPage" element={<SecondPage />} />
    //   <Route path="about" element={<About />} />
    //   <Route path="/" element={currentHomepage(loggedIn)} />
    // </Routes>
  );
}

export default App;
