import React, { useEffect } from 'react'
import { useGlobalContext } from '../../ContextApi/context'
import "./Categories.css"
import { NavLink } from 'react-router-dom'
const Categories = () => {
 
 const{fetchCategories,categories}= useGlobalContext()

 useEffect(()=>{
  fetchCategories()
 },[fetchCategories])

  return (
    <div className='categories'>
      {categories.map((categorie)=>(
        <NavLink key={categorie.idCategory} to={`categorie/${categories.strCategory}`}>
          <img src={categorie.strCategoryThumb} alt='categorie-img'/>
          <h4>{categorie.strCategory}</h4>
        </NavLink>
      ))}
    </div>
  )
}

export default Categories