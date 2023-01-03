import React,{useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getProfileBlogsFromDb } from '../../redux/actions/GetAllBlogs';
import BlogList from '../../components/BlogList';
import Avatar from '../../images/avatar.png'

function Profile() {
    const {id} = useParams()
    const dispatch = useDispatch()
    const {blogList, profileBlogListLoading, profileBlogListError} = useSelector(state => state.blog)
    const {userInfo} = useSelector(state => state.userAuth)
    console.log(blogList);
    useEffect(() => {
        dispatch(getProfileBlogsFromDb(id))
    }, [])

    console.log(profileBlogListLoading);

  return (
    <>
    <div className='flex flex-col w-full flex-wrap pt-4'>
        <div className='w-full h-52 items-start overflow-hidden object-center flex'>
          <img src={id === userInfo?._id ? (userInfo?.img) : (blogList ? blogList[0]?.author?.img : Avatar)} className='h-full object-cover rounded-full p-0' style={{aspectRatio:1/1}}/>
          <h2 className='font-manrope text-4xl font-extrabold p-8'>{id === userInfo?._id ? (userInfo?.name) : (blogList && blogList[0]?.author?.name)}</h2>
        </div>
        {profileBlogListLoading && <p>Loading...</p>}
        {/* {blogListError && <p>{blogListError}</p>} */}
        <h2 className='py-8 font-playfair text-xl font-extrabold'>Blogs</h2>
        {!profileBlogListLoading && <BlogList blogList={blogList}/>}
        </div>
    </>
  )
}

export default Profile
