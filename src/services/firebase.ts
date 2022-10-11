import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyCFrfwbeFIRt5YXSMNsVni-eFfNttgQ9Nc',
  authDomain: 'auth-9e11a.firebaseapp.com',
  projectId: 'auth-9e11a',
  storageBucket: 'auth-9e11a.appspot.com',
  messagingSenderId: '920615572383',
  appId: '1:920615572383:web:f2f2b7f1765402575c63aa'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);