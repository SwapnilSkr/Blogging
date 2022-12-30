import React from 'react'
import LogoutBtn from './LogoutBtn'
import {useNav} from '../../context/NavContext'
import '../../styles/navMenu.css'

function NavMenu() {
    const {navOpen} = useNav()
  return (
    <div className={`w-full flex flex-col md:flex-row items-center justify-center md:justify-end gap-2 overflow-hidden ${!navOpen ? 'box-height-0' :'box-height-full'}`}>
        <p>ifhsfh</p>
        <p>ifhsfh</p>
        <p>ifhsfh</p>
        <LogoutBtn/>
    </div>
  )
}

export default NavMenu