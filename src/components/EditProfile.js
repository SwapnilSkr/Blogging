import React, { useState } from 'react'
import '../styles/form.css'
import { useSelector, useDispatch } from 'react-redux'
import { registerUser } from '../redux/actions/userAuthActions'
import { registerUserApi } from '../redux/apis/registerUser'
import { showAlert } from '../redux/actions/alertActions'
import { useNavigate } from 'react-router-dom'
import ErrorIcon from '@mui/icons-material/Error';
import CancelIcon from '@mui/icons-material/Cancel';
import Avatar from '../images/avatar.png'
import CameraAltIcon from '@mui/icons-material/CameraAlt';

function EditProfile({show,handleShow}) {
  const {userInfo} = useSelector(state => state.userAuth)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [error,setError] = useState('')
    const [userObj, setUserObj] = useState(userInfo)


  const handleSubmit = async (e) => {
    e.preventDefault()
    if(userObj?.username === ''){
      setError(prev=>'Please fill all the fields')
      return
    }
    await registerUserApi({
      ...userInfo,
      ...userObj
    }).then(async(res)=>{
      await dispatch(registerUser(res))
      navigate('/home')
    }).catch(err => {
      console.log(err.response.data.error);
      setError(prev=>err.response.data.error)
      dispatch(showAlert({msg: err.response.data.error, type: 'error'}))
    })
    
  }

  const handleImage = async (e) => {
    const img = e.target.files[0]
    const imgBase64 = await convertTobase64(img)
    console.log(img);
    console.log(imgBase64);
    setUserObj(prev => {
        return {
            ...prev,
            img: imgBase64,
            imgName: img.name
        }
    })
}

const convertTobase64 = (file) => {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader()
        fileReader.readAsDataURL(file)

        fileReader.onload = () => {
            resolve(fileReader.result)
        }

        fileReader.onerror = (error) => {
            reject(error)
        }
    })
}

const handleEmail = (e) => {
    console.log(e.target.value)
    setUserObj(prev => {
        return {
            ...prev,
            email: e.target.value
        }
    })
}

  const handleName = (e) => {
    setUserObj(prev => {
        return {
            ...prev,
            name: e.target.value
        }
    })
  }

    const handleDescription = (e) => {
        setUserObj(prev => {
            return {
                ...prev,
                description: e.target.value
            }
        })
    }


    return (
    userInfo && <div className={`font-manrope fixed bottom-0 transition-all rounded-t-[24px] z-10 left-0  w-full bg-gray-200 flex flex-col px-8 gap-4 ${show ? 'py-8 max-h-[680px]' : 'py-0 h-0'}`}>
        <h2 className=' font-bold text-3xl container flex items-center justify-between'>Update Your Profile <button className='self-end' onClick={handleShow}><CancelIcon fontSize='lg'/></button></h2>
        <form onSubmit={handleSubmit} className='flex flex-col gap-4 container'>
            <div className='flex flex-col input-grp relative animate-form '>
            <label className='' htmlFor='email'>Name</label>
            <input  value={userObj?.name} required onChange={handleName} placeholder='Enter your full name' className='focus:outline-0 border-b-2 focus:border-b-black transition-colors p-2' type='text' name='name' id='name'/>
            </div>
            <div className='flex flex-col input-grp relative animate-form'>
            <label className='' htmlFor='email'>Email</label>
            <input value={userObj?.email} required onChange={handleEmail} className='focus:outline-0 border-b-2 focus:border-b-black transition-colors p-2' type='email' name='email' id='email'/>
            </div>
            <div className='flex flex-col input-grp relative animate-form gap-1 delay-45'>
                <label htmlFor='desc'>Description</label>
                <textarea onChange={handleDescription} value={userObj?.description} minLength={200} placeholder='Add a description of yourself' className='bg-gray-100 focus:outline-0 focus:border-b-2 focus:border-b-black transition-colors p-2' name='desc' id='desc' cols='30' rows='4'/>
                <p className='absolute bottom-0 right-0 p-2 text-xs'>{userObj?.description?.length} {userObj?.description && 'characters'} (Min. 200 characters)</p>
            </div>
            <div className='flex flex-col input-grp relative animate-form gap-1 delay-45'>
                <label htmlFor='image' className='rounded-full flex self-start bg-gray-100 hover:outline-0 hover:border-b-2 hover:border-b-black transition-colors p-2'><img className='w-40 rounded-full h-40 object-cover object-center' src={userObj?.img || Avatar}/></label>
                <input required onChange={handleImage} type='file' className='hidden' name='image' id='image' accept='.png, .jpg, .jpeg'/>
            </div>
            <p className='text-red-700'>{error}</p>
            <button className='btn rounded-[8px]  bg-black text-white px-4 py-2 transition-all' type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default EditProfile