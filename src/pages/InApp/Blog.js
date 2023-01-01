import React, { useEffect, useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { useParams,useLocation, Link, useNavigate } from 'react-router-dom'
import { getBlogFromDb, getAllBlogsFromDb } from '../../redux/actions/GetAllBlogs'
import BlogCard from '../../components/BlogCard';
import { setEditBlogContent} from '../../redux/actions/AddBlogActions'
import EditRoundedIcon from '@mui/icons-material/EditRounded';

function Blog() {
    const {blogContent, editBlogContent, blogList} = useSelector(state => state.blog)
    console.log('blogContent: ',blogContent);
    console.log('editBlogContent: ',editBlogContent);
    const {userInfo} = useSelector(state => state.userAuth)
    console.log('blogList: ',blogList);
    const {id} = useParams()
    const {pathname} = useLocation()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    console.log(blogContent?.author);
    const [blog, setBlog] = useState(null)
    useEffect(() => {
      console.log(pathname);
      if(pathname === `/blog/${id}`)  
      {
        if(id !== null ){
          dispatch(getBlogFromDb(id))
          dispatch(getAllBlogsFromDb())
        }
      }
    },[pathname])

    useEffect(() => {
      if(pathname === '/edit/preview')
        setBlog(editBlogContent)
      else setBlog(blogContent)
    },[pathname, blogContent, editBlogContent])

    const handleEdit = async () => {
      console.log('Edit');
      await dispatch(setEditBlogContent(blog))
      navigate(`/edit`)
    }
  return (
    <div className='flex flex-col md:flex-row gap-4 py-4'>
      <div className='flex flex-col items-start gap-4 font-manrope' style={{flexBasis:'95%'}}>
          <div className='flex flex-row items-center justify-between w-full'>
            {blog?.author && <p className='text-sm font-bold'>{new Date(blog?.createdAt).toString()}</p>}    
            {blog?.author && blog?.author._id === userInfo?._id && !pathname.endsWith('/preview') && 
            <button onClick={handleEdit} title='Edit Blog'>
              <EditRoundedIcon/>
            </button>}
          </div>
          <p className='text-5xl font-playfair font-extrabold'>{blog?.title}</p>
          <p className='text-xl'>{blog?.subtitle}</p>
          <p className='text-sm'>{blog?.genre}</p>
          <p className='text-sm text-justify'>{blog?.content}</p>
          <p className='text-sm text-justify'>{blog?.content}</p>
          {blog?.author && <p className='text-sm'>- by, <span className='font-medium'>{blog?.author?.name}</span>, @{blog?.author?.username}</p>}
          {blog?.author && !pathname.endsWith('/preview') &&
          <Link to={`/profile/${blog?.author?._id}`} className='p-4 rounded self-end bg-gradient-to-b from-black/70 to-black/95 text-white hover:shadow-lg hover:cursor-pointer'>
            {blog?.author?._id === userInfo?._id ? <p className='text-sm'>Check all your blogs {blog?.author?.name.split(' ')[0]}</p> : <p className='text-sm'><span className='font-bold'>Read More</span> blogs posted by - {blog?.author?.name}</p>}
          </Link>}
      </div>
      {!pathname.endsWith('/preview') && 
      <div className='font-manrope md:sticky top-0 border-t-2 md:border-l-2 md:border-t-0 pt-4 md:pl-4' style={{flexBasis:'20%'}}>
        <h3 className='border-b-4 border-red-600 font-bold'>Latest Updates</h3>
        <div className='flex flex-col gap-4'>
          {blogList?.slice(0,4)?.map((blog) => (
            <BlogCard key={blog._id} blog={blog}/>
          ))}
        </div>
      </div>}
    </div>
  )
}

export default Blog