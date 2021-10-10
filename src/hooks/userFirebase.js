import initializeAuthintication from "../Firebase/Firebase.initialize";
import { getAuth, signInWithPopup, GoogleAuthProvider ,onAuthStateChanged,signOut} from "firebase/auth";
import { useEffect, useState } from 'react';




initializeAuthintication();



const FirebasUser=()=>{
    const [user,setUser]=useState({})
    const auth=getAuth();
    const GoogleProvider=new GoogleAuthProvider();
        const GoogleSign=()=>{
            signInWithPopup(auth,GoogleProvider)
            .then(result=>{
                console.log(result.user)
            })
        }

        // Login Out

        const loginOut=()=>{
                    signOut(auth)
                    .then(()=>{
                        setUser({})
                    })
        }

    // Useing Firebase Hook
        useEffect(()=>{
            onAuthStateChanged(auth,(user)=>{
                if(user){
                    setUser(user)
                }
            })
        },[])

        return{
            loginOut,user,GoogleSign
        }


}


export default FirebasUser;