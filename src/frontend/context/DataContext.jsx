import { createContext, useReducer } from "react";
import { dataReducer, initialState, } from "../reducer/DataReducer";

export const DataContext = createContext()

export const DataContextProvider = ({children}) => {

    const [state,dispatch] = useReducer(dataReducer, initialState)
    console.log(state,"state")


    return(

        <DataContext.Provider value={{state,dispatch}}>{children}</DataContext.Provider>
    )
}