// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfsSf3u8U2aXAKao5y1ue4S_1mtOAQSpk",
  authDomain: "chatting-application-196e0.firebaseapp.com",
  projectId: "chatting-application-196e0",
  databaseURL: "https://chatting-application-196e0-default-rtdb.asia-southeast1.firebasedatabase.app",
  storageBucket: "chatting-application-196e0.firebasestorage.app",
  messagingSenderId: "74122304633",
  appId: "1:74122304633:web:39a431574ff698411ac8a8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default firebaseConfig
const db = getDatabase(app);


export { db };
