import firebase from 'firebase/app';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const config = {
  apiKey: 'AIzaSyAqRAqY0EIhzWLxrZvZdhVwkAfLpsXxbFo',
  authDomain: 'shrimp-game-31580.firebaseapp.com',
  projectId: 'shrimp-game-31580',
  storageBucket: 'shrimp-game-31580.appspot.com',
  messagingSenderId: '851215866774',
  appId: '1:851215866774:web:2663a604fa5d25829cdbb7',
};

export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();
