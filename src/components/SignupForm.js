import React,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import '../styles/form.css'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { registerUser } from '../redux/actions/userAuthActions'



function SignupForm() {
    const [showPassword, setShowPassword] = useState(false)
    const [showCPassword, setShowCPassword] = useState(false)
    const [pass,setPass] = useState('')
    const [cPass,setCPass] = useState('')
    const [error, setError] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {userInfo,loading} = useSelector(state => state.userAuth)

    const [userObj, setUserObj] = useState({
        email: '',
        password: '',
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        if(error === '')
        {
            try{
                await dispatch(registerUser(userObj))
                console.log('user created: ',userObj)
                navigate('/user-authentication/profile')
            }
            catch(err){
                console.log('Err: ',err.message)
                setError(prev=>err.message)
            }
        }
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

    const handlePassword = (pass) => {
        console.log(pass)
        setUserObj(prev => {
            return {
                ...prev,
                password: pass
            }
        })
    }

    useEffect(()=>{
        if(pass === cPass){
            console.log('passwords match')
            setError('')
            handlePassword(pass)
        }
        else{
            console.log('passwords do not match')
            setError('Passwords do not match')
            handlePassword('')
        }
    },[pass,cPass])

    useEffect(()=>{
        console.log(userObj)
    },[userObj])
    
  return (
    <div className='flex flex-col w-full p-10 px-6 md:p-10 gap-8'>
        <h2 className='font-manrope font-bold text-3xl'>Sign Up</h2>
        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
            <div className='flex flex-col input-grp relative animate-form'>
            <label className='' htmlFor='email'>Email</label>
            <input required onChange={handleEmail} className='focus:outline-0 border-b-2 focus:border-b-blue-700 transition-colors p-2' type='email' name='email' id='email'/>
            </div>
            <div className='flex flex-col input-grp relative animate-form delay-15'>
            <label htmlFor='password'>Password</label>
            <input required onChange={(e)=>setPass(prev=>e.target.value)} className='focus:outline-0 border-b-2 focus:border-b-blue-700 transition-colors pr-10 p-2' type={showPassword ? 'text':'password'} name='password' id='password'/>
            <button disabled={loading} className='absolute bottom-0 right-0 p-2' onClick={()=>setShowPassword(prev=>!prev)} type='button'>{!showPassword ? 'Show' : 'Hide'}</button>
            </div>
            <div className='flex flex-col input-grp relative animate-form delay-3'>
            <label htmlFor='password'>Confirm Password</label>
            <input required onChange={(e)=>setCPass(prev=>e.target.value)} className=' focus:outline-0 border-b-2 focus:border-b-blue-700 transition-colors pr-10 p-2' type={showCPassword ? 'text':'password'} name='password' id='password'/>
            <button disabled={loading} className='absolute bottom-0 right-0 p-2' onClick={()=>setShowCPassword(prev=>!prev)} type='button'>{!showCPassword ? 'Show' : 'Hide'}</button>
            </div>
            <p className='text-red-700'>{error}</p>
            <button disabled={loading} className='btn rounded-full bg-blue-700 hover:bg-blue-600 text-white px-4 py-2 transition-all' type='submit'>{loading ? 'Signing up...' : 'Sign Up'}</button>
        </form>
        <p>Already have an account? <Link className='hover:text-blue-700 hover:underline transition-all' to={'/user-authentication/login'}>Login</Link></p>
    </div>
  )
}

export default SignupForm