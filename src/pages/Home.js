import React,{useRef,useEffect} from 'react'
import { useSelector } from 'react-redux'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar/Navbar'

function AppHome() {
  const {userInfo} = useSelector(state => state.userAuth)
  const nav = useRef()
  const {pathname} = useLocation()
  useEffect(() => {
    nav.current.classList.remove('md:py-2')
    nav.current.classList.add('md:py-4')
  }, [])

  useEffect(() => {
    window.scrollTo(0,0)
  }, [pathname])
  
  window.addEventListener('scroll', (e) => {
    if(window.scrollY > 0){
      nav.current.style.boxShadow = '0 0 5px rgba(0,0,0,0.2)'
      nav.current.classList.remove('md:py-4')
      nav.current.classList.add('md:py-2')
    }else{
      nav.current.style.boxShadow = 'none'
      nav.current.classList.remove('md:py-2')
      nav.current.classList.add('md:py-4')
    }
  })
  return (
    <>
    {userInfo !== null && <div ref={nav} className='relative md:sticky top-0 z-10 w-full bg-white py-2 md:py-4 pb-2  border-b-2 border-black/5 transition-all'>
      <Navbar/>
      </div>}
    <div className='min-h-screen container p-4 md:p-0'>
      <Outlet/>
    </div>
    <div className='w-full bg-black/95 py-2 md:py-12 pb-2 px-4 md:px-0 transition-all text-white'>
      <Footer/>
    </div>
    </>
  )
}

export default AppHome