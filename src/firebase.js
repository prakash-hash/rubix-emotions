import firebase from 'firebase/app';
import 'firebase/database'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey:process.env.REACT_APP_API_KEY,
    authDomain:process.env.REACT_APP_AUTH_DOMAIN,
    projectId:process.env.REACT_APP_PROJECT_ID,
    storageBucket:process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId:process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId:process.env.REACT_APP_API_ID
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;