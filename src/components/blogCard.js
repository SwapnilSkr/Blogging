import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setBlogContent } from '../redux/actions/AddBlogActions'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

function BlogCard({blog}) {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleBlog = () => {
    dispatch(setBlogContent(blog))
    navigate(`/blog/${blog._id}`)
  }
  return (
    <div className='flex flex-col md:w-[400px] flex-wrap gap-2 items-start font-manrope' key={blog._id}>
      <h2 className='font-playfair font-extrabold text-2xl'>{blog.title}</h2>
      <p className=' text-sm font-bold'>{blog.subtitle}</p>
      <p className='text-xs text-gray-500'>by @{blog.author.username}</p>
      <p className='text-sm text-blue-600'>{blog.genre}</p>
      <blockquote className='text-gray-700  text-sm text-justify'>{blog.content.slice(0,300)}...</blockquote>
      <button onClick={handleBlog} className='font-bold text-sm hover:underline transition-all items-end flex flex-row'>Read More<ArrowOutwardIcon sx={{fontSize:'20px'}}/></button>
    </div>
  )
}

export default BlogCard