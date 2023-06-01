var firebaseConfig = {
    apiKey: "AIzaSyD6dl81vFiThjWy6D6XaEr_Qr4UQpD307A",
    authDomain: "learn-firebase-8420d.firebaseapp.com",
    databaseURL: "https://learn-firebase-8420d.firebaseio.com",
    projectId: "learn-firebase-8420d",
    storageBucket: "learn-firebase-8420d.appspot.com",
    messagingSenderId: "993558558825",
    appId: "1:993558558825:web:ba7d10ee86d0aa80748af8",
    measurementId: "G-VT6VDTBMSH"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.database();
const fstore = firebaseApp.firestore();
const auth = firebaseApp.auth();
const storage = firebaseApp.storage();
