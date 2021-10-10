import { createContext } from "react";
import FirebasUser from './../../hooks/userFirebase';


 export const AuthContext=createContext();


const   AuthProvider=({children})=>{
    const AllContext=FirebasUser();

    return(
        <AuthContext.Provider   value={AllContext} >
                {children}
     </AuthContext.Provider>
    )
    
};


export default AuthProvider;