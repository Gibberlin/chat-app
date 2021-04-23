import firebase from "firebase/app";
import "firebase/auth";
import 'firebase/database';

const config = {
  apiKey: "AIzaSyClhMh7oOh8DWygQlErIfL2bA6ZdwQhZbM",
  authDomain: "chat-app-97590.firebaseapp.com",
  databaseURL: "https://chat-app-97590-default-rtdb.firebaseio.com",
  projectId: "chat-app-97590",
  storageBucket: "chat-app-97590.appspot.com",
  messagingSenderId: "687604172245",
  appId: "1:687604172245:web:3e30924a7e4bba15dae95c",
};
const app = firebase.initializeApp(config);
export const auth = app.auth(); 
export const database = app.database();