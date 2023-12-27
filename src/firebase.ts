import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: 'AIzaSyBXZYFPuXbSLsYYw9LkSFgQhl-ZPaDO2f4',
    authDomain: 'nwitter-ef1f3.firebaseapp.com',
    projectId: 'nwitter-ef1f3',
    storageBucket: 'nwitter-ef1f3.appspot.com',
    messagingSenderId: '1081086931965',
    appId: '1:1081086931965:web:3307dcb4c12529a7649f94',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const storage = getStorage(app);

export const db = getFirestore(app);
