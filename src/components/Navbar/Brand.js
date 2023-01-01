import React from 'react'
import { Link } from 'react-router-dom'
function Brand() {
  return (
    <div className='font-extrabold text-2xl'>
      <Link to={'/home'}>Blogging.</Link>
    </div>
  )
}

export default Brand