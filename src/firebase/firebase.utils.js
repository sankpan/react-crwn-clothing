import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
  apiKey: 'AIzaSyC4ch1zsF69Du9jEPF3zworDQygZC39tiY',
  authDomain: 'crwn-clothing-1ca1f.firebaseapp.com',
  databaseURL: 'https://crwn-clothing-1ca1f.firebaseio.com',
  projectId: 'crwn-clothing-1ca1f',
  storageBucket: 'crwn-clothing-1ca1f.appspot.com',
  messagingSenderId: '907172805887',
  appId: '1:907172805887:web:b0011ea29a5fadfd90e0ca'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
