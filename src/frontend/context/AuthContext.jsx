import axios from "axios";
import { createContext, useState } from "react";



export const AuthContext = createContext();

export const AuthContextProvider = ({children})=> {

    const localStorageToken = JSON.parse(localStorage.getItem("loginCredential"))

    const [token, setToken]= useState(localStorage?.token)
    const [user,setUser] = useState(localStorage?.user)

    console.log(token,"token")

    const loginHandler = async(username,password) => {
            console.log(username,password,"hello")
        try{
          const result = await axios.post("/api/auth/login",{username,password})
          console.log(result)
          localStorage.setItem("users", JSON.stringify({encodedToken: result.data.encodedToken, userInfo: result.data.foundUser}))
          setToken(result.data.encodedToken);
            setUser(result.data.userInfo);

        }
        catch(err){
            console.log(err);
        }
    }

    return(
        <AuthContext.Provider value={{token,setToken,user,setUser,loginHandler}}>{children}</AuthContext.Provider>
    )

    
}