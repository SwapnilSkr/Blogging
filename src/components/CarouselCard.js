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
        <div className='flex flex-col w-full flex-wrap gap-2 items-start justify-between font-manrope absolute h-full p-6' key={blog?._id} style={{textOverflow:'ellipsis'}}>
            <h3 className='uppercase tracking-wider text-sm '>Recent Updates</h3>
            <h2 className='font-playfair font-extrabold italic text-3xl md:text-6xl animate-form'>{blog?.title}</h2>
            <p className='animate-form'>{blog?.subtitle}</p>
            <p className='text-sm text-blue-600 animate-form'>{blog?.genre}</p>
            <button onClick={handleBlog} className='font-bold text-sm hover:underline transition-all self-end items-end flex flex-row'>Read More<ArrowOutwardIcon sx={{fontSize:'20px'}}/></button>
        </div>
  )
}

export default CarouselCard