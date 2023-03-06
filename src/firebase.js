import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDy3JblOD4O9gt-RquxDXmNhG2VrIOamvQ",
  authDomain: "react-auth-a6336.firebaseapp.com",
  projectId: "react-auth-a6336",
  storageBucket: "react-auth-a6336.appspot.com",
  messagingSenderId: "400220169980",
  appId: "1:400220169980:web:837c54141f7d7e389ed979"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;