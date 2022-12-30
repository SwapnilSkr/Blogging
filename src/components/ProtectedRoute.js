import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

function ProtectedRoute({Component}) {
    const navigate = useNavigate()
    const user = localStorage.getItem('userInfo')

    useEffect(() => {
        if (user === null) {
            console.log('user not logged in');
            navigate('/user-authentication/login')
        }
    })
    return (
        <Component/>
    )
}

export default ProtectedRoute