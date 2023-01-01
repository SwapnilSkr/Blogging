import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'

function ProtectedRoute({Component}) {
    const navigate = useNavigate()
    const {pathname} = useLocation()
    const user = localStorage.getItem('userInfo')
    const blog = useSelector(state => state.blog)

    useEffect(() => {
        if (user === null) {
            console.log('user not logged in');
            navigate('/user-authentication/login')
        }
        if(pathname === '/') navigate('/home')
        if(pathname === '/preview' && blog.blogContent === null){
            console.log('blog not found')
            navigate('/home')
        }
    })
    return (
        <Component/>
    )
}

export default ProtectedRoute