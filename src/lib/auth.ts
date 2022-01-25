/* eslint-disable no-console */
import './firebase';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

export async function loginWithGoogle() {
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  signInWithPopup(auth, provider)
    .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
      // const credential = GoogleAuthProvider.credentialFromResult(result);
      // const token = credential?.accessToken;
      // The signed-in user info.
      // const { user } = result;
      console.log(result);

    // ...
    }).catch((error) => {
      console.error(error);
    // Handle Errors here.
    //   // const errorCode = error.code;
    //   const errorMessage = error.message;
    //   // The email of the user's account used.
    //   const { email } = error;
    //   // The AuthCredential type that was used.
    //   const credential = GoogleAuthProvider.credentialFromError(error);
    // // ...
    });
}

export async function logout() {
  const auth = getAuth();
  await auth.signOut();
}

export default {
  loginWithGoogle,
};
