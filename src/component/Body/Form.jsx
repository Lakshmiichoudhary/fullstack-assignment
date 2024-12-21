import React, { useState } from 'react';

const Form = ({ onCancel }) => {
  const [formData, setFormData] = useState({
    name: '',
    cohort: '',
    course: '',
    dateJoined: '',
    lastLogin: '',
    status: 'inactive',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.cohort || !formData.course || !formData.dateJoined || !formData.lastLogin) {
      alert('Please fill out all fields.');
      return;
    }

    console.log(formData);

    setFormData({
      name: '',
      cohort: '',
      course: '',
      dateJoined: '',
      lastLogin: '',
      status: 'inactive',
    });

    onCancel();
  };

  return (
    <div className="flex justify-center items-center">
      <form onSubmit={handleSubmit} className="space-y-4 w-3/5">
        <h3 className='text-center font-bold'>Student Details</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter Full Name"
          value={formData.name}
          onChange={handleChange}
          className="border border-gray-300 p-2 w-full outline-none"
        />
        <input
          type="text"
          name="cohort"
          placeholder="Cohort"
          value={formData.cohort}
          onChange={handleChange}
          className="border border-gray-300 p-2 w-full outline-none"
        />
        <input
          type="text"
          name="course"
          placeholder="Course"
          value={formData.course}
          onChange={handleChange}
          className="border border-gray-300 p-2 w-full outline-none"
        />
        <input
          type="date"
          name="dateJoined"
          value={formData.dateJoined}
          onChange={handleChange}
          className="border border-gray-300 p-2 w-full outline-none"
        />
        <input
          type="datetime-local"
          name="lastLogin"
          value={formData.lastLogin}
          onChange={handleChange}
          className="border border-gray-300 p-2 w-full outline-none"
        />
        <div className="space-x-4 flex justify-center">
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
            Submit
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
