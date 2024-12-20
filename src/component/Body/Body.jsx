import React, { useState } from 'react'
import down from "./../../assets/vectordown.png"
import plus from "./../../assets/plus.png"
import StudentList from './StudentList'
import Form from './Form'

const Body = () => {
  const [showForm,setshowForm] = useState(false)

  const handleToggle = () => {
    setshowForm(!showForm)
  }

  return (
    <div className='bg-slate-100 h-screen'>
      <div className='flex mx-6 justify-between items-center bg-white'>
      <div className='flex mt-2 p-2'>
      <div className='flex items-center bg-slate-200 p-2 m-3 rounded-lg'>
        <p className='px-2 font-bold text-gray-600 text-lg'>AY 2024-25</p>
        <img className='px-3' src={down} alt='icon' />
      </div>
      <div className='flex items-center bg-slate-200 p-2 m-3 rounded-lg'>
        <p className='px-2 font-bold text-gray-600 text-lg'>CBSE 9</p>
        <img className='px-3' src={down} alt='icon' />
      </div>
      </div>
      <div className='p-2 bg-slate-200 flex items-center mx-10 rounded-lg'
        onClick={handleToggle}>
      <img className='px-3' src={plus} alt='icon' />
        <button className='text-lg text-gray-600 font-bold pr-2'>Add new Student</button>
      </div>
      </div>
      {showForm && (<div className='absolute bg-slate-200 p-10 mx-8'>
        <Form onCancel={()=>setshowForm(false)} />
      </div>)}
      <div className='bg-white mx-6'>
        <StudentList />
      </div>
    </div>
  )
}

export default Body
