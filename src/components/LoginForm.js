import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import '../styles/form.css'

import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { loginUser } from '../redux/actions/userAuthActions'

function LoginForm() {
    const [showPassword, setShowPassword] = useState(false)
    const [pass,setPass] = useState('')
    const [error, setError] = useState('')
    const dispatch = useDispatch()
    const user = useSelector(state => state.userAuth)
    const navigate = useNavigate()

    const [userObj, setUserObj] = useState({
      username: '',
      password: '',
  })

  const handleSubmit = async (e) => {
      e.preventDefault()
      try{
        console.log('user info: ',userObj);
          await dispatch(loginUser(userObj))
          navigate('/home')
      }
      catch(err){
          console.log(err)
      }
      // console.log('user created: ',userObj);
  }

  const handleUsername = (e) => {
      console.log(e.target.value)
      setUserObj(prev => {
          return {
              ...prev,
              username: e.target.value
          }
      })
  }
  
  const handlePassword = (e) => {
      console.log(e.target.value)
      setUserObj(prev => {
          return {
              ...prev,
              password: e.target.value
          }
      })
  }
    
  return (
    <div className='flex flex-col w-full p-10 px-6 md:p-10 gap-8'>
        <h2 className='font-manrope font-bold text-3xl'>Login</h2>
        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
            <div className='flex flex-col input-grp relative animate-form '>
            <label className='' htmlFor='email'>Username</label>
            <input required  onChange={handleUsername} placeholder='username' className='focus:outline-0 border-b-2 focus:border-b-blue-700 transition-colors p-2 pl-8' type='text' name='username' id='username'/>
            <p className='absolute bottom-0 left-0 p-2'>@</p>
            </div>
            <div className='flex flex-col input-grp relative animate-form delay-15'>
            <label htmlFor='password'>Password</label>
            <input required onChange={handlePassword} className='focus:outline-0 border-b-2 focus:border-b-blue-700 transition-colors pr-10 p-2' type={showPassword ? 'text':'password'} name='password' id='password'/>
            <button className='absolute bottom-0 right-0 p-2' onClick={()=>setShowPassword(prev=>!prev)} type='button'>{!showPassword ? 'Show' : 'Hide'}</button>
            </div>
            <p className='text-red-700'>{user?.error}</p>
            <button className='btn rounded-full bg-blue-700 hover:bg-blue-600 text-white px-4 py-2 transition-all' type='submit'>Login</button>
        </form>
        <p>Don't have an account? <Link className='hover:text-blue-700 hover:underline transition-all' to={'/user-authentication/signup'}>Signup</Link></p>
    </div>
  )
}

export default LoginForm