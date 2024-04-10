import React, { useState } from 'react';

function StudentRegistration() {
  const initialFormData = {
    name: '',
    department: '',
    college: '',
    rollNumber: '',
    skills: ''
  };
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/students', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      console.log(data);
      alert(data.message);
      // Clear input fields after successful submission
      setFormData(initialFormData);
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <div className='Student-Form'>
      <h1 className='Student-head'>Student Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <div className='Form-Type'>
        <label  htmlFor="name">Name:</label><br />
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required /><br /><br />
        
        <label htmlFor="department">Department:</label><br />
        <input type="text" id="department" name="department" value={formData.department} onChange={handleChange} required /><br /><br />
        
        <label htmlFor="college">College:</label><br />
        <input type="text" id="college" name="college" value={formData.college} onChange={handleChange} required /><br /><br />
        
        <label htmlFor="rollNumber">Roll Number:</label><br />
        <input type="text" id="rollNumber" name="rollNumber" value={formData.rollNumber} onChange={handleChange} required /><br /><br />
        
        <label htmlFor="skills">Skills:</label><br />
        <input type="text" id="skills" name="skills" value={formData.skills} onChange={handleChange} required /><br /><br />
        
        <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default StudentRegistration;
