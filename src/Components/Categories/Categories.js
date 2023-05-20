import React, { useEffect } from 'react'
import { useGlobalContext } from '../../ContextApi/context'
import "./Categories.css"
const Categories = () => {
 
 const{fetchCategories,categories}= useGlobalContext()

 useEffect(()=>{
  fetchCategories()
 },[fetchCategories])

  return (
    <div className='categories'>
      {categories.map((categorie)=>(
        <div key={categorie.idCategory}>
          <img src={categorie.strCategoryThumb} alt='categorie-img'/>
          <h4>{categorie.strCategory}</h4>
        </div>
      ))}
    </div>
  )
}

export default Categories