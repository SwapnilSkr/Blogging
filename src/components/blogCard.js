import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setBlogContent } from '../redux/actions/AddBlogActions'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

function BlogCard({blog}) {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleBlog = async () => {
    await dispatch(setBlogContent(blog))
    navigate(`/blog/${blog._id}`)
  }
  return (
    <div className='flex flex-1 flex-col w-full flex-wrap gap-2 items-start font-manrope' key={blog._id} style={{flexBasis:'30%'}}>
      <p className='text-sm capitalize text-blue-600'>{blog.genre}</p>
      <img src={blog?.image} className='w-full bg-black object-cover'/>
      <h2 className='font-playfair font-extrabold text-2xl'>{blog.title}</h2>
      <p className=' text-sm italic'>{blog.subtitle}</p>
      {/* <p className='text-xs text-gray-500'>by @{blog.author.username}</p> */}
      {/* <blockquote className='text-gray-700  text-sm text-justify'>{blog.content.slice(0,300)}...</blockquote> */}
      <button onClick={handleBlog} className='font-bold text-sm hover:underline transition-all items-center gap-1 flex flex-row'>Read More<ArrowCircleRightIcon sx={{fontSize:'12px'}}/></button>
    </div>
  )
}

export default BlogCard