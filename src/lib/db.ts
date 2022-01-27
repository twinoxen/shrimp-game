import {
  collection, addDoc, getDoc, doc, where, query, getDocs, setDoc, updateDoc,
} from 'firebase/firestore';
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

export async function getUser(token) {
  try {
    const usersRef = collection(db, 'users');
    const q = query(usersRef, where('id', '==', token));

    const querySnapshot = await getDocs(q);

    if (querySnapshot[0]) {
      console.log('this is the user', querySnapshot);
      return querySnapshot[0];
    }
  } catch (err) {
    return err;
  }
}

export async function checkUser(token) {
  let currentUser;
  try {
    const usersRef = collection(db, 'users');
    console.log('here is the checkUser token', token);
    const q = query(usersRef, where('id', '==', token));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((dbdoc) => {
      // doc.data() is never undefined for query doc snapshots
      currentUser = dbdoc.data();
      console.log(dbdoc.id, ' => ', dbdoc.data());
    });

    // currentUser = querySnapshot[0].data();
    console.log('this is the user', currentUser);

    if (currentUser) {
      console.log('THERE is a user', currentUser);
      return currentUser;
    }
    console.log('No Game user for ', token);
    return false;
  } catch (err) {
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
      walletAddress: null,
    });
    console.log('Document written with ID: ', docRef.id);
    return docRef;
  } catch (err) {
    return err;
  }
}

export async function saveCheckin(token, visitedHouses) {
  try {
    const usersRef = collection(db, 'users');
    console.log('here is the checkUser token', token);
    const q = query(usersRef, where('id', '==', token));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach(async (dbdoc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(dbdoc.id, ' => ', dbdoc.data());
      const userDocRef = doc(db, 'users', dbdoc.id);

      const result = await updateDoc(userDocRef, {
        visitedHouses,
      });

      return result;
    });
    return;
  } catch (err) {
    return err;
  }
}

export async function saveWalletAddress(token, walletAddress) {
  try {
    const usersRef = collection(db, 'users');
    console.log('here is the checkUser token', token);
    const q = query(usersRef, where('id', '==', token));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach(async (dbdoc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(dbdoc.id, ' => ', dbdoc.data());
      const userDocRef = doc(db, 'users', dbdoc.id);

      const result = await updateDoc(userDocRef, {
        walletAddress,
      });

      return result;
    });
    return;
  } catch (err) {
    return err;
  }
}
