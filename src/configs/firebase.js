import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

// firebase configs
const firebaseConfig = {
  apiKey: 'AIzaSyAE54gHTKrylTtbX7jsNKySuFQzmJBgdRI',
  authDomain: 'to-do-react-3c855.firebaseapp.com',
  projectId: 'to-do-react-3c855',
  storageBucket: 'to-do-react-3c855.appspot.com',
  messagingSenderId: '126889375973',
  appId: '1:126889375973:web:13b2d111f980cbbf58bc0c',
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const firestore = app.firestore();
