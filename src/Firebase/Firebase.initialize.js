import firebaseConfig from "./Firebase.config";
import { initializeApp } from 'firebase/app';


const initializeAuthintication=()=>{
    initializeApp(firebaseConfig);
}

export  default initializeAuthintication