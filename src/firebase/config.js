import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyCVQRqg9DRzJVDAMa6dXUYtmXkvwhYtRYc",
  authDomain: "image-galary-3b415.firebaseapp.com",
  projectId: "image-galary-3b415",
  storageBucket: "image-galary-3b415.appspot.com",
  messagingSenderId: "1045385311530",
  appId: "1:1045385311530:web:70e0aebae42f9b764e9a53",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
