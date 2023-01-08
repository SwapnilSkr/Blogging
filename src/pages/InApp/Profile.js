import React,{useState,useEffect, useRef} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, useLocation } from 'react-router-dom'
import { getProfileBlogsFromDb } from '../../redux/actions/GetAllBlogs';
import BlogList from '../../components/BlogList';
import Avatar from '../../images/avatar.png'
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import EditProfile from '../../components/EditProfile';

function Profile() {
  const [show,setShow] = useState(false)
    const {id} = useParams()
    const profileRef = useRef()
    const {pathname} = useLocation()
    const dispatch = useDispatch()
    const {blogList, profileBlogListLoading, profileBlogListError, blogListLoading, profileBlogList} = useSelector(state => state.blog)
    const {userInfo} = useSelector(state => state.userAuth)
    console.log(profileBlogList);
    useEffect(() => {
        if(pathname.includes('profile')) dispatch(getProfileBlogsFromDb(id))
    }, [id])

    const handleShow = () => {
      setShow(prev => !prev)
    }

    console.log(profileBlogListLoading);

    const profileHead = document.getElementById('profileHead')

    window.addEventListener('scroll', (e) => {
        if(window.scrollY > 120){
          profileHead.classList.add('md:top-12','top-0')
          profileHead.classList.remove('-top-16')
        }
        else{
          profileHead.classList.add('-top-16')
          profileHead.classList.remove('md:top-12','top-0')
        }})

  return (
    <>
    <EditProfile show={show} handleShow={handleShow}/>
    <div className='flex flex-col w-full flex-wrap py-8'>
        <div id='profileHead' ref={profileRef} className='w-full fixed gap-4 left-0 px-2 md:px-16 py-2 -top-16 md:pt-4 h-16 bg-white border-b-2 border-gray-100 items-center md:items-center overflow-hidden object-center flex flex-row transition-all'>
          <img src={id === userInfo?._id ? (userInfo?.img || Avatar) : (profileBlogList && profileBlogList[0]?.author?.img || Avatar)} className='h-12 md:h-full object-cover rounded-full p-0' style={{aspectRatio:1/1}}/>
          <div className='font-manrope flex flex-col w-full'>
            <h2 className='text-md font-bold flex w-full items-center justify-between gap-2'>{id === userInfo?._id ? (userInfo?.name) : (profileBlogList && profileBlogList[0]?.author?.name)} {userInfo?._id === id && !show && <button onClick={handleShow} className='p-1 bg-gray-200 shadow-lg rounded-full flex items-center justify-center'><EditRoundedIcon sx={{fontSize:'16px'}}/></button>}</h2>
            <p className='text-xs text-gray-500'>@{profileBlogList && profileBlogList[0]?.author?.username}</p>
          </div>
        </div>
        <div className='w-full h-24 md:h-40 items-center md:items-start overflow-hidden object-center flex flex-row'>
          <img src={id === userInfo?._id ? (userInfo?.img || Avatar) : (profileBlogList && profileBlogList[0]?.author?.img || Avatar)} className='h-24 md:h-full object-cover rounded-full p-0' style={{aspectRatio:1/1}}/>
          <div className='font-manrope  p-8 flex flex-col gap-4'>
            <h2 className='text-4xl font-extrabold flex gap-4'>{id === userInfo?._id ? (userInfo?.name) : (profileBlogList && profileBlogList[0]?.author?.name)} {userInfo?._id === id && !show && <button onClick={handleShow} className='p-2 bg-gray-200 shadow-lg rounded-full flex items-center justify-center'><EditRoundedIcon/></button>}</h2>
            <p className='text-sm text-gray-500'>@{profileBlogList && profileBlogList[0]?.author?.username}</p>
          </div>
        </div>
        {profileBlogListLoading && <p>Loading...</p>}
        {/* {blogListError && <p>{blogListError}</p>} */}
        <h2 className='py-8 font-playfair text-xl font-extrabold'>Blogs</h2>
        {!profileBlogListLoading && !blogListLoading && <BlogList blogList={profileBlogList}/>}
        </div>
    </>
  )
}

export default Profile
