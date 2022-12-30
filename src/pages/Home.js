import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { userLogout } from '../redux/actions/userAuthActions'
import { useNavigate } from 'react-router-dom'

function Home() {
    const dispatch = useDispatch()
    const {userInfo} = useSelector(state => state.userAuth)
    const navigate = useNavigate()
    const handleLogout = () => {
        dispatch(userLogout())
        navigate('/user-authentication/login')
    }
  return (
    <div>
        <h1>Home</h1>
        <h2>{userInfo?.name}</h2>
        <h2>@{userInfo?.username}</h2>
        <h2>{userInfo?.email}</h2>
        <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Home