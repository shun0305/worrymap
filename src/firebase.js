import firebase from "firebase";
import 'firebase/firestore';


const firebaseApp = firebase.initializeApp({
    apiKey: "API-KEY",
    authDomain: "hackathon01-bee0f.firebaseapp.com",
    projectId: "hackathon01-bee0f",
    storageBucket: "hackathon01-bee0f.appspot.com",
    messagingSenderId: "764649534012",
    appId: "1:764649534012:web:fd3709056e0781aea50939"
});
const db = firebaseApp.firestore().collection('warn');
const storage = firebase.storage();

//export const warnRef = db.ref('warn');
// export const pushWarn = ({ username, text, imgurl }) => {
//     warnRef.push({ username, text, imgurl });
// };


export { db, storage };