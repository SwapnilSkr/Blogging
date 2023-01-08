import React from 'react'
import { Link } from 'react-router-dom'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
function SearchCard({item}) {
  console.log(item.author.name);
  console.log(item);
    return (
    <Link to={`/blog/${item?._id}`} className='flex flex-row w-full font-manrope'>
        <div className='flex flex-col w-full'>
            <h2 className='font-extrabold text-lg'>{item?.title}</h2>
            <p className=' text-xs italic'>{item?.subtitle} ⸱ {item?.genre}, by @{item?.author?.username}</p>
        </div>
        <ArrowOutwardIcon/>
    </Link>
  )
}

export default SearchCard