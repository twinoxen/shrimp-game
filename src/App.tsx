import React from 'react';
import {
  Routes, Route, Link, Navigate,
} from 'react-router-dom';
import './App.css';
import * as auth from './lib/auth';
import UserHome from './Components/UserHome';
import LandingPage from './Components/LandingPage';

<<<<<<< HEAD
import { Route } from 'react-router-dom';
import { IonReactRouter } from '@ionic/react-router';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

setupIonicReact();

function RequireAuth({ children }: { children: JSX.Element }) {
  const isLoggedIn = localStorage.getItem('token');
  const [loggedIn, setLoggedIn] = useState(true);

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
=======
const currentHomepage = (loggedIn: boolean): JSX.Element => {
  if (loggedIn) {
    return <UserHome />;
>>>>>>> feat: fix app and divide homepages
  }

  return children;
}

function App() {
  // const [loggedIn, setLoggedIn] = useState(false);
  return (
<<<<<<< HEAD
    <>
      shrimp game
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/user-home">User home</Link></li>
        </ul>
      </nav>
      <button onClick={auth.loginWithGoogle} type="button">Login with google</button>
      <button onClick={auth.logout} type="button">Log out</button>
      {/* <>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/SecondPage">test second page</Link>
      </> */}
      <Routes>
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
      </Routes>

      <IonApp>
        <IonReactRouter>
          <IonRouterOutlet id="root">
            <Route path="/" component={UserHome} exact/>
          </IonRouterOutlet>
        </IonReactRouter>
      </IonApp>

    </>
=======
    <Routes>
      <Route path="/SecondPage" element={<SecondPage />} />
      <Route path="about" element={<About />} />
      <Route path="/" element={currentHomepage(loggedIn)} />
    </Routes>
>>>>>>> feat: fix app and divide homepages
  );
}

export default App;
