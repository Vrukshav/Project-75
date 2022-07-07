import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyAT_1hSbfFcOJ-cHuhgEnpXPrVMRE4oVDQ",
  authDomain: "e-ride-d04fc.firebaseapp.com",
  projectId: "e-ride-d04fc",
  storageBucket: "e-ride-d04fc.appspot.com",
  messagingSenderId: "390753424039",
  appId: "1:390753424039:web:278c6656e73527bbbc4182"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
