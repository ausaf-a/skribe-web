import * as firebase from "firebase/app";

import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";
import * as React from "react";

firebase.initializeApp({
  apiKey: "AIzaSyASH2oed3YNiVdIKTD1iPosZ3FNakQUpuU",
  authDomain: "skribe-210dc.firebaseapp.com",
  databaseURL: "https://skribe-210dc.firebaseio.com",
  projectId: "skribe-210dc",
  storageBucket: "skribe-210dc.appspot.com",
  messagingSenderId: "6319386304",
  appId: "1:6319386304:web:f282a25f7ba3ea54958725",
  measurementId: "G-56KE7L1CHE",
});


export default firebase;
export const auth = firebase.auth(); 
export const firestore = firebase.firestore(); 