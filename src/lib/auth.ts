/* eslint-disable no-console */
import './firebase';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

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

export async function logout() {
  const auth = getAuth();
  await auth.signOut();
}

export default {
  loginWithGoogle,
};
