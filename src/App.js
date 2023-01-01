import React,{useEffect} from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'
import Authentication from './pages/Authentication/Authentication'
import LoginForm from './components/LoginForm'
import SignupForm from './components/SignupForm'
import ProfileForm from './components/ProfileForm'
import AppHome from './pages/Home'
import Home from './pages/InApp/Home'
import { setUser } from './redux/actions/userAuthActions'
import { useDispatch } from 'react-redux'

import { NavProvider } from './context/NavContext'
import AddBlog from './pages/InApp/AddBlog'
import Blog from './pages/InApp/Blog'
import Profile from './pages/InApp/Profile'
import EditBlog from './pages/InApp/EditBlog'


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
        <Route path='/' element={<ProtectedRoute Component={AppHome}/>}>
          <Route path='home' element={<Home/>}/>
          <Route path='add' element={<AddBlog/>}/>
          <Route path='edit' element={<EditBlog/>}/>
          <Route path='edit/preview' element={<Blog/>}/>
          <Route path='preview' element={<Blog/>}/>
          <Route path='blog/:id' element={<Blog/>}/>
          <Route path='/profile/:id' element={<Profile/>}/>
        </Route>
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