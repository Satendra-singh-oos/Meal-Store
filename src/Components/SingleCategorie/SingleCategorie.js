import React, { useEffect } from 'react'
import { useGlobalContext } from '../../ContextApi/context'



const SingleCategorie = () => {

    const{fetchMealByCategorie,categorie}=useGlobalContext()
    useEffect(()=>{
        fetchMealByCategorie()
    },[fetchMealByCategorie])
    
  return (
    <div>SingleCategorie</div>
  )
}

export default SingleCategorie