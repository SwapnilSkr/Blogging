import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import '../styles/form.css'
import { useSelector, useDispatch } from 'react-redux'
import { registerUser } from '../redux/actions/userAuthActions'
import { registerUserApi } from '../redux/apis/registerUser'
import { showAlert } from '../redux/actions/alertActions'
import { useNavigate } from 'react-router-dom'
import ErrorIcon from '@mui/icons-material/Error';

function ProfileForm() {
  const {userInfo} = useSelector(state => state.userAuth)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [img, setImg] = useState(null)
  const [imgName, setImgName] = useState(null)
  const [error,setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if(name === '' || username === ''){
      setError(prev=>'Please fill all the fields')
      return
    }
    registerUserApi({
      ...userInfo,
      name,
      username,
      img,
      imgName
    }).then(async()=>{
      await dispatch(registerUser({
        ...userInfo,
        name,
        username,
        img,
        imgName
      }))
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
    setImg(prev => imgBase64)
    setImgName(img.name)
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

  const handleName = (e) => {
    setName(prev=>e.target.value)
  }

  const handleUsername = (e) => {
    setUsername(prev=>e.target.value)
  }

  return (
    userInfo && <div className='flex flex-col w-full p-10 px-6 md:p-10 gap-8'>
        <h2 className='font-manrope font-bold text-3xl'>You're just one step away from finishing the resgistration process!</h2>
        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
            <div className='flex flex-col input-grp relative animate-form '>
            <label className='' htmlFor='email'>Name</label>
            <input  required onChange={handleName} placeholder='John Smith' className='focus:outline-0 border-b-2 focus:border-b-blue-700 transition-colors p-2' type='text' name='name' id='name'/>
            </div>
            <div className='flex flex-col input-grp relative animate-form delay-15'>
            <label className='' htmlFor='email'>Username</label>
            <input required  onChange={handleUsername} placeholder='username' className='focus:outline-0 border-b-2 focus:border-b-blue-700 transition-colors p-2 pl-8' type='text' name='username' id='username'/>
            <p className='absolute bottom-0 left-0 p-2'>@</p>
            </div>
            <div className='flex flex-col input-grp relative animate-form delay-3'>
            <label className='' htmlFor='email'>Email</label>
            <p className='focus:outline-0 border-b-2 focus:border-b-blue-700 transition-colors p-2'>{userInfo.email}</p>
            </div>
            <div className='flex flex-col input-grp relative animate-form gap-1 delay-45'>
                <label htmlFor='image' className='bg-gray-100 hover:outline-0 hover:border-b-2 hover:border-b-black transition-colors p-2'>{img ? <img className='w-40 rounded-full h-40 object-cover object-center' src={img}/> : 'Upload Avatar Image'}</label>
                <input required onChange={handleImage} type='file' className='hidden' name='image' id='image' accept='.png, .jpg, .jpeg'/>
            </div>
            <p className='text-red-700'>{error}</p>
            <button className='btn rounded-full bg-blue-700 hover:bg-blue-600 text-white px-4 py-2 transition-all' type='submit'>Submit</button>
        </form>
      </div>
  )
}


export default ProfileForm