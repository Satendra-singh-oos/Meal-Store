import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useGlobalContext } from '../../ContextApi/context'
import './SinglePage.css'


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
        strArea,
        strInstructions,
        strYoutube,
      } = meal[0];
  return (
  

    <div className="singlemeal">
        
      <img src={strMealThumb} alt={strMeal} />
      
      <div className='singlemeal-heading'>
      <h2><span> 🥘  </span>{strMeal}</h2>
      <h2><span> 🧑‍🍳 </span>Area: {strArea}</h2>
         
      </div>

      <div className='singlemeal-sub'>

      <h1>
      <span> 🍴 How To Make </span>
      <p>{strInstructions}</p>
      </h1>

      </div>

      {/* <div className='singlemeal-vedio'>
        <video width="750" height="500" controls >
          <source src={strYoutube} type="video/mp4"/>
        </video>
      </div> */}

    </div>    
        

  
  )
}

export default SinglePage