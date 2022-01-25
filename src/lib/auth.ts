/* eslint-disable no-console */
import './firebase';
import {
  getAuth, signInWithPopup, GoogleAuthProvider, TwitterAuthProvider,
} from 'firebase/auth';

export async function loginWithGoogle() {
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
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
  const auth = getAuth();
  try {
    const result = await signInWithPopup(auth, provider);
    const credential = TwitterAuthProvider.credentialFromResult(result);

    return credential;
  } catch (err) {
    console.error(err);

    throw err;
  }
}

loginWithTitter();

export async function logout() {
  const auth = getAuth();
  await auth.signOut();
}

export default {
  loginWithGoogle,
};
