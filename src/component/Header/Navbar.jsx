import React from 'react'
import help from '../../assets/help.png'
import search from "../../assets/search.png"
import message from "../../assets/message.png"
import avatar from "../../assets/Avatar.png"
import stroke from "../../assets/Stroke.png"
import vector from "../../assets/vector.png"
import ellipse from "../../assets/Ellipse.png"

const Navbar = () => {
  return (
    <div className='p-4 bg-slate-100 flex justify-between items-center'>
      <div className='flex mx-6'>
        <img className='p-4 bg-white' src={search} alt='help icon' />
        <input className='p-3 rounded-lg outline-none w-[480px]'
        type='text'
        placeholder='Search your course'/>
      </div>
      <div className='flex justify-between items-center px-3'>
        <img className='p-2 mx-4' src={help} alt='help icon' />
        <div className='relative'>
        <img className='p-2 mx-4 absolute left-4 top-0' src={ellipse} alt='ellipse' />
        <img className='p-2 mx-4' src={message} alt='message' />
        </div>
        <img className='p-2 mx-4' src={vector} alt='vector' />
        <div className='relative'>
        <img className='p-2 mx-4' src={stroke} alt='stroke' />
        <img className='p-2 mx-4 absolute left-3 bottom-3' src={ellipse} alt='ellipse' />
        </div>
        <img className='p-2 ml-4' src={avatar} alt='avatar' />
        <p className='p-2 mr-4 ml-2'>Lakshmi B</p>
      </div>
    </div>
  )
}

export default Navbar
