import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// var firebaseConfig = {
//   apiKey: "AIzaSyDLmnoBvnjOQ-AaJgDw1DnVBiTETbcp8LI",
//   authDomain: "the-net-ninja-sandbox.firebaseapp.com",
//   databaseURL: "https://the-net-ninja-sandbox.firebaseio.com",
//   projectId: "the-net-ninja-sandbox",
//   storageBucket: "the-net-ninja-sandbox.appspot.com",
//   messagingSenderId: "485942827092",
//   appId: "1:485942827092:web:1811d9d8f1f5fabcd5b5c1"
// };
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
