import React, { useState } from 'react';
import axios from 'axios';

const IssueTCPortal = () => {


  const baseURL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';
  const [searchTerm, setSearchTerm] = useState('');
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);

  const handleSearch = async () => {
   const res = await axios.get(`${baseURL}/api/students/active?search=${searchTerm}`);
    // const res = await axios.get(`http://localhost:5000/api/students/active?search=${searchTerm}`);
    setStudents(res.data);
  };

  const handleIssueTC = async (id) => {
    // Logic to update status and add leaving details
    await axios.patch(`${baseURL}/api/students/issue/${id}`, {
    // await axios.patch(`http://localhost:5000/api/students/issue/${id}`, {
      leavingDate: new Date(),
      reason: "Course Completed"
    });
    alert("TC Issued Successfully!");
    setSelectedStudent(null);
    handleSearch(); // Refresh list
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow mt-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Issue Transfer Certificate</h2>
      <div className="flex gap-2 mb-6">
        <input 
          type="text" 
          placeholder="Search by Name or Admission No..." 
          className="flex-1 border p-2 rounded"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch} className="bg-gray-800 text-white px-6 py-2 rounded">Search</button>
      </div>

      <div className="space-y-3">
        {students.map(s => (
          <div key={s._id} className="flex justify-between items-center p-4 border rounded hover:bg-gray-50">
            <div>
              <p className="font-bold">{s.name}</p>
              <p className="text-sm text-gray-500">Adm No: {s.admissionInfo.admissionNo}</p>
            </div>
            <button 
              onClick={() => handleIssueTC(s._id)}
              className="bg-red-600 text-white px-4 py-1 rounded text-sm hover:bg-red-700"
            >
              Mark as Left / Issue TC
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IssueTCPortal;