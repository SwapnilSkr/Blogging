import React,{useRef} from 'react'
import Brand from './Brand'
import NavBtn from './NavBtn'
import NavMenu from './NavMenu'
import Progress from '../Progress'
function Navbar() {
  const nav = useRef()
  
  return (
    <>
    <Progress/>
    <div className='flex flex-col font-playfair md:flex-row items-center justify-between  container transition-colors px-4 md:px-0' style={{flexBasis: '50%'}}>
        <div className='flex flex-row items-center justify-between container'>
        <Brand size={2}/>
        <NavBtn/>
        </div>
        <NavMenu/>
    </div>
    </>
  )
}

export default Navbar