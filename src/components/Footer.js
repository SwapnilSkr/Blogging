import React from 'react'
import { NavLink } from 'react-router-dom'
import Brand from './Navbar/Brand'
import { useSelector } from 'react-redux'
import { footerLinks } from '../static/footerLinks'

function Footer() {
    const {userInfo} = useSelector(state => state.userAuth)
  return (
    <div className='flex flex-col gap-8 text-gray-300 font-manrope container'>
    <div className='w-full flex flex-col md:flex-row items-start uppercase justify-between '>
        <div className='flex flex-col items-start gap-2'>
            <Brand size={3} color={'white'}/>
            <p className='font-medium capitalize text-md '>Lets get reading!</p>
        </div>
        <ul className='flex flex-col items-start gap-1'> 
            <li className='font-light text-sm text-white/85'>About Us</li>
            <li className='font-light text-sm text-white/85'>Contact Us</li>
        </ul>
        <ul className='flex flex-col items-start gap-1'> 
            <li className='font-light text-sm text-white/85'>Terms & Conditions</li>
            <li className='font-light text-sm text-white/85'>Privacy Policy</li>
        </ul>
        <ul className='flex flex-col items-start gap-1'> 
            <NavLink  className='font-light text-sm text-white/85' to={'/add'}>Add New Blog</NavLink>
            <NavLink  className='font-light text-sm text-white/85' to={`/profile/${userInfo?._id}`}>Profile</NavLink>
        </ul>
    </div>
    <hr className=''></hr>
    <ul className='w-full flex items-center justify-center gap-4'>
        {footerLinks.map((link, index) => 
        <li className='border rounded-full p-2'>
            <a target={'_blank'} href={link.link} title={link.title}>{link.icon}</a>
        </li>
        )}
        
    </ul>
    <div>
        <p className='text-gray-500 text-sm text-center'>&copy; {new Date().getFullYear()} Blogging. All rights reserved.</p>
    </div>
    </div>
  )
}

export default Footer