import { collection, addDoc } from 'firebase/firestore';
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

testDb();
