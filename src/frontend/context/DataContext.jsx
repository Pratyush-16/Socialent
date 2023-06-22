import { createContext, useContext, useEffect, useReducer } from "react";
import { dataReducer, initialState, } from "../reducer/DataReducer";
import { AuthContext } from "./AuthContext";
import {getServerData } from "../services/DataServices";

export const DataContext = createContext()

export const DataContextProvider = ({children}) => {

    const [state,dispatch] = useReducer(dataReducer, initialState)
    const {token, user} = useContext(AuthContext)

    console.log(user)


    useEffect(() => {
      
        getServerData(dispatch,token, user)
       
    },[token, user])




    return(

        <DataContext.Provider value={{state,dispatch}}>{children}</DataContext.Provider>
    )
}