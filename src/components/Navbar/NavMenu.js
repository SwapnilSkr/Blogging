import React from 'react'
import LogoutBtn from './LogoutBtn'
import {useNav} from '../../context/NavContext'
import '../../styles/navMenu.css'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Avatar from '../../images/avatar.png'

function NavMenu() {
    const {navOpen, toggleNav} = useNav()
    const {userInfo} = useSelector(state => state.userAuth)
  return (
    <div className={`w-full flex flex-col md:flex-row items-center justify-center md:justify-end gap-4 overflow-hidden ${!navOpen ? 'box-height-0' :'box-height-full'}`}>
        <NavLink title='Add New Blog' onClick={()=>toggleNav()} to={'/add'}>Add</NavLink>
        <NavLink title='Profile' onClick={()=>toggleNav()} to={`/profile/${userInfo?._id}`}><img className='rounded-full w-8 h-8 hidden md:flex object-cover' src={userInfo?.img || Avatar}/><span className='md:hidden'>Profile</span></NavLink>
        <LogoutBtn/>
    </div>
  )
}

export default NavMenu