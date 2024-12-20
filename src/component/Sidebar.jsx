import React from 'react'
import logo from "../assets/logo.png"
import dashboard from "../assets/dashboard.png"
import students from '../assets/Frame.png'
import report from "../assets/report.png"
import chapter from "../assets/chapter.png"
import setting from "../assets/Settings.png"
import help from "../assets/help.png"

const Sidebar = () => {
  return (
    <div className='p-2'>
      <div>
        <img className='p-2 m-2' src={logo} alt='logo' />
      </div>
      <div className='mt-10 mx-3'>
        <div className='flex items-center p-1 rounded-lg hover:bg-gray-200 my-3'>
          <img className='p-2 m-1' src={dashboard} alt='dashboard' />
          <span className='p-2 text-xl text-gray-500 font-bold  hover:text-black'>Dashboard</span>
        </div>
        <div className='flex items-center p-1 rounded-lg bg-gray-200 hover:bg-slate-200 my-3'>
          <img className='p-2 m-1' src={students} alt='students' />
          <span className='p-2 text-xl text-black font-bold hover:text-black'>Students</span>
        </div>
        <div className='flex items-center p-1 rounded-lg hover:bg-gray-200 my-3'>
          <img className='p-2 m-1' src={chapter} alt='Chapter' />
          <span className='p-2 text-xl text-gray-500 font-bold hover:text-black'>Chapter</span>
        </div> 
        <div className='flex items-center p-1 rounded-lg hover:bg-gray-200 my-3'>
          <img className='p-2 m-1' src={help} alt='help' />
          <span className='p-2 text-xl text-gray-500 font-bold hover:text-black'>Help</span>
        </div>
        <div className='flex items-center p-1 rounded-lg hover:bg-gray-200 my-3'>
          <img className='p-2 m-1' src={report} alt='report' />
          <span className='p-2 text-xl text-gray-500 font-bold hover:text-black'>Reports</span>
        </div>
        <div className='flex items-center p-1 rounded-lg hover:bg-gray-200 my-3'>
          <img className='p-2 m-1' src={setting} alt='setting' />
          <span className='p-2 text-xl text-gray-500 font-bold hover:text-black'>Settings</span>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
