import React,{useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import BlogCard from '../../components/BlogCard';
import { getAllBlogsFromDb } from '../../redux/actions/GetAllBlogs';
import Carousel from '../../components/Carousel';
import BlogList from '../../components/BlogList';

function Home() {
    const dispatch = useDispatch()
    const {blogList, blogListLoding, blogListError} = useSelector(state => state.blog)
    console.log(blogList);
    useEffect(() => {
        dispatch(getAllBlogsFromDb())
    }, [])
  return (
    <div className='flex flex-col w-full flex-wrap pt-4'>
      {blogListLoding && <p>Loading...</p>}
      {blogListError && <p>{blogListError}</p>}
      <div className='h-full bg-red-600 flex flex-row rounded overflow-hidden'>
      <Carousel blogs={blogList?.slice(0,4)}/>
      </div>
      <h2 className='py-8 font-playfair text-xl font-extrabold'>Blogs</h2>
      <BlogList blogList={blogList?.slice(4)}/>
    </div>
  )
}

export default Home