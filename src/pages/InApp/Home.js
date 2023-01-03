import React,{useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import BlogCard from '../../components/BlogCard';
import { getAllBlogsFromDb } from '../../redux/actions/GetAllBlogs';
import Carousel from '../../components/Carousel';
import BlogList from '../../components/BlogList';
import { useLocation } from 'react-router-dom';

function Home() {
    const dispatch = useDispatch()
    const {pathname} = useLocation()
    const {blogList, blogListLoading, blogListError} = useSelector(state => state.blog)
    console.log('Home: ',blogList);
    useEffect(() => {
        if(pathname === '/home') dispatch(getAllBlogsFromDb())
    }, [])
  return (
    <div className='flex flex-col w-full flex-wrap py-4'>
      <div className='h-full flex flex-row rounded overflow-hidden'>
      <Carousel blogs={blogList?.slice(0,4)}/>
      </div>
      <h2 className='py-8 font-playfair text-xl font-extrabold'>Recents Posts</h2>
      {blogListLoading && <p>Loading...</p>}
      {/* {blogListError && <p>{blogListError}</p>} */}
      {!blogListLoading && <BlogList blogList={blogList && blogList}/>}
    </div>
  )
}

export default Home