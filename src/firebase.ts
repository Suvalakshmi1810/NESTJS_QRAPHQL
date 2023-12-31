// firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDHDhECvRvaZHgTqd0z2dks642KazneSaQ',
  authDomain: 'todo-de0f3.firebaseapp.com',
  projectId: 'todo-de0f3',
  storageBucket: 'todo-de0f3.appspot.com',
  messagingSenderId: '203000887012',
  appId: '1:203000887012:web:380e85e0c149d546de5ef1',
  measurementId: 'G-97660E1Q6E',
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { firestore };
