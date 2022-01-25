/* eslint-disable no-console */
import './firebase';
import {
  getAuth as firebaseGetAuth,
  onAuthStateChanged as firebaseOnAuthStateChanged,
  signInWithPopup, GoogleAuthProvider, TwitterAuthProvider,
} from 'firebase/auth';

function watchAuth() {
  const auth = firebaseGetAuth();
  firebaseOnAuthStateChanged(auth, (user) => {
    if (user) {
      localStorage.setItem('token', user.uid);
    } else {
      localStorage.removeItem('token');
    }
  });
}

watchAuth();

export async function loginWithGoogle() {
  const provider = new GoogleAuthProvider();
  const auth = firebaseGetAuth();
  try {
    const result = await signInWithPopup(auth, provider);
    const credential = GoogleAuthProvider.credentialFromResult(result);

    return credential;
  } catch (err) {
    console.error(err);

    throw err;
  }
}

export async function loginWithTitter() {
  const provider = new TwitterAuthProvider();
  const auth = firebaseGetAuth();
  try {
    const result = await signInWithPopup(auth, provider);
    const credential = TwitterAuthProvider.credentialFromResult(result);

    return credential;
  } catch (error: any) {
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const { email } = error;
    // The AuthCredential type that was used.
    const credential = TwitterAuthProvider.credentialFromError(error);

    console.error(errorCode, errorMessage, email, credential);

    throw error;
  }
}

export async function logout() {
  const auth = firebaseGetAuth();
  await auth.signOut();

  localStorage.removeItem('token');
}

export const onAuthStateChanged = firebaseOnAuthStateChanged;
export const getAuth = firebaseGetAuth;

export default {
  loginWithGoogle,
};
