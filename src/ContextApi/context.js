import React, { createContext,useContext } from 'react'

export const mealContext =createContext();


export const AppProvider = ({children}) =>{
      return (
        <mealContext.Provider>{children}</mealContext.Provider>
      )
}

// we created a custom hook to make easy in importing the context in other files

export const useGlobalContext = () => {
  return useContext(mealContext);
};