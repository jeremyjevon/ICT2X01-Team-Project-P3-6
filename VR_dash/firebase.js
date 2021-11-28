// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_Nu19H5ay2oS06T8yT8kGHLsUJffgXGY",
  authDomain: "ict2x01web.firebaseapp.com",
  projectId: "ict2x01web",
  storageBucket: "ict2x01web.appspot.com",
  messagingSenderId: "695156157782",
  appId: "1:695156157782:web:284ba94dddc3a89c163af7"
};
// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}

const auth = firebase.auth()

export const db = firebase.firestore();

export default db;
export {auth};