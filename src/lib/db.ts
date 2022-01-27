import { collection, addDoc, getDoc, doc, where, query, getDocs } from 'firebase/firestore';
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
    const usersRef = collection(db, 'users');
    const q = query(usersRef, where('id', '==', token));

    const querySnapshot = await getDocs(q);

    if (querySnapshot[0]) {
      console.log('this is the user', currentUser);
      return querySnapshot[0];
    }
    console.log('No Game user for ', token);
    return false;
  }
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

export async function saveCheckin(user, house) {

}
