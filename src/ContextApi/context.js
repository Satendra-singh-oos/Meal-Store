
import React, { createContext,useCallback,useContext, useState } from 'react'
import axios  from 'axios';


export const mealContext =createContext();


export const AppProvider = ({children}) =>{
  const [meals,setMeals]=useState([])
  const [categories,setCategories] = useState([])
  const [meal,setMeal]=useState(null)
  
  //fetching data from API 
  const fetchHomePageMeals  = useCallback((searchText)=>{
     axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
     .then(res =>{
      // console.log(res.data.meals)
      setMeals(res.data.meals)
    
    })

  },[])

//fetching the  category data from api
 //TO do so we need a handler function

 const fetchCategories = useCallback(()=>{
  axios.get(`https://www.themealdb.com/api/json/v1/1/categories.php`)
  .then(res=>{
    //console.log(res.data.categories);
     setCategories(res.data.categories)
    })
 },[])


 //fetching single recepie
 const fetchMealById= useCallback((searchId)=>{
  axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${searchId}`)
     .then(res =>{
      console.log(res.data.meals)
      setMeal(res.data.meals)
    
    })
 })


  return (
        <mealContext.Provider value={{fetchHomePageMeals,meals ,fetchCategories,categories ,fetchMealById,meal}}>{children}</mealContext.Provider>
      )
}


// we created a custom hook to make easy in importing the context in other files

export const useGlobalContext = () => {
  return useContext(mealContext);
};