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
      username
    }).then(async()=>{
      await dispatch(registerUser({
        ...userInfo,
        name,
        username
      }))
      navigate('/')
    }).catch(err => {
      console.log(err.response.data.error);
      setError(prev=>err.response.data.error)
      dispatch(showAlert({msg: err.response.data.error, type: 'error'}))
    })
    
  }

  const handleName = (e) => {
    setName(prev=>e.target.value)
  }

  const handleUsername = (e) => {
    setUsername(prev=>e.target.value)
  }

  return (
    userInfo && <div className='flex flex-col w-full p-10 px-6 md:p-10 gap-8 animate-form'>
        <h2 className='font-manrope font-bold text-3xl'>You're just one step away from finishing the resgistration process!</h2>
        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
            <div className='flex flex-col input-grp relative'>
            <label className='' htmlFor='email'>Name</label>
            <input  required onChange={handleName} placeholder='John Smith' className='focus:outline-0 border-b-2 focus:border-b-blue-700 transition-colors p-2' type='text' name='name' id='name'/>
            </div>
            <div className='flex flex-col input-grp relative'>
            <label className='' htmlFor='email'>Username</label>
            <input required  onChange={handleUsername} placeholder='username' className='focus:outline-0 border-b-2 focus:border-b-blue-700 transition-colors p-2 pl-8' type='text' name='username' id='username'/>
            <p className='absolute bottom-0 left-0 p-2'>@</p>
            </div>
            <div className='flex flex-col input-grp relative'>
            <label className='' htmlFor='email'>Email</label>
            <p className='focus:outline-0 border-b-2 focus:border-b-blue-700 transition-colors p-2'>{userInfo.email}</p>
            </div>
            <p className='text-red-700'>{error}</p>
            <button className='btn rounded-full bg-blue-700 hover:bg-blue-600 text-white px-4 py-2 transition-all' type='submit'>Submit</button>
        </form>
      </div>
  )
}


export default ProfileForm