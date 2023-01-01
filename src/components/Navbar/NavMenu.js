import React from 'react'
import LogoutBtn from './LogoutBtn'
import {useNav} from '../../context/NavContext'
import '../../styles/navMenu.css'
import { NavLink } from 'react-router-dom'

function NavMenu() {
    const {navOpen, toggleNav} = useNav()
  return (
    <div className={`w-full flex flex-col md:flex-row items-center justify-center md:justify-end gap-2 overflow-hidden ${!navOpen ? 'box-height-0' :'box-height-full'}`}>
        <NavLink onClick={()=>toggleNav()} to={'/add'}>Add</NavLink>
        <p>ifhsfh</p>
        <p>ifhsfh</p>
        <LogoutBtn/>
    </div>
  )
}

export default NavMenu