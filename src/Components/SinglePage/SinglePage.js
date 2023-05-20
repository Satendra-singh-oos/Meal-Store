import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useGlobalContext } from '../../ContextApi/context'


const SinglePage = () => {

    const {id} =useParams()
    // console.log(id);
    const {fetchMealById,meal}=useGlobalContext()

    useEffect(()=>{
        fetchMealById(id)
    },[fetchMealById,id])

    if (!meal) {
        return <div>Loading...</div>;
      }
    const {
        strMeal,
        strMealThumb,
        strCategory,
        strArea,
        strInstructions,
      } = meal[0];
  return (
    <div className='singlemeal'>

    <div className="singlemeal">
        
      <h2>{strMeal}</h2>
      <img src={strMealThumb} alt={strMeal} />
      <p>Category: {strCategory}</p>
      <p>Area: {strArea}</p>
      <p>Instructions: {strInstructions}</p>
    </div>    
        

    </div>
  )
}

export default SinglePage