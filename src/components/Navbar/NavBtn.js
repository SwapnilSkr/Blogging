import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import {useNav} from '../../context/NavContext'

function NavBtn() {
    const {toggleNav} = useNav()
  return (
    <button onClick={toggleNav} className='md:hidden'>
        <MenuIcon fontSize='large' color='white'/>
    </button>
  )
}

export default NavBtn