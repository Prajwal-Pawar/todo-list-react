import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

// firebase configs
const firebaseConfig = {
  apiKey: 'AIzaSyBNNBUo8pL4Uow3hF3Q_xiQmpnjsQp4cPs',
  authDomain: 'to-do-react-975ff.firebaseapp.com',
  projectId: 'to-do-react-975ff',
  storageBucket: 'to-do-react-975ff.appspot.com',
  messagingSenderId: '792708285646',
  appId: '1:792708285646:web:697fe65e19a56545e3bc9f',
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const firestore = app.firestore();
