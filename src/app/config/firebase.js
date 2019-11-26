import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/database";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAwsZf28_YF1WFoIZ6viTNG8PGQF4EEVEw",
  authDomain: "react-events-85f7c.firebaseapp.com",
  databaseURL: "https://react-events-85f7c.firebaseio.com",
  projectId: "react-events-85f7c",
  storageBucket: "react-events-85f7c.appspot.com",
  messagingSenderId: "76341212857",
  appId: "1:76341212857:web:9062b79ddf6952886c8d68",
  measurementId: "G-T93DY8XB66"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
