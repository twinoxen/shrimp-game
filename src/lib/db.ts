import { collection, addDoc, getDoc, doc } from 'firebase/firestore';
import { db } from './firebase';

export interface HouseConfig {
  id: string
  qr: string
  nft: string
}

async function testDb() {
  try {
    const docRef = await addDoc(collection(db, 'users'), {
      first: 'Ada',
      last: 'Lovelace',
      born: 1815,
    });
    console.log('Document written with ID: ', docRef.id);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
}

export async function checkUser(token) {

  let currentUser;
  try {
    const docRef = doc(db, 'users', token);
    const docSnap = await getDoc(docRef);
    currentUser = docSnap.data();
    console.log('this is the user', currentUser);
    console.log('No Game user for ', token);

    return `No Game user for ${token}`;
  }
  // try {
    // await Users.where('authId', '==', token).get()
    //   .then((querySnapshot) => {
    //     const items = [];
    //     querySnapshot.forEach((doc) => {
    //       items.push(doc.data());
    //     });
    //     currentUser = items[0];
    //     console.log('this is the user', currentUser);
    //   });

    // if (currentUser) {
    //   return currentUser;
    // }
    // console.log('No Game user for ', token);

    // return `No Game user for ${token}`;
    // return createUser(currentUser);
  // }
  catch (err) {
    return err;
  }
}

export async function createUser(id, fullUser) {
  try {
    const docRef = await addDoc(collection(db, 'users'), {
      id,
      authData: fullUser,
      house_id: null,
      visitedHouses: [],
    });
    console.log('Document written with ID: ', docRef.id);
    return docRef;
  } catch (err) {
    return err;
  }
}
