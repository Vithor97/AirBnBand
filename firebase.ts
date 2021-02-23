import * as firebase from 'firebase';

const config =  {
    apiKey: "AIzaSyCIFq1PsVGNAjUL-yOe5Wh6SjIt_CBsT4k",
    authDomain: "airbnband-256a5.firebaseapp.com",
    databaseURL: "https://airbnband-256a5.firebaseio.com",
    projectId: "airbnband-256a5",
    storageBucket: "airbnband-256a5.appspot.com",
    messagingSenderId: "779337808433",
    appId: "1:779337808433:web:0a5748522b4cfb47587310",
    measurementId: "G-H45MHTMHYP"
  };

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}


export default firebase;