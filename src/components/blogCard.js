import React from 'react'
import { Link,useNavigate,useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setBlogContent } from '../redux/actions/AddBlogActions'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import '../styles/blogcard.css'

function BlogCard({blog}) {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {pathname} = useLocation()
  const handleBlog = async () => {
    await dispatch(setBlogContent(blog))
    navigate(`/blog/${blog._id}`)
  }
  return (
    <div className={`flex ${pathname.includes('blog') ? 'flex-col py-2 gap-1' : 'flex-row p-4 gap-4 '} w-full items-stretch font-manrope border-t-2 border-gray-200`} key={blog._id}>
      <img src={blog?.image} className='w-60 bg-black rounded object-cover'/>
      <div className='flex flex-col justify-evenly p-2'>

      <h2 className='font-manrope font-extrabold text-2xl'>{blog.title}</h2>
      <p className='text-sm capitalize text-blue-600'>{blog.genre}</p>
      <p className=' text-sm italic'>{blog.subtitle}</p>
      {/* <p className='text-xs text-gray-500'>by @{blog.author.username}</p> */}
      {/* <blockquote className='text-gray-700  text-sm text-justify'>{blog.content.slice(0,300)}...</blockquote> */}
      <button onClick={handleBlog} className='font-bold text-sm hover:underline transition-all items-center gap-1 flex flex-row'>Read More<ArrowCircleRightIcon sx={{fontSize:'12px'}}/></button>
      </div>
    </div>
  )
}

export default BlogCard