import React from 'react'
import { Link } from 'react-router-dom'
import './css/Categories.css'

const Category = ({linkTo, name, image}) => {
  return (
    <div className='Category'>
      <Link to={linkTo ? '/categories/' + linkTo : '/categories'}>
        <h3>{name}</h3>
        <img src={image} alt={name} />
        <p>See More</p>
      </Link>
    </div>
  )
}

export default Category
