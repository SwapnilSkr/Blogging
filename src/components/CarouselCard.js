import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setBlogContent } from '../redux/actions/AddBlogActions'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

function CarouselCard({blog}) {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleBlog = () => {
    dispatch(setBlogContent(blog))
    navigate(`/blog/${blog?._id}`)
  }
  return (
        <div className='flex flex-col w-full flex-wrap gap-2 items-start justify-between font-manrope absolute h-full p-6 text-white' key={blog?._id} style={{textOverflow:'ellipsis'}}>
            <img src={blog?.image} className='w-full h-full bg-gradient-to-b from-black/75 to-black/85 object-cover object-center absolute left-0 top-0'/>
            <div className='absolute w-full top-0 left-0 bg-gradient-to-b from-black/60 to-black/70 mix-blend-multiply h-full'></div>
            <h3 className='uppercase tracking-wider text-sm text-white border-b-4 border-red-600' style={{zIndex:1}}>Latest Updates</h3>
            <h2 className='font-playfair font-extrabold md:p-4 md:max-w-5xl italic text-3xl md:text-6xl animate-form' style={{color:'white'}}>{blog?.title}</h2>
            <p className='animate-form text-sm md:text-lg md:p-4 md:max-w-6xl'>{blog?.subtitle}</p>
            <div className='w-full flex items-center justify-between'>
            <p className='text-xs text-white capitalize text-center p-2 rounded-full border border-red-600 animate-form'>{blog?.genre}</p>
            <button onClick={handleBlog} style={{zIndex:1}} className='font-bold text-sm hover:underline transition-all self-end items-end flex flex-row'>Read More<ArrowOutwardIcon sx={{fontSize:'20px'}}/></button>
            </div>
        </div>
  )
}

export default CarouselCard