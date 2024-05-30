import { createContext, useReducer } from "react"
import appReducer from "./appReducer";
let initialState={
    transactions:[]
}
export const GlobalContext=createContext(initialState);


export const GlobalProvider=({children})=>{
    const[state,dispatch]=useReducer(appReducer,initialState);
    function addTransaction(newTransaction){
      dispatch({
        type: "ADD_TRANSACTION",
        payload: newTransaction,
      });
    };
    return <GlobalContext.Provider value={{
        transactions:state.transactions,addTransaction:addTransaction}}>
        {children}
    </GlobalContext.Provider>
}