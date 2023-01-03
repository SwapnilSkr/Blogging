import React from 'react'
import { Link } from 'react-router-dom'
function Brand({size,color}) {
  return (
    <div title='Home' className={`font-extrabold capitalize font-playfair text-${color} text-${size}xl`}>
      <Link to={'/home'}>Blogging.</Link>
    </div>
  )
}

export default Brand