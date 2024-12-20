import React, { useState } from 'react'

const StudentList = () => {
    const [studentData,setStudentData] = useState()

  return (
    <table className="w-full border-collapse">
      <thead>
        <tr className="">
          <th className="p-4 text-left">Student Name</th>
          <th className="p-4 text-left">Cohort</th>
          <th className="p-4 text-left">Courses</th>
          <th className="p-4 text-left">Date Joined</th>
          <th className="p-4 text-left">Last Login</th>
          <th className="p-4 text-left">Status</th>
        </tr>
      </thead>
      <tbody>
        
      </tbody>
    </table>
  )
}

export default StudentList
