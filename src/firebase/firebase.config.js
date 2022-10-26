// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.envREACT_APP_apiKey,
  authDomain: process.envREACT_APP_authDomain,
  projectId: process.envREACT_APP_projectId,
  storageBucket: process.envREACT_APP_storageBucket,
  messagingSenderId: process.envREACT_APP_messagingSenderId,
  appId: process.envREACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
