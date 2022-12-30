import React,{useRef,useEffect} from 'react'
import { useSelector } from 'react-redux'
import Navbar from '../components/Navbar/Navbar'

function Home() {
  const {userInfo} = useSelector(state => state.userAuth)
  const nav = useRef()
  
  useEffect(() => {
    nav.current.classList.remove('md:py-2')
    nav.current.classList.add('md:py-4')
  }, [])
  
  window.addEventListener('scroll', (e) => {
    if(window.scrollY > 0){
      nav.current.style.boxShadow = '0 0 10px rgba(0,0,0,0.5)'
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
    {userInfo !== null && <div ref={nav} className='md:sticky top-0 z-10 w-full bg-white py-2 md:py-4 pb-2  transition-all'>
      <Navbar/>
      </div>}
    <div className='min-h-screen container'>
      <p>dfb</p>
      <p>dfb</p>
      <p>dfb</p>
      <p>dfb</p>
      <p>dfb</p>
      <p>dfb</p>
      <p>dfb</p>
      <p>dfb</p>
      <p>dfb</p>
      <p>dfb</p>
      <p>dfb</p>
      <p>dfb</p>
      <p>dfb</p>
      <p>dfb</p>
      <p>dfb</p>
      <p>dfb</p>
      <p>dfb</p>
      <p>dfb</p>
      <p>dfb</p>
      <p>dfb</p>
      <p>dfb</p>
      <p>dfb</p>
      <p>dfb</p>
      <p>dfb</p>
      <p>dfb</p>
      <p>dfb</p>
      <p>dfb</p>
      <p>dfb</p>
      <p>dfb</p>
    </div>
    </>
  )
}

export default Home