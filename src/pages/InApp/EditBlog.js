import React,{useEffect, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setEditBlogContent, addBlog, updateBlog } from '../../redux/actions/AddBlogActions'
import { addBlogToDb } from '../../redux/apis/blog'

function EditBlog() {
    const [showAdd, setShowAdd] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {editBlogContent,blogContent, editBlogError, editBlogLoading} = useSelector(state => state.blog)
    const {userInfo} = useSelector(state => state.userAuth)
    const [blog,setBlog] = useState({
        title: editBlogContent?.title,
        subtitle: editBlogContent?.subtitle,
        genre: editBlogContent?.genre,
        content: editBlogContent?.content
    })

    useEffect(() => {
        setBlog(editBlogContent)
    },[])

    console.log(editBlogContent?.author);
    const handleSubmit = async (e) => {
        e.preventDefault()
        if(!showAdd) return
        try{
          console.log('blog info: ',blog);
            const res = await dispatch(updateBlog({...blog, author: userInfo?._id}))
            console.log(res);
            navigate(`/blog/${blogContent?._id}`)
        }
        catch(err){
            // console.log(err)
        }
        // console.log('user created: ',userObj);
    }

    const handleTitle = (e) => {
        setBlog(prev => {
            return {
                ...prev,
                title: e.target.value
            }
        })
    }
    const handleSubtitle = (e) => {
        setBlog(prev => {
            return {
                ...prev,
                subtitle: e.target.value
            }
        })
    }
    const handleGenre = (e) => {
        setBlog(prev => {
            return {
                ...prev,
                genre: e.target.value
            }
        })
    }
    const handleContent = (e) => {
        setBlog(prev => {
            return {
                ...prev,
                content: e.target.value
            }
        })
    }

    useEffect(()=>{
        if(blog?.title?.length > 0 && blog?.genre?.length > 0 && blog?.content?.length >= 10){
            setShowAdd(prev=>true)
            if(blog !== null) dispatch(setEditBlogContent(blog))
        }
        else{
            setShowAdd(prev=>false)
        }
    },[blog])
    

  return (
    <div className='flex flex-col items-start w-full gap-8 pt-2'>
        <div className='flex flex-row items-center justify-between w-full'>
            <h2 className='font-bold font-playfair text-4xl'>Update Blog</h2>
            <div className='flex flex-row gap-4'>
            {showAdd && <button onClick={handleSubmit} className='border border-black hover:bg-black hover:text-white shadow-md hover:-translate-y-1 transition-all p-2 rounded'>{editBlogError ? `${editBlogError}` : 'Update Blog'}</button>}
            {showAdd && <Link to='/edit/preview' className='bg-black text-white shadow-md hover:-translate-y-1 transition-all p-2 rounded'>Preview</Link>}
            </div>
        </div>
        <form onSubmit={handleSubmit} className='flex flex-col w-full font-manrope gap-6 relative'>
            <div className='flex flex-col input-grp relative animate-form gap-1'>
                <label htmlFor='title'>Title*</label>
                <input value={blog?.title} onChange={handleTitle} maxLength={70} required type='text' placeholder='Add a title of the blog. (Max. 150 characters)' className='bg-gray-100 focus:outline-0 focus:border-b-2 focus:border-b-black transition-colors p-2 pr-16' name='title' id='title'/>
                <p className='absolute bottom-0 right-0 p-2 text-xs'>{blog?.title?.length}/70</p>
            </div>
            <div className='flex flex-col input-grp relative animate-form gap-1 delay-15'>
                <label htmlFor='title'>Subtitle</label>
                <input value={blog?.subtitle} required type='text' onChange={handleSubtitle} maxLength={300} placeholder='Add a short description of the blog. (Optional)' className='bg-gray-100 focus:outline-0 focus:border-b-2 focus:border-b-black transition-colors p-2 pr-16' name='title' id='title'/>
                <p className='absolute bottom-0 right-0 p-2 text-xs'>{blog?.subtitle?.length}/300</p>
            </div>
            <div className='flex flex-col input-grp relative animate-form gap-1 delay-3'>
                <label htmlFor='title'>Tag*</label>
                <input value={blog?.genre} onChange={handleGenre} required type='text' placeholder='Add a single word tag that defines the genre of the article' className='bg-gray-100 focus:outline-0 focus:border-b-2 focus:border-b-black transition-colors p-2' name='title' id='title'/>
            </div>
            <div className='flex flex-col input-grp relative animate-form gap-1 delay-45'>
                <label htmlFor='content'>Content*</label>
                <textarea value={blog?.content} minLength={10} placeholder='Min. 500 characters' onChange={handleContent} required className='bg-gray-100 focus:outline-0 focus:border-b-2 focus:border-b-black transition-colors p-2' name='content' id='content' cols='30' rows='10'/>
            </div>
            
        </form>
    </div>
  )
}

export default EditBlog