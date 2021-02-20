import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDKoOvF8xZDKkOvyHk1HqBA3BArl1iX_HM",
  authDomain: "slack-messanger-app.firebaseapp.com",
  projectId: "slack-messanger-app",
  storageBucket: "slack-messanger-app.appspot.com",
  messagingSenderId: "804852664211",
  appId: "1:804852664211:web:bcfb9e7dd0ac293ec00a66",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, db, provider };
