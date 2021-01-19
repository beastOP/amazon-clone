import firebase from 'firebase'

// configs of firebase
const firebaseConfig = {
  apiKey: "AIzaSyANNumnNWp_xIoblmkvaFr7AMu8q5H-yl8",
  authDomain: "clone-49e3e.firebaseapp.com",
  projectId: "clone-49e3e",
  storageBucket: "clone-49e3e.appspot.com",
  messagingSenderId: "995754248090",
  appId: "1:995754248090:web:133fe0422d173b330d9c23",
  measurementId: "G-8GNDBMYXJ7"
};
// Initialize Firebase
const _firebase = firebase.initializeApp(firebaseConfig);

const db = _firebase.firestore()
const auth = firebase.auth()

export {db, auth}
