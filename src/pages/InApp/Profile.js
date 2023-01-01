import React,{useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getProfileBlogsFromDb } from '../../redux/actions/GetAllBlogs';
import BlogList from '../../components/BlogList';

function Profile() {
    const {id} = useParams()
    const dispatch = useDispatch()
    const {blogList, blogListLoding, blogListError} = useSelector(state => state.blog)
    console.log(blogList);
    useEffect(() => {
        dispatch(getProfileBlogsFromDb(id))
    }, [])

  return (
    <>
    <div>Profile {id}</div>
    <div className='flex flex-col w-full flex-wrap pt-4'>
          {blogListLoding && <p>Loading...</p>}
          {blogListError && <p>{blogListError}</p>}
          <h2 className='py-8 font-playfair text-xl font-extrabold'>Blogs</h2>
          <BlogList blogList={blogList}/>
        </div>
    </>
  )
}

export default Profile
