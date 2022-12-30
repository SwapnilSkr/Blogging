import React,{useEffect} from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'
import Authentication from './pages/Authentication/Authentication'
import LoginForm from './components/LoginForm'
import SignupForm from './components/SignupForm'
import ProfileForm from './components/ProfileForm'
import Home from './pages/Home'
import { setUser } from './redux/actions/userAuthActions'
import { useDispatch } from 'react-redux'

import { NavProvider } from './context/NavContext'


function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setUser())
  }, [])

  return (
    <NavProvider>
    <div className='w-full'>
    <Router>
      
      <Routes>
        <Route path='/' element={<ProtectedRoute Component={Home}/>}/>
        <Route path='/user-authentication' element={<Authentication/>}>
          <Route path='login' element={<LoginForm/>}/>
          <Route path='signup' element={<SignupForm/>}/>
          <Route path='profile' element={<ProfileForm/>}/>
        </Route>
      </Routes>
    </Router>
    </div>
    </NavProvider>
  )
}

export default App