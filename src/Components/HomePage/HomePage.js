import React, { useCallback, useEffect, useState } from 'react'
import "./HomePage.css"
import { useGlobalContext } from '../../ContextApi/context'
import { NavLink } from 'react-router-dom'


const HomePage = () => {

  const [searchQuery,setSearchQuery] =useState("")

  const {fetchHomePageMeals,meals} =useGlobalContext()

  const fetchMealsHandler = useCallback(()=>{
    fetchHomePageMeals(searchQuery)
  },[searchQuery,fetchHomePageMeals])

  // console.log(setSearchQuery);

  return (
    <div className='homepage'>
      {/* Search Fields*/}
      <div className='home-search'>

        <input type='text' 
        placeholder="Search Your Meal Here.." 
        value={searchQuery}
        onChange={(e)=>setSearchQuery(e.target.value)}
        />

        <button onClick={fetchMealsHandler}>Search Meal</button>
      
      </div>
 
      <div className='home-meals-grid'>
         {
          
          meals ? (
            meals.map((meal)=>(
              <NavLink className='home-meal' key={meal.idMeal} to={`meal/${meal.idMeal}`}>
                <h4>{meal.strMeal}</h4>
                <img src={meal.strMealThumb} alt='meal-img'/>
              </NavLink>
            ))
          ):(<h2>No Meals Found In DataBase...</h2>)
         }
      </div>
    </div>
  )
}

export default HomePage