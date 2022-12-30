import React,{useRef} from 'react'
import Brand from './Brand'
import NavBtn from './NavBtn'
import NavMenu from './NavMenu'

function Navbar() {
  const nav = useRef()
  
  return (
    <div className='flex flex-col font-playfair md:flex-row items-center justify-between  container transition-colors' style={{flexBasis: '50%'}}>
        <div className='flex flex-row items-center justify-between container'>
        <Brand/>
        <NavBtn/>
        </div>
        <NavMenu/>
    </div>
  )
}

export default Navbar