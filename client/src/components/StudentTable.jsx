
// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';
// // import { Search, FileUser, X, GraduationCap, MapPin, UserCircle, Edit3, Save, RotateCcw } from 'lucide-react';

// // /**
// //  * REUSABLE EDITABLE FIELD COMPONENT 
// //  */
// // const EditableField = ({ label, name, value, onChange, isEditing, highlight = false, type = "text" }) => (
// //   <div className="flex flex-col space-y-1">
// //     <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">{label}</p>
// //     {isEditing ? (
// //       <input
// //         type={type}
// //         name={name}
// //         value={value || ''}
// //         onChange={onChange}
// //         className="px-3 py-2 border border-blue-400 rounded-lg text-sm bg-white focus:ring-2 focus:ring-blue-500 outline-none transition-all font-medium text-blue-900"
// //       />
// //     ) : (
// //       <div className={`px-3 py-2 border rounded-lg text-sm transition-all ${
// //         highlight 
// //           ? 'bg-blue-50 border-blue-200 text-blue-900 font-bold' 
// //           : 'bg-gray-50 border-gray-200 text-gray-800 font-medium'
// //       }`}>
// //         {value || <span className="text-gray-300 italic">Not Recorded</span>}
// //       </div>
// //     )}
// //   </div>
// // );
// // const PreviewField = ({ 
// //   label, 
// //   value, 
// //   highlight = false, 
// //   fileUrl = null 
// // }) => (
// //   <div className="flex flex-col space-y-1">
// //     <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
// //       {label}
// //     </p>

// //     <div
// //       className={`px-3 py-2 border rounded-lg text-sm transition-all ${
// //         highlight
// //           ? "bg-blue-50 border-blue-200 text-blue-900 font-bold"
// //           : "bg-gray-50 border-gray-200 text-gray-800 font-medium"
// //       }`}
// //     >
// //       {value ? (
// //         <div className="flex items-center justify-between gap-2">
// //           <span className="truncate">{value}</span>

// //           {fileUrl && (
// //             <a
// //               href={fileUrl}
// //               target="_blank"
// //               rel="noopener noreferrer"
// //               className="text-xs bg-blue-600 text-white px-2 py-1 rounded hover:bg-black"
// //             >
// //               View
// //             </a>
// //           )}
// //         </div>
// //       ) : (
// //         <span className="text-gray-300 italic">Not Recorded</span>
// //       )}
// //     </div>
// //   </div>
// // );
// // const StudentTable = () => {
// //   const [students, setStudents] = useState([]);
// //   const [searchTerm, setSearchTerm] = useState("");
// //   const [loading, setLoading] = useState(true);
  
// //   const [selectedStudent, setSelectedStudent] = useState(null); 
// //   const [isEditing, setIsEditing] = useState(false);
// //   const [editData, setEditData] = useState(null);
// //   const [isSaving, setIsSaving] = useState(false);
// //   const [dashboardCounts, setDashboardCounts] = useState({
// //   totalStudents: 0,
// //   tcSubmitted: 0,
// //   tcNotSubmitted: 0,
// //   conductSubmitted: 0,
// //   conductNotSubmitted: 0,
// //   marksMemoSubmitted: 0,
// //   marksMemoNotSubmitted: 0
// // });
// // const [activeFilter, setActiveFilter] = useState("all");


// // const fetchDashboardCounts = async () => {
// //   try {
// //     const response = await axios.get(
// //       "http://localhost:5000/api/students/dashboard-counts"
// //     );

// //     setDashboardCounts(response.data);

// //   } catch (error) {
// //     console.error("Dashboard fetch error:", error);
// //   }
// // };

// //   // FETCH FUNCTION
// //   const fetchStudents = async (query = "", pendingType = "") => {
// //   setLoading(true);

// //   try {
// //     let url = `http://localhost:5000/api/students/search?name=${query}`;

// //     if (pendingType) {
// //       url += `&pending=${pendingType}`;
// //     }

// //     const response = await axios.get(url);

// //     setStudents(response.data);

// //   } catch (error) {
// //     console.error("Error fetching students:", error);

// //   } finally {
// //     setLoading(false);
// //   }
// // };

// //   // DEBOUNCED SEARCH & INITIAL LOAD
// //   useEffect(() => {
// //     fetchDashboardCounts();
// //     const delayDebounceFn = setTimeout(() => {
// //       fetchStudents(searchTerm);
// //     }, 400); // Slightly longer debounce for smoother UX

// //     return () => clearTimeout(delayDebounceFn);
// //   }, [searchTerm]);

// //  const handleOpenProfile = (student) => {
// //   const freshStudent = JSON.parse(JSON.stringify(student));

// //   setSelectedStudent(freshStudent);
// //   setEditData(freshStudent);
// //   setIsEditing(false);
// // };


// // const handleDashboardFilter = (type) => {
// //   setActiveFilter(type);
// //   fetchStudents("", type);
// // };

// // const handleFileChange = async (e, fieldName) => {
// //   const file = e.target.files[0];
// //   if (!file) return;

// //   const formData = new FormData();
// //   formData.append("file", file);

// //   try {
// //     const response = await axios.post(
// //   `http://localhost:5000/api/students/upload/${editData._id}/${fieldName}`,
// //   formData
// // );

// // const updatedStudent = response.data.updatedStudent;

// // // Update edit form instantly
// // setEditData(JSON.parse(JSON.stringify(updatedStudent)));

// // // Update modal preview instantly
// // setSelectedStudent(JSON.parse(JSON.stringify(updatedStudent)));

// // // Update table instantly
// // setStudents(prev =>
// //   prev.map(student =>
// //     student._id === updatedStudent._id ? updatedStudent : student
// //   )
// // );
// // fetchDashboardCounts();
// //     alert("File uploaded successfully!");

// //   } catch (error) {
// //     console.error("UPLOAD ERROR:", error.response?.data || error.message);

// //     alert(
// //       error.response?.data?.error || "File upload failed"
// //     );
// //   }
// // };



// //   const handleEditChange = (e) => {
// //   const { name, value } = e.target;

// //   // Parent Details
// //   if (
// //     [
// //       "fatherName", "fatherMobile", "fatherAadhaar", "fatherQualification", "fatherOccupation", "fatherAnnualIncome",
// //       "motherName", "motherMobile", "motherAadhaar", "motherQualification", "motherOccupation", "motherAnnualIncome",
// //       "guardianName", "guardianRelation", "guardianMobile", "guardianAadhaar", "guardianOccupation", "guardianAnnualIncome",
// //       "residence"
// //     ].includes(name)
// //   ) {
// //     setEditData(prev => ({
// //       ...prev,
// //       parentDetails: {
// //         ...prev.parentDetails,
// //         [name]: value
// //       }
// //     }));
// //     return;
// //   }

// //   // Admission Info
// //   if (
// //     [
// //       "admissionNo",
// //       "classAdmittedTo",
// //       "previousSchoolName",
// //       "previousTCNumber",
// //       "previousTCDate"
// //     ].includes(name)
// //   ) {
// //     setEditData(prev => ({
// //       ...prev,
// //       admissionInfo: {
// //         ...prev.admissionInfo,
// //         [name]: value
// //       }
// //     }));
// //     return;
// //   }

// //   // Main Student Fields
// //   setEditData(prev => ({
// //     ...prev,
// //     [name]: value
// //   }));
// // };

// //   const handleUpdate = async () => {
// //   setIsSaving(true);

// //   try {
// //     const response = await axios.put(
// //       `http://localhost:5000/api/students/${editData._id}`,
// //       editData
// //     );

// //     const updatedStudent = response.data.updatedStudent;

// //     // UPDATE TABLE
// //     setStudents(prev =>
// //       prev.map(student =>
// //         student._id === updatedStudent._id ? updatedStudent : student
// //       )
// //     );

// //     // UPDATE MODAL
// //     setSelectedStudent(updatedStudent);

// //     // UPDATE EDIT FORM
// //     setEditData(JSON.parse(JSON.stringify(updatedStudent)));

// //     // OPTIONAL REFRESH
// //     await fetchStudents(searchTerm);

// //     setIsEditing(false);

// //     alert("Student record updated successfully!");

// //   } catch (error) {
// //     console.error("Update failed:", error.response?.data || error.message);
// //     alert("Failed to update record.");
// //   } finally {
// //     setIsSaving(false);
// //   }
// // };

// //   return (
// //     <div className="p-4 lg:p-8 bg-slate-50 min-h-screen font-sans text-left">
      
// //       {/* --- MODAL --- */}
// //       {selectedStudent && (
// //         <div className="fixed inset-0 bg-blue-900/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
// //           <div className="bg-white rounded-[2rem] shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-10 border border-white">
            
// //             <header className="mb-8 border-b-2 border-blue-100 pb-6 flex justify-between items-start">
// //               <div className="flex gap-4 items-center">
// //                 <div className={`p-4 rounded-2xl text-white shadow-lg transition-colors ${isEditing ? 'bg-orange-500' : 'bg-blue-600'}`}>
// //                    {isEditing ? <Edit3 size={32} /> : <FileUser size={32} />}
// //                 </div>
// //                 <div>
// //                   <h2 className="text-3xl font-black text-blue-900 leading-tight">
// //                     {isEditing ? "Edit Record" : selectedStudent.name}
// //                   </h2>
// //                   <p className="text-blue-500 text-xs font-black uppercase tracking-widest">
// //                     {isEditing ? "Modify necessary information below" : `Admission No: ${selectedStudent.admissionInfo?.admissionNo || 'N/A'}`}
// //                   </p>
// //                 </div>
// //               </div>
// //               <button onClick={() => setSelectedStudent(null)} className="p-2 hover:bg-red-50 text-gray-400 hover:text-red-500 rounded-full">
// //                 <X size={28} />
// //               </button>
// //             </header>

// //             <div className="space-y-10">

// //   {/* 1. Personal Identity */}
// //   <section>
// //     <div className="flex items-center gap-2 mb-4 text-blue-900 font-black uppercase tracking-tighter text-sm">
// //       <UserCircle size={18} /> Personal Identity
// //     </div>

// //     <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
// //       <EditableField label="Full Name" name="name" value={editData.name} onChange={handleEditChange} isEditing={isEditing} highlight />
// //       <EditableField label="Aadhaar No" name="aadhaarNo" value={editData.aadhaarNo} onChange={handleEditChange} isEditing={isEditing} />
// //       <EditableField label="Date of Birth" name="dob" type="date" value={editData.dob?.split('T')[0]} onChange={handleEditChange} isEditing={isEditing} />
// //       <EditableField label="Gender" name="gender" value={editData.gender} onChange={handleEditChange} isEditing={isEditing} />
// //       <EditableField label="Nationality" name="nationality" value={editData.nationality} onChange={handleEditChange} isEditing={isEditing} />
// //       <EditableField label="Religion" name="religion" value={editData.religion} onChange={handleEditChange} isEditing={isEditing} />
// //       <EditableField label="Caste" name="caste" value={editData.caste} onChange={handleEditChange} isEditing={isEditing} />
// //       <EditableField label="Mother Tongue" name="motherTongue" value={editData.motherTongue} onChange={handleEditChange} isEditing={isEditing} />
// //       <EditableField label="State" name="state" value={editData.state} onChange={handleEditChange} isEditing={isEditing} />
// //     </div>
// //   </section>

// //   {/* 2. Family Records */}
// //   <section className="pt-6 border-t border-gray-100">
// //     <div className="flex items-center gap-2 mb-4 text-blue-900 font-black uppercase tracking-tighter text-sm">
// //       <MapPin size={18} /> Family Records
// //     </div>

// //     <div className="space-y-6">
// //       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-gray-50 p-4 rounded-xl">
// //         <EditableField label="Father Name" name="fatherName" value={editData.parentDetails?.fatherName} onChange={handleEditChange} isEditing={isEditing} highlight />
// //         <EditableField label="Father Mobile" name="fatherMobile" value={editData.parentDetails?.fatherMobile} onChange={handleEditChange} isEditing={isEditing} />
// //         <EditableField label="Father Aadhaar" name="fatherAadhaar" value={editData.parentDetails?.fatherAadhaar} onChange={handleEditChange} isEditing={isEditing} />
// //         <EditableField label="Father Qualification" name="fatherQualification" value={editData.parentDetails?.fatherQualification} onChange={handleEditChange} isEditing={isEditing} />
// //         <EditableField label="Father Occupation" name="fatherOccupation" value={editData.parentDetails?.fatherOccupation} onChange={handleEditChange} isEditing={isEditing} />
// //         <EditableField label="Father Income" name="fatherAnnualIncome" value={editData.parentDetails?.fatherAnnualIncome} onChange={handleEditChange} isEditing={isEditing} />
// //       </div>

// //       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-gray-50 p-4 rounded-xl">
// //         <EditableField label="Mother Name" name="motherName" value={editData.parentDetails?.motherName} onChange={handleEditChange} isEditing={isEditing} />
// //         <EditableField label="Mother Mobile" name="motherMobile" value={editData.parentDetails?.motherMobile} onChange={handleEditChange} isEditing={isEditing} />
// //         <EditableField label="Mother Aadhaar" name="motherAadhaar" value={editData.parentDetails?.motherAadhaar} onChange={handleEditChange} isEditing={isEditing} />
// //         <EditableField label="Mother Qualification" name="motherQualification" value={editData.parentDetails?.motherQualification} onChange={handleEditChange} isEditing={isEditing} />
// //         <EditableField label="Mother Occupation" name="motherOccupation" value={editData.parentDetails?.motherOccupation} onChange={handleEditChange} isEditing={isEditing} />
// //         <EditableField label="Mother Income" name="motherAnnualIncome" value={editData.parentDetails?.motherAnnualIncome} onChange={handleEditChange} isEditing={isEditing} />
// //       </div>

// //       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-gray-50 p-4 rounded-xl">
// //         <EditableField label="Guardian Name" name="guardianName" value={editData.parentDetails?.guardianName} onChange={handleEditChange} isEditing={isEditing} />
// //         <EditableField label="Guardian Relation" name="guardianRelation" value={editData.parentDetails?.guardianRelation} onChange={handleEditChange} isEditing={isEditing} />
// //         <EditableField label="Guardian Mobile" name="guardianMobile" value={editData.parentDetails?.guardianMobile} onChange={handleEditChange} isEditing={isEditing} />
// //         <EditableField label="Guardian Aadhaar" name="guardianAadhaar" value={editData.parentDetails?.guardianAadhaar} onChange={handleEditChange} isEditing={isEditing} />
// //         <EditableField label="Guardian Occupation" name="guardianOccupation" value={editData.parentDetails?.guardianOccupation} onChange={handleEditChange} isEditing={isEditing} />
// //         <EditableField label="Guardian Income" name="guardianAnnualIncome" value={editData.parentDetails?.guardianAnnualIncome} onChange={handleEditChange} isEditing={isEditing} />
// //       </div>

// //       <EditableField label="Residence Address" name="residence" value={editData.parentDetails?.residence} onChange={handleEditChange} isEditing={isEditing} highlight />
// //     </div>
// //   </section>

// //   {/* 3. Academic Information */}
// //   <section className="pt-6 border-t border-gray-100">
// //     <div className="flex items-center gap-2 mb-4 text-blue-900 font-black uppercase tracking-tighter text-sm">
// //       <GraduationCap size={18} /> Academic Information
// //     </div>

// //     <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
// //       <EditableField label="Admission No" name="admissionNo" value={editData.admissionInfo?.admissionNo} onChange={handleEditChange} isEditing={isEditing} highlight />
// //       <EditableField label="Class Admitted To" name="classAdmittedTo" value={editData.admissionInfo?.classAdmittedTo} onChange={handleEditChange} isEditing={isEditing} />
// //       <EditableField label="Previous School" name="previousSchoolName" value={editData.admissionInfo?.previousSchoolName} onChange={handleEditChange} isEditing={isEditing} />
// //       <EditableField label="Previous TC Number" name="previousTCNumber" value={editData.admissionInfo?.previousTCNumber} onChange={handleEditChange} isEditing={isEditing} />
// //       <EditableField label="Previous TC Date" name="previousTCDate" type="date" value={editData.admissionInfo?.previousTCDate?.split('T')[0]} onChange={handleEditChange} isEditing={isEditing} />
// //     </div>
// //   </section>
// //   <section className="pt-6 border-t border-gray-100">
// //   <div className="flex items-center gap-2 mb-4 text-blue-900 font-black uppercase tracking-tighter text-sm">
// //     <FileUser size={18} /> Uploaded Documents
// //   </div>

// //   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// //     {[
// //     ["studentAadhaarFile", "Student Aadhaar File"],
// //     ["fatherAadhaarFile", "Father Aadhaar File"],
// //     ["motherAadhaarFile", "Mother Aadhaar File"],
// //     ["guardianAadhaarFile", "Guardian Aadhaar File"],
// //     ["tcFile", "Transfer Certificate"],
// //     ["conductFile", "Conduct Certificate"],
// //     ["marksMemoFile", "Marks Memo"]
// //   ].map(([field, label]) => (
// //     <div key={field} className="flex flex-col space-y-1">
// //       <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
// //         {label}
// //       </p>

// //       {isEditing ? (
// //         <input
// //           type="file"
// //           accept=".pdf,.jpg,.jpeg,.png"
// //           onChange={(e) => handleFileChange(e, field)}
// //           className="px-3 py-2 border border-blue-300 rounded-lg text-sm bg-white"
// //         />
// //       ) : (
// //         <PreviewField
// //   label={label}
// //   value={editData.documents?.[field] ? "Uploaded" : ""}
// //   fileUrl={editData.documents?.[field]}
// //   highlight={field === "studentAadhaarFile" || field === "tcFile"}
// // />
// //       )}
// //     </div>
// //   ))}
// //   </div>
// // </section>

// // </div>

// //             <div className="mt-10 flex gap-4">
// //               {isEditing ? (
// //                 <>
// //                   <button onClick={handleUpdate} disabled={isSaving} className="flex-1 bg-green-600 text-white py-4 rounded-2xl font-bold uppercase tracking-widest hover:bg-green-700 transition-all flex items-center justify-center gap-2">
// //                     {isSaving ? <Loader2 className="animate-spin" /> : <Save size={20} />}
// //                     {isSaving ? "Saving..." : "Save Changes"}
// //                   </button>
// //                   <button   onClick={() => {
// //     setIsEditing(false);
// //     setEditData(JSON.parse(JSON.stringify(selectedStudent)));
// //   }} className="px-8 bg-gray-100 text-gray-500 py-4 rounded-2xl font-bold uppercase tracking-widest hover:bg-gray-200 transition-all flex items-center gap-2">
// //                     <RotateCcw size={20} /> Cancel
// //                   </button>
// //                 </>
// //               ) : (
// //                 <>
// //                   <button onClick={() => setIsEditing(true)} className="flex-1 bg-blue-600 text-white py-4 rounded-2xl font-bold uppercase tracking-widest hover:bg-blue-700 transition-all flex items-center justify-center gap-2">
// //                     <Edit3 size={20} /> Edit Profile
// //                   </button>
// //                   <button onClick={() => setSelectedStudent(null)} className="px-8 bg-blue-900 text-white py-4 rounded-2xl font-bold uppercase tracking-widest hover:bg-black transition-all">
// //                     Close
// //                   </button>
// //                 </>
// //               )}
// //             </div>
// //           </div>
// //         </div>
// //       )}

// // {/* --- COMPACT DUAL-STAT DASHBOARD (H-20) --- */}
// // <div className="max-w-7xl mx-auto mb-8 grid grid-cols-1 md:grid-cols-4 gap-4 px-4">
  
// //   {/* Total Students - Registry Baseline */}
// //   <div   onClick={() => {
// //     setActiveFilter("all");
// //     fetchStudents("");
// //   }} className="bg-white rounded-full px-6 shadow-md border border-blue-50 flex items-center justify-between h-20 transition-all hover:shadow-lg">
// //     <div className="flex flex-col">
// //       <span className="bg-blue-600 text-white px-3 py-1 rounded-full font-black uppercase text-[12px] tracking-widest w-fit mb-1">
// //         Students
// //       </span>
// //       <p className="text-blue-900/40 text-[10px] font-bold uppercase">Total</p>
// //     </div>
// //     <div className="text-right">
// //       <h2 className="text-2xl font-black text-blue-900 leading-none">
// //         {dashboardCounts.totalStudents}
// //       </h2>
// //     </div>
// //   </div>

// //   {/* TC Status - Pending vs Submitted */}
// //   <div onClick={() => handleDashboardFilter("tc")} className="bg-red-50/50 rounded-full pl-6 pr-4 shadow-md border border-red-100 flex items-center justify-between h-20 transition-all hover:shadow-lg">
// //     <div className="flex flex-col min-w-[80px]">
// //       <span className="bg-red-600 text-white px-3 py-1 rounded-full font-black uppercase text-[12px] tracking-widest w-fit mb-1">
// //         TC
// //       </span>
// //       <p className="text-red-900/40 text-[10px] font-bold uppercase tracking-tighter">Status</p>
// //     </div>
// //     <div className="flex items-center space-x-4">
// //       <div className="text-center">
// //         <p className="text-[9px] font-black text-red-500 uppercase">Pending</p>
// //         <h2 className="text-2xl font-black text-red-600 leading-none">{dashboardCounts.tcNotSubmitted}</h2>
// //       </div>
// //       <div className="h-8 w-[1px] bg-red-200"></div>
// //       <div className="text-center">
// //         <p className="text-[9px] font-black text-gray-400 uppercase">Recvd</p>
// //         <h2 className="text-xl font-bold text-gray-500 leading-none">{dashboardCounts.tcSubmitted}</h2>
// //       </div>
// //     </div>
// //   </div>

// //   {/* Conduct Status - Pending vs Submitted */}
// //   <div onClick={() => handleDashboardFilter("conduct")} className="bg-orange-50/50 rounded-full pl-6 pr-4 shadow-md border border-orange-100 flex items-center justify-between h-20 transition-all hover:shadow-lg">
// //     <div className="flex flex-col min-w-[80px]">
// //       <span className="bg-orange-500 text-white px-3 py-1 rounded-full font-black uppercase text-[12px] tracking-widest w-fit mb-1">
// //         Conduct
// //       </span>
// //       <p className="text-orange-900/40 text-[10px] font-bold uppercase tracking-tighter">Status</p>
// //     </div>
// //     <div className="flex items-center space-x-4">
// //       <div className="text-center">
// //         <p className="text-[9px] font-black text-orange-500 uppercase">Pending</p>
// //         <h2 className="text-2xl font-black text-orange-600 leading-none">{dashboardCounts.conductNotSubmitted}</h2>
// //       </div>
// //       <div className="h-8 w-[1px] bg-orange-200"></div>
// //       <div className="text-center">
// //         <p className="text-[9px] font-black text-gray-400 uppercase">Recvd</p>
// //         <h2 className="text-xl font-bold text-gray-500 leading-none">{dashboardCounts.conductSubmitted}</h2>
// //       </div>
// //     </div>
// //   </div>

// //   {/* Marks Status - Pending vs Submitted */}
// //   <div onClick={() => handleDashboardFilter("marksmemo")} className="bg-amber-50/50 rounded-full pl-6 pr-4 shadow-md border border-amber-100 flex items-center justify-between h-20 transition-all hover:shadow-lg">
// //     <div className="flex flex-col min-w-[80px]">
// //       <span className="bg-amber-500 text-white px-3 py-1 rounded-full font-black uppercase text-[12px] tracking-widest w-fit mb-1">
// //         Marks Memo
// //       </span>
// //       <p className="text-amber-900/40 text-[10px] font-bold uppercase tracking-tighter">Status</p>
// //     </div>
// //     <div className="flex items-center space-x-4">
// //       <div className="text-center">
// //         <p className="text-[9px] font-black text-amber-600 uppercase">Pending</p>
// //         <h2 className="text-2xl font-black text-amber-600 leading-none">{dashboardCounts.marksMemoNotSubmitted}</h2>
// //       </div>
// //       <div className="h-8 w-[1px] bg-amber-200"></div>
// //       <div className="text-center">
// //         <p className="text-[9px] font-black text-gray-400 uppercase">Recvd</p>
// //         <h2 className="text-xl font-bold text-gray-500 leading-none">{dashboardCounts.marksMemoSubmitted}</h2>
// //       </div>
// //     </div>
// //   </div>

// // </div>



// //       {/* --- TABLE INTERFACE --- */}
// //       <div className="max-w-6xl mx-auto ">
// //         <div className="bg-white rounded-[2rem] shadow-xl border border-gray-100">
// //           <div className="p-8">
// //             <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
// //               <div>
// //                 <h2 className="text-3xl font-black text-blue-900 tracking-tight">
// //   {activeFilter === "tc"
// //     ? "Showing Pending TC Records"
// //     : activeFilter === "conduct"
// //     ? "Showing Pending Conduct Records"
// //     : activeFilter === "marksmemo"
// //     ? "Showing Pending Marks Memo Records"
// //     : "Student Database"}
// // </h2>
// //                 <p className="text-gray-400 text-sm font-medium italic">Showing {students.length} record(s)</p>
// //               </div>
// //               <div className="relative w-full md:w-96">
// //                 <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
// //                 <input
// //                   type="text"
// //                   placeholder="Search student by name..."
// //                   className="w-full pl-12 pr-4 py-3 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all text-sm font-medium outline-none"
// //                   value={searchTerm}
// //                   onChange={(e) => setSearchTerm(e.target.value)}
// //                 />
// //               </div>
// //             </div>

// //             <div className="overflow-x-auto">
// //               <table className="w-full border-separate border-spacing-y-2">
// //                 <thead>
// //                   <tr className="text-gray-400 text-left">
// //                     <th className="px-6 py-3 text-[15px] font-black uppercase tracking-widest">Admission No</th>
// //                     <th className="px-6 py-3 text-[15px] font-black uppercase tracking-widest">Student Name</th>
// //                     <th className="px-6 py-3 text-[15px] font-black uppercase tracking-widest">Father's Name</th>
// //                     <th className="px-6 py-3 text-[15px] font-black uppercase tracking-widest">Date of Birth</th>
// //                     <th className="px-6 py-3 text-[15px] font-black uppercase tracking-widest text-right">Action</th>
// //                   </tr>
// //                 </thead>
// //                 <tbody>
// //                   {loading ? (
// //                     <tr>
// //                       <td colSpan="5" className="p-20 text-center">
// //                         <Loader2 className="animate-spin inline text-blue-600" />
// //                         <p className="text-gray-400 mt-2 font-bold uppercase text-xs tracking-widest">Loading Database...</p>
// //                       </td>
// //                     </tr>
// //                   ) : students.length > 0 ? (
// //                     students.map((student) => (
// //                       <tr 
// //                         key={student._id} 
// //                         onClick={() => handleOpenProfile(student)}
// //                         className="group cursor-pointer bg-white hover:bg-blue-50/50 transition-all"
// //                       >
// //                         <td className="px-6 py-4 rounded-l-2xl border-y border-l border-gray-50 group-hover:border-blue-100">
// //                           <span className="bg-gray-100 group-hover:bg-blue-100 text-gray-600 group-hover:text-blue-700 px-3 py-1 rounded-lg text-xs font-bold">
// //                             {student.admissionInfo?.admissionNo || 'N/A'}
// //                           </span>
// //                         </td>
// //                         <td className="px-6 py-4 border-y border-gray-50 group-hover:border-blue-100 font-bold text-blue-900">
// //                           {student.name}
// //                         </td>
// //                         <td className="px-6 py-4 border-y border-gray-50 group-hover:border-blue-100 text-gray-500 font-medium">
// //                           {student.parentDetails?.fatherName || 'N/A'}
// //                         </td>
// //                         <td className="px-6 py-4 border-y border-gray-50 group-hover:border-blue-100 text-gray-400 font-medium">
// //                           {student.dob ? new Date(student.dob).toLocaleDateString('en-GB') : 'N/A'}
// //                         </td>
// //                         <td className="px-6 py-4 rounded-r-2xl border-y border-r border-gray-50 group-hover:border-blue-100 text-right">
// //                           <button className="text-[10px] font-black uppercase text-blue-600 bg-blue-50 px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-all">
// //                             View Details
// //                           </button>
// //                         </td>
// //                       </tr>
// //                     ))
// //                   ) : (
// //                     <tr>
// //                       <td colSpan="5" className="p-20 text-center text-gray-400 italic">
// //                         No students found.
// //                       </td>
// //                     </tr>
// //                   )}
// //                 </tbody>
// //               </table>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // const Loader2 = ({ className }) => (
// //   <svg className={`animate-spin ${className}`} width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
// //     <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
// //   </svg>
// // );

// // export default StudentTable;





// // goood 








// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';
// // import { Search, FileUser, X, GraduationCap, MapPin, UserCircle, Edit3, Save, RotateCcw } from 'lucide-react';

// // /**
// //  * REUSABLE EDITABLE FIELD COMPONENT 
// //  */
// // const EditableField = ({ label, name, value, onChange, isEditing, highlight = false, type = "text" }) => (
// //   <div className="flex flex-col space-y-1">
// //     <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">{label}</p>
// //     {isEditing ? (
// //       <input
// //         type={type}
// //         name={name}
// //         value={value || ''}
// //         onChange={onChange}
// //         className="px-3 py-2 border border-blue-400 rounded-lg text-sm bg-white focus:ring-2 focus:ring-blue-500 outline-none transition-all font-medium text-blue-900"
// //       />
// //     ) : (
// //       <div className={`px-3 py-2 border rounded-lg text-sm transition-all ${
// //         highlight 
// //           ? 'bg-blue-50 border-blue-200 text-blue-900 font-bold' 
// //           : 'bg-gray-50 border-gray-200 text-gray-800 font-medium'
// //       }`}>
// //         {value || <span className="text-gray-300 italic">Not Recorded</span>}
// //       </div>
// //     )}
// //   </div>
// // );
// // const PreviewField = ({ 
// //   label, 
// //   value, 
// //   highlight = false, 
// //   fileUrl = null 
// // }) => (
// //   <div className="flex flex-col space-y-1">
// //     <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
// //       {label}
// //     </p>

// //     <div
// //       className={`px-3 py-2 border rounded-lg text-sm transition-all ${
// //         highlight
// //           ? "bg-blue-50 border-blue-200 text-blue-900 font-bold"
// //           : "bg-gray-50 border-gray-200 text-gray-800 font-medium"
// //       }`}
// //     >
// //       {value ? (
// //         <div className="flex items-center justify-between gap-2">
// //           <span className="truncate">{value}</span>

// //           {fileUrl && (
// //             <a
// //               href={fileUrl}
// //               target="_blank"
// //               rel="noopener noreferrer"
// //               className="text-xs bg-blue-600 text-white px-2 py-1 rounded hover:bg-black"
// //             >
// //               View
// //             </a>
// //           )}
// //         </div>
// //       ) : (
// //         <span className="text-gray-300 italic">Not Recorded</span>
// //       )}
// //     </div>
// //   </div>
// // );
// // const StudentTable = () => {
// //   const [students, setStudents] = useState([]);
// //   const [searchTerm, setSearchTerm] = useState("");
// //   const [loading, setLoading] = useState(true);
  
// //   const [selectedStudent, setSelectedStudent] = useState(null); 
// //   const [isEditing, setIsEditing] = useState(false);
// //   const [editData, setEditData] = useState(null);
// //   const [isSaving, setIsSaving] = useState(false);
// //   const [dashboardCounts, setDashboardCounts] = useState({
// //   totalStudents: 0,
// //   tcSubmitted: 0,
// //   tcNotSubmitted: 0,
// //   conductSubmitted: 0,
// //   conductNotSubmitted: 0,
// //   marksMemoSubmitted: 0,
// //   marksMemoNotSubmitted: 0
// // });
// // const [activeFilter, setActiveFilter] = useState("all");


// // const fetchDashboardCounts = async () => {
// //   try {
// //     const response = await axios.get(
// //       "http://localhost:5000/api/students/dashboard-counts"
// //     );

// //     setDashboardCounts(response.data);

// //   } catch (error) {
// //     console.error("Dashboard fetch error:", error);
// //   }
// // };

// //   // FETCH FUNCTION
// //   const fetchStudents = async (query = "", pendingType = "") => {
// //   setLoading(true);

// //   try {
// //     let url = `http://localhost:5000/api/students/search?name=${query}`;

// //     if (pendingType) {
// //       url += `&pending=${pendingType}`;
// //     }

// //     const response = await axios.get(url);

// //     setStudents(response.data);

// //   } catch (error) {
// //     console.error("Error fetching students:", error);

// //   } finally {
// //     setLoading(false);
// //   }
// // };

// //   // DEBOUNCED SEARCH & INITIAL LOAD
// //   useEffect(() => {
// //     fetchDashboardCounts();
// //     const delayDebounceFn = setTimeout(() => {
// //       fetchStudents(searchTerm);
// //     }, 400); // Slightly longer debounce for smoother UX

// //     return () => clearTimeout(delayDebounceFn);
// //   }, [searchTerm]);

// //  const handleOpenProfile = (student) => {
// //   const freshStudent = JSON.parse(JSON.stringify(student));

// //   setSelectedStudent(freshStudent);
// //   setEditData(freshStudent);
// //   setIsEditing(false);
// // };


// // const handleDashboardFilter = (type) => {
// //   setActiveFilter(type);
// //   fetchStudents("", type);
// // };

// // const handleFileChange = async (e, fieldName) => {
// //   const file = e.target.files[0];
// //   if (!file) return;

// //   const formData = new FormData();
// //   formData.append("file", file);

// //   try {
// //     const response = await axios.post(
// //   `http://localhost:5000/api/students/upload/${editData._id}/${fieldName}`,
// //   formData
// // );

// // const updatedStudent = response.data.updatedStudent;

// // // Update edit form instantly
// // setEditData(JSON.parse(JSON.stringify(updatedStudent)));

// // // Update modal preview instantly
// // setSelectedStudent(JSON.parse(JSON.stringify(updatedStudent)));

// // // Update table instantly
// // setStudents(prev =>
// //   prev.map(student =>
// //     student._id === updatedStudent._id ? updatedStudent : student
// //   )
// // );
// // fetchDashboardCounts();
// //     alert("File uploaded successfully!");

// //   } catch (error) {
// //     console.error("UPLOAD ERROR:", error.response?.data || error.message);

// //     alert(
// //       error.response?.data?.error || "File upload failed"
// //     );
// //   }
// // };



// //   const handleEditChange = (e) => {
// //   const { name, value } = e.target;

// //   // Parent Details
// //   if (
// //     [
// //       "fatherName", "fatherMobile", "fatherAadhaar", "fatherQualification", "fatherOccupation", "fatherAnnualIncome",
// //       "motherName", "motherMobile", "motherAadhaar", "motherQualification", "motherOccupation", "motherAnnualIncome",
// //       "guardianName", "guardianRelation", "guardianMobile", "guardianAadhaar", "guardianOccupation", "guardianAnnualIncome",
// //       "residence"
// //     ].includes(name)
// //   ) {
// //     setEditData(prev => ({
// //       ...prev,
// //       parentDetails: {
// //         ...prev.parentDetails,
// //         [name]: value
// //       }
// //     }));
// //     return;
// //   }

// //   // Admission Info
// //   if (
// //     [
// //       "admissionNo",
// //       "classAdmittedTo",
// //       "previousSchoolName",
// //       "previousTCNumber",
// //       "previousTCDate"
// //     ].includes(name)
// //   ) {
// //     setEditData(prev => ({
// //       ...prev,
// //       admissionInfo: {
// //         ...prev.admissionInfo,
// //         [name]: value
// //       }
// //     }));
// //     return;
// //   }

// //   // Main Student Fields
// //   setEditData(prev => ({
// //     ...prev,
// //     [name]: value
// //   }));
// // };

// //   const handleUpdate = async () => {
// //   setIsSaving(true);

// //   try {
// //     const response = await axios.put(
// //       `http://localhost:5000/api/students/${editData._id}`,
// //       editData
// //     );

// //     const updatedStudent = response.data.updatedStudent;

// //     // UPDATE TABLE
// //     setStudents(prev =>
// //       prev.map(student =>
// //         student._id === updatedStudent._id ? updatedStudent : student
// //       )
// //     );

// //     // UPDATE MODAL
// //     setSelectedStudent(updatedStudent);

// //     // UPDATE EDIT FORM
// //     setEditData(JSON.parse(JSON.stringify(updatedStudent)));

// //     // OPTIONAL REFRESH
// //     await fetchStudents(searchTerm);

// //     setIsEditing(false);

// //     alert("Student record updated successfully!");

// //   } catch (error) {
// //     console.error("Update failed:", error.response?.data || error.message);
// //     alert("Failed to update record.");
// //   } finally {
// //     setIsSaving(false);
// //   }
// // };


// // const handleExcelDownload = async () => {
// //   try {
// //     const response = await axios.get(
// //       `http://localhost:5000/api/students/export-excel?pending=${activeFilter}`,
// //       {
// //         responseType: "blob"
// //       }
// //     );

// //     const blob = new Blob([response.data], {
// //       type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
// //     });

// //     const url = window.URL.createObjectURL(blob);

// //     const link = document.createElement("a");
// //     link.href = url;

// //     link.download =
// //       activeFilter === "all"
// //         ? "all_students.xlsx"
// //         : `pending_${activeFilter}_students.xlsx`;

// //     document.body.appendChild(link);
// //     link.click();
// //     link.remove();

// //     window.URL.revokeObjectURL(url);

// //   } catch (error) {
// //     console.error("Excel download failed:", error);
// //     alert("Failed to download Excel.");
// //   }
// // };


// //   return (
// //     <div className="p-4 lg:p-8 bg-slate-50 min-h-screen font-sans text-left">
      
// //       {/* --- MODAL --- */}
// //       {selectedStudent && (
// //         <div className="fixed inset-0 bg-blue-900/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
// //           <div className="bg-white rounded-[2rem] shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-10 border border-white">
            
// //             <header className="mb-8 border-b-2 border-blue-100 pb-6 flex justify-between items-start">
// //               <div className="flex gap-4 items-center">
// //                 <div className={`p-4 rounded-2xl text-white shadow-lg transition-colors ${isEditing ? 'bg-orange-500' : 'bg-blue-600'}`}>
// //                    {isEditing ? <Edit3 size={32} /> : <FileUser size={32} />}
// //                 </div>
// //                 <div>
// //                   <h2 className="text-3xl font-black text-blue-900 leading-tight">
// //                     {isEditing ? "Edit Record" : selectedStudent.name}
// //                   </h2>
// //                   <p className="text-blue-500 text-xs font-black uppercase tracking-widest">
// //                     {isEditing ? "Modify necessary information below" : `Admission No: ${selectedStudent.admissionInfo?.admissionNo || 'N/A'}`}
// //                   </p>
// //                 </div>
// //               </div>
// //               <button onClick={() => setSelectedStudent(null)} className="p-2 hover:bg-red-50 text-gray-400 hover:text-red-500 rounded-full">
// //                 <X size={28} />
// //               </button>
// //             </header>

// //             <div className="space-y-10">

// //   {/* 1. Personal Identity */}
// //   <section>
// //     <div className="flex items-center gap-2 mb-4 text-blue-900 font-black uppercase tracking-tighter text-sm">
// //       <UserCircle size={18} /> Personal Identity
// //     </div>

// //     <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
// //       <EditableField label="Full Name" name="name" value={editData.name} onChange={handleEditChange} isEditing={isEditing} highlight />
// //       <EditableField label="Aadhaar No" name="aadhaarNo" value={editData.aadhaarNo} onChange={handleEditChange} isEditing={isEditing} />
// //       <EditableField label="Date of Birth" name="dob" type="date" value={editData.dob?.split('T')[0]} onChange={handleEditChange} isEditing={isEditing} />
// //       <EditableField label="Gender" name="gender" value={editData.gender} onChange={handleEditChange} isEditing={isEditing} />
// //       <EditableField label="Nationality" name="nationality" value={editData.nationality} onChange={handleEditChange} isEditing={isEditing} />
// //       <EditableField label="Religion" name="religion" value={editData.religion} onChange={handleEditChange} isEditing={isEditing} />
// //       <EditableField label="Caste" name="caste" value={editData.caste} onChange={handleEditChange} isEditing={isEditing} />
// //       <EditableField label="Mother Tongue" name="motherTongue" value={editData.motherTongue} onChange={handleEditChange} isEditing={isEditing} />
// //       <EditableField label="State" name="state" value={editData.state} onChange={handleEditChange} isEditing={isEditing} />
// //     </div>
// //   </section>

// //   {/* 2. Family Records */}
// //   <section className="pt-6 border-t border-gray-100">
// //     <div className="flex items-center gap-2 mb-4 text-blue-900 font-black uppercase tracking-tighter text-sm">
// //       <MapPin size={18} /> Family Records
// //     </div>

// //     <div className="space-y-6">
// //       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-gray-50 p-4 rounded-xl">
// //         <EditableField label="Father Name" name="fatherName" value={editData.parentDetails?.fatherName} onChange={handleEditChange} isEditing={isEditing} highlight />
// //         <EditableField label="Father Mobile" name="fatherMobile" value={editData.parentDetails?.fatherMobile} onChange={handleEditChange} isEditing={isEditing} />
// //         <EditableField label="Father Aadhaar" name="fatherAadhaar" value={editData.parentDetails?.fatherAadhaar} onChange={handleEditChange} isEditing={isEditing} />
// //         <EditableField label="Father Qualification" name="fatherQualification" value={editData.parentDetails?.fatherQualification} onChange={handleEditChange} isEditing={isEditing} />
// //         <EditableField label="Father Occupation" name="fatherOccupation" value={editData.parentDetails?.fatherOccupation} onChange={handleEditChange} isEditing={isEditing} />
// //         <EditableField label="Father Income" name="fatherAnnualIncome" value={editData.parentDetails?.fatherAnnualIncome} onChange={handleEditChange} isEditing={isEditing} />
// //       </div>

// //       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-gray-50 p-4 rounded-xl">
// //         <EditableField label="Mother Name" name="motherName" value={editData.parentDetails?.motherName} onChange={handleEditChange} isEditing={isEditing} />
// //         <EditableField label="Mother Mobile" name="motherMobile" value={editData.parentDetails?.motherMobile} onChange={handleEditChange} isEditing={isEditing} />
// //         <EditableField label="Mother Aadhaar" name="motherAadhaar" value={editData.parentDetails?.motherAadhaar} onChange={handleEditChange} isEditing={isEditing} />
// //         <EditableField label="Mother Qualification" name="motherQualification" value={editData.parentDetails?.motherQualification} onChange={handleEditChange} isEditing={isEditing} />
// //         <EditableField label="Mother Occupation" name="motherOccupation" value={editData.parentDetails?.motherOccupation} onChange={handleEditChange} isEditing={isEditing} />
// //         <EditableField label="Mother Income" name="motherAnnualIncome" value={editData.parentDetails?.motherAnnualIncome} onChange={handleEditChange} isEditing={isEditing} />
// //       </div>

// //       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-gray-50 p-4 rounded-xl">
// //         <EditableField label="Guardian Name" name="guardianName" value={editData.parentDetails?.guardianName} onChange={handleEditChange} isEditing={isEditing} />
// //         <EditableField label="Guardian Relation" name="guardianRelation" value={editData.parentDetails?.guardianRelation} onChange={handleEditChange} isEditing={isEditing} />
// //         <EditableField label="Guardian Mobile" name="guardianMobile" value={editData.parentDetails?.guardianMobile} onChange={handleEditChange} isEditing={isEditing} />
// //         <EditableField label="Guardian Aadhaar" name="guardianAadhaar" value={editData.parentDetails?.guardianAadhaar} onChange={handleEditChange} isEditing={isEditing} />
// //         <EditableField label="Guardian Occupation" name="guardianOccupation" value={editData.parentDetails?.guardianOccupation} onChange={handleEditChange} isEditing={isEditing} />
// //         <EditableField label="Guardian Income" name="guardianAnnualIncome" value={editData.parentDetails?.guardianAnnualIncome} onChange={handleEditChange} isEditing={isEditing} />
// //       </div>

// //       <EditableField label="Residence Address" name="residence" value={editData.parentDetails?.residence} onChange={handleEditChange} isEditing={isEditing} highlight />
// //     </div>
// //   </section>

// //   {/* 3. Academic Information */}
// //   <section className="pt-6 border-t border-gray-100">
// //     <div className="flex items-center gap-2 mb-4 text-blue-900 font-black uppercase tracking-tighter text-sm">
// //       <GraduationCap size={18} /> Academic Information
// //     </div>

// //     <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
// //       <EditableField label="Admission No" name="admissionNo" value={editData.admissionInfo?.admissionNo} onChange={handleEditChange} isEditing={isEditing} highlight />
// //       <EditableField label="Class Admitted To" name="classAdmittedTo" value={editData.admissionInfo?.classAdmittedTo} onChange={handleEditChange} isEditing={isEditing} />
// //       <EditableField label="Previous School" name="previousSchoolName" value={editData.admissionInfo?.previousSchoolName} onChange={handleEditChange} isEditing={isEditing} />
// //       <EditableField label="Previous TC Number" name="previousTCNumber" value={editData.admissionInfo?.previousTCNumber} onChange={handleEditChange} isEditing={isEditing} />
// //       <EditableField label="Previous TC Date" name="previousTCDate" type="date" value={editData.admissionInfo?.previousTCDate?.split('T')[0]} onChange={handleEditChange} isEditing={isEditing} />
// //     </div>
// //   </section>
// //   <section className="pt-6 border-t border-gray-100">
// //   <div className="flex items-center gap-2 mb-4 text-blue-900 font-black uppercase tracking-tighter text-sm">
// //     <FileUser size={18} /> Uploaded Documents
// //   </div>

// //   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// //     {[
// //     ["studentAadhaarFile", "Student Aadhaar File"],
// //     ["fatherAadhaarFile", "Father Aadhaar File"],
// //     ["motherAadhaarFile", "Mother Aadhaar File"],
// //     ["guardianAadhaarFile", "Guardian Aadhaar File"],
// //     ["tcFile", "Transfer Certificate"],
// //     ["conductFile", "Conduct Certificate"],
// //     ["marksMemoFile", "Marks Memo"]
// //   ].map(([field, label]) => (
// //     <div key={field} className="flex flex-col space-y-1">
// //       <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
// //         {label}
// //       </p>

// //       {isEditing ? (
// //         <input
// //           type="file"
// //           accept=".pdf,.jpg,.jpeg,.png"
// //           onChange={(e) => handleFileChange(e, field)}
// //           className="px-3 py-2 border border-blue-300 rounded-lg text-sm bg-white"
// //         />
// //       ) : (
// //         <PreviewField
// //   label={label}
// //   value={editData.documents?.[field] ? "Uploaded" : ""}
// //   fileUrl={editData.documents?.[field]}
// //   highlight={field === "studentAadhaarFile" || field === "tcFile"}
// // />
// //       )}
// //     </div>
// //   ))}
// //   </div>
// // </section>

// // </div>

// //             <div className="mt-10 flex gap-4">
// //               {isEditing ? (
// //                 <>
// //                   <button onClick={handleUpdate} disabled={isSaving} className="flex-1 bg-green-600 text-white py-4 rounded-2xl font-bold uppercase tracking-widest hover:bg-green-700 transition-all flex items-center justify-center gap-2">
// //                     {isSaving ? <Loader2 className="animate-spin" /> : <Save size={20} />}
// //                     {isSaving ? "Saving..." : "Save Changes"}
// //                   </button>
// //                   <button   onClick={() => {
// //     setIsEditing(false);
// //     setEditData(JSON.parse(JSON.stringify(selectedStudent)));
// //   }} className="px-8 bg-gray-100 text-gray-500 py-4 rounded-2xl font-bold uppercase tracking-widest hover:bg-gray-200 transition-all flex items-center gap-2">
// //                     <RotateCcw size={20} /> Cancel
// //                   </button>
// //                 </>
// //               ) : (
// //                 <>
// //                   <button onClick={() => setIsEditing(true)} className="flex-1 bg-blue-600 text-white py-4 rounded-2xl font-bold uppercase tracking-widest hover:bg-blue-700 transition-all flex items-center justify-center gap-2">
// //                     <Edit3 size={20} /> Edit Profile
// //                   </button>
// //                   <button onClick={() => setSelectedStudent(null)} className="px-8 bg-blue-900 text-white py-4 rounded-2xl font-bold uppercase tracking-widest hover:bg-black transition-all">
// //                     Close
// //                   </button>
// //                 </>
// //               )}
// //             </div>
// //           </div>
// //         </div>
// //       )}

// // {/* --- COMPACT DUAL-STAT DASHBOARD (H-20) --- */}
// // <div className="max-w-7xl mx-auto mb-8 grid grid-cols-1 md:grid-cols-4 gap-4 px-4">
  
// //   {/* Total Students - Registry Baseline */}
// //   <div   onClick={() => {
// //     setActiveFilter("all");
// //     fetchStudents("");
// //   }} className="bg-white rounded-full px-6 shadow-md border border-blue-50 flex items-center justify-between h-20 transition-all hover:shadow-lg">
// //     <div className="flex flex-col">
// //       <span className="bg-blue-600 text-white px-3 py-1 rounded-full font-black uppercase text-[12px] tracking-widest w-fit mb-1">
// //         Students
// //       </span>
// //       <p className="text-blue-900/40 text-[10px] font-bold uppercase">Total</p>
// //     </div>
// //     <div className="text-right">
// //       <h2 className="text-2xl font-black text-blue-900 leading-none">
// //         {dashboardCounts.totalStudents}
// //       </h2>
// //     </div>
// //   </div>

// //   {/* TC Status - Pending vs Submitted */}
// //   <div onClick={() => handleDashboardFilter("tc")} className="bg-red-50/50 rounded-full pl-6 pr-4 shadow-md border border-red-100 flex items-center justify-between h-20 transition-all hover:shadow-lg">
// //     <div className="flex flex-col min-w-[80px]">
// //       <span className="bg-red-600 text-white px-3 py-1 rounded-full font-black uppercase text-[12px] tracking-widest w-fit mb-1">
// //         TC
// //       </span>
// //       <p className="text-red-900/40 text-[10px] font-bold uppercase tracking-tighter">Status</p>
// //     </div>
// //     <div className="flex items-center space-x-4">
// //       <div className="text-center">
// //         <p className="text-[9px] font-black text-red-500 uppercase">Pending</p>
// //         <h2 className="text-2xl font-black text-red-600 leading-none">{dashboardCounts.tcNotSubmitted}</h2>
// //       </div>
// //       <div className="h-8 w-[1px] bg-red-200"></div>
// //       <div className="text-center">
// //         <p className="text-[9px] font-black text-gray-400 uppercase">Recvd</p>
// //         <h2 className="text-xl font-bold text-gray-500 leading-none">{dashboardCounts.tcSubmitted}</h2>
// //       </div>
// //     </div>
// //   </div>

// //   {/* Conduct Status - Pending vs Submitted */}
// //   <div onClick={() => handleDashboardFilter("conduct")} className="bg-orange-50/50 rounded-full pl-6 pr-4 shadow-md border border-orange-100 flex items-center justify-between h-20 transition-all hover:shadow-lg">
// //     <div className="flex flex-col min-w-[80px]">
// //       <span className="bg-orange-500 text-white px-3 py-1 rounded-full font-black uppercase text-[12px] tracking-widest w-fit mb-1">
// //         Conduct
// //       </span>
// //       <p className="text-orange-900/40 text-[10px] font-bold uppercase tracking-tighter">Status</p>
// //     </div>
// //     <div className="flex items-center space-x-4">
// //       <div className="text-center">
// //         <p className="text-[9px] font-black text-orange-500 uppercase">Pending</p>
// //         <h2 className="text-2xl font-black text-orange-600 leading-none">{dashboardCounts.conductNotSubmitted}</h2>
// //       </div>
// //       <div className="h-8 w-[1px] bg-orange-200"></div>
// //       <div className="text-center">
// //         <p className="text-[9px] font-black text-gray-400 uppercase">Recvd</p>
// //         <h2 className="text-xl font-bold text-gray-500 leading-none">{dashboardCounts.conductSubmitted}</h2>
// //       </div>
// //     </div>
// //   </div>

// //   {/* Marks Status - Pending vs Submitted */}
// //   <div onClick={() => handleDashboardFilter("marksmemo")} className="bg-amber-50/50 rounded-full pl-6 pr-4 shadow-md border border-amber-100 flex items-center justify-between h-20 transition-all hover:shadow-lg">
// //     <div className="flex flex-col min-w-[80px]">
// //       <span className="bg-amber-500 text-white px-3 py-1 rounded-full font-black uppercase text-[12px] tracking-widest w-fit mb-1">
// //         Marks Memo
// //       </span>
// //       <p className="text-amber-900/40 text-[10px] font-bold uppercase tracking-tighter">Status</p>
// //     </div>
// //     <div className="flex items-center space-x-4">
// //       <div className="text-center">
// //         <p className="text-[9px] font-black text-amber-600 uppercase">Pending</p>
// //         <h2 className="text-2xl font-black text-amber-600 leading-none">{dashboardCounts.marksMemoNotSubmitted}</h2>
// //       </div>
// //       <div className="h-8 w-[1px] bg-amber-200"></div>
// //       <div className="text-center">
// //         <p className="text-[9px] font-black text-gray-400 uppercase">Recvd</p>
// //         <h2 className="text-xl font-bold text-gray-500 leading-none">{dashboardCounts.marksMemoSubmitted}</h2>
// //       </div>
// //     </div>
// //   </div>

// // </div>



// //       {/* --- TABLE INTERFACE --- */}
// //       <div className="max-w-6xl mx-auto ">
// //         <div className="bg-white rounded-[2rem] shadow-xl border border-gray-100">
// //           <div className="p-8">
// //             <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
// //               <div>
// //                 <h2 className="text-3xl font-black text-blue-900 tracking-tight">
// //   {activeFilter === "tc"
// //     ? "Showing Pending TC Records"
// //     : activeFilter === "conduct"
// //     ? "Showing Pending Conduct Records"
// //     : activeFilter === "marksmemo"
// //     ? "Showing Pending Marks Memo Records"
// //     : "Student Database"}
// // </h2>
// //                 <p className="text-gray-400 text-sm font-medium italic">Showing {students.length} record(s)</p>
// //               </div>
// //               <div className="flex gap-3 w-full md:w-auto items-center">
// //                 <button
// //   onClick={handleExcelDownload}
// //   className="bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-2xl font-bold uppercase text-xs tracking-widest shadow-md whitespace-nowrap"
// // >
// //   Download Excel
// // </button>
// //                 <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
// //                 <input
// //                   type="text"
// //                   placeholder="Search student by name..."
// //                   className="w-full pl-12 pr-4 py-3 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all text-sm font-medium outline-none"
// //                   value={searchTerm}
// //                   onChange={(e) => setSearchTerm(e.target.value)}
// //                 />
// //               </div>
// //             </div>

// //             <div className="overflow-x-auto">
// //               <table className="w-full border-separate border-spacing-y-2">
// //                 <thead>
// //                   <tr className="text-gray-400 text-left">
// //                     <th className="px-6 py-3 text-[15px] font-black uppercase tracking-widest">Admission No</th>
// //                     <th className="px-6 py-3 text-[15px] font-black uppercase tracking-widest">Student Name</th>
// //                     <th className="px-6 py-3 text-[15px] font-black uppercase tracking-widest">Father's Name</th>
// //                     <th className="px-6 py-3 text-[15px] font-black uppercase tracking-widest">Date of Birth</th>
// //                     <th className="px-6 py-3 text-[15px] font-black uppercase tracking-widest text-right">Action</th>
// //                   </tr>
// //                 </thead>
// //                 <tbody>
// //                   {loading ? (
// //                     <tr>
// //                       <td colSpan="5" className="p-20 text-center">
// //                         <Loader2 className="animate-spin inline text-blue-600" />
// //                         <p className="text-gray-400 mt-2 font-bold uppercase text-xs tracking-widest">Loading Database...</p>
// //                       </td>
// //                     </tr>
// //                   ) : students.length > 0 ? (
// //                     students.map((student) => (
// //                       <tr 
// //                         key={student._id} 
// //                         onClick={() => handleOpenProfile(student)}
// //                         className="group cursor-pointer bg-white hover:bg-blue-50/50 transition-all"
// //                       >
// //                         <td className="px-6 py-4 rounded-l-2xl border-y border-l border-gray-50 group-hover:border-blue-100">
// //                           <span className="bg-gray-100 group-hover:bg-blue-100 text-gray-600 group-hover:text-blue-700 px-3 py-1 rounded-lg text-xs font-bold">
// //                             {student.admissionInfo?.admissionNo || 'N/A'}
// //                           </span>
// //                         </td>
// //                         <td className="px-6 py-4 border-y border-gray-50 group-hover:border-blue-100 font-bold text-blue-900">
// //                           {student.name}
// //                         </td>
// //                         <td className="px-6 py-4 border-y border-gray-50 group-hover:border-blue-100 text-gray-500 font-medium">
// //                           {student.parentDetails?.fatherName || 'N/A'}
// //                         </td>
// //                         <td className="px-6 py-4 border-y border-gray-50 group-hover:border-blue-100 text-gray-400 font-medium">
// //                           {student.dob ? new Date(student.dob).toLocaleDateString('en-GB') : 'N/A'}
// //                         </td>
// //                         <td className="px-6 py-4 rounded-r-2xl border-y border-r border-gray-50 group-hover:border-blue-100 text-right">
// //                           <button className="text-[10px] font-black uppercase text-blue-600 bg-blue-50 px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-all">
// //                             View Details
// //                           </button>
// //                         </td>
// //                       </tr>
// //                     ))
// //                   ) : (
// //                     <tr>
// //                       <td colSpan="5" className="p-20 text-center text-gray-400 italic">
// //                         No students found.
// //                       </td>
// //                     </tr>
// //                   )}
// //                 </tbody>
// //               </table>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // const Loader2 = ({ className }) => (
// //   <svg className={`animate-spin ${className}`} width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
// //     <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
// //   </svg>
// // );

// // export default StudentTable;





// // this is very very good







// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';
// // import { Search, FileUser, X, GraduationCap, MapPin, UserCircle, Edit3, Save, RotateCcw } from 'lucide-react';
// // import TransferCertificate from './TransferCertificate';



// // /**
// //  * REUSABLE EDITABLE FIELD COMPONENT 
// //  */
// // const EditableField = ({ label, name, value, onChange, isEditing, highlight = false, type = "text" }) => (
// //   <div className="flex flex-col space-y-1">
// //     <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">{label}</p>
// //     {isEditing ? (
// //       <input
// //         type={type}
// //         name={name}
// //         value={value || ''}
// //         onChange={onChange}
// //         className="px-3 py-2 border border-blue-400 rounded-lg text-sm bg-white focus:ring-2 focus:ring-blue-500 outline-none transition-all font-medium text-blue-900"
// //       />
// //     ) : (
// //       <div className={`px-3 py-2 border rounded-lg text-sm transition-all ${
// //         highlight 
// //           ? 'bg-blue-50 border-blue-200 text-blue-900 font-bold' 
// //           : 'bg-gray-50 border-gray-200 text-gray-800 font-medium'
// //       }`}>
// //         {value || <span className="text-gray-300 italic">Not Recorded</span>}
// //       </div>
// //     )}
// //   </div>
// // );
// // const PreviewField = ({ 
// //   label, 
// //   value, 
// //   highlight = false, 
// //   fileUrl = null 
// // }) => (
// //   <div className="flex flex-col space-y-1">
// //     <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
// //       {label}
// //     </p>

// //     <div
// //       className={`px-3 py-2 border rounded-lg text-sm transition-all ${
// //         highlight
// //           ? "bg-blue-50 border-blue-200 text-blue-900 font-bold"
// //           : "bg-gray-50 border-gray-200 text-gray-800 font-medium"
// //       }`}
// //     >
// //       {value ? (
// //         <div className="flex items-center justify-between gap-2">
// //           <span className="truncate">{value}</span>

// //           {fileUrl && (
// //             <a
// //               href={fileUrl}
// //               target="_blank"
// //               rel="noopener noreferrer"
// //               className="text-xs bg-blue-600 text-white px-2 py-1 rounded hover:bg-black"
// //             >
// //               View
// //             </a>
// //           )}
// //         </div>
// //       ) : (
// //         <span className="text-gray-300 italic">Not Recorded</span>
// //       )}
// //     </div>
// //   </div>
// // );
// // const StudentTable = () => {
// //   const [students, setStudents] = useState([]);
// //   const [viewingTC, setViewingTC] = useState(false);
// //   const [searchTerm, setSearchTerm] = useState("");
// //   const [loading, setLoading] = useState(true);
  
// //   const [selectedStudent, setSelectedStudent] = useState(null); 
// //   const [isEditing, setIsEditing] = useState(false);
// //   const [editData, setEditData] = useState(null);
// //   const [isSaving, setIsSaving] = useState(false);
// //   const [dashboardCounts, setDashboardCounts] = useState({
// //   totalStudents: 0,
// //   tcSubmitted: 0,
// //   tcNotSubmitted: 0,
// //   conductSubmitted: 0,
// //   conductNotSubmitted: 0,
// //   marksMemoSubmitted: 0,
// //   marksMemoNotSubmitted: 0
// // });
// // const [activeFilter, setActiveFilter] = useState("all");


// // const fetchDashboardCounts = async () => {
// //   try {
// //     const response = await axios.get(
// //       "http://localhost:5000/api/students/dashboard-counts"
// //     );

// //     setDashboardCounts(response.data);

// //   } catch (error) {
// //     console.error("Dashboard fetch error:", error);
// //   }
// // };

// //   // FETCH FUNCTION
// //   const fetchStudents = async (query = "", pendingType = "") => {
// //   setLoading(true);

// //   try {
// //     let url = `http://localhost:5000/api/students/search?name=${query}`;

// //     if (pendingType) {
// //       url += `&pending=${pendingType}`;
// //     }

// //     const response = await axios.get(url);

// //     setStudents(response.data);

// //   } catch (error) {
// //     console.error("Error fetching students:", error);

// //   } finally {
// //     setLoading(false);
// //   }
// // };

// //   // DEBOUNCED SEARCH & INITIAL LOAD
// //   useEffect(() => {
// //     fetchDashboardCounts();
// //     const delayDebounceFn = setTimeout(() => {
// //       fetchStudents(searchTerm);
// //     }, 400); // Slightly longer debounce for smoother UX

// //     return () => clearTimeout(delayDebounceFn);
// //   }, [searchTerm]);

// //  const handleOpenProfile = (student) => {
// //   const freshStudent = JSON.parse(JSON.stringify(student));

// //   setSelectedStudent(freshStudent);
// //   setEditData(freshStudent);
// //   setIsEditing(false);
// // };


// // const handleDashboardFilter = (type) => {
// //   setActiveFilter(type);
// //   fetchStudents("", type);
// // };

// // const handleFileChange = async (e, fieldName) => {
// //   const file = e.target.files[0];
// //   if (!file) return;

// //   const formData = new FormData();
// //   formData.append("file", file);

// //   try {
// //     const response = await axios.post(
// //   `http://localhost:5000/api/students/upload/${editData._id}/${fieldName}`,
// //   formData
// // );

// // const updatedStudent = response.data.updatedStudent;

// // // Update edit form instantly
// // setEditData(JSON.parse(JSON.stringify(updatedStudent)));

// // // Update modal preview instantly
// // setSelectedStudent(JSON.parse(JSON.stringify(updatedStudent)));

// // // Update table instantly
// // setStudents(prev =>
// //   prev.map(student =>
// //     student._id === updatedStudent._id ? updatedStudent : student
// //   )
// // );
// // fetchDashboardCounts();
// //     alert("File uploaded successfully!");

// //   } catch (error) {
// //     console.error("UPLOAD ERROR:", error.response?.data || error.message);

// //     alert(
// //       error.response?.data?.error || "File upload failed"
// //     );
// //   }
// // };



// //   const handleEditChange = (e) => {
// //   const { name, value } = e.target;

// //   // Parent Details
// //   if (
// //     [
// //       "fatherName", "fatherMobile", "fatherAadhaar", "fatherQualification", "fatherOccupation", "fatherAnnualIncome",
// //       "motherName", "motherMobile", "motherAadhaar", "motherQualification", "motherOccupation", "motherAnnualIncome",
// //       "guardianName", "guardianRelation", "guardianMobile", "guardianAadhaar", "guardianOccupation", "guardianAnnualIncome",
// //       "residence"
// //     ].includes(name)
// //   ) {
// //     setEditData(prev => ({
// //       ...prev,
// //       parentDetails: {
// //         ...prev.parentDetails,
// //         [name]: value
// //       }
// //     }));
// //     return;
// //   }

// //   // Admission Info
// //   if (
// //     [
// //       "admissionNo",
// //       "classAdmittedTo",
// //       "previousSchoolName",
// //       "previousTCNumber",
// //       "previousTCDate"
// //     ].includes(name)
// //   ) {
// //     setEditData(prev => ({
// //       ...prev,
// //       admissionInfo: {
// //         ...prev.admissionInfo,
// //         [name]: value
// //       }
// //     }));
// //     return;
// //   }

// //   // Main Student Fields
// //   setEditData(prev => ({
// //     ...prev,
// //     [name]: value
// //   }));
// // };

// //   const handleUpdate = async () => {
// //   setIsSaving(true);

// //   try {
// //     const response = await axios.put(
// //       `http://localhost:5000/api/students/${editData._id}`,
// //       editData
// //     );

// //     const updatedStudent = response.data.updatedStudent;

// //     // UPDATE TABLE
// //     setStudents(prev =>
// //       prev.map(student =>
// //         student._id === updatedStudent._id ? updatedStudent : student
// //       )
// //     );

// //     // UPDATE MODAL
// //     setSelectedStudent(updatedStudent);

// //     // UPDATE EDIT FORM
// //     setEditData(JSON.parse(JSON.stringify(updatedStudent)));

// //     // OPTIONAL REFRESH
// //     await fetchStudents(searchTerm);

// //     setIsEditing(false);

// //     alert("Student record updated successfully!");

// //   } catch (error) {
// //     console.error("Update failed:", error.response?.data || error.message);
// //     alert("Failed to update record.");
// //   } finally {
// //     setIsSaving(false);
// //   }
// // };


// // const handleExcelDownload = async () => {
// //   try {
// //     const response = await axios.get(
// //       `http://localhost:5000/api/students/export-excel?pending=${activeFilter}`,
// //       {
// //         responseType: "blob"
// //       }
// //     );

// //     const blob = new Blob([response.data], {
// //       type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
// //     });

// //     const url = window.URL.createObjectURL(blob);

// //     const link = document.createElement("a");
// //     link.href = url;

// //     link.download =
// //       activeFilter === "all"
// //         ? "all_students.xlsx"
// //         : `pending_${activeFilter}_students.xlsx`;

// //     document.body.appendChild(link);
// //     link.click();
// //     link.remove();

// //     window.URL.revokeObjectURL(url);

// //   } catch (error) {
// //     console.error("Excel download failed:", error);
// //     alert("Failed to download Excel.");
// //   }
// // };


// // // 3. Update the Return Statement (Conditional Rendering)
// // if (viewingTC) {
// //   return (
// //     <TransferCertificate 
// //       data={selectedStudent} 
// //       onBack={() => setViewingTC(false)} 
// //     />
// //   );
// // }


// // const handleGenerateTC = () => {
// //   setViewingTC(true);
// // };
// // if (viewingTC) {
// //   return (
// //     <TransferCertificate
// //       data={selectedStudent}
// //       onBack={() => setViewingTC(false)}
// //     />
// //   );
// // }
// //   return (
// //     <div className="p-4 lg:p-8 bg-slate-50 min-h-screen font-sans text-left">
      
// //       {/* --- MODAL --- */}
// //       {selectedStudent && (
// //         <div className="fixed inset-0 bg-blue-900/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
// //           <div className="bg-white rounded-[2rem] shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-10 border border-white">
            
// //             <header className="mb-8 border-b-2 border-blue-100 pb-6 flex justify-between items-start">
// //               <div className="flex gap-4 items-center">
// //                 <div className={`p-4 rounded-2xl text-white shadow-lg transition-colors ${isEditing ? 'bg-orange-500' : 'bg-blue-600'}`}>
// //                    {isEditing ? <Edit3 size={32} /> : <FileUser size={32} />}
// //                 </div>
// //                 <div>
// //                   <h2 className="text-3xl font-black text-blue-900 leading-tight">
// //                     {isEditing ? "Edit Record" : selectedStudent.name}
// //                   </h2>
// //                   <p className="text-blue-500 text-xs font-black uppercase tracking-widest">
// //                     {isEditing ? "Modify necessary information below" : `Admission No: ${selectedStudent.admissionInfo?.admissionNo || 'N/A'}`}
// //                   </p>
// //                 </div>
// //               </div>
// //               <button onClick={() => setSelectedStudent(null)} className="p-2 hover:bg-red-50 text-gray-400 hover:text-red-500 rounded-full">
// //                 <X size={28} />
// //               </button>
// //             </header>

// //             <div className="space-y-10">

// //   {/* 1. Personal Identity */}
// //   <section>
// //     <div className="flex items-center gap-2 mb-4 text-blue-900 font-black uppercase tracking-tighter text-sm">
// //       <UserCircle size={18} /> Personal Identity
// //     </div>

// //     <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
// //       <EditableField label="Full Name" name="name" value={editData.name} onChange={handleEditChange} isEditing={isEditing} highlight />
// //       <EditableField label="Aadhaar No" name="aadhaarNo" value={editData.aadhaarNo} onChange={handleEditChange} isEditing={isEditing} />
// //       <EditableField label="Date of Birth" name="dob" type="date" value={editData.dob?.split('T')[0]} onChange={handleEditChange} isEditing={isEditing} />
// //       <EditableField label="Gender" name="gender" value={editData.gender} onChange={handleEditChange} isEditing={isEditing} />
// //       <EditableField label="Nationality" name="nationality" value={editData.nationality} onChange={handleEditChange} isEditing={isEditing} />
// //       <EditableField label="Religion" name="religion" value={editData.religion} onChange={handleEditChange} isEditing={isEditing} />
// //       <EditableField label="Caste" name="caste" value={editData.caste} onChange={handleEditChange} isEditing={isEditing} />
// //       <EditableField label="Mother Tongue" name="motherTongue" value={editData.motherTongue} onChange={handleEditChange} isEditing={isEditing} />
// //       <EditableField label="State" name="state" value={editData.state} onChange={handleEditChange} isEditing={isEditing} />
// //     </div>
// //   </section>

// //   {/* 2. Family Records */}
// //   <section className="pt-6 border-t border-gray-100">
// //     <div className="flex items-center gap-2 mb-4 text-blue-900 font-black uppercase tracking-tighter text-sm">
// //       <MapPin size={18} /> Family Records
// //     </div>

// //     <div className="space-y-6">
// //       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-gray-50 p-4 rounded-xl">
// //         <EditableField label="Father Name" name="fatherName" value={editData.parentDetails?.fatherName} onChange={handleEditChange} isEditing={isEditing} highlight />
// //         <EditableField label="Father Mobile" name="fatherMobile" value={editData.parentDetails?.fatherMobile} onChange={handleEditChange} isEditing={isEditing} />
// //         <EditableField label="Father Aadhaar" name="fatherAadhaar" value={editData.parentDetails?.fatherAadhaar} onChange={handleEditChange} isEditing={isEditing} />
// //         <EditableField label="Father Qualification" name="fatherQualification" value={editData.parentDetails?.fatherQualification} onChange={handleEditChange} isEditing={isEditing} />
// //         <EditableField label="Father Occupation" name="fatherOccupation" value={editData.parentDetails?.fatherOccupation} onChange={handleEditChange} isEditing={isEditing} />
// //         <EditableField label="Father Income" name="fatherAnnualIncome" value={editData.parentDetails?.fatherAnnualIncome} onChange={handleEditChange} isEditing={isEditing} />
// //       </div>

// //       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-gray-50 p-4 rounded-xl">
// //         <EditableField label="Mother Name" name="motherName" value={editData.parentDetails?.motherName} onChange={handleEditChange} isEditing={isEditing} />
// //         <EditableField label="Mother Mobile" name="motherMobile" value={editData.parentDetails?.motherMobile} onChange={handleEditChange} isEditing={isEditing} />
// //         <EditableField label="Mother Aadhaar" name="motherAadhaar" value={editData.parentDetails?.motherAadhaar} onChange={handleEditChange} isEditing={isEditing} />
// //         <EditableField label="Mother Qualification" name="motherQualification" value={editData.parentDetails?.motherQualification} onChange={handleEditChange} isEditing={isEditing} />
// //         <EditableField label="Mother Occupation" name="motherOccupation" value={editData.parentDetails?.motherOccupation} onChange={handleEditChange} isEditing={isEditing} />
// //         <EditableField label="Mother Income" name="motherAnnualIncome" value={editData.parentDetails?.motherAnnualIncome} onChange={handleEditChange} isEditing={isEditing} />
// //       </div>

// //       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-gray-50 p-4 rounded-xl">
// //         <EditableField label="Guardian Name" name="guardianName" value={editData.parentDetails?.guardianName} onChange={handleEditChange} isEditing={isEditing} />
// //         <EditableField label="Guardian Relation" name="guardianRelation" value={editData.parentDetails?.guardianRelation} onChange={handleEditChange} isEditing={isEditing} />
// //         <EditableField label="Guardian Mobile" name="guardianMobile" value={editData.parentDetails?.guardianMobile} onChange={handleEditChange} isEditing={isEditing} />
// //         <EditableField label="Guardian Aadhaar" name="guardianAadhaar" value={editData.parentDetails?.guardianAadhaar} onChange={handleEditChange} isEditing={isEditing} />
// //         <EditableField label="Guardian Occupation" name="guardianOccupation" value={editData.parentDetails?.guardianOccupation} onChange={handleEditChange} isEditing={isEditing} />
// //         <EditableField label="Guardian Income" name="guardianAnnualIncome" value={editData.parentDetails?.guardianAnnualIncome} onChange={handleEditChange} isEditing={isEditing} />
// //       </div>

// //       <EditableField label="Residence Address" name="residence" value={editData.parentDetails?.residence} onChange={handleEditChange} isEditing={isEditing} highlight />
// //     </div>
// //   </section>

// //   {/* 3. Academic Information */}
// //   <section className="pt-6 border-t border-gray-100">
// //     <div className="flex items-center gap-2 mb-4 text-blue-900 font-black uppercase tracking-tighter text-sm">
// //       <GraduationCap size={18} /> Academic Information
// //     </div>

// //     <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
// //       <EditableField label="Admission No" name="admissionNo" value={editData.admissionInfo?.admissionNo} onChange={handleEditChange} isEditing={isEditing} highlight />
// //       <EditableField label="Class Admitted To" name="classAdmittedTo" value={editData.admissionInfo?.classAdmittedTo} onChange={handleEditChange} isEditing={isEditing} />
// //       <EditableField label="Previous School" name="previousSchoolName" value={editData.admissionInfo?.previousSchoolName} onChange={handleEditChange} isEditing={isEditing} />
// //       <EditableField label="Previous TC Number" name="previousTCNumber" value={editData.admissionInfo?.previousTCNumber} onChange={handleEditChange} isEditing={isEditing} />
// //       <EditableField label="Previous TC Date" name="previousTCDate" type="date" value={editData.admissionInfo?.previousTCDate?.split('T')[0]} onChange={handleEditChange} isEditing={isEditing} />
// //     </div>
// //   </section>
// //   <section className="pt-6 border-t border-gray-100">
// //   <div className="flex items-center gap-2 mb-4 text-blue-900 font-black uppercase tracking-tighter text-sm">
// //     <FileUser size={18} /> Uploaded Documents
// //   </div>

// //   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// //     {[
// //     ["studentAadhaarFile", "Student Aadhaar File"],
// //     ["fatherAadhaarFile", "Father Aadhaar File"],
// //     ["motherAadhaarFile", "Mother Aadhaar File"],
// //     ["guardianAadhaarFile", "Guardian Aadhaar File"],
// //     ["tcFile", "Transfer Certificate"],
// //     ["conductFile", "Conduct Certificate"],
// //     ["marksMemoFile", "Marks Memo"]
// //   ].map(([field, label]) => (
// //     <div key={field} className="flex flex-col space-y-1">
// //       <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
// //         {label}
// //       </p>

// //       {isEditing ? (
// //         <input
// //           type="file"
// //           accept=".pdf,.jpg,.jpeg,.png"
// //           onChange={(e) => handleFileChange(e, field)}
// //           className="px-3 py-2 border border-blue-300 rounded-lg text-sm bg-white"
// //         />
// //       ) : (
// //         <PreviewField
// //   label={label}
// //   value={editData.documents?.[field] ? "Uploaded" : ""}
// //   fileUrl={editData.documents?.[field]}
// //   highlight={field === "studentAadhaarFile" || field === "tcFile"}
// // />
// //       )}
// //     </div>
// //   ))}
// //   </div>
// // </section>

// // </div>

// //             <div className="mt-10 flex gap-4">
// //               {isEditing ? (
// //                 <>
// //                   <button onClick={handleUpdate} disabled={isSaving} className="flex-1 bg-green-600 text-white py-4 rounded-2xl font-bold uppercase tracking-widest hover:bg-green-700 transition-all flex items-center justify-center gap-2">
// //                     {isSaving ? <Loader2 className="animate-spin" /> : <Save size={20} />}
// //                     {isSaving ? "Saving..." : "Save Changes"}
// //                   </button>
// //                   <button   onClick={() => {
// //     setIsEditing(false);
// //     setEditData(JSON.parse(JSON.stringify(selectedStudent)));
// //   }} className="px-8 bg-gray-100 text-gray-500 py-4 rounded-2xl font-bold uppercase tracking-widest hover:bg-gray-200 transition-all flex items-center gap-2">
// //                     <RotateCcw size={20} /> Cancel
// //                   </button>
// //                 </>
// //               ) : (
// //                 <><button
// //   onClick={handleGenerateTC}
// //   className="flex-1 bg-orange-600 text-white py-4 rounded-2xl font-bold uppercase tracking-widest hover:bg-orange-700 transition-all"
// // >
// //   Generate TC
// // </button>
// //                   <button onClick={() => setIsEditing(true)} className="flex-1 bg-blue-600 text-white py-4 rounded-2xl font-bold uppercase tracking-widest hover:bg-blue-700 transition-all flex items-center justify-center gap-2">
// //                     <Edit3 size={20} /> Edit Profile
// //                   </button>
// //                   <button onClick={() => setSelectedStudent(null)} className="px-8 bg-blue-900 text-white py-4 rounded-2xl font-bold uppercase tracking-widest hover:bg-black transition-all">
// //                     Close
// //                   </button>
// //                 </>
// //               )}
// //             </div>
// //           </div>
// //         </div>
// //       )}

// // {/* --- COMPACT DUAL-STAT DASHBOARD (H-20) --- */}
// // <div className="max-w-7xl mx-auto mb-8 grid grid-cols-1 md:grid-cols-4 gap-4 px-4">
  
// //   {/* Total Students - Registry Baseline */}
// //   <div   onClick={() => {
// //     setActiveFilter("all");
// //     fetchStudents("");
// //   }} className="bg-white rounded-full px-6 shadow-md border border-blue-50 flex items-center justify-between h-20 transition-all hover:shadow-lg">
// //     <div className="flex flex-col">
// //       <span className="bg-blue-600 text-white px-3 py-1 rounded-full font-black uppercase text-[12px] tracking-widest w-fit mb-1">
// //         Students
// //       </span>
// //       <p className="text-blue-900/40 text-[10px] font-bold uppercase">Total</p>
// //     </div>
// //     <div className="text-right">
// //       <h2 className="text-2xl font-black text-blue-900 leading-none">
// //         {dashboardCounts.totalStudents}
// //       </h2>
// //     </div>
// //   </div>

// //   {/* TC Status - Pending vs Submitted */}
// //   <div onClick={() => handleDashboardFilter("tc")} className="bg-red-50/50 rounded-full pl-6 pr-4 shadow-md border border-red-100 flex items-center justify-between h-20 transition-all hover:shadow-lg">
// //     <div className="flex flex-col min-w-[80px]">
// //       <span className="bg-red-600 text-white px-3 py-1 rounded-full font-black uppercase text-[12px] tracking-widest w-fit mb-1">
// //         TC
// //       </span>
// //       <p className="text-red-900/40 text-[10px] font-bold uppercase tracking-tighter">Status</p>
// //     </div>
// //     <div className="flex items-center space-x-4">
// //       <div className="text-center">
// //         <p className="text-[9px] font-black text-red-500 uppercase">Pending</p>
// //         <h2 className="text-2xl font-black text-red-600 leading-none">{dashboardCounts.tcNotSubmitted}</h2>
// //       </div>
// //       <div className="h-8 w-[1px] bg-red-200"></div>
// //       <div className="text-center">
// //         <p className="text-[9px] font-black text-gray-400 uppercase">Recvd</p>
// //         <h2 className="text-xl font-bold text-gray-500 leading-none">{dashboardCounts.tcSubmitted}</h2>
// //       </div>
// //     </div>
// //   </div>

// //   {/* Conduct Status - Pending vs Submitted */}
// //   <div onClick={() => handleDashboardFilter("conduct")} className="bg-orange-50/50 rounded-full pl-6 pr-4 shadow-md border border-orange-100 flex items-center justify-between h-20 transition-all hover:shadow-lg">
// //     <div className="flex flex-col min-w-[80px]">
// //       <span className="bg-orange-500 text-white px-3 py-1 rounded-full font-black uppercase text-[12px] tracking-widest w-fit mb-1">
// //         Conduct
// //       </span>
// //       <p className="text-orange-900/40 text-[10px] font-bold uppercase tracking-tighter">Status</p>
// //     </div>
// //     <div className="flex items-center space-x-4">
// //       <div className="text-center">
// //         <p className="text-[9px] font-black text-orange-500 uppercase">Pending</p>
// //         <h2 className="text-2xl font-black text-orange-600 leading-none">{dashboardCounts.conductNotSubmitted}</h2>
// //       </div>
// //       <div className="h-8 w-[1px] bg-orange-200"></div>
// //       <div className="text-center">
// //         <p className="text-[9px] font-black text-gray-400 uppercase">Recvd</p>
// //         <h2 className="text-xl font-bold text-gray-500 leading-none">{dashboardCounts.conductSubmitted}</h2>
// //       </div>
// //     </div>
// //   </div>

// //   {/* Marks Status - Pending vs Submitted */}
// //   <div onClick={() => handleDashboardFilter("marksmemo")} className="bg-amber-50/50 rounded-full pl-6 pr-4 shadow-md border border-amber-100 flex items-center justify-between h-20 transition-all hover:shadow-lg">
// //     <div className="flex flex-col min-w-[80px]">
// //       <span className="bg-amber-500 text-white px-3 py-1 rounded-full font-black uppercase text-[12px] tracking-widest w-fit mb-1">
// //         Marks Memo
// //       </span>
// //       <p className="text-amber-900/40 text-[10px] font-bold uppercase tracking-tighter">Status</p>
// //     </div>
// //     <div className="flex items-center space-x-4">
// //       <div className="text-center">
// //         <p className="text-[9px] font-black text-amber-600 uppercase">Pending</p>
// //         <h2 className="text-2xl font-black text-amber-600 leading-none">{dashboardCounts.marksMemoNotSubmitted}</h2>
// //       </div>
// //       <div className="h-8 w-[1px] bg-amber-200"></div>
// //       <div className="text-center">
// //         <p className="text-[9px] font-black text-gray-400 uppercase">Recvd</p>
// //         <h2 className="text-xl font-bold text-gray-500 leading-none">{dashboardCounts.marksMemoSubmitted}</h2>
// //       </div>
// //     </div>
// //   </div>

// // </div>



// //       {/* --- TABLE INTERFACE --- */}
// //       <div className="max-w-6xl mx-auto ">
// //         <div className="bg-white rounded-[2rem] shadow-xl border border-gray-100">
// //           <div className="p-8">
// //             <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
// //               <div>
// //                 <h2 className="text-3xl font-black text-blue-900 tracking-tight">
// //   {activeFilter === "tc"
// //     ? "Showing Pending TC Records"
// //     : activeFilter === "conduct"
// //     ? "Showing Pending Conduct Records"
// //     : activeFilter === "marksmemo"
// //     ? "Showing Pending Marks Memo Records"
// //     : "Student Database"}
// // </h2>
// //                 <p className="text-gray-400 text-sm font-medium italic">Showing {students.length} record(s)</p>
// //               </div>
// //               <div className="flex gap-3 w-full md:w-auto items-center">
// //                 <button
// //   onClick={handleExcelDownload}
// //   className="bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-2xl font-bold uppercase text-xs tracking-widest shadow-md whitespace-nowrap"
// // >
// //   Download Excel
// // </button>
// //                 <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
// //                 <input
// //                   type="text"
// //                   placeholder="Search student by name..."
// //                   className="w-full pl-12 pr-4 py-3 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all text-sm font-medium outline-none"
// //                   value={searchTerm}
// //                   onChange={(e) => setSearchTerm(e.target.value)}
// //                 />
// //               </div>
// //             </div>

// //             <div className="overflow-x-auto">
// //               <table className="w-full border-separate border-spacing-y-2">
// //                 <thead>
// //                   <tr className="text-gray-400 text-left">
// //                     <th className="px-6 py-3 text-[15px] font-black uppercase tracking-widest">Admission No</th>
// //                     <th className="px-6 py-3 text-[15px] font-black uppercase tracking-widest">Student Name</th>
// //                     <th className="px-6 py-3 text-[15px] font-black uppercase tracking-widest">Father's Name</th>
// //                     <th className="px-6 py-3 text-[15px] font-black uppercase tracking-widest">Date of Birth</th>
// //                     <th className="px-6 py-3 text-[15px] font-black uppercase tracking-widest text-right">Action</th>
// //                   </tr>
// //                 </thead>
// //                 <tbody>
// //                   {loading ? (
// //                     <tr>
// //                       <td colSpan="5" className="p-20 text-center">
// //                         <Loader2 className="animate-spin inline text-blue-600" />
// //                         <p className="text-gray-400 mt-2 font-bold uppercase text-xs tracking-widest">Loading Database...</p>
// //                       </td>
// //                     </tr>
// //                   ) : students.length > 0 ? (
// //                     students.map((student) => (
// //                       <tr 
// //                         key={student._id} 
// //                         onClick={() => handleOpenProfile(student)}
// //                         className="group cursor-pointer bg-white hover:bg-blue-50/50 transition-all"
// //                       >
// //                         <td className="px-6 py-4 rounded-l-2xl border-y border-l border-gray-50 group-hover:border-blue-100">
// //                           <span className="bg-gray-100 group-hover:bg-blue-100 text-gray-600 group-hover:text-blue-700 px-3 py-1 rounded-lg text-xs font-bold">
// //                             {student.admissionInfo?.admissionNo || 'N/A'}
// //                           </span>
// //                         </td>
// //                         <td className="px-6 py-4 border-y border-gray-50 group-hover:border-blue-100 font-bold text-blue-900">
// //                           {student.name}
// //                         </td>
// //                         <td className="px-6 py-4 border-y border-gray-50 group-hover:border-blue-100 text-gray-500 font-medium">
// //                           {student.parentDetails?.fatherName || 'N/A'}
// //                         </td>
// //                         <td className="px-6 py-4 border-y border-gray-50 group-hover:border-blue-100 text-gray-400 font-medium">
// //                           {student.dob ? new Date(student.dob).toLocaleDateString('en-GB') : 'N/A'}
// //                         </td>
// //                         <td className="px-6 py-4 rounded-r-2xl border-y border-r border-gray-50 group-hover:border-blue-100 text-right">
// //                           <button className="text-[10px] font-black uppercase text-blue-600 bg-blue-50 px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-all">
// //                             View Details
// //                           </button>
// //                         </td>
// //                       </tr>
// //                     ))
// //                   ) : (
// //                     <tr>
// //                       <td colSpan="5" className="p-20 text-center text-gray-400 italic">
// //                         No students found.
// //                       </td>
// //                     </tr>
// //                   )}
// //                 </tbody>
// //               </table>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // const Loader2 = ({ className }) => (
// //   <svg className={`animate-spin ${className}`} width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
// //     <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
// //   </svg>
// // );

// // export default StudentTable;














// // 18-05-2026
















// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';
// // import { Search, FileUser, X, GraduationCap, MapPin, UserCircle, Edit3, Save, RotateCcw } from 'lucide-react';
// // import TransferCertificate from './TransferCertificate';



// // /**
// //  * REUSABLE EDITABLE FIELD COMPONENT 
// //  */
// // const EditableField = ({ 
// //   label, 
// //   name, 
// //   value, 
// //   onChange, 
// //   isEditing, 
// //   highlight = false, 
// //   type = "text",
// //   options = null
// // }) => (
// //   <div className="flex flex-col space-y-1">
// //     <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">
// //       {label}
// //     </p>

// //     {isEditing ? (
// //       options ? (
// //         <select
// //           name={name}
// //           value={value || ""}
// //           onChange={onChange}
// //           className="px-3 py-2 border border-blue-400 rounded-lg text-sm bg-white focus:ring-2 focus:ring-blue-500 outline-none transition-all font-medium text-blue-900"
// //         >
// //           <option value="">Select</option>
// //           {options.map((option) => (
// //             <option key={option} value={option}>
// //               {option}
// //             </option>
// //           ))}
// //         </select>
// //       ) : (
// //         <input
// //           type={type}
// //           name={name}
// //           value={value || ""}
// //           onChange={onChange}
// //           className="px-3 py-2 border border-blue-400 rounded-lg text-sm bg-white focus:ring-2 focus:ring-blue-500 outline-none transition-all font-medium text-blue-900"
// //         />
// //       )
// //     ) : (
// //       <div
// //         className={`px-3 py-2 border rounded-lg text-sm transition-all ${
// //           highlight
// //             ? "bg-blue-50 border-blue-200 text-blue-900 font-bold"
// //             : "bg-gray-50 border-gray-200 text-gray-800 font-medium"
// //         }`}
// //       >
// //         {value || <span className="text-gray-300 italic">Not Recorded</span>}
// //       </div>
// //     )}
// //   </div>
// // );
// // const PreviewField = ({ 
// //   label, 
// //   value, 
// //   highlight = false, 
// //   fileUrl = null 
// // }) => (
// //   <div className="flex flex-col space-y-1">
// //     <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
// //       {label}
// //     </p>

// //     <div
// //       className={`px-3 py-2 border rounded-lg text-sm transition-all ${
// //         highlight
// //           ? "bg-blue-50 border-blue-200 text-blue-900 font-bold"
// //           : "bg-gray-50 border-gray-200 text-gray-800 font-medium"
// //       }`}
// //     >
// //       {value ? (
// //         <div className="flex items-center justify-between gap-2">
// //           <span className="truncate">{value}</span>

// //           {fileUrl && (
// //             <a
// //               href={fileUrl}
// //               target="_blank"
// //               rel="noopener noreferrer"
// //               className="text-xs bg-blue-600 text-white px-2 py-1 rounded hover:bg-black"
// //             >
// //               View
// //             </a>
// //           )}
// //         </div>
// //       ) : (
// //         <span className="text-gray-300 italic">Not Recorded</span>
// //       )}
// //     </div>
// //   </div>
// // );
// // const StudentTable = () => {
// //   const [students, setStudents] = useState([]);
// //   const [viewingTC, setViewingTC] = useState(false);
// //   const [searchTerm, setSearchTerm] = useState("");
// //   const [loading, setLoading] = useState(true);
  
// //   const [selectedStudent, setSelectedStudent] = useState(null); 
// //   const [isEditing, setIsEditing] = useState(false);
// //   const [editData, setEditData] = useState(null);
// //   const [isSaving, setIsSaving] = useState(false);
// //   const [dashboardCounts, setDashboardCounts] = useState({
// //   totalStudents: 0,
// //   tcSubmitted: 0,
// //   tcNotSubmitted: 0,
// //   conductSubmitted: 0,
// //   conductNotSubmitted: 0,
// //   marksMemoSubmitted: 0,
// //   marksMemoNotSubmitted: 0
// // });
// // const [activeFilter, setActiveFilter] = useState("all");


// // const fetchDashboardCounts = async () => {
// //   try {
// //     const response = await axios.get(
// //       "http://localhost:5000/api/students/dashboard-counts"
// //     );

// //     setDashboardCounts(response.data);

// //   } catch (error) {
// //     console.error("Dashboard fetch error:", error);
// //   }
// // };

// //   // FETCH FUNCTION
// //   const fetchStudents = async (query = "", pendingType = "") => {
// //   setLoading(true);

// //   try {
// //     let url = `http://localhost:5000/api/students/search?name=${query}`;

// //     if (pendingType) {
// //       url += `&pending=${pendingType}`;
// //     }

// //     const response = await axios.get(url);

// //     setStudents(response.data);

// //   } catch (error) {
// //     console.error("Error fetching students:", error);

// //   } finally {
// //     setLoading(false);
// //   }
// // };

// //   // DEBOUNCED SEARCH & INITIAL LOAD
// //   useEffect(() => {
// //     fetchDashboardCounts();
// //     const delayDebounceFn = setTimeout(() => {
// //       fetchStudents(searchTerm);
// //     }, 400); // Slightly longer debounce for smoother UX

// //     return () => clearTimeout(delayDebounceFn);
// //   }, [searchTerm]);

// //  const handleOpenProfile = async (student) => {
// //   try {
// //     // Fetch latest student record from DB
// //     const response = await axios.get(
// //       `http://localhost:5000/api/students/${student._id}`
// //     );

// //     const freshStudent = JSON.parse(
// //       JSON.stringify(response.data)
// //     );

// //     setSelectedStudent(freshStudent);
// //     setEditData(freshStudent);
// //     setIsEditing(false);

// //     // If TC already generated, preview directly
// //     if (freshStudent.generatedTC) {
// //       setViewingTC(true);
// //     }

// //   } catch (error) {
// //     console.error("Profile open error:", error);

// //     // Fallback to local data
// //     const fallbackStudent = JSON.parse(JSON.stringify(student));

// //     setSelectedStudent(fallbackStudent);
// //     setEditData(fallbackStudent);
// //     setIsEditing(false);

// //     if (fallbackStudent.generatedTC) {
// //       setViewingTC(true);
// //     }
// //   }
// // };

// // const handleDashboardFilter = (type) => {
// //   setActiveFilter(type);
// //   fetchStudents("", type);
// // };

// // const handleFileChange = async (e, fieldName) => {
// //   const file = e.target.files[0];
// //   if (!file) return;

// //   const formData = new FormData();
// //   formData.append("file", file);

// //   try {
// //     const response = await axios.post(
// //   `http://localhost:5000/api/students/upload/${editData._id}/${fieldName}`,
// //   formData
// // );

// // const updatedStudent = response.data.updatedStudent;

// // // Update edit form instantly
// // setEditData(JSON.parse(JSON.stringify(updatedStudent)));

// // // Update modal preview instantly
// // setSelectedStudent(JSON.parse(JSON.stringify(updatedStudent)));

// // // Update table instantly
// // setStudents(prev =>
// //   prev.map(student =>
// //     student._id === updatedStudent._id ? updatedStudent : student
// //   )
// // );
// // fetchDashboardCounts();
// //     alert("File uploaded successfully!");

// //   } catch (error) {
// //     console.error("UPLOAD ERROR:", error.response?.data || error.message);

// //     alert(
// //       error.response?.data?.error || "File upload failed"
// //     );
// //   }
// // };



// //   const handleEditChange = (e) => {
// //   const { name, value } = e.target;

// //   // Parent Details
// //   if (
// //     [
// //       "fatherName", "fatherMobile", "fatherAadhaar", "fatherQualification", "fatherOccupation", "fatherAnnualIncome",
// //       "motherName", "motherMobile", "motherAadhaar", "motherQualification", "motherOccupation", "motherAnnualIncome",
// //       "guardianName", "guardianRelation", "guardianMobile", "guardianAadhaar", "guardianOccupation", "guardianAnnualIncome",
// //       "residence"
// //     ].includes(name)
// //   ) {
// //     setEditData(prev => ({
// //       ...prev,
// //       parentDetails: {
// //         ...prev.parentDetails,
// //         [name]: value
// //       }
// //     }));
// //     return;
// //   }

// //   // Admission Info
// //   if (
// //     [
// //       "admissionNo",
// //       "classAdmittedTo",
// //       "previousSchoolName",
// //       "previousTCNumber",
// //       "previousTCDate"
// //     ].includes(name)
// //   ) {
// //     setEditData(prev => ({
// //       ...prev,
// //       admissionInfo: {
// //         ...prev.admissionInfo,
// //         [name]: value
// //       }
// //     }));
// //     return;
// //   }

// //   // Main Student Fields
// //   setEditData(prev => ({
// //     ...prev,
// //     [name]: value
// //   }));
// // };

// //   const handleUpdate = async () => {
// //   setIsSaving(true);

// //   try {
// //     const response = await axios.put(
// //       `http://localhost:5000/api/students/${editData._id}`,
// //       editData
// //     );

// //     const updatedStudent = response.data.updatedStudent;

// //     // UPDATE TABLE
// //     setStudents(prev =>
// //       prev.map(student =>
// //         student._id === updatedStudent._id ? updatedStudent : student
// //       )
// //     );

// //     // UPDATE MODAL
// //     setSelectedStudent(updatedStudent);

// //     // UPDATE EDIT FORM
// //     setEditData(JSON.parse(JSON.stringify(updatedStudent)));

// //     // OPTIONAL REFRESH
// //     await fetchStudents(searchTerm);

// //     setIsEditing(false);

// //     alert("Student record updated successfully!");

// //   } catch (error) {
// //     console.error("Update failed:", error.response?.data || error.message);
// //     alert("Failed to update record.");
// //   } finally {
// //     setIsSaving(false);
// //   }
// // };


// // const handleExcelDownload = async () => {
// //   try {
// //     const response = await axios.get(
// //       `http://localhost:5000/api/students/export-excel?pending=${activeFilter}`,
// //       {
// //         responseType: "blob"
// //       }
// //     );

// //     const blob = new Blob([response.data], {
// //       type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
// //     });

// //     const url = window.URL.createObjectURL(blob);

// //     const link = document.createElement("a");
// //     link.href = url;

// //     link.download =
// //       activeFilter === "all"
// //         ? "all_students.xlsx"
// //         : `pending_${activeFilter}_students.xlsx`;

// //     document.body.appendChild(link);
// //     link.click();
// //     link.remove();

// //     window.URL.revokeObjectURL(url);

// //   } catch (error) {
// //     console.error("Excel download failed:", error);
// //     alert("Failed to download Excel.");
// //   }
// // };


// // // 3. Update the Return Statement (Conditional Rendering)
// // // 3. Update the Return Statement (Conditional Rendering)
// // if (viewingTC) {
// //   return (
// //     <TransferCertificate
// //       data={selectedStudent}
// //       onBack={async () => {
// //         // Close TC screen
// //         setViewingTC(false);

// //         // Clear selected student
// //         setSelectedStudent(null);

// //         // Refresh active students table
// //         await fetchStudents(searchTerm);

// //         // Refresh dashboard counts
// //         await fetchDashboardCounts();
// //       }}
// //     />
// //   );
// // }


// // const handleGenerateTC = async () => {
// //   try {
// //     // IF TC ALREADY SAVED, OPEN DIRECTLY IN PREVIEW
// //     if (selectedStudent.generatedTC) {
// //       setViewingTC(true);
// //       return;
// //     }

// //     // OTHERWISE CREATE NEW TC
// //     const tcNumber = prompt("Enter TC Number:");

// //     if (!tcNumber) return;

// //     const response = await axios.put(
// //       `http://localhost:5000/api/students/generate-tc/${selectedStudent._id}`,
// //       { tcNumber }
// //     );

// //     const updatedStudent = response.data.updatedStudent;

// //   setSelectedStudent(JSON.parse(JSON.stringify(updatedStudent)));
// // setEditData(JSON.parse(JSON.stringify(updatedStudent)));

// // // UPDATE TABLE INSTANTLY
// // setStudents(prev =>
// //   prev.map(student =>
// //     student._id === updatedStudent._id ? updatedStudent : student
// //   )
// // );

// // // REFRESH DASHBOARD
// // fetchDashboardCounts();

// //     // OPEN TC PAGE
// //     setViewingTC(true);

// //   } catch (error) {
// //     console.error("TC Generate Error:", error);
// //     alert("Failed to generate TC");
// //   }
// // };
// //   return (
// //     <div className="p-4 lg:p-8 bg-slate-50 min-h-screen font-sans text-left">
      
// //       {/* --- MODAL --- */}
// //       {selectedStudent && (
// //         <div className="fixed inset-0 bg-blue-900/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
// //           <div className="bg-white rounded-[2rem] shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-10 border border-white">
            
// //             <header className="mb-8 border-b-2 border-blue-100 pb-6 flex justify-between items-start">
// //               <div className="flex gap-4 items-center">
// //                 <div className={`p-4 rounded-2xl text-white shadow-lg transition-colors ${isEditing ? 'bg-orange-500' : 'bg-blue-600'}`}>
// //                    {isEditing ? <Edit3 size={32} /> : <FileUser size={32} />}
// //                 </div>
// //                 <div>
// //                   <h2 className="text-3xl font-black text-blue-900 leading-tight">
// //                     {isEditing ? "Edit Record" : selectedStudent.name}
// //                   </h2>
// //                   <p className="text-blue-500 text-xs font-black uppercase tracking-widest">
// //                     {isEditing ? "Modify necessary information below" : `Admission No: ${selectedStudent.admissionInfo?.admissionNo || 'N/A'}`}
// //                   </p>
// //                 </div>
// //               </div>
// //               <button onClick={() => setSelectedStudent(null)} className="p-2 hover:bg-red-50 text-gray-400 hover:text-red-500 rounded-full">
// //                 <X size={28} />
// //               </button>
// //             </header>

// //             <div className="space-y-10">

// //   {/* 1. Personal Identity */}
// //   {/* 1. Personal Identity */}
// // <section>
// //   <div className="flex items-center gap-2 mb-4 text-blue-900 font-black uppercase tracking-tighter text-sm">
// //     <UserCircle size={18} /> Personal Identity
// //   </div>

// //   <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
// //     <EditableField label="Full Name" name="name" value={editData.name} onChange={handleEditChange} isEditing={isEditing} highlight />
// //     <EditableField label="Aadhaar No" name="aadhaarNo" value={editData.aadhaarNo} onChange={handleEditChange} isEditing={isEditing} />
// //     <EditableField label="Date of Birth" name="dob" type="date" value={editData.dob?.split('T')[0]} onChange={handleEditChange} isEditing={isEditing} />
// //     <EditableField
// //   label="Gender"
// //   name="gender"
// //   value={editData.gender}
// //   onChange={handleEditChange}
// //   isEditing={isEditing}
// //   options={["Male", "Female", "Other"]}
// // />
// //     {/* <EditableField label="Gender" name="gender" value={editData.gender} onChange={handleEditChange} isEditing={isEditing} /> */}
    
// //     <EditableField label="Nationality" name="nationality" value={editData.nationality} onChange={handleEditChange} isEditing={isEditing} />
// //     <EditableField label="Religion" name="religion" value={editData.religion} onChange={handleEditChange} isEditing={isEditing} />
// //     <EditableField label="Caste" name="caste" value={editData.caste} onChange={handleEditChange} isEditing={isEditing} />
// //     <EditableField label="Mother Tongue" name="motherTongue" value={editData.motherTongue} onChange={handleEditChange} isEditing={isEditing} />
// //     <EditableField label="State" name="state" value={editData.state} onChange={handleEditChange} isEditing={isEditing} />

// //     {/* NEW FIELDS FROM ADMISSION FORM */}
// //     <EditableField label="UDISE + Number" name="udisePlus" value={editData.udisePlus} onChange={handleEditChange} isEditing={isEditing} />
// //     <EditableField label="Siblings Info" name="siblings" value={editData.siblings} onChange={handleEditChange} isEditing={isEditing} />
// //     <EditableField
// //   label="CWSN Status"
// //   name="cwsn"
// //   value={editData.cwsn}
// //   onChange={handleEditChange}
// //   isEditing={isEditing}
// //   highlight={editData.cwsn && editData.cwsn !== "None"}
// //   options={[
// //     "None",
// //     "Locomotor Disability",
// //     "Visual Impairment",
// //     "Hearing Impairment",
// //     "Speech & Language",
// //     "Intellectual Disability",
// //     "Other"
// //   ]}
// // />
// //     {/* <EditableField label="CWSN Status" name="cwsn" value={editData.cwsn} onChange={handleEditChange} isEditing={isEditing} highlight={editData.cwsn && editData.cwsn !== "None"} /> */}
    
// //     <EditableField label="First Language" name="firstLanguage" value={editData.firstLanguage} onChange={handleEditChange} isEditing={isEditing} />
// //     <EditableField label="Second Language" name="secondLanguage" value={editData.secondLanguage} onChange={handleEditChange} isEditing={isEditing} />
// //     <EditableField label="Third Language" name="thirdLanguage" value={editData.thirdLanguage} onChange={handleEditChange} isEditing={isEditing} />
// //   </div>
// // </section>

// //   {/* 2. Family Records */}
// //   <section className="pt-6 border-t border-gray-100">
// //     <div className="flex items-center gap-2 mb-4 text-blue-900 font-black uppercase tracking-tighter text-sm">
// //       <MapPin size={18} /> Family Records
// //     </div>

// //     <div className="space-y-6">
// //       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-gray-50 p-4 rounded-xl">
// //         <EditableField label="Father Name" name="fatherName" value={editData.parentDetails?.fatherName} onChange={handleEditChange} isEditing={isEditing} highlight />
// //         <EditableField label="Father Mobile" name="fatherMobile" value={editData.parentDetails?.fatherMobile} onChange={handleEditChange} isEditing={isEditing} />
// //         <EditableField label="Father Aadhaar" name="fatherAadhaar" value={editData.parentDetails?.fatherAadhaar} onChange={handleEditChange} isEditing={isEditing} />
// //         <EditableField label="Father Qualification" name="fatherQualification" value={editData.parentDetails?.fatherQualification} onChange={handleEditChange} isEditing={isEditing} />
// //         <EditableField label="Father Occupation" name="fatherOccupation" value={editData.parentDetails?.fatherOccupation} onChange={handleEditChange} isEditing={isEditing} />
// //         <EditableField label="Father Income" name="fatherAnnualIncome" value={editData.parentDetails?.fatherAnnualIncome} onChange={handleEditChange} isEditing={isEditing} />
// //       </div>

// //       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-gray-50 p-4 rounded-xl">
// //         <EditableField label="Mother Name" name="motherName" value={editData.parentDetails?.motherName} onChange={handleEditChange} isEditing={isEditing} />
// //         <EditableField label="Mother Mobile" name="motherMobile" value={editData.parentDetails?.motherMobile} onChange={handleEditChange} isEditing={isEditing} />
// //         <EditableField label="Mother Aadhaar" name="motherAadhaar" value={editData.parentDetails?.motherAadhaar} onChange={handleEditChange} isEditing={isEditing} />
// //         <EditableField label="Mother Qualification" name="motherQualification" value={editData.parentDetails?.motherQualification} onChange={handleEditChange} isEditing={isEditing} />
// //         <EditableField label="Mother Occupation" name="motherOccupation" value={editData.parentDetails?.motherOccupation} onChange={handleEditChange} isEditing={isEditing} />
// //         <EditableField label="Mother Income" name="motherAnnualIncome" value={editData.parentDetails?.motherAnnualIncome} onChange={handleEditChange} isEditing={isEditing} />
// //       </div>

// //       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-gray-50 p-4 rounded-xl">
// //         <EditableField label="Guardian Name" name="guardianName" value={editData.parentDetails?.guardianName} onChange={handleEditChange} isEditing={isEditing} />
// //         <EditableField label="Guardian Relation" name="guardianRelation" value={editData.parentDetails?.guardianRelation} onChange={handleEditChange} isEditing={isEditing} />
// //         <EditableField label="Guardian Mobile" name="guardianMobile" value={editData.parentDetails?.guardianMobile} onChange={handleEditChange} isEditing={isEditing} />
// //         <EditableField label="Guardian Aadhaar" name="guardianAadhaar" value={editData.parentDetails?.guardianAadhaar} onChange={handleEditChange} isEditing={isEditing} />
// //         <EditableField label="Guardian Occupation" name="guardianOccupation" value={editData.parentDetails?.guardianOccupation} onChange={handleEditChange} isEditing={isEditing} />
// //         <EditableField label="Guardian Income" name="guardianAnnualIncome" value={editData.parentDetails?.guardianAnnualIncome} onChange={handleEditChange} isEditing={isEditing} />
// //       </div>

// //       <EditableField label="Residence Address" name="residence" value={editData.parentDetails?.residence} onChange={handleEditChange} isEditing={isEditing} highlight />
// //     </div>
// //   </section>

// //   {/* 3. Academic Information */}
// //   <section className="pt-6 border-t border-gray-100">
// //     <div className="flex items-center gap-2 mb-4 text-blue-900 font-black uppercase tracking-tighter text-sm">
// //       <GraduationCap size={18} /> Academic Information
// //     </div>

// //     <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
// //       <EditableField label="Admission No" name="admissionNo" value={editData.admissionInfo?.admissionNo} onChange={handleEditChange} isEditing={isEditing} highlight />
// //       <EditableField label="Class Admitted To" name="classAdmittedTo" value={editData.admissionInfo?.classAdmittedTo} onChange={handleEditChange} isEditing={isEditing} />
// //       <EditableField label="Previous School" name="previousSchoolName" value={editData.admissionInfo?.previousSchoolName} onChange={handleEditChange} isEditing={isEditing} />
// //       <EditableField label="Previous TC Number" name="previousTCNumber" value={editData.admissionInfo?.previousTCNumber} onChange={handleEditChange} isEditing={isEditing} />
// //       <EditableField label="Previous TC Date" name="previousTCDate" type="date" value={editData.admissionInfo?.previousTCDate?.split('T')[0]} onChange={handleEditChange} isEditing={isEditing} />
// //     </div>
// //   </section>
// //   <section className="pt-6 border-t border-gray-100">
// //   <div className="flex items-center gap-2 mb-4 text-blue-900 font-black uppercase tracking-tighter text-sm">
// //     <FileUser size={18} /> Uploaded Documents
// //   </div>

// //   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// //     {[
// //     ["studentAadhaarFile", "Student Aadhaar File"],
// //     ["fatherAadhaarFile", "Father Aadhaar File"],
// //     ["motherAadhaarFile", "Mother Aadhaar File"],
// //     ["guardianAadhaarFile", "Guardian Aadhaar File"],
// //     ["tcFile", "Transfer Certificate"],
// //     ["conductFile", "Conduct Certificate"],
// //     ["marksMemoFile", "Marks Memo"]
// //   ].map(([field, label]) => (
// //     <div key={field} className="flex flex-col space-y-1">
// //       <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
// //         {label}
// //       </p>

// //       {isEditing ? (
// //         <input
// //           type="file"
// //           accept=".pdf,.jpg,.jpeg,.png"
// //           onChange={(e) => handleFileChange(e, field)}
// //           className="px-3 py-2 border border-blue-300 rounded-lg text-sm bg-white"
// //         />
// //       ) : (
// //         <PreviewField
// //   label={label}
// //   value={editData.documents?.[field] ? "Uploaded" : ""}
// //   fileUrl={editData.documents?.[field]}
// //   highlight={field === "studentAadhaarFile" || field === "tcFile"}
// // />
// //       )}
// //     </div>
// //   ))}
// //   </div>
// // </section>

// // </div>

// //             <div className="mt-10 flex gap-4">
// //               {isEditing ? (
// //                 <>
// //                   <button onClick={handleUpdate} disabled={isSaving} className="flex-1 bg-green-600 text-white py-4 rounded-2xl font-bold uppercase tracking-widest hover:bg-green-700 transition-all flex items-center justify-center gap-2">
// //                     {isSaving ? <Loader2 className="animate-spin" /> : <Save size={20} />}
// //                     {isSaving ? "Saving..." : "Save Changes"}
// //                   </button>
// //                   <button   onClick={() => {
// //     setIsEditing(false);
// //     setEditData(JSON.parse(JSON.stringify(selectedStudent)));
// //   }} className="px-8 bg-gray-100 text-gray-500 py-4 rounded-2xl font-bold uppercase tracking-widest hover:bg-gray-200 transition-all flex items-center gap-2">
// //                     <RotateCcw size={20} /> Cancel
// //                   </button>
// //                 </>
// //               ) : (
// //                 <><button
// //   onClick={handleGenerateTC}
// //   className="flex-1 bg-orange-600 text-white py-4 rounded-2xl font-bold uppercase tracking-widest hover:bg-orange-700 transition-all"
// // >
// //   Generate TC
// // </button>
// //                   <button onClick={() => setIsEditing(true)} className="flex-1 bg-blue-600 text-white py-4 rounded-2xl font-bold uppercase tracking-widest hover:bg-blue-700 transition-all flex items-center justify-center gap-2">
// //                     <Edit3 size={20} /> Edit Profile
// //                   </button>
// //                   <button onClick={() => setSelectedStudent(null)} className="px-8 bg-blue-900 text-white py-4 rounded-2xl font-bold uppercase tracking-widest hover:bg-black transition-all">
// //                     Close
// //                   </button>
// //                 </>
// //               )}
// //             </div>
// //           </div>
// //         </div>
// //       )}

// // {/* --- COMPACT DUAL-STAT DASHBOARD (H-20) --- */}
// // <div className="max-w-7xl mx-auto mb-8 grid grid-cols-1 md:grid-cols-4 gap-4 px-4">
  
// //   {/* Total Students - Registry Baseline */}
// //   <div   onClick={() => {
// //     setActiveFilter("all");
// //     fetchStudents("");
// //   }} className="bg-white rounded-full px-6 shadow-md border border-blue-50 flex items-center justify-between h-20 transition-all hover:shadow-lg">
// //     <div className="flex flex-col">
// //       <span className="bg-blue-600 text-white px-3 py-1 rounded-full font-black uppercase text-[12px] tracking-widest w-fit mb-1">
// //         Students
// //       </span>
// //       <p className="text-blue-900/40 text-[10px] font-bold uppercase">Total</p>
// //     </div>
// //     <div className="text-right">
// //       <h2 className="text-2xl font-black text-blue-900 leading-none">
// //         {dashboardCounts.totalStudents}
// //       </h2>
// //     </div>
// //   </div>

// //   {/* TC Status - Pending vs Submitted */}
// //   <div onClick={() => handleDashboardFilter("tc")} className="bg-red-50/50 rounded-full pl-6 pr-4 shadow-md border border-red-100 flex items-center justify-between h-20 transition-all hover:shadow-lg">
// //     <div className="flex flex-col min-w-[80px]">
// //       <span className="bg-red-600 text-white px-3 py-1 rounded-full font-black uppercase text-[12px] tracking-widest w-fit mb-1">
// //         TC
// //       </span>
// //       <p className="text-red-900/40 text-[10px] font-bold uppercase tracking-tighter">Status</p>
// //     </div>
// //     <div className="flex items-center space-x-4">
// //       <div className="text-center">
// //         <p className="text-[9px] font-black text-red-500 uppercase">Pending</p>
// //         <h2 className="text-2xl font-black text-red-600 leading-none">{dashboardCounts.tcNotSubmitted}</h2>
// //       </div>
// //       <div className="h-8 w-[1px] bg-red-200"></div>
// //       <div className="text-center">
// //         <p className="text-[9px] font-black text-gray-400 uppercase">Recvd</p>
// //         <h2 className="text-xl font-bold text-gray-500 leading-none">{dashboardCounts.tcSubmitted}</h2>
// //       </div>
// //     </div>
// //   </div>

// //   {/* Conduct Status - Pending vs Submitted */}
// //   <div onClick={() => handleDashboardFilter("conduct")} className="bg-orange-50/50 rounded-full pl-6 pr-4 shadow-md border border-orange-100 flex items-center justify-between h-20 transition-all hover:shadow-lg">
// //     <div className="flex flex-col min-w-[80px]">
// //       <span className="bg-orange-500 text-white px-3 py-1 rounded-full font-black uppercase text-[12px] tracking-widest w-fit mb-1">
// //         Conduct
// //       </span>
// //       <p className="text-orange-900/40 text-[10px] font-bold uppercase tracking-tighter">Status</p>
// //     </div>
// //     <div className="flex items-center space-x-4">
// //       <div className="text-center">
// //         <p className="text-[9px] font-black text-orange-500 uppercase">Pending</p>
// //         <h2 className="text-2xl font-black text-orange-600 leading-none">{dashboardCounts.conductNotSubmitted}</h2>
// //       </div>
// //       <div className="h-8 w-[1px] bg-orange-200"></div>
// //       <div className="text-center">
// //         <p className="text-[9px] font-black text-gray-400 uppercase">Recvd</p>
// //         <h2 className="text-xl font-bold text-gray-500 leading-none">{dashboardCounts.conductSubmitted}</h2>
// //       </div>
// //     </div>
// //   </div>

// //   {/* Marks Status - Pending vs Submitted */}
// //   <div onClick={() => handleDashboardFilter("marksmemo")} className="bg-amber-50/50 rounded-full pl-6 pr-4 shadow-md border border-amber-100 flex items-center justify-between h-20 transition-all hover:shadow-lg">
// //     <div className="flex flex-col min-w-[80px]">
// //       <span className="bg-amber-500 text-white px-3 py-1 rounded-full font-black uppercase text-[12px] tracking-widest w-fit mb-1">
// //         Marks Memo
// //       </span>
// //       <p className="text-amber-900/40 text-[10px] font-bold uppercase tracking-tighter">Status</p>
// //     </div>
// //     <div className="flex items-center space-x-4">
// //       <div className="text-center">
// //         <p className="text-[9px] font-black text-amber-600 uppercase">Pending</p>
// //         <h2 className="text-2xl font-black text-amber-600 leading-none">{dashboardCounts.marksMemoNotSubmitted}</h2>
// //       </div>
// //       <div className="h-8 w-[1px] bg-amber-200"></div>
// //       <div className="text-center">
// //         <p className="text-[9px] font-black text-gray-400 uppercase">Recvd</p>
// //         <h2 className="text-xl font-bold text-gray-500 leading-none">{dashboardCounts.marksMemoSubmitted}</h2>
// //       </div>
// //     </div>
// //   </div>

// // </div>



// //       {/* --- TABLE INTERFACE --- */}
// //       <div className="max-w-6xl mx-auto ">
// //         <div className="bg-white rounded-[2rem] shadow-xl border border-gray-100">
// //           <div className="p-8">
// //             <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
// //               <div>
// //                 <h2 className="text-3xl font-black text-blue-900 tracking-tight">
// //   {activeFilter === "tc"
// //     ? "Showing Pending TC Records"
// //     : activeFilter === "conduct"
// //     ? "Showing Pending Conduct Records"
// //     : activeFilter === "marksmemo"
// //     ? "Showing Pending Marks Memo Records"
// //     : "Student Database"}
// // </h2>
// //                 <p className="text-gray-400 text-sm font-medium italic">Showing {students.length} record(s)</p>
// //               </div>
// //               <div className="flex gap-3 w-full md:w-auto items-center">
// //                 <button
// //   onClick={handleExcelDownload}
// //   className="bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-2xl font-bold uppercase text-xs tracking-widest shadow-md whitespace-nowrap"
// // >
// //   Download Excel
// // </button>
// //                 <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
// //                 <input
// //                   type="text"
// //                   placeholder="Search student by name..."
// //                   className="w-full pl-12 pr-4 py-3 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all text-sm font-medium outline-none"
// //                   value={searchTerm}
// //                   onChange={(e) => setSearchTerm(e.target.value)}
// //                 />
// //               </div>
// //             </div>

// //             <div className="overflow-x-auto">
// //               <table className="w-full border-separate border-spacing-y-2">
// //                 <thead>
// //                   <tr className="text-gray-400 text-left">
// //                     <th className="px-6 py-3 text-[15px] font-black uppercase tracking-widest">Admission No</th>
// //                     <th className="px-6 py-3 text-[15px] font-black uppercase tracking-widest">Student Name</th>
// //                     <th className="px-6 py-3 text-[15px] font-black uppercase tracking-widest">Father's Name</th>
// //                     <th className="px-6 py-3 text-[15px] font-black uppercase tracking-widest">Date of Birth</th>
// //                     <th className="px-6 py-3 text-[15px] font-black uppercase tracking-widest text-right">Action</th>
// //                   </tr>
// //                 </thead>
// //                 <tbody>
// //                   {loading ? (
// //                     <tr>
// //                       <td colSpan="5" className="p-20 text-center">
// //                         <Loader2 className="animate-spin inline text-blue-600" />
// //                         <p className="text-gray-400 mt-2 font-bold uppercase text-xs tracking-widest">Loading Database...</p>
// //                       </td>
// //                     </tr>
// //                   ) : students.length > 0 ? (
// //                     students.map((student) => (
// //                       <tr 
// //                         key={student._id} 
// //                         onClick={() => handleOpenProfile(student)}
// //                         className="group cursor-pointer bg-white hover:bg-blue-50/50 transition-all"
// //                       >
// //                         <td className="px-6 py-4 rounded-l-2xl border-y border-l border-gray-50 group-hover:border-blue-100">
// //                           <span className="bg-gray-100 group-hover:bg-blue-100 text-gray-600 group-hover:text-blue-700 px-3 py-1 rounded-lg text-xs font-bold">
// //                             {student.admissionInfo?.admissionNo || 'N/A'}
// //                           </span>
// //                         </td>
// //                         <td className="px-6 py-4 border-y border-gray-50 group-hover:border-blue-100 font-bold text-blue-900">
// //                           {student.name}
// //                         </td>
// //                         <td className="px-6 py-4 border-y border-gray-50 group-hover:border-blue-100 text-gray-500 font-medium">
// //                           {student.parentDetails?.fatherName || 'N/A'}
// //                         </td>
// //                         <td className="px-6 py-4 border-y border-gray-50 group-hover:border-blue-100 text-gray-400 font-medium">
// //                           {student.dob ? new Date(student.dob).toLocaleDateString('en-GB') : 'N/A'}
// //                         </td>
// //                         <td className="px-6 py-4 rounded-r-2xl border-y border-r border-gray-50 group-hover:border-blue-100 text-right">
// //                           <button className="text-[10px] font-black uppercase text-blue-600 bg-blue-50 px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-all">
// //                             View Details
// //                           </button>
// //                         </td>
// //                       </tr>
// //                     ))
// //                   ) : (
// //                     <tr>
// //                       <td colSpan="5" className="p-20 text-center text-gray-400 italic">
// //                         No students found.
// //                       </td>
// //                     </tr>
// //                   )}
// //                 </tbody>
// //               </table>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // const Loader2 = ({ className }) => (
// //   <svg className={`animate-spin ${className}`} width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
// //     <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
// //   </svg>
// // );

// // export default StudentTable;










// // 19-05-2026














// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';
// // import { Search, FileUser, X, GraduationCap, MapPin, UserCircle, Edit3, Save, RotateCcw } from 'lucide-react';
// // import TransferCertificate from './TransferCertificate';



// // /**
// //  * REUSABLE EDITABLE FIELD COMPONENT 
// //  */
// // const EditableField = ({ 
// //   label, 
// //   name, 
// //   value, 
// //   onChange, 
// //   isEditing, 
// //   highlight = false, 
// //   type = "text",
// //   options = null
// // }) => (
// //   <div className="flex flex-col space-y-1">
// //     <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">
// //       {label}
// //     </p>

// //     {isEditing ? (
// //       options ? (
// //         <select
// //           name={name}
// //           value={value || ""}
// //           onChange={onChange}
// //           className="px-3 py-2 border border-blue-400 rounded-lg text-sm bg-white focus:ring-2 focus:ring-blue-500 outline-none transition-all font-medium text-blue-900"
// //         >
// //           <option value="">Select</option>
// //           {options.map((option) => (
// //             <option key={option} value={option}>
// //               {option}
// //             </option>
// //           ))}
// //         </select>
// //       ) : (
// //         <input
// //           type={type}
// //           name={name}
// //           value={value || ""}
// //           onChange={onChange}
// //           className="px-3 py-2 border border-blue-400 rounded-lg text-sm bg-white focus:ring-2 focus:ring-blue-500 outline-none transition-all font-medium text-blue-900"
// //         />
// //       )
// //     ) : (
// //       <div
// //         className={`px-3 py-2 border rounded-lg text-sm transition-all ${
// //           highlight
// //             ? "bg-blue-50 border-blue-200 text-blue-900 font-bold"
// //             : "bg-gray-50 border-gray-200 text-gray-800 font-medium"
// //         }`}
// //       >
// //         {value || <span className="text-gray-300 italic">Not Recorded</span>}
// //       </div>
// //     )}
// //   </div>
// // );
// // const PreviewField = ({ 
// //   label, 
// //   value, 
// //   highlight = false, 
// //   fileUrl = null 
// // }) => (
// //   <div className="flex flex-col space-y-1">
// //     <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
// //       {label}
// //     </p>

// //     <div
// //       className={`px-3 py-2 border rounded-lg text-sm transition-all ${
// //         highlight
// //           ? "bg-blue-50 border-blue-200 text-blue-900 font-bold"
// //           : "bg-gray-50 border-gray-200 text-gray-800 font-medium"
// //       }`}
// //     >
// //       {value ? (
// //         <div className="flex items-center justify-between gap-2">
// //           <span className="truncate">{value}</span>

// //           {fileUrl && (
// //             <a
// //               href={fileUrl}
// //               target="_blank"
// //               rel="noopener noreferrer"
// //               className="text-xs bg-blue-600 text-white px-2 py-1 rounded hover:bg-black"
// //             >
// //               View
// //             </a>
// //           )}
// //         </div>
// //       ) : (
// //         <span className="text-gray-300 italic">Not Recorded</span>
// //       )}
// //     </div>
// //   </div>
// // );
// // const StudentTable = () => {
// //   const [students, setStudents] = useState([]);
// //   const [viewingTC, setViewingTC] = useState(false);
// //   const [searchTerm, setSearchTerm] = useState("");
// //   const [loading, setLoading] = useState(true);
  
// //   const [selectedStudent, setSelectedStudent] = useState(null); 
// //   const [isEditing, setIsEditing] = useState(false);
// //   const [editData, setEditData] = useState(null);
// //   const [isSaving, setIsSaving] = useState(false);
// //   const [dashboardCounts, setDashboardCounts] = useState({
// //   totalStudents: 0,
// //   tcSubmitted: 0,
// //   tcNotSubmitted: 0,
// //   conductSubmitted: 0,
// //   conductNotSubmitted: 0,
// //   marksMemoSubmitted: 0,
// //   marksMemoNotSubmitted: 0
// // });
// // const [activeFilter, setActiveFilter] = useState("all");


// // const fetchDashboardCounts = async () => {
// //   try {
// //     const response = await axios.get(
// //       "http://localhost:5000/api/students/dashboard-counts"
// //     );

// //     setDashboardCounts(response.data);

// //   } catch (error) {
// //     console.error("Dashboard fetch error:", error);
// //   }
// // };

// //   // FETCH FUNCTION
// //   const fetchStudents = async (query = "", pendingType = "") => {
// //   setLoading(true);

// //   try {
// //     let url = `http://localhost:5000/api/students/search?name=${query}`;

// //     if (pendingType) {
// //       url += `&pending=${pendingType}`;
// //     }

// //     const response = await axios.get(url);

// //     setStudents(response.data);

// //   } catch (error) {
// //     console.error("Error fetching students:", error);

// //   } finally {
// //     setLoading(false);
// //   }
// // };

// //   // DEBOUNCED SEARCH & INITIAL LOAD
// //   useEffect(() => {
// //     fetchDashboardCounts();
// //     const delayDebounceFn = setTimeout(() => {
// //       fetchStudents(searchTerm);
// //     }, 400); // Slightly longer debounce for smoother UX

// //     return () => clearTimeout(delayDebounceFn);
// //   }, [searchTerm]);

// // const handleOpenProfile = async (student) => {
// //   try {
// //     // Fetch latest student record from DB
// //     const response = await axios.get(
// //       `http://localhost:5000/api/students/${student._id}`
// //     );

// //     const freshStudent = JSON.parse(
// //       JSON.stringify(response.data)
// //     );

// //     // ALWAYS OPEN MODAL FIRST
// //     setSelectedStudent(freshStudent);

// //     setEditData(
// //       JSON.parse(JSON.stringify(freshStudent))
// //     );

// //     setIsEditing(false);

// //     // IMPORTANT
// //     // DO NOT AUTO OPEN TC
// //     setViewingTC(false);

// //   } catch (error) {
// //     console.error("Profile open error:", error);

// //     const fallbackStudent = JSON.parse(
// //       JSON.stringify(student)
// //     );

// //     setSelectedStudent(fallbackStudent);

// //     setEditData(
// //       JSON.parse(JSON.stringify(fallbackStudent))
// //     );

// //     setIsEditing(false);

// //     // IMPORTANT
// //     setViewingTC(false);
// //   }
// // };

// // const handleDashboardFilter = (type) => {
// //   setActiveFilter(type);
// //   fetchStudents("", type);
// // };

// // const handleFileChange = async (e, fieldName) => {
// //   const file = e.target.files[0];
// //   if (!file) return;

// //   const formData = new FormData();
// //   formData.append("file", file);

// //   try {
// //     const response = await axios.post(
// //   `http://localhost:5000/api/students/upload/${editData._id}/${fieldName}`,
// //   formData
// // );

// // const updatedStudent = response.data.updatedStudent;

// // // Update edit form instantly
// // setEditData(JSON.parse(JSON.stringify(updatedStudent)));

// // // Update modal preview instantly
// // setSelectedStudent(JSON.parse(JSON.stringify(updatedStudent)));

// // // Update table instantly
// // setStudents(prev =>
// //   prev.map(student =>
// //     student._id === updatedStudent._id ? updatedStudent : student
// //   )
// // );
// // fetchDashboardCounts();
// //     alert("File uploaded successfully!");

// //   } catch (error) {
// //     console.error("UPLOAD ERROR:", error.response?.data || error.message);

// //     alert(
// //       error.response?.data?.error || "File upload failed"
// //     );
// //   }
// // };



// //   const handleEditChange = (e) => {
// //   const { name, value } = e.target;

// //   // Parent Details
// //   if (
// //     [
// //       "fatherName", "fatherMobile", "fatherAadhaar", "fatherQualification", "fatherOccupation", "fatherAnnualIncome",
// //       "motherName", "motherMobile", "motherAadhaar", "motherQualification", "motherOccupation", "motherAnnualIncome",
// //       "guardianName", "guardianRelation", "guardianMobile", "guardianAadhaar", "guardianOccupation", "guardianAnnualIncome",
// //       "residence"
// //     ].includes(name)
// //   ) {
// //     setEditData(prev => ({
// //       ...prev,
// //       parentDetails: {
// //         ...prev.parentDetails,
// //         [name]: value
// //       }
// //     }));
// //     return;
// //   }

// //   // Admission Info
// //   if (
// //     [
// //       "admissionNo",
// //       "classAdmittedTo",
// //       "previousSchoolName",
// //       "previousTCNumber",
// //       "previousTCDate"
// //     ].includes(name)
// //   ) {
// //     setEditData(prev => ({
// //       ...prev,
// //       admissionInfo: {
// //         ...prev.admissionInfo,
// //         [name]: value
// //       }
// //     }));
// //     return;
// //   }

// //   // Main Student Fields
// //   setEditData(prev => ({
// //     ...prev,
// //     [name]: value
// //   }));
// // };

// //   const handleUpdate = async () => {
// //   setIsSaving(true);

// //   try {
// //     const response = await axios.put(
// //       `http://localhost:5000/api/students/${editData._id}`,
// //       editData
// //     );

// //     const updatedStudent = response.data.updatedStudent;

// //     // UPDATE TABLE
// //     setStudents(prev =>
// //       prev.map(student =>
// //         student._id === updatedStudent._id ? updatedStudent : student
// //       )
// //     );

// //     // UPDATE MODAL
// //     setSelectedStudent(updatedStudent);

// //     // UPDATE EDIT FORM
// //     setEditData(JSON.parse(JSON.stringify(updatedStudent)));

// //     // OPTIONAL REFRESH
// //     await fetchStudents(searchTerm);

// //     setIsEditing(false);

// //     alert("Student record updated successfully!");

// //   } catch (error) {
// //     console.error("Update failed:", error.response?.data || error.message);
// //     alert("Failed to update record.");
// //   } finally {
// //     setIsSaving(false);
// //   }
// // };


// // const handleExcelDownload = async () => {
// //   try {
// //     const response = await axios.get(
// //       `http://localhost:5000/api/students/export-excel?pending=${activeFilter}`,
// //       {
// //         responseType: "blob"
// //       }
// //     );

// //     const blob = new Blob([response.data], {
// //       type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
// //     });

// //     const url = window.URL.createObjectURL(blob);

// //     const link = document.createElement("a");
// //     link.href = url;

// //     link.download =
// //       activeFilter === "all"
// //         ? "all_students.xlsx"
// //         : `pending_${activeFilter}_students.xlsx`;

// //     document.body.appendChild(link);
// //     link.click();
// //     link.remove();

// //     window.URL.revokeObjectURL(url);

// //   } catch (error) {
// //     console.error("Excel download failed:", error);
// //     alert("Failed to download Excel.");
// //   }
// // };


// // // 3. Update the Return Statement (Conditional Rendering)
// // // 3. Update the Return Statement (Conditional Rendering)
// // if (viewingTC) {
// //   return (
// //     <TransferCertificate
// //       data={selectedStudent}
// //       onBack={async () => {
// //         // Close TC screen
// //         setViewingTC(false);

// //         // Clear selected student
// //         setSelectedStudent(null);

// //         // Refresh active students table
// //         await fetchStudents(searchTerm);

// //         // Refresh dashboard counts
// //         await fetchDashboardCounts();
// //       }}
// //     />
// //   );
// // }


// // const handleGenerateTC = async () => {
// //   try {
// //     // IF TC ALREADY SAVED, OPEN DIRECTLY IN PREVIEW
// //     // IF TC ALREADY FINALIZED, OPEN PREVIEW DIRECTLY
// // if (selectedStudent?.generatedTC?.isGenerated) {
// //   setViewingTC(true);
// //   return;
// // }

// //     // OTHERWISE CREATE NEW TC
// //     const tcNumber = prompt("Enter TC Number:");

// //     if (!tcNumber) return;

// //     const response = await axios.put(
// //       `http://localhost:5000/api/students/generate-tc/${selectedStudent._id}`,
// //       { tcNumber }
// //     );

// //     const updatedStudent = response.data.updatedStudent;

// //   setSelectedStudent(JSON.parse(JSON.stringify(updatedStudent)));
// // setEditData(JSON.parse(JSON.stringify(updatedStudent)));

// // // UPDATE TABLE INSTANTLY
// // setStudents(prev =>
// //   prev.map(student =>
// //     student._id === updatedStudent._id ? updatedStudent : student
// //   )
// // );

// // // REFRESH DASHBOARD
// // fetchDashboardCounts();

// //     // OPEN TC PAGE
// //     setViewingTC(true);

// //   } catch (error) {
// //     console.error("TC Generate Error:", error);
// //     alert("Failed to generate TC");
// //   }
// // };
// //   return (
// //     <div className="p-4 lg:p-8 bg-slate-50 min-h-screen font-sans text-left">
      
// //       {/* --- MODAL --- */}
// //       {selectedStudent && (
// //         <div className="fixed inset-0 bg-blue-900/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
// //           <div className="bg-white rounded-[2rem] shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-10 border border-white">
            
// //             <header className="mb-8 border-b-2 border-blue-100 pb-6 flex justify-between items-start">
// //               <div className="flex gap-4 items-center">
// //                 <div className={`p-4 rounded-2xl text-white shadow-lg transition-colors ${isEditing ? 'bg-orange-500' : 'bg-blue-600'}`}>
// //                    {isEditing ? <Edit3 size={32} /> : <FileUser size={32} />}
// //                 </div>
// //                 <div>
// //                   <h2 className="text-3xl font-black text-blue-900 leading-tight">
// //                     {isEditing ? "Edit Record" : selectedStudent.name}
// //                   </h2>
// //                   <p className="text-blue-500 text-xs font-black uppercase tracking-widest">
// //                     {isEditing ? "Modify necessary information below" : `Admission No: ${selectedStudent.admissionInfo?.admissionNo || 'N/A'}`}
// //                   </p>
// //                 </div>
// //               </div>
// //               <button onClick={() => setSelectedStudent(null)} className="p-2 hover:bg-red-50 text-gray-400 hover:text-red-500 rounded-full">
// //                 <X size={28} />
// //               </button>
// //             </header>

// //             <div className="space-y-10">

// //   {/* 1. Personal Identity */}
// //   {/* 1. Personal Identity */}
// // <section>
// //   <div className="flex items-center gap-2 mb-4 text-blue-900 font-black uppercase tracking-tighter text-sm">
// //     <UserCircle size={18} /> Personal Identity
// //   </div>

// //   <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
// //     <EditableField label="Full Name" name="name" value={editData.name} onChange={handleEditChange} isEditing={isEditing} highlight />
// //     <EditableField label="Aadhaar No" name="aadhaarNo" value={editData.aadhaarNo} onChange={handleEditChange} isEditing={isEditing} />
// //     <EditableField label="Date of Birth" name="dob" type="date" value={editData.dob?.split('T')[0]} onChange={handleEditChange} isEditing={isEditing} />
// //     <EditableField
// //   label="Gender"
// //   name="gender"
// //   value={editData.gender}
// //   onChange={handleEditChange}
// //   isEditing={isEditing}
// //   options={["Male", "Female", "Other"]}
// // />
// //     {/* <EditableField label="Gender" name="gender" value={editData.gender} onChange={handleEditChange} isEditing={isEditing} /> */}
    
// //     <EditableField label="Nationality" name="nationality" value={editData.nationality} onChange={handleEditChange} isEditing={isEditing} />
// //     <EditableField label="Religion" name="religion" value={editData.religion} onChange={handleEditChange} isEditing={isEditing} />
// //     <EditableField label="Caste" name="caste" value={editData.caste} onChange={handleEditChange} isEditing={isEditing} />
// //     <EditableField label="Mother Tongue" name="motherTongue" value={editData.motherTongue} onChange={handleEditChange} isEditing={isEditing} />
// //     <EditableField label="State" name="state" value={editData.state} onChange={handleEditChange} isEditing={isEditing} />

// //     {/* NEW FIELDS FROM ADMISSION FORM */}
// //     <EditableField label="UDISE + Number" name="udisePlus" value={editData.udisePlus} onChange={handleEditChange} isEditing={isEditing} />
// //     <EditableField label="Siblings Info" name="siblings" value={editData.siblings} onChange={handleEditChange} isEditing={isEditing} />
// //     <EditableField
// //   label="CWSN Status"
// //   name="cwsn"
// //   value={editData.cwsn}
// //   onChange={handleEditChange}
// //   isEditing={isEditing}
// //   highlight={editData.cwsn && editData.cwsn !== "None"}
// //   options={[
// //     "None",
// //     "Locomotor Disability",
// //     "Visual Impairment",
// //     "Hearing Impairment",
// //     "Speech & Language",
// //     "Intellectual Disability",
// //     "Other"
// //   ]}
// // />
// //     {/* <EditableField label="CWSN Status" name="cwsn" value={editData.cwsn} onChange={handleEditChange} isEditing={isEditing} highlight={editData.cwsn && editData.cwsn !== "None"} /> */}
    
// //     <EditableField label="First Language" name="firstLanguage" value={editData.firstLanguage} onChange={handleEditChange} isEditing={isEditing} />
// //     <EditableField label="Second Language" name="secondLanguage" value={editData.secondLanguage} onChange={handleEditChange} isEditing={isEditing} />
// //     <EditableField label="Third Language" name="thirdLanguage" value={editData.thirdLanguage} onChange={handleEditChange} isEditing={isEditing} />
// //   </div>
// // </section>

// //   {/* 2. Family Records */}
// //   <section className="pt-6 border-t border-gray-100">
// //     <div className="flex items-center gap-2 mb-4 text-blue-900 font-black uppercase tracking-tighter text-sm">
// //       <MapPin size={18} /> Family Records
// //     </div>

// //     <div className="space-y-6">
// //       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-gray-50 p-4 rounded-xl">
// //         <EditableField label="Father Name" name="fatherName" value={editData.parentDetails?.fatherName} onChange={handleEditChange} isEditing={isEditing} highlight />
// //         <EditableField label="Father Mobile" name="fatherMobile" value={editData.parentDetails?.fatherMobile} onChange={handleEditChange} isEditing={isEditing} />
// //         <EditableField label="Father Aadhaar" name="fatherAadhaar" value={editData.parentDetails?.fatherAadhaar} onChange={handleEditChange} isEditing={isEditing} />
// //         <EditableField label="Father Qualification" name="fatherQualification" value={editData.parentDetails?.fatherQualification} onChange={handleEditChange} isEditing={isEditing} />
// //         <EditableField label="Father Occupation" name="fatherOccupation" value={editData.parentDetails?.fatherOccupation} onChange={handleEditChange} isEditing={isEditing} />
// //         <EditableField label="Father Income" name="fatherAnnualIncome" value={editData.parentDetails?.fatherAnnualIncome} onChange={handleEditChange} isEditing={isEditing} />
// //       </div>

// //       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-gray-50 p-4 rounded-xl">
// //         <EditableField label="Mother Name" name="motherName" value={editData.parentDetails?.motherName} onChange={handleEditChange} isEditing={isEditing} />
// //         <EditableField label="Mother Mobile" name="motherMobile" value={editData.parentDetails?.motherMobile} onChange={handleEditChange} isEditing={isEditing} />
// //         <EditableField label="Mother Aadhaar" name="motherAadhaar" value={editData.parentDetails?.motherAadhaar} onChange={handleEditChange} isEditing={isEditing} />
// //         <EditableField label="Mother Qualification" name="motherQualification" value={editData.parentDetails?.motherQualification} onChange={handleEditChange} isEditing={isEditing} />
// //         <EditableField label="Mother Occupation" name="motherOccupation" value={editData.parentDetails?.motherOccupation} onChange={handleEditChange} isEditing={isEditing} />
// //         <EditableField label="Mother Income" name="motherAnnualIncome" value={editData.parentDetails?.motherAnnualIncome} onChange={handleEditChange} isEditing={isEditing} />
// //       </div>

// //       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-gray-50 p-4 rounded-xl">
// //         <EditableField label="Guardian Name" name="guardianName" value={editData.parentDetails?.guardianName} onChange={handleEditChange} isEditing={isEditing} />
// //         <EditableField label="Guardian Relation" name="guardianRelation" value={editData.parentDetails?.guardianRelation} onChange={handleEditChange} isEditing={isEditing} />
// //         <EditableField label="Guardian Mobile" name="guardianMobile" value={editData.parentDetails?.guardianMobile} onChange={handleEditChange} isEditing={isEditing} />
// //         <EditableField label="Guardian Aadhaar" name="guardianAadhaar" value={editData.parentDetails?.guardianAadhaar} onChange={handleEditChange} isEditing={isEditing} />
// //         <EditableField label="Guardian Occupation" name="guardianOccupation" value={editData.parentDetails?.guardianOccupation} onChange={handleEditChange} isEditing={isEditing} />
// //         <EditableField label="Guardian Income" name="guardianAnnualIncome" value={editData.parentDetails?.guardianAnnualIncome} onChange={handleEditChange} isEditing={isEditing} />
// //       </div>

// //       <EditableField label="Residence Address" name="residence" value={editData.parentDetails?.residence} onChange={handleEditChange} isEditing={isEditing} highlight />
// //     </div>
// //   </section>

// //   {/* 3. Academic Information */}
// //   <section className="pt-6 border-t border-gray-100">
// //     <div className="flex items-center gap-2 mb-4 text-blue-900 font-black uppercase tracking-tighter text-sm">
// //       <GraduationCap size={18} /> Academic Information
// //     </div>

// //     <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
// //       <EditableField label="Admission No" name="admissionNo" value={editData.admissionInfo?.admissionNo} onChange={handleEditChange} isEditing={isEditing} highlight />
// //       <EditableField label="Class Admitted To" name="classAdmittedTo" value={editData.admissionInfo?.classAdmittedTo} onChange={handleEditChange} isEditing={isEditing} />
// //       <EditableField label="Previous School" name="previousSchoolName" value={editData.admissionInfo?.previousSchoolName} onChange={handleEditChange} isEditing={isEditing} />
// //       <EditableField label="Previous TC Number" name="previousTCNumber" value={editData.admissionInfo?.previousTCNumber} onChange={handleEditChange} isEditing={isEditing} />
// //       <EditableField label="Previous TC Date" name="previousTCDate" type="date" value={editData.admissionInfo?.previousTCDate?.split('T')[0]} onChange={handleEditChange} isEditing={isEditing} />
// //     </div>
// //   </section>
// //   <section className="pt-6 border-t border-gray-100">
// //   <div className="flex items-center gap-2 mb-4 text-blue-900 font-black uppercase tracking-tighter text-sm">
// //     <FileUser size={18} /> Uploaded Documents
// //   </div>

// //   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// //     {[
// //     ["studentAadhaarFile", "Student Aadhaar File"],
// //     ["fatherAadhaarFile", "Father Aadhaar File"],
// //     ["motherAadhaarFile", "Mother Aadhaar File"],
// //     ["guardianAadhaarFile", "Guardian Aadhaar File"],
// //     ["tcFile", "Transfer Certificate"],
// //     ["conductFile", "Conduct Certificate"],
// //     ["marksMemoFile", "Marks Memo"]
// //   ].map(([field, label]) => (
// //     <div key={field} className="flex flex-col space-y-1">
// //       <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
// //         {label}
// //       </p>

// //       {isEditing ? (
// //         <input
// //           type="file"
// //           accept=".pdf,.jpg,.jpeg,.png"
// //           onChange={(e) => handleFileChange(e, field)}
// //           className="px-3 py-2 border border-blue-300 rounded-lg text-sm bg-white"
// //         />
// //       ) : (
// //         <PreviewField
// //   label={label}
// //   value={editData.documents?.[field] ? "Uploaded" : ""}
// //   fileUrl={editData.documents?.[field]}
// //   highlight={field === "studentAadhaarFile" || field === "tcFile"}
// // />
// //       )}
// //     </div>
// //   ))}
// //   </div>
// // </section>

// // </div>

// //             <div className="mt-10 flex gap-4">
// //               {isEditing ? (
// //                 <>
// //                   <button onClick={handleUpdate} disabled={isSaving} className="flex-1 bg-green-600 text-white py-4 rounded-2xl font-bold uppercase tracking-widest hover:bg-green-700 transition-all flex items-center justify-center gap-2">
// //                     {isSaving ? <Loader2 className="animate-spin" /> : <Save size={20} />}
// //                     {isSaving ? "Saving..." : "Save Changes"}
// //                   </button>
// //                   <button   onClick={() => {
// //     setIsEditing(false);
// //     setEditData(JSON.parse(JSON.stringify(selectedStudent)));
// //   }} className="px-8 bg-gray-100 text-gray-500 py-4 rounded-2xl font-bold uppercase tracking-widest hover:bg-gray-200 transition-all flex items-center gap-2">
// //                     <RotateCcw size={20} /> Cancel
// //                   </button>
// //                 </>
// //               ) : (
// //                 <><div className="flex flex-1 gap-3">


// //   <button
// //     onClick={handleGenerateTC}
// //     className={`flex-1 text-white py-4 rounded-2xl font-bold uppercase tracking-widest transition-all ${
// //       selectedStudent?.generatedTC?.isGenerated
// //         ? "bg-green-600 hover:bg-green-700"
// //         : "bg-orange-600 hover:bg-orange-700"
// //     }`}
// //   >
// //     {selectedStudent?.generatedTC?.isGenerated
// //       ? "Preview TC"
// //       : "Generate TC"}
// //   </button>

// //   <button
// //     onClick={() => setIsEditing(true)}
// //     className="flex-1 bg-blue-600 text-white py-4 rounded-2xl font-bold uppercase tracking-widest hover:bg-blue-700 transition-all flex items-center justify-center gap-2"
// //   >
// //     <Edit3 size={20} />
// //     Edit Profile
// //   </button>

// // </div>





// //                   {/* <button onClick={() => setIsEditing(true)} className="flex-1 bg-blue-600 text-white py-4 rounded-2xl font-bold uppercase tracking-widest hover:bg-blue-700 transition-all flex items-center justify-center gap-2">
// //                     <Edit3 size={20} /> Edit Profile
// //                   </button> */}
// //                   <button onClick={() => setSelectedStudent(null)} className="px-8 bg-blue-900 text-white py-4 rounded-2xl font-bold uppercase tracking-widest hover:bg-black transition-all">
// //                     Close
// //                   </button>
// //                 </>
// //               )}
// //             </div>
// //           </div>
// //         </div>
// //       )}

// // {/* --- COMPACT DUAL-STAT DASHBOARD (H-20) --- */}
// // <div className="max-w-7xl mx-auto mb-8 grid grid-cols-1 md:grid-cols-4 gap-4 px-4">
  
// //   {/* Total Students - Registry Baseline */}
// //   <div   onClick={() => {
// //     setActiveFilter("all");
// //     fetchStudents("");
// //   }} className="bg-white rounded-full px-6 shadow-md border border-blue-50 flex items-center justify-between h-20 transition-all hover:shadow-lg">
// //     <div className="flex flex-col">
// //       <span className="bg-blue-600 text-white px-3 py-1 rounded-full font-black uppercase text-[12px] tracking-widest w-fit mb-1">
// //         Students
// //       </span>
// //       <p className="text-blue-900/40 text-[10px] font-bold uppercase">Total</p>
// //     </div>
// //     <div className="text-right">
// //       <h2 className="text-2xl font-black text-blue-900 leading-none">
// //         {dashboardCounts.totalStudents}
// //       </h2>
// //     </div>
// //   </div>

// //   {/* TC Status - Pending vs Submitted */}
// //   <div onClick={() => handleDashboardFilter("tc")} className="bg-red-50/50 rounded-full pl-6 pr-4 shadow-md border border-red-100 flex items-center justify-between h-20 transition-all hover:shadow-lg">
// //     <div className="flex flex-col min-w-[80px]">
// //       <span className="bg-red-600 text-white px-3 py-1 rounded-full font-black uppercase text-[12px] tracking-widest w-fit mb-1">
// //         TC
// //       </span>
// //       <p className="text-red-900/40 text-[10px] font-bold uppercase tracking-tighter">Status</p>
// //     </div>
// //     <div className="flex items-center space-x-4">
// //       <div className="text-center">
// //         <p className="text-[9px] font-black text-red-500 uppercase">Pending</p>
// //         <h2 className="text-2xl font-black text-red-600 leading-none">{dashboardCounts.tcNotSubmitted}</h2>
// //       </div>
// //       <div className="h-8 w-[1px] bg-red-200"></div>
// //       <div className="text-center">
// //         <p className="text-[9px] font-black text-gray-400 uppercase">Recvd</p>
// //         <h2 className="text-xl font-bold text-gray-500 leading-none">{dashboardCounts.tcSubmitted}</h2>
// //       </div>
// //     </div>
// //   </div>

// //   {/* Conduct Status - Pending vs Submitted */}
// //   <div onClick={() => handleDashboardFilter("conduct")} className="bg-orange-50/50 rounded-full pl-6 pr-4 shadow-md border border-orange-100 flex items-center justify-between h-20 transition-all hover:shadow-lg">
// //     <div className="flex flex-col min-w-[80px]">
// //       <span className="bg-orange-500 text-white px-3 py-1 rounded-full font-black uppercase text-[12px] tracking-widest w-fit mb-1">
// //         Conduct
// //       </span>
// //       <p className="text-orange-900/40 text-[10px] font-bold uppercase tracking-tighter">Status</p>
// //     </div>
// //     <div className="flex items-center space-x-4">
// //       <div className="text-center">
// //         <p className="text-[9px] font-black text-orange-500 uppercase">Pending</p>
// //         <h2 className="text-2xl font-black text-orange-600 leading-none">{dashboardCounts.conductNotSubmitted}</h2>
// //       </div>
// //       <div className="h-8 w-[1px] bg-orange-200"></div>
// //       <div className="text-center">
// //         <p className="text-[9px] font-black text-gray-400 uppercase">Recvd</p>
// //         <h2 className="text-xl font-bold text-gray-500 leading-none">{dashboardCounts.conductSubmitted}</h2>
// //       </div>
// //     </div>
// //   </div>

// //   {/* Marks Status - Pending vs Submitted */}
// //   <div onClick={() => handleDashboardFilter("marksmemo")} className="bg-amber-50/50 rounded-full pl-6 pr-4 shadow-md border border-amber-100 flex items-center justify-between h-20 transition-all hover:shadow-lg">
// //     <div className="flex flex-col min-w-[80px]">
// //       <span className="bg-amber-500 text-white px-3 py-1 rounded-full font-black uppercase text-[12px] tracking-widest w-fit mb-1">
// //         Marks Memo
// //       </span>
// //       <p className="text-amber-900/40 text-[10px] font-bold uppercase tracking-tighter">Status</p>
// //     </div>
// //     <div className="flex items-center space-x-4">
// //       <div className="text-center">
// //         <p className="text-[9px] font-black text-amber-600 uppercase">Pending</p>
// //         <h2 className="text-2xl font-black text-amber-600 leading-none">{dashboardCounts.marksMemoNotSubmitted}</h2>
// //       </div>
// //       <div className="h-8 w-[1px] bg-amber-200"></div>
// //       <div className="text-center">
// //         <p className="text-[9px] font-black text-gray-400 uppercase">Recvd</p>
// //         <h2 className="text-xl font-bold text-gray-500 leading-none">{dashboardCounts.marksMemoSubmitted}</h2>
// //       </div>
// //     </div>
// //   </div>

// // </div>



// //       {/* --- TABLE INTERFACE --- */}
// //       <div className="max-w-6xl mx-auto ">
// //         <div className="bg-white rounded-[2rem] shadow-xl border border-gray-100">
// //           <div className="p-8">
// //             <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
// //               <div>
// //                 <h2 className="text-3xl font-black text-blue-900 tracking-tight">
// //   {activeFilter === "tc"
// //     ? "Showing Pending TC Records"
// //     : activeFilter === "conduct"
// //     ? "Showing Pending Conduct Records"
// //     : activeFilter === "marksmemo"
// //     ? "Showing Pending Marks Memo Records"
// //     : "Student Database"}
// // </h2>
// //                 <p className="text-gray-400 text-sm font-medium italic">Showing {students.length} record(s)</p>
// //               </div>
// //               <div className="flex gap-3 w-full md:w-auto items-center">
// //                 <button
// //   onClick={handleExcelDownload}
// //   className="bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-2xl font-bold uppercase text-xs tracking-widest shadow-md whitespace-nowrap"
// // >
// //   Download Excel
// // </button>
// //                 <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
// //                 <input
// //                   type="text"
// //                   placeholder="Search student by name..."
// //                   className="w-full pl-12 pr-4 py-3 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all text-sm font-medium outline-none"
// //                   value={searchTerm}
// //                   onChange={(e) => setSearchTerm(e.target.value)}
// //                 />
// //               </div>
// //             </div>

// //             <div className="overflow-x-auto">
// //               <table className="w-full border-separate border-spacing-y-2">
// //                 <thead>
// //                   <tr className="text-gray-400 text-left">
// //                     <th className="px-6 py-3 text-[15px] font-black uppercase tracking-widest">Admission No</th>
// //                     <th className="px-6 py-3 text-[15px] font-black uppercase tracking-widest">Student Name</th>
// //                     <th className="px-6 py-3 text-[15px] font-black uppercase tracking-widest">Father's Name</th>
// //                     <th className="px-6 py-3 text-[15px] font-black uppercase tracking-widest">Date of Birth</th>
// //                     <th className="px-6 py-3 text-[15px] font-black uppercase tracking-widest text-right">Action</th>
// //                   </tr>
// //                 </thead>
// //                 <tbody>
// //                   {loading ? (
// //                     <tr>
// //                       <td colSpan="5" className="p-20 text-center">
// //                         <Loader2 className="animate-spin inline text-blue-600" />
// //                         <p className="text-gray-400 mt-2 font-bold uppercase text-xs tracking-widest">Loading Database...</p>
// //                       </td>
// //                     </tr>
// //                   ) : students.length > 0 ? (
// //                     students.map((student) => (
// //                       <tr 
// //                         key={student._id} 
// //                         onClick={() => handleOpenProfile(student)}
// //                         className="group cursor-pointer bg-white hover:bg-blue-50/50 transition-all"
// //                       >
// //                         <td className="px-6 py-4 rounded-l-2xl border-y border-l border-gray-50 group-hover:border-blue-100">
// //                           <span className="bg-gray-100 group-hover:bg-blue-100 text-gray-600 group-hover:text-blue-700 px-3 py-1 rounded-lg text-xs font-bold">
// //                             {student.admissionInfo?.admissionNo || 'N/A'}
// //                           </span>
// //                         </td>
// //                         <td className="px-6 py-4 border-y border-gray-50 group-hover:border-blue-100 font-bold text-blue-900">
// //                           {student.name}
// //                         </td>
// //                         <td className="px-6 py-4 border-y border-gray-50 group-hover:border-blue-100 text-gray-500 font-medium">
// //                           {student.parentDetails?.fatherName || 'N/A'}
// //                         </td>
// //                         <td className="px-6 py-4 border-y border-gray-50 group-hover:border-blue-100 text-gray-400 font-medium">
// //                           {student.dob ? new Date(student.dob).toLocaleDateString('en-GB') : 'N/A'}
// //                         </td>
// //                         <td className="px-6 py-4 rounded-r-2xl border-y border-r border-gray-50 group-hover:border-blue-100 text-right">
// //                           <button className="text-[10px] font-black uppercase text-blue-600 bg-blue-50 px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-all">
// //                             View Details
// //                           </button>
// //                         </td>
// //                       </tr>
// //                     ))
// //                   ) : (
// //                     <tr>
// //                       <td colSpan="5" className="p-20 text-center text-gray-400 italic">
// //                         No students found.
// //                       </td>
// //                     </tr>
// //                   )}
// //                 </tbody>
// //               </table>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // const Loader2 = ({ className }) => (
// //   <svg className={`animate-spin ${className}`} width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
// //     <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
// //   </svg>
// // );

// // export default StudentTable;


















// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';
// // import { Search, FileUser, X, GraduationCap, MapPin, UserCircle, Edit3, Save, RotateCcw } from 'lucide-react';
// // import TransferCertificate from './TransferCertificate';



// // /**
// //  * REUSABLE EDITABLE FIELD COMPONENT 
// //  */
// // const EditableField = ({ 
// //   label, 
// //   name, 
// //   value, 
// //   onChange, 
// //   isEditing, 
// //   highlight = false, 
// //   type = "text",
// //   options = null
// // }) => (
// //   <div className="flex flex-col space-y-1">
// //     <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">
// //       {label}
// //     </p>

// //     {isEditing ? (
// //       options ? (
// //         <select
// //           name={name}
// //           value={value || ""}
// //           onChange={onChange}
// //           className="px-3 py-2 border border-blue-400 rounded-lg text-sm bg-white focus:ring-2 focus:ring-blue-500 outline-none transition-all font-medium text-blue-900"
// //         >
// //           <option value="">Select</option>
// //           {options.map((option) => (
// //             <option key={option} value={option}>
// //               {option}
// //             </option>
// //           ))}
// //         </select>
// //       ) : (
// //         <input
// //           type={type}
// //           name={name}
// //           value={value || ""}
// //           onChange={onChange}
// //           className="px-3 py-2 border border-blue-400 rounded-lg text-sm bg-white focus:ring-2 focus:ring-blue-500 outline-none transition-all font-medium text-blue-900"
// //         />
// //       )
// //     ) : (
// //       <div
// //         className={`px-3 py-2 border rounded-lg text-sm transition-all ${
// //           highlight
// //             ? "bg-blue-50 border-blue-200 text-blue-900 font-bold"
// //             : "bg-gray-50 border-gray-200 text-gray-800 font-medium"
// //         }`}
// //       >
// //         {value || <span className="text-gray-300 italic">Not Recorded</span>}
// //       </div>
// //     )}
// //   </div>
// // );
// // const PreviewField = ({ 
// //   label, 
// //   value, 
// //   highlight = false, 
// //   fileUrl = null 
// // }) => (
// //   <div className="flex flex-col space-y-1">
// //     <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
// //       {label}
// //     </p>

// //     <div
// //       className={`px-3 py-2 border rounded-lg text-sm transition-all ${
// //         highlight
// //           ? "bg-blue-50 border-blue-200 text-blue-900 font-bold"
// //           : "bg-gray-50 border-gray-200 text-gray-800 font-medium"
// //       }`}
// //     >
// //       {value ? (
// //         <div className="flex items-center justify-between gap-2">
// //           <span className="truncate">{value}</span>

// //           {fileUrl && (
// //             <a
// //               href={fileUrl}
// //               target="_blank"
// //               rel="noopener noreferrer"
// //               className="text-xs bg-blue-600 text-white px-2 py-1 rounded hover:bg-black"
// //             >
// //               View
// //             </a>
// //           )}
// //         </div>
// //       ) : (
// //         <span className="text-gray-300 italic">Not Recorded</span>
// //       )}
// //     </div>
// //   </div>
// // );
// // const StudentTable = () => {
// //   const [students, setStudents] = useState([]);
// //   const [viewingTC, setViewingTC] = useState(false);
// //   const [searchTerm, setSearchTerm] = useState("");
// //   const [loading, setLoading] = useState(true);
  
// //   const [selectedStudent, setSelectedStudent] = useState(null); 
// //   const [isEditing, setIsEditing] = useState(false);
// //   const [editData, setEditData] = useState(null);
// //   const [isSaving, setIsSaving] = useState(false);
// //   const [dashboardCounts, setDashboardCounts] = useState({
// //   totalStudents: 0,
// //   tcSubmitted: 0,
// //   tcNotSubmitted: 0,
// //   conductSubmitted: 0,
// //   conductNotSubmitted: 0,
// //   marksMemoSubmitted: 0,
// //   marksMemoNotSubmitted: 0
// // });
// // const [activeFilter, setActiveFilter] = useState("all");


// // const fetchDashboardCounts = async () => {
// //   try {
// //     const response = await axios.get(
// //       "http://localhost:5000/api/students/dashboard-counts"
// //     );

// //     setDashboardCounts(response.data);

// //   } catch (error) {
// //     console.error("Dashboard fetch error:", error);
// //   }
// // };

// //   // FETCH FUNCTION
// //   const fetchStudents = async (query = "", pendingType = "") => {
// //   setLoading(true);

// //   try {
// //     let url = `http://localhost:5000/api/students/search?name=${query}`;

// //     if (pendingType) {
// //       url += `&pending=${pendingType}`;
// //     }

// //     const response = await axios.get(url);

// //     setStudents(response.data);

// //   } catch (error) {
// //     console.error("Error fetching students:", error);

// //   } finally {
// //     setLoading(false);
// //   }
// // };

// //   // DEBOUNCED SEARCH & INITIAL LOAD
// //   useEffect(() => {
// //     fetchDashboardCounts();
// //     const delayDebounceFn = setTimeout(() => {
// //       fetchStudents(searchTerm);
// //     }, 400); // Slightly longer debounce for smoother UX

// //     return () => clearTimeout(delayDebounceFn);
// //   }, [searchTerm]);

// // const handleOpenProfile = async (student) => {
// //   try {
// //     // Fetch latest student record from DB
// //     const response = await axios.get(
// //       `http://localhost:5000/api/students/${student._id}`
// //     );

// //     const freshStudent = JSON.parse(
// //       JSON.stringify(response.data)
// //     );

// //     // ALWAYS OPEN MODAL FIRST
// //     setSelectedStudent(freshStudent);

// //     setEditData(
// //       JSON.parse(JSON.stringify(freshStudent))
// //     );

// //     setIsEditing(false);

// //     // IMPORTANT
// //     // DO NOT AUTO OPEN TC
// //     setViewingTC(false);

// //   } catch (error) {
// //     console.error("Profile open error:", error);

// //     const fallbackStudent = JSON.parse(
// //       JSON.stringify(student)
// //     );

// //     setSelectedStudent(fallbackStudent);

// //     setEditData(
// //       JSON.parse(JSON.stringify(fallbackStudent))
// //     );

// //     setIsEditing(false);

// //     // IMPORTANT
// //     setViewingTC(false);
// //   }
// // };

// // const handleDashboardFilter = (type) => {
// //   setActiveFilter(type);
// //   fetchStudents("", type);
// // };

// // const handleFileChange = async (e, fieldName) => {
// //   const file = e.target.files[0];
// //   if (!file) return;

// //   const formData = new FormData();
// //   formData.append("file", file);

// //   try {
// //     const response = await axios.post(
// //   `http://localhost:5000/api/students/upload/${editData._id}/${fieldName}`,
// //   formData
// // );

// // const updatedStudent = response.data.updatedStudent;

// // // Update edit form instantly
// // setEditData(JSON.parse(JSON.stringify(updatedStudent)));

// // // Update modal preview instantly
// // setSelectedStudent(JSON.parse(JSON.stringify(updatedStudent)));

// // // Update table instantly
// // setStudents(prev =>
// //   prev.map(student =>
// //     student._id === updatedStudent._id ? updatedStudent : student
// //   )
// // );
// // fetchDashboardCounts();
// //     alert("File uploaded successfully!");

// //   } catch (error) {
// //     console.error("UPLOAD ERROR:", error.response?.data || error.message);

// //     alert(
// //       error.response?.data?.error || "File upload failed"
// //     );
// //   }
// // };



// //   const handleEditChange = (e) => {
// //   const { name, value } = e.target;

// //   // Parent Details
// //   if (
// //     [
// //       "fatherName", "fatherMobile", "fatherAadhaar", "fatherQualification", "fatherOccupation", "fatherAnnualIncome",
// //       "motherName", "motherMobile", "motherAadhaar", "motherQualification", "motherOccupation", "motherAnnualIncome",
// //       "guardianName", "guardianRelation", "guardianMobile", "guardianAadhaar", "guardianOccupation", "guardianAnnualIncome",
// //       "residence"
// //     ].includes(name)
// //   ) {
// //     setEditData(prev => ({
// //       ...prev,
// //       parentDetails: {
// //         ...prev.parentDetails,
// //         [name]: value
// //       }
// //     }));
// //     return;
// //   }

// //   // Admission Info
// //   if (
// //     [
// //       "admissionNo",
// //       "classAdmittedTo",
// //       "previousSchoolName",
// //       "previousTCNumber",
// //       "previousTCDate"
// //     ].includes(name)
// //   ) {
// //     setEditData(prev => ({
// //       ...prev,
// //       admissionInfo: {
// //         ...prev.admissionInfo,
// //         [name]: value
// //       }
// //     }));
// //     return;
// //   }

// //   // Main Student Fields
// //   setEditData(prev => ({
// //     ...prev,
// //     [name]: value
// //   }));
// // };

// //   const handleUpdate = async () => {
// //   setIsSaving(true);

// //   try {
// //     const response = await axios.put(
// //       `http://localhost:5000/api/students/${editData._id}`,
// //       editData
// //     );

// //     const updatedStudent = response.data.updatedStudent;

// //     // UPDATE TABLE
// //     setStudents(prev =>
// //       prev.map(student =>
// //         student._id === updatedStudent._id ? updatedStudent : student
// //       )
// //     );

// //     // UPDATE MODAL
// //     setSelectedStudent(updatedStudent);

// //     // UPDATE EDIT FORM
// //     setEditData(JSON.parse(JSON.stringify(updatedStudent)));

// //     // OPTIONAL REFRESH
// //     await fetchStudents(searchTerm);

// //     setIsEditing(false);

// //     alert("Student record updated successfully!");

// //   } catch (error) {
// //     console.error("Update failed:", error.response?.data || error.message);
// //     alert("Failed to update record.");
// //   } finally {
// //     setIsSaving(false);
// //   }
// // };


// // const handleExcelDownload = async () => {
// //   try {
// //     const response = await axios.get(
// //       `http://localhost:5000/api/students/export-excel?pending=${activeFilter}`,
// //       {
// //         responseType: "blob"
// //       }
// //     );

// //     const blob = new Blob([response.data], {
// //       type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
// //     });

// //     const url = window.URL.createObjectURL(blob);

// //     const link = document.createElement("a");
// //     link.href = url;

// //     link.download =
// //       activeFilter === "all"
// //         ? "all_students.xlsx"
// //         : `pending_${activeFilter}_students.xlsx`;

// //     document.body.appendChild(link);
// //     link.click();
// //     link.remove();

// //     window.URL.revokeObjectURL(url);

// //   } catch (error) {
// //     console.error("Excel download failed:", error);
// //     alert("Failed to download Excel.");
// //   }
// // };


// // // 3. Update the Return Statement (Conditional Rendering)
// // // 3. Update the Return Statement (Conditional Rendering)
// // if (viewingTC) {
// //   return (
// //     <TransferCertificate
// //   data={selectedStudent}
// //   isEditable={true}
// //       onBack={async () => {
// //         // Close TC screen
// //         setViewingTC(false);

// //         // Clear selected student
// //         setSelectedStudent(null);

// //         // Refresh active students table
// //         await fetchStudents(searchTerm);

// //         // Refresh dashboard counts
// //         await fetchDashboardCounts();
// //       }}
// //     />
// //   );
// // }








// // const handleGenerateTC = async () => {
// //   try {

// //     // JUST OPEN TC SCREEN
// //     setViewingTC(true);

// //   } catch (error) {
// //     console.error("TC Open Error:", error);
// //     alert("Failed to open TC");
// //   }
// // };











// // // const handleGenerateTC = async () => {
// // //   try {
// // //     // IF TC ALREADY SAVED, OPEN DIRECTLY IN PREVIEW
// // //     // IF TC ALREADY FINALIZED, OPEN PREVIEW DIRECTLY
// // // if (selectedStudent?.generatedTC?.isGenerated) {
// // //   setViewingTC(true);
// // //   return;
// // // }

// // //     // OTHERWISE CREATE NEW TC
    

// // //     const updatedStudent = response.data.updatedStudent;

// // //   setSelectedStudent(JSON.parse(JSON.stringify(updatedStudent)));
// // // setEditData(JSON.parse(JSON.stringify(updatedStudent)));

// // // // UPDATE TABLE INSTANTLY
// // // setStudents(prev =>
// // //   prev.map(student =>
// // //     student._id === updatedStudent._id ? updatedStudent : student
// // //   )
// // // );

// // // // REFRESH DASHBOARD
// // // fetchDashboardCounts();

// // //     // OPEN TC PAGE
// // //     setViewingTC(true);

// // //   } catch (error) {
// // //     console.error("TC Generate Error:", error);
// // //     alert("Failed to generate TC");
// // //   }
// // // };
// //   return (
// //     <div className="p-4 lg:p-8 bg-slate-50 min-h-screen font-sans text-left">
      
// //       {/* --- MODAL --- */}
// //       {selectedStudent && (
// //         <div className="fixed inset-0 bg-blue-900/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
// //           <div className="bg-white rounded-[2rem] shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-10 border border-white">
            
// //             <header className="mb-8 border-b-2 border-blue-100 pb-6 flex justify-between items-start">
// //               <div className="flex gap-4 items-center">
// //                 <div className={`p-4 rounded-2xl text-white shadow-lg transition-colors ${isEditing ? 'bg-orange-500' : 'bg-blue-600'}`}>
// //                    {isEditing ? <Edit3 size={32} /> : <FileUser size={32} />}
// //                 </div>
// //                 <div>
// //                   <h2 className="text-3xl font-black text-blue-900 leading-tight">
// //                     {isEditing ? "Edit Record" : selectedStudent.name}
// //                   </h2>
// //                   <p className="text-blue-500 text-xs font-black uppercase tracking-widest">
// //                     {isEditing ? "Modify necessary information below" : `Admission No: ${selectedStudent.admissionInfo?.admissionNo || 'N/A'}`}
// //                   </p>
// //                 </div>
// //               </div>
// //               <button onClick={() => setSelectedStudent(null)} className="p-2 hover:bg-red-50 text-gray-400 hover:text-red-500 rounded-full">
// //                 <X size={28} />
// //               </button>
// //             </header>

// //             <div className="space-y-10">

// //   {/* 1. Personal Identity */}
// //   {/* 1. Personal Identity */}
// // <section>
// //   <div className="flex items-center gap-2 mb-4 text-blue-900 font-black uppercase tracking-tighter text-sm">
// //     <UserCircle size={18} /> Personal Identity
// //   </div>

// //   <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
// //     <EditableField label="Full Name" name="name" value={editData.name} onChange={handleEditChange} isEditing={isEditing} highlight />
// //     <EditableField label="Aadhaar No" name="aadhaarNo" value={editData.aadhaarNo} onChange={handleEditChange} isEditing={isEditing} />
// //     <EditableField label="Date of Birth" name="dob" type="date" value={editData.dob?.split('T')[0]} onChange={handleEditChange} isEditing={isEditing} />
// //     <EditableField
// //   label="Gender"
// //   name="gender"
// //   value={editData.gender}
// //   onChange={handleEditChange}
// //   isEditing={isEditing}
// //   options={["Male", "Female", "Other"]}
// // />
// //     {/* <EditableField label="Gender" name="gender" value={editData.gender} onChange={handleEditChange} isEditing={isEditing} /> */}
    
// //     <EditableField label="Nationality" name="nationality" value={editData.nationality} onChange={handleEditChange} isEditing={isEditing} />
// //     <EditableField label="Religion" name="religion" value={editData.religion} onChange={handleEditChange} isEditing={isEditing} />
// //     <EditableField label="Caste" name="caste" value={editData.caste} onChange={handleEditChange} isEditing={isEditing} />
// //     <EditableField label="Mother Tongue" name="motherTongue" value={editData.motherTongue} onChange={handleEditChange} isEditing={isEditing} />
// //     <EditableField label="State" name="state" value={editData.state} onChange={handleEditChange} isEditing={isEditing} />

// //     {/* NEW FIELDS FROM ADMISSION FORM */}
// //     <EditableField label="UDISE + Number" name="udisePlus" value={editData.udisePlus} onChange={handleEditChange} isEditing={isEditing} />
// //     <EditableField label="Siblings Info" name="siblings" value={editData.siblings} onChange={handleEditChange} isEditing={isEditing} />
// //     <EditableField
// //   label="CWSN Status"
// //   name="cwsn"
// //   value={editData.cwsn}
// //   onChange={handleEditChange}
// //   isEditing={isEditing}
// //   highlight={editData.cwsn && editData.cwsn !== "None"}
// //   options={[
// //     "None",
// //     "Locomotor Disability",
// //     "Visual Impairment",
// //     "Hearing Impairment",
// //     "Speech & Language",
// //     "Intellectual Disability",
// //     "Other"
// //   ]}
// // />
// //     {/* <EditableField label="CWSN Status" name="cwsn" value={editData.cwsn} onChange={handleEditChange} isEditing={isEditing} highlight={editData.cwsn && editData.cwsn !== "None"} /> */}
    
// //     <EditableField label="First Language" name="firstLanguage" value={editData.firstLanguage} onChange={handleEditChange} isEditing={isEditing} />
// //     <EditableField label="Second Language" name="secondLanguage" value={editData.secondLanguage} onChange={handleEditChange} isEditing={isEditing} />
// //     <EditableField label="Third Language" name="thirdLanguage" value={editData.thirdLanguage} onChange={handleEditChange} isEditing={isEditing} />
// //   </div>
// // </section>

// //   {/* 2. Family Records */}
// //   <section className="pt-6 border-t border-gray-100">
// //     <div className="flex items-center gap-2 mb-4 text-blue-900 font-black uppercase tracking-tighter text-sm">
// //       <MapPin size={18} /> Family Records
// //     </div>

// //     <div className="space-y-6">
// //       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-gray-50 p-4 rounded-xl">
// //         <EditableField label="Father Name" name="fatherName" value={editData.parentDetails?.fatherName} onChange={handleEditChange} isEditing={isEditing} highlight />
// //         <EditableField label="Father Mobile" name="fatherMobile" value={editData.parentDetails?.fatherMobile} onChange={handleEditChange} isEditing={isEditing} />
// //         <EditableField label="Father Aadhaar" name="fatherAadhaar" value={editData.parentDetails?.fatherAadhaar} onChange={handleEditChange} isEditing={isEditing} />
// //         <EditableField label="Father Qualification" name="fatherQualification" value={editData.parentDetails?.fatherQualification} onChange={handleEditChange} isEditing={isEditing} />
// //         <EditableField label="Father Occupation" name="fatherOccupation" value={editData.parentDetails?.fatherOccupation} onChange={handleEditChange} isEditing={isEditing} />
// //         <EditableField label="Father Income" name="fatherAnnualIncome" value={editData.parentDetails?.fatherAnnualIncome} onChange={handleEditChange} isEditing={isEditing} />
// //       </div>

// //       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-gray-50 p-4 rounded-xl">
// //         <EditableField label="Mother Name" name="motherName" value={editData.parentDetails?.motherName} onChange={handleEditChange} isEditing={isEditing} />
// //         <EditableField label="Mother Mobile" name="motherMobile" value={editData.parentDetails?.motherMobile} onChange={handleEditChange} isEditing={isEditing} />
// //         <EditableField label="Mother Aadhaar" name="motherAadhaar" value={editData.parentDetails?.motherAadhaar} onChange={handleEditChange} isEditing={isEditing} />
// //         <EditableField label="Mother Qualification" name="motherQualification" value={editData.parentDetails?.motherQualification} onChange={handleEditChange} isEditing={isEditing} />
// //         <EditableField label="Mother Occupation" name="motherOccupation" value={editData.parentDetails?.motherOccupation} onChange={handleEditChange} isEditing={isEditing} />
// //         <EditableField label="Mother Income" name="motherAnnualIncome" value={editData.parentDetails?.motherAnnualIncome} onChange={handleEditChange} isEditing={isEditing} />
// //       </div>

// //       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-gray-50 p-4 rounded-xl">
// //         <EditableField label="Guardian Name" name="guardianName" value={editData.parentDetails?.guardianName} onChange={handleEditChange} isEditing={isEditing} />
// //         <EditableField label="Guardian Relation" name="guardianRelation" value={editData.parentDetails?.guardianRelation} onChange={handleEditChange} isEditing={isEditing} />
// //         <EditableField label="Guardian Mobile" name="guardianMobile" value={editData.parentDetails?.guardianMobile} onChange={handleEditChange} isEditing={isEditing} />
// //         <EditableField label="Guardian Aadhaar" name="guardianAadhaar" value={editData.parentDetails?.guardianAadhaar} onChange={handleEditChange} isEditing={isEditing} />
// //         <EditableField label="Guardian Occupation" name="guardianOccupation" value={editData.parentDetails?.guardianOccupation} onChange={handleEditChange} isEditing={isEditing} />
// //         <EditableField label="Guardian Income" name="guardianAnnualIncome" value={editData.parentDetails?.guardianAnnualIncome} onChange={handleEditChange} isEditing={isEditing} />
// //       </div>

// //       <EditableField label="Residence Address" name="residence" value={editData.parentDetails?.residence} onChange={handleEditChange} isEditing={isEditing} highlight />
// //     </div>
// //   </section>

// //   {/* 3. Academic Information */}
// //   <section className="pt-6 border-t border-gray-100">
// //     <div className="flex items-center gap-2 mb-4 text-blue-900 font-black uppercase tracking-tighter text-sm">
// //       <GraduationCap size={18} /> Academic Information
// //     </div>

// //     <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
// //       <EditableField label="Admission No" name="admissionNo" value={editData.admissionInfo?.admissionNo} onChange={handleEditChange} isEditing={isEditing} highlight />
// //       <EditableField label="Class Admitted To" name="classAdmittedTo" value={editData.admissionInfo?.classAdmittedTo} onChange={handleEditChange} isEditing={isEditing} />
// //       <EditableField label="Previous School" name="previousSchoolName" value={editData.admissionInfo?.previousSchoolName} onChange={handleEditChange} isEditing={isEditing} />
// //       <EditableField label="Previous TC Number" name="previousTCNumber" value={editData.admissionInfo?.previousTCNumber} onChange={handleEditChange} isEditing={isEditing} />
// //       <EditableField label="Previous TC Date" name="previousTCDate" type="date" value={editData.admissionInfo?.previousTCDate?.split('T')[0]} onChange={handleEditChange} isEditing={isEditing} />
// //     </div>
// //   </section>
// //   <section className="pt-6 border-t border-gray-100">
// //   <div className="flex items-center gap-2 mb-4 text-blue-900 font-black uppercase tracking-tighter text-sm">
// //     <FileUser size={18} /> Uploaded Documents
// //   </div>

// //   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// //     {[
// //     ["studentAadhaarFile", "Student Aadhaar File"],
// //     ["fatherAadhaarFile", "Father Aadhaar File"],
// //     ["motherAadhaarFile", "Mother Aadhaar File"],
// //     ["guardianAadhaarFile", "Guardian Aadhaar File"],
// //     ["tcFile", "Transfer Certificate"],
// //     ["conductFile", "Conduct Certificate"],
// //     ["marksMemoFile", "Marks Memo"]
// //   ].map(([field, label]) => (
// //     <div key={field} className="flex flex-col space-y-1">
// //       <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
// //         {label}
// //       </p>

// //       {isEditing ? (
// //         <input
// //           type="file"
// //           accept=".pdf,.jpg,.jpeg,.png"
// //           onChange={(e) => handleFileChange(e, field)}
// //           className="px-3 py-2 border border-blue-300 rounded-lg text-sm bg-white"
// //         />
// //       ) : (
// //         <PreviewField
// //   label={label}
// //   value={editData.documents?.[field] ? "Uploaded" : ""}
// //   fileUrl={editData.documents?.[field]}
// //   highlight={field === "studentAadhaarFile" || field === "tcFile"}
// // />
// //       )}
// //     </div>
// //   ))}
// //   </div>
// // </section>

// // </div>

// //             <div className="mt-10 flex gap-4">
// //               {isEditing ? (
// //                 <>
// //                   <button onClick={handleUpdate} disabled={isSaving} className="flex-1 bg-green-600 text-white py-4 rounded-2xl font-bold uppercase tracking-widest hover:bg-green-700 transition-all flex items-center justify-center gap-2">
// //                     {isSaving ? <Loader2 className="animate-spin" /> : <Save size={20} />}
// //                     {isSaving ? "Saving..." : "Save Changes"}
// //                   </button>
// //                   <button   onClick={() => {
// //     setIsEditing(false);
// //     setEditData(JSON.parse(JSON.stringify(selectedStudent)));
// //   }} className="px-8 bg-gray-100 text-gray-500 py-4 rounded-2xl font-bold uppercase tracking-widest hover:bg-gray-200 transition-all flex items-center gap-2">
// //                     <RotateCcw size={20} /> Cancel
// //                   </button>
// //                 </>
// //               ) : (
// //                 <><div className="flex flex-1 gap-3">


// //   <button
// //     onClick={handleGenerateTC}
// //     className={`flex-1 text-white py-4 rounded-2xl font-bold uppercase tracking-widest transition-all ${
// //       selectedStudent?.generatedTC?.isGenerated
// //         ? "bg-green-600 hover:bg-green-700"
// //         : "bg-orange-600 hover:bg-orange-700"
// //     }`}
// //   >
// //     {selectedStudent?.generatedTC?.isGenerated
// //       ? "Preview TC"
// //       : "Generate TC"}
// //   </button>

// //   <button
// //     onClick={() => setIsEditing(true)}
// //     className="flex-1 bg-blue-600 text-white py-4 rounded-2xl font-bold uppercase tracking-widest hover:bg-blue-700 transition-all flex items-center justify-center gap-2"
// //   >
// //     <Edit3 size={20} />
// //     Edit Profile
// //   </button>

// // </div>





// //                   <button onClick={() => setSelectedStudent(null)} className="px-8 bg-blue-900 text-white py-4 rounded-2xl font-bold uppercase tracking-widest hover:bg-black transition-all">
// //                     Close
// //                   </button>
// //                 </>
// //               )}
// //             </div>
// //           </div>
// //         </div>
// //       )}

// // {/* --- COMPACT DUAL-STAT DASHBOARD (H-20) --- */}
// // <div className="max-w-7xl mx-auto mb-8 grid grid-cols-1 md:grid-cols-4 gap-4 px-4">
  
// //   {/* Total Students - Registry Baseline */}
// //   <div   onClick={() => {
// //     setActiveFilter("all");
// //     fetchStudents("");
// //   }} className="bg-white rounded-full px-6 shadow-md border border-blue-50 flex items-center justify-between h-20 transition-all hover:shadow-lg">
// //     <div className="flex flex-col">
// //       <span className="bg-blue-600 text-white px-3 py-1 rounded-full font-black uppercase text-[12px] tracking-widest w-fit mb-1">
// //         Students
// //       </span>
// //       <p className="text-blue-900/40 text-[10px] font-bold uppercase">Total</p>
// //     </div>
// //     <div className="text-right">
// //       <h2 className="text-2xl font-black text-blue-900 leading-none">
// //         {dashboardCounts.totalStudents}
// //       </h2>
// //     </div>
// //   </div>

// //   {/* TC Status - Pending vs Submitted */}
// //   <div onClick={() => handleDashboardFilter("tc")} className="bg-red-50/50 rounded-full pl-6 pr-4 shadow-md border border-red-100 flex items-center justify-between h-20 transition-all hover:shadow-lg">
// //     <div className="flex flex-col min-w-[80px]">
// //       <span className="bg-red-600 text-white px-3 py-1 rounded-full font-black uppercase text-[12px] tracking-widest w-fit mb-1">
// //         TC
// //       </span>
// //       <p className="text-red-900/40 text-[10px] font-bold uppercase tracking-tighter">Status</p>
// //     </div>
// //     <div className="flex items-center space-x-4">
// //       <div className="text-center">
// //         <p className="text-[9px] font-black text-red-500 uppercase">Pending</p>
// //         <h2 className="text-2xl font-black text-red-600 leading-none">{dashboardCounts.tcNotSubmitted}</h2>
// //       </div>
// //       <div className="h-8 w-[1px] bg-red-200"></div>
// //       <div className="text-center">
// //         <p className="text-[9px] font-black text-gray-400 uppercase">Recvd</p>
// //         <h2 className="text-xl font-bold text-gray-500 leading-none">{dashboardCounts.tcSubmitted}</h2>
// //       </div>
// //     </div>
// //   </div>

// //   {/* Conduct Status - Pending vs Submitted */}
// //   <div onClick={() => handleDashboardFilter("conduct")} className="bg-orange-50/50 rounded-full pl-6 pr-4 shadow-md border border-orange-100 flex items-center justify-between h-20 transition-all hover:shadow-lg">
// //     <div className="flex flex-col min-w-[80px]">
// //       <span className="bg-orange-500 text-white px-3 py-1 rounded-full font-black uppercase text-[12px] tracking-widest w-fit mb-1">
// //         Conduct
// //       </span>
// //       <p className="text-orange-900/40 text-[10px] font-bold uppercase tracking-tighter">Status</p>
// //     </div>
// //     <div className="flex items-center space-x-4">
// //       <div className="text-center">
// //         <p className="text-[9px] font-black text-orange-500 uppercase">Pending</p>
// //         <h2 className="text-2xl font-black text-orange-600 leading-none">{dashboardCounts.conductNotSubmitted}</h2>
// //       </div>
// //       <div className="h-8 w-[1px] bg-orange-200"></div>
// //       <div className="text-center">
// //         <p className="text-[9px] font-black text-gray-400 uppercase">Recvd</p>
// //         <h2 className="text-xl font-bold text-gray-500 leading-none">{dashboardCounts.conductSubmitted}</h2>
// //       </div>
// //     </div>
// //   </div>

// //   {/* Marks Status - Pending vs Submitted */}
// //   <div onClick={() => handleDashboardFilter("marksmemo")} className="bg-amber-50/50 rounded-full pl-6 pr-4 shadow-md border border-amber-100 flex items-center justify-between h-20 transition-all hover:shadow-lg">
// //     <div className="flex flex-col min-w-[80px]">
// //       <span className="bg-amber-500 text-white px-3 py-1 rounded-full font-black uppercase text-[12px] tracking-widest w-fit mb-1">
// //         Marks Memo
// //       </span>
// //       <p className="text-amber-900/40 text-[10px] font-bold uppercase tracking-tighter">Status</p>
// //     </div>
// //     <div className="flex items-center space-x-4">
// //       <div className="text-center">
// //         <p className="text-[9px] font-black text-amber-600 uppercase">Pending</p>
// //         <h2 className="text-2xl font-black text-amber-600 leading-none">{dashboardCounts.marksMemoNotSubmitted}</h2>
// //       </div>
// //       <div className="h-8 w-[1px] bg-amber-200"></div>
// //       <div className="text-center">
// //         <p className="text-[9px] font-black text-gray-400 uppercase">Recvd</p>
// //         <h2 className="text-xl font-bold text-gray-500 leading-none">{dashboardCounts.marksMemoSubmitted}</h2>
// //       </div>
// //     </div>
// //   </div>

// // </div>



// //       {/* --- TABLE INTERFACE --- */}
// //       <div className="max-w-6xl mx-auto ">
// //         <div className="bg-white rounded-[2rem] shadow-xl border border-gray-100">
// //           <div className="p-8">
// //             <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
// //               <div>
// //                 <h2 className="text-3xl font-black text-blue-900 tracking-tight">
// //   {activeFilter === "tc"
// //     ? "Showing Pending TC Records"
// //     : activeFilter === "conduct"
// //     ? "Showing Pending Conduct Records"
// //     : activeFilter === "marksmemo"
// //     ? "Showing Pending Marks Memo Records"
// //     : "Student Database"}
// // </h2>
// //                 <p className="text-gray-400 text-sm font-medium italic">Showing {students.length} record(s)</p>
// //               </div>
// //               <div className="flex gap-3 w-full md:w-auto items-center">
// //                 <button
// //   onClick={handleExcelDownload}
// //   className="bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-2xl font-bold uppercase text-xs tracking-widest shadow-md whitespace-nowrap"
// // >
// //   Download Excel
// // </button>
// //                 <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
// //                 <input
// //                   type="text"
// //                   placeholder="Search student by name..."
// //                   className="w-full pl-12 pr-4 py-3 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all text-sm font-medium outline-none"
// //                   value={searchTerm}
// //                   onChange={(e) => setSearchTerm(e.target.value)}
// //                 />
// //               </div>
// //             </div>

// //             <div className="overflow-x-auto">
// //               <table className="w-full border-separate border-spacing-y-2">
// //                 <thead>
// //                   <tr className="text-gray-400 text-left">
// //                     <th className="px-6 py-3 text-[15px] font-black uppercase tracking-widest">Admission No</th>
// //                     <th className="px-6 py-3 text-[15px] font-black uppercase tracking-widest">Student Name</th>
// //                     <th className="px-6 py-3 text-[15px] font-black uppercase tracking-widest">Father's Name</th>
// //                     <th className="px-6 py-3 text-[15px] font-black uppercase tracking-widest">Date of Birth</th>
// //                     <th className="px-6 py-3 text-[15px] font-black uppercase tracking-widest text-right">Action</th>
// //                   </tr>
// //                 </thead>
// //                 <tbody>
// //                   {loading ? (
// //                     <tr>
// //                       <td colSpan="5" className="p-20 text-center">
// //                         <Loader2 className="animate-spin inline text-blue-600" />
// //                         <p className="text-gray-400 mt-2 font-bold uppercase text-xs tracking-widest">Loading Database...</p>
// //                       </td>
// //                     </tr>
// //                   ) : students.length > 0 ? (
// //                     students.map((student) => (
// //                       <tr 
// //                         key={student._id} 
// //                         onClick={() => handleOpenProfile(student)}
// //                         className="group cursor-pointer bg-white hover:bg-blue-50/50 transition-all"
// //                       >
// //                         <td className="px-6 py-4 rounded-l-2xl border-y border-l border-gray-50 group-hover:border-blue-100">
// //                           <span className="bg-gray-100 group-hover:bg-blue-100 text-gray-600 group-hover:text-blue-700 px-3 py-1 rounded-lg text-xs font-bold">
// //                             {student.admissionInfo?.admissionNo || 'N/A'}
// //                           </span>
// //                         </td>
// //                         <td className="px-6 py-4 border-y border-gray-50 group-hover:border-blue-100 font-bold text-blue-900">
// //                           {student.name}
// //                         </td>
// //                         <td className="px-6 py-4 border-y border-gray-50 group-hover:border-blue-100 text-gray-500 font-medium">
// //                           {student.parentDetails?.fatherName || 'N/A'}
// //                         </td>
// //                         <td className="px-6 py-4 border-y border-gray-50 group-hover:border-blue-100 text-gray-400 font-medium">
// //                           {student.dob ? new Date(student.dob).toLocaleDateString('en-GB') : 'N/A'}
// //                         </td>
// //                         <td className="px-6 py-4 rounded-r-2xl border-y border-r border-gray-50 group-hover:border-blue-100 text-right">
// //                           <button className="text-[10px] font-black uppercase text-blue-600 bg-blue-50 px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-all">
// //                             View Details
// //                           </button>
// //                         </td>
// //                       </tr>
// //                     ))
// //                   ) : (
// //                     <tr>
// //                       <td colSpan="5" className="p-20 text-center text-gray-400 italic">
// //                         No students found.
// //                       </td>
// //                     </tr>
// //                   )}
// //                 </tbody>
// //               </table>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // const Loader2 = ({ className }) => (
// //   <svg className={`animate-spin ${className}`} width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
// //     <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
// //   </svg>
// // );

// // export default StudentTable;

















// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';
// // import { Search, FileUser, X, GraduationCap, MapPin, UserCircle, Edit3, Save, RotateCcw } from 'lucide-react';
// // import TransferCertificate from './TransferCertificate';



// // /**
// //  * REUSABLE EDITABLE FIELD COMPONENT 
// //  */
// // const EditableField = ({ 
// //   label, 
// //   name, 
// //   value, 
// //   onChange, 
// //   isEditing, 
// //   highlight = false, 
// //   type = "text",
// //   options = null
// // }) => (
// //   <div className="flex flex-col space-y-1">
// //     <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">
// //       {label}
// //     </p>

// //     {isEditing ? (
// //       options ? (
// //         <select
// //           name={name}
// //           value={value || ""}
// //           onChange={onChange}
// //           className="px-3 py-2 border border-blue-400 rounded-lg text-sm bg-white focus:ring-2 focus:ring-blue-500 outline-none transition-all font-medium text-blue-900"
// //         >
// //           <option value="">Select</option>
// //           {options.map((option) => (
// //             <option key={option} value={option}>
// //               {option}
// //             </option>
// //           ))}
// //         </select>
// //       ) : (
// //         <input
// //           type={type}
// //           name={name}
// //           value={value || ""}
// //           onChange={onChange}
// //           className="px-3 py-2 border border-blue-400 rounded-lg text-sm bg-white focus:ring-2 focus:ring-blue-500 outline-none transition-all font-medium text-blue-900"
// //         />
// //       )
// //     ) : (
// //       <div
// //         className={`px-3 py-2 border rounded-lg text-sm transition-all ${
// //           highlight
// //             ? "bg-blue-50 border-blue-200 text-blue-900 font-bold"
// //             : "bg-gray-50 border-gray-200 text-gray-800 font-medium"
// //         }`}
// //       >
// //         {value || <span className="text-gray-300 italic">Not Recorded</span>}
// //       </div>
// //     )}
// //   </div>
// // );
// // const PreviewField = ({ 
// //   label, 
// //   value, 
// //   highlight = false, 
// //   fileUrl = null 
// // }) => (
// //   <div className="flex flex-col space-y-1">
// //     <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
// //       {label}
// //     </p>

// //     <div
// //       className={`px-3 py-2 border rounded-lg text-sm transition-all ${
// //         highlight
// //           ? "bg-blue-50 border-blue-200 text-blue-900 font-bold"
// //           : "bg-gray-50 border-gray-200 text-gray-800 font-medium"
// //       }`}
// //     >
// //       {value ? (
// //         <div className="flex items-center justify-between gap-2">
// //           <span className="truncate">{value}</span>

// //           {fileUrl && (
// //             <a
// //               href={fileUrl}
// //               target="_blank"
// //               rel="noopener noreferrer"
// //               className="text-xs bg-blue-600 text-white px-2 py-1 rounded hover:bg-black"
// //             >
// //               View
// //             </a>
// //           )}
// //         </div>
// //       ) : (
// //         <span className="text-gray-300 italic">Not Recorded</span>
// //       )}
// //     </div>
// //   </div>
// // );
// // const StudentTable = () => {
// //   const [students, setStudents] = useState([]);
// //   const [viewingTC, setViewingTC] = useState(false);
// //   const [searchTerm, setSearchTerm] = useState("");
// //   const [loading, setLoading] = useState(true);
  
// //   const [selectedStudent, setSelectedStudent] = useState(null); 
// //   const [isEditing, setIsEditing] = useState(false);
// //   const [editData, setEditData] = useState(null);
// //   const [isSaving, setIsSaving] = useState(false);
// //   const [dashboardCounts, setDashboardCounts] = useState({
// //   totalStudents: 0,
// //   tcSubmitted: 0,
// //   tcNotSubmitted: 0,
// //   conductSubmitted: 0,
// //   conductNotSubmitted: 0,
// //   marksMemoSubmitted: 0,
// //   marksMemoNotSubmitted: 0
// // });
// // const [activeFilter, setActiveFilter] = useState("all");


// // const fetchDashboardCounts = async () => {
// //   try {
// //     const response = await axios.get(
// //       "http://localhost:5000/api/students/dashboard-counts"
// //     );

// //     setDashboardCounts(response.data);

// //   } catch (error) {
// //     console.error("Dashboard fetch error:", error);
// //   }
// // };

// //   // FETCH FUNCTION
// //   const fetchStudents = async (query = "", pendingType = "") => {
// //   setLoading(true);

// //   try {
// //     let url = `http://localhost:5000/api/students/search?name=${query}`;

// //     if (pendingType) {
// //       url += `&pending=${pendingType}`;
// //     }

// //     const response = await axios.get(url);

// //     setStudents(response.data);

// //   } catch (error) {
// //     console.error("Error fetching students:", error);

// //   } finally {
// //     setLoading(false);
// //   }
// // };

// //   // DEBOUNCED SEARCH & INITIAL LOAD
// //   useEffect(() => {
// //     fetchDashboardCounts();
// //     const delayDebounceFn = setTimeout(() => {
// //       fetchStudents(searchTerm);
// //     }, 400); // Slightly longer debounce for smoother UX

// //     return () => clearTimeout(delayDebounceFn);
// //   }, [searchTerm]);

// // const handleOpenProfile = async (student) => {
// //   try {
// //     // Fetch latest student record from DB
// //     const response = await axios.get(
// //       `http://localhost:5000/api/students/${student._id}`
// //     );

// //     const freshStudent = JSON.parse(
// //       JSON.stringify(response.data)
// //     );

// //     // ALWAYS OPEN MODAL FIRST
// //     setSelectedStudent(freshStudent);

// //     setEditData(
// //       JSON.parse(JSON.stringify(freshStudent))
// //     );

// //     setIsEditing(false);

// //     // IMPORTANT
// //     // DO NOT AUTO OPEN TC
// //     setViewingTC(false);

// //   } catch (error) {
// //     console.error("Profile open error:", error);

// //     const fallbackStudent = JSON.parse(
// //       JSON.stringify(student)
// //     );

// //     setSelectedStudent(fallbackStudent);

// //     setEditData(
// //       JSON.parse(JSON.stringify(fallbackStudent))
// //     );

// //     setIsEditing(false);

// //     // IMPORTANT
// //     setViewingTC(false);
// //   }
// // };

// // const handleDashboardFilter = (type) => {
// //   setActiveFilter(type);
// //   fetchStudents("", type);
// // };

// // const handleFileChange = async (e, fieldName) => {
// //   const file = e.target.files[0];
// //   if (!file) return;

// //   const formData = new FormData();
// //   formData.append("file", file);

// //   try {
// //     const response = await axios.post(
// //   `http://localhost:5000/api/students/upload/${editData._id}/${fieldName}`,
// //   formData
// // );

// // const updatedStudent = response.data.updatedStudent;

// // // Update edit form instantly
// // setEditData(JSON.parse(JSON.stringify(updatedStudent)));

// // // Update modal preview instantly
// // setSelectedStudent(JSON.parse(JSON.stringify(updatedStudent)));

// // // Update table instantly
// // setStudents(prev =>
// //   prev.map(student =>
// //     student._id === updatedStudent._id ? updatedStudent : student
// //   )
// // );
// // fetchDashboardCounts();
// //     alert("File uploaded successfully!");

// //   } catch (error) {
// //     console.error("UPLOAD ERROR:", error.response?.data || error.message);

// //     alert(
// //       error.response?.data?.error || "File upload failed"
// //     );
// //   }
// // };



// //   const handleEditChange = (e) => {
// //   const { name, value } = e.target;

// //   // Parent Details
// //   if (
// //     [
// //       "fatherName", "fatherMobile", "fatherAadhaar", "fatherQualification", "fatherOccupation", "fatherAnnualIncome",
// //       "motherName", "motherMobile", "motherAadhaar", "motherQualification", "motherOccupation", "motherAnnualIncome",
// //       "guardianName", "guardianRelation", "guardianMobile", "guardianAadhaar", "guardianOccupation", "guardianAnnualIncome",
// //       "residence"
// //     ].includes(name)
// //   ) {
// //     setEditData(prev => ({
// //       ...prev,
// //       parentDetails: {
// //         ...prev.parentDetails,
// //         [name]: value
// //       }
// //     }));
// //     return;
// //   }

// //   // Admission Info
// //   if (
// //     [
// //       "admissionNo",
// //       "classAdmittedTo",
// //       "previousSchoolName",
// //       "previousTCNumber",
// //       "previousTCDate"
// //     ].includes(name)
// //   ) {
// //     setEditData(prev => ({
// //       ...prev,
// //       admissionInfo: {
// //         ...prev.admissionInfo,
// //         [name]: value
// //       }
// //     }));
// //     return;
// //   }

// //   // Main Student Fields
// //   setEditData(prev => ({
// //     ...prev,
// //     [name]: value
// //   }));
// // };

// //   const handleUpdate = async () => {
// //   setIsSaving(true);

// //   try {
// //   const payload = {
// //   ...editData,
// //   generatedTC: {
// //     ...selectedStudent.generatedTC,
// //     ...editData.generatedTC
// //   }
// // };

// // const response = await axios.put(
// //   `http://localhost:5000/api/students/${editData._id}`,
// //   payload
// // );

// //     const updatedStudent = response.data.updatedStudent;

// //     // UPDATE TABLE
// //     setStudents(prev =>
// //       prev.map(student =>
// //         student._id === updatedStudent._id ? updatedStudent : student
// //       )
// //     );

// //     // UPDATE MODAL
// //     setSelectedStudent(updatedStudent);

// //     // UPDATE EDIT FORM
// //     setEditData(JSON.parse(JSON.stringify(updatedStudent)));

// //     // OPTIONAL REFRESH
// //     await fetchStudents(searchTerm);

// //     setIsEditing(false);

// //     alert("Student record updated successfully!");

// //   } catch (error) {
// //     console.error("Update failed:", error.response?.data || error.message);
// //     alert("Failed to update record.");
// //   } finally {
// //     setIsSaving(false);
// //   }
// // };


// // const handleExcelDownload = async () => {
// //   try {
// //     const response = await axios.get(
// //       `http://localhost:5000/api/students/export-excel?pending=${activeFilter}`,
// //       {
// //         responseType: "blob"
// //       }
// //     );

// //     const blob = new Blob([response.data], {
// //       type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
// //     });

// //     const url = window.URL.createObjectURL(blob);

// //     const link = document.createElement("a");
// //     link.href = url;

// //     link.download =
// //       activeFilter === "all"
// //         ? "all_students.xlsx"
// //         : `pending_${activeFilter}_students.xlsx`;

// //     document.body.appendChild(link);
// //     link.click();
// //     link.remove();

// //     window.URL.revokeObjectURL(url);

// //   } catch (error) {
// //     console.error("Excel download failed:", error);
// //     alert("Failed to download Excel.");
// //   }
// // };


// // // 3. Update the Return Statement (Conditional Rendering)
// // // 3. Update the Return Statement (Conditional Rendering)
// // if (viewingTC) {
// //   return (
// //  <TransferCertificate
// //   data={selectedStudent}
// //   isEditable={true}
// //   onBack={async () => {
// //         // Close TC screen
// //         setViewingTC(false);

// //         // Clear selected student
// //         setSelectedStudent(null);

// //         // Refresh active students table
// //         await fetchStudents(searchTerm);

// //         // Refresh dashboard counts
// //         await fetchDashboardCounts();
// //       }}
// //     />
// //   );
// // }








// // const handleGenerateTC = async () => {
// //   try {
// //     // 1. FIRST generate TC template in backend
// //     await axios.put(
// //       `http://localhost:5000/api/students/generate-tc/${selectedStudent._id}`,
// //       {
// //         tcNumber: selectedStudent.admissionInfo?.admissionNo || ""
// //       }
// //     );

// //     // 2. THEN fetch updated student (with generatedTC filled)
// //     const response = await axios.get(
// //       `http://localhost:5000/api/students/${selectedStudent._id}`
// //     );

// //     setSelectedStudent(response.data);
// //     setViewingTC(true);

// //   } catch (error) {
// //     console.error("TC Open Error:", error);
// //     alert("Failed to open TC");
// //   }
// // };










// // // const handleGenerateTC = async () => {
// // //   try {
// // //     // IF TC ALREADY SAVED, OPEN DIRECTLY IN PREVIEW
// // //     // IF TC ALREADY FINALIZED, OPEN PREVIEW DIRECTLY
// // // if (selectedStudent?.generatedTC?.isGenerated) {
// // //   setViewingTC(true);
// // //   return;
// // // }

// // //     // OTHERWISE CREATE NEW TC
    

// // //     const updatedStudent = response.data.updatedStudent;

// // //   setSelectedStudent(JSON.parse(JSON.stringify(updatedStudent)));
// // // setEditData(JSON.parse(JSON.stringify(updatedStudent)));

// // // // UPDATE TABLE INSTANTLY
// // // setStudents(prev =>
// // //   prev.map(student =>
// // //     student._id === updatedStudent._id ? updatedStudent : student
// // //   )
// // // );

// // // // REFRESH DASHBOARD
// // // fetchDashboardCounts();

// // //     // OPEN TC PAGE
// // //     setViewingTC(true);

// // //   } catch (error) {
// // //     console.error("TC Generate Error:", error);
// // //     alert("Failed to generate TC");
// // //   }
// // // };
// //   return (
// //     <div className="p-4 lg:p-8 bg-slate-50 min-h-screen font-sans text-left">
      
// //       {/* --- MODAL --- */}
// //       {selectedStudent && (
// //         <div className="fixed inset-0 bg-blue-900/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
// //           <div className="bg-white rounded-[2rem] shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-10 border border-white">
            
// //             <header className="mb-8 border-b-2 border-blue-100 pb-6 flex justify-between items-start">
// //               <div className="flex gap-4 items-center">
// //                 <div className={`p-4 rounded-2xl text-white shadow-lg transition-colors ${isEditing ? 'bg-orange-500' : 'bg-blue-600'}`}>
// //                    {isEditing ? <Edit3 size={32} /> : <FileUser size={32} />}
// //                 </div>
// //                 <div>
// //                   <h2 className="text-3xl font-black text-blue-900 leading-tight">
// //                     {isEditing ? "Edit Record" : selectedStudent.name}
// //                   </h2>
// //                   <p className="text-blue-500 text-xs font-black uppercase tracking-widest">
// //                     {isEditing ? "Modify necessary information below" : `Admission No: ${selectedStudent.admissionInfo?.admissionNo || 'N/A'}`}
// //                   </p>
// //                 </div>
// //               </div>
// //               <button onClick={() => setSelectedStudent(null)} className="p-2 hover:bg-red-50 text-gray-400 hover:text-red-500 rounded-full">
// //                 <X size={28} />
// //               </button>
// //             </header>

// //             <div className="space-y-10">

// //   {/* 1. Personal Identity */}
// //   {/* 1. Personal Identity */}
// // <section>
// //   <div className="flex items-center gap-2 mb-4 text-blue-900 font-black uppercase tracking-tighter text-sm">
// //     <UserCircle size={18} /> Personal Identity
// //   </div>

// //   <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
// //     <EditableField label="Full Name" name="name" value={editData.name} onChange={handleEditChange} isEditing={isEditing} highlight />
// //     <EditableField label="Aadhaar No" name="aadhaarNo" value={editData.aadhaarNo} onChange={handleEditChange} isEditing={isEditing} />
// //     <EditableField label="Date of Birth" name="dob" type="date" value={editData.dob?.split('T')[0]} onChange={handleEditChange} isEditing={isEditing} />
// //     <EditableField
// //   label="Gender"
// //   name="gender"
// //   value={editData.gender}
// //   onChange={handleEditChange}
// //   isEditing={isEditing}
// //   options={["Male", "Female", "Other"]}
// // />
// //     {/* <EditableField label="Gender" name="gender" value={editData.gender} onChange={handleEditChange} isEditing={isEditing} /> */}
    
// //     <EditableField label="Nationality" name="nationality" value={editData.nationality} onChange={handleEditChange} isEditing={isEditing} />
// //     <EditableField label="Religion" name="religion" value={editData.religion} onChange={handleEditChange} isEditing={isEditing} />
// //     <EditableField label="Caste" name="caste" value={editData.caste} onChange={handleEditChange} isEditing={isEditing} />
// //     <EditableField label="Mother Tongue" name="motherTongue" value={editData.motherTongue} onChange={handleEditChange} isEditing={isEditing} />
// //     <EditableField label="State" name="state" value={editData.state} onChange={handleEditChange} isEditing={isEditing} />

// //     {/* NEW FIELDS FROM ADMISSION FORM */}
// //     <EditableField label="UDISE + Number" name="udisePlus" value={editData.udisePlus} onChange={handleEditChange} isEditing={isEditing} />
// //     <EditableField label="Siblings Info" name="siblings" value={editData.siblings} onChange={handleEditChange} isEditing={isEditing} />
// //     <EditableField
// //   label="CWSN Status"
// //   name="cwsn"
// //   value={editData.cwsn}
// //   onChange={handleEditChange}
// //   isEditing={isEditing}
// //   highlight={editData.cwsn && editData.cwsn !== "None"}
// //   options={[
// //     "None",
// //     "Locomotor Disability",
// //     "Visual Impairment",
// //     "Hearing Impairment",
// //     "Speech & Language",
// //     "Intellectual Disability",
// //     "Other"
// //   ]}
// // />
// //     {/* <EditableField label="CWSN Status" name="cwsn" value={editData.cwsn} onChange={handleEditChange} isEditing={isEditing} highlight={editData.cwsn && editData.cwsn !== "None"} /> */}
    
// //     <EditableField label="First Language" name="firstLanguage" value={editData.firstLanguage} onChange={handleEditChange} isEditing={isEditing} />
// //     <EditableField label="Second Language" name="secondLanguage" value={editData.secondLanguage} onChange={handleEditChange} isEditing={isEditing} />
// //     <EditableField label="Third Language" name="thirdLanguage" value={editData.thirdLanguage} onChange={handleEditChange} isEditing={isEditing} />
// //   </div>
// // </section>

// //   {/* 2. Family Records */}
// //   <section className="pt-6 border-t border-gray-100">
// //     <div className="flex items-center gap-2 mb-4 text-blue-900 font-black uppercase tracking-tighter text-sm">
// //       <MapPin size={18} /> Family Records
// //     </div>

// //     <div className="space-y-6">
// //       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-gray-50 p-4 rounded-xl">
// //         <EditableField label="Father Name" name="fatherName" value={editData.parentDetails?.fatherName} onChange={handleEditChange} isEditing={isEditing} highlight />
// //         <EditableField label="Father Mobile" name="fatherMobile" value={editData.parentDetails?.fatherMobile} onChange={handleEditChange} isEditing={isEditing} />
// //         <EditableField label="Father Aadhaar" name="fatherAadhaar" value={editData.parentDetails?.fatherAadhaar} onChange={handleEditChange} isEditing={isEditing} />
// //         <EditableField label="Father Qualification" name="fatherQualification" value={editData.parentDetails?.fatherQualification} onChange={handleEditChange} isEditing={isEditing} />
// //         <EditableField label="Father Occupation" name="fatherOccupation" value={editData.parentDetails?.fatherOccupation} onChange={handleEditChange} isEditing={isEditing} />
// //         <EditableField label="Father Income" name="fatherAnnualIncome" value={editData.parentDetails?.fatherAnnualIncome} onChange={handleEditChange} isEditing={isEditing} />
// //       </div>

// //       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-gray-50 p-4 rounded-xl">
// //         <EditableField label="Mother Name" name="motherName" value={editData.parentDetails?.motherName} onChange={handleEditChange} isEditing={isEditing} />
// //         <EditableField label="Mother Mobile" name="motherMobile" value={editData.parentDetails?.motherMobile} onChange={handleEditChange} isEditing={isEditing} />
// //         <EditableField label="Mother Aadhaar" name="motherAadhaar" value={editData.parentDetails?.motherAadhaar} onChange={handleEditChange} isEditing={isEditing} />
// //         <EditableField label="Mother Qualification" name="motherQualification" value={editData.parentDetails?.motherQualification} onChange={handleEditChange} isEditing={isEditing} />
// //         <EditableField label="Mother Occupation" name="motherOccupation" value={editData.parentDetails?.motherOccupation} onChange={handleEditChange} isEditing={isEditing} />
// //         <EditableField label="Mother Income" name="motherAnnualIncome" value={editData.parentDetails?.motherAnnualIncome} onChange={handleEditChange} isEditing={isEditing} />
// //       </div>

// //       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-gray-50 p-4 rounded-xl">
// //         <EditableField label="Guardian Name" name="guardianName" value={editData.parentDetails?.guardianName} onChange={handleEditChange} isEditing={isEditing} />
// //         <EditableField label="Guardian Relation" name="guardianRelation" value={editData.parentDetails?.guardianRelation} onChange={handleEditChange} isEditing={isEditing} />
// //         <EditableField label="Guardian Mobile" name="guardianMobile" value={editData.parentDetails?.guardianMobile} onChange={handleEditChange} isEditing={isEditing} />
// //         <EditableField label="Guardian Aadhaar" name="guardianAadhaar" value={editData.parentDetails?.guardianAadhaar} onChange={handleEditChange} isEditing={isEditing} />
// //         <EditableField label="Guardian Occupation" name="guardianOccupation" value={editData.parentDetails?.guardianOccupation} onChange={handleEditChange} isEditing={isEditing} />
// //         <EditableField label="Guardian Income" name="guardianAnnualIncome" value={editData.parentDetails?.guardianAnnualIncome} onChange={handleEditChange} isEditing={isEditing} />
// //       </div>

// //       <EditableField label="Residence Address" name="residence" value={editData.parentDetails?.residence} onChange={handleEditChange} isEditing={isEditing} highlight />
// //     </div>
// //   </section>

// //   {/* 3. Academic Information */}
// //   <section className="pt-6 border-t border-gray-100">
// //     <div className="flex items-center gap-2 mb-4 text-blue-900 font-black uppercase tracking-tighter text-sm">
// //       <GraduationCap size={18} /> Academic Information
// //     </div>

// //     <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
// //       <EditableField label="Admission No" name="admissionNo" value={editData.admissionInfo?.admissionNo} onChange={handleEditChange} isEditing={isEditing} highlight />
// //       <EditableField label="Class Admitted To" name="classAdmittedTo" value={editData.admissionInfo?.classAdmittedTo} onChange={handleEditChange} isEditing={isEditing} />
// //       <EditableField label="Previous School" name="previousSchoolName" value={editData.admissionInfo?.previousSchoolName} onChange={handleEditChange} isEditing={isEditing} />
// //       <EditableField label="Previous TC Number" name="previousTCNumber" value={editData.admissionInfo?.previousTCNumber} onChange={handleEditChange} isEditing={isEditing} />
// //       <EditableField label="Previous TC Date" name="previousTCDate" type="date" value={editData.admissionInfo?.previousTCDate?.split('T')[0]} onChange={handleEditChange} isEditing={isEditing} />
// //     </div>
// //   </section>
// //   <section className="pt-6 border-t border-gray-100">
// //   <div className="flex items-center gap-2 mb-4 text-blue-900 font-black uppercase tracking-tighter text-sm">
// //     <FileUser size={18} /> Uploaded Documents
// //   </div>

// //   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// //     {[
// //     ["studentAadhaarFile", "Student Aadhaar File"],
// //     ["fatherAadhaarFile", "Father Aadhaar File"],
// //     ["motherAadhaarFile", "Mother Aadhaar File"],
// //     ["guardianAadhaarFile", "Guardian Aadhaar File"],
// //     ["tcFile", "Transfer Certificate"],
// //     ["conductFile", "Conduct Certificate"],
// //     ["marksMemoFile", "Marks Memo"]
// //   ].map(([field, label]) => (
// //     <div key={field} className="flex flex-col space-y-1">
// //       <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
// //         {label}
// //       </p>

// //       {isEditing ? (
// //         <input
// //           type="file"
// //           accept=".pdf,.jpg,.jpeg,.png"
// //           onChange={(e) => handleFileChange(e, field)}
// //           className="px-3 py-2 border border-blue-300 rounded-lg text-sm bg-white"
// //         />
// //       ) : (
// //         <PreviewField
// //   label={label}
// //   value={editData.documents?.[field] ? "Uploaded" : ""}
// //   fileUrl={editData.documents?.[field]}
// //   highlight={field === "studentAadhaarFile" || field === "tcFile"}
// // />
// //       )}
// //     </div>
// //   ))}
// //   </div>
// // </section>

// // </div>

// //             <div className="mt-10 flex gap-4">
// //               {isEditing ? (
// //                 <>
// //                   <button onClick={handleUpdate} disabled={isSaving} className="flex-1 bg-green-600 text-white py-4 rounded-2xl font-bold uppercase tracking-widest hover:bg-green-700 transition-all flex items-center justify-center gap-2">
// //                     {isSaving ? <Loader2 className="animate-spin" /> : <Save size={20} />}
// //                     {isSaving ? "Saving..." : "Save Changes"}
// //                   </button>
// //                   <button   onClick={() => {
// //     setIsEditing(false);
// //     setEditData(JSON.parse(JSON.stringify(selectedStudent)));
// //   }} className="px-8 bg-gray-100 text-gray-500 py-4 rounded-2xl font-bold uppercase tracking-widest hover:bg-gray-200 transition-all flex items-center gap-2">
// //                     <RotateCcw size={20} /> Cancel
// //                   </button>
// //                 </>
// //               ) : (
// //                 <><div className="flex flex-1 gap-3">


// //   <button
// //     onClick={handleGenerateTC}
// //     className={`flex-1 text-white py-4 rounded-2xl font-bold uppercase tracking-widest transition-all ${
// //       selectedStudent?.generatedTC?.isGenerated
// //         ? "bg-green-600 hover:bg-green-700"
// //         : "bg-orange-600 hover:bg-orange-700"
// //     }`}
// //   >
// //     {selectedStudent?.generatedTC?.isGenerated
// //       ? "Preview TC"
// //       : "Generate TC"}
// //   </button>

// //   <button
// //     onClick={() => setIsEditing(true)}
// //     className="flex-1 bg-blue-600 text-white py-4 rounded-2xl font-bold uppercase tracking-widest hover:bg-blue-700 transition-all flex items-center justify-center gap-2"
// //   >
// //     <Edit3 size={20} />
// //     Edit Profile
// //   </button>

// // </div>





// //                   <button onClick={() => setSelectedStudent(null)} className="px-8 bg-blue-900 text-white py-4 rounded-2xl font-bold uppercase tracking-widest hover:bg-black transition-all">
// //                     Close
// //                   </button>
// //                 </>
// //               )}
// //             </div>
// //           </div>
// //         </div>
// //       )}

// // {/* --- COMPACT DUAL-STAT DASHBOARD (H-20) --- */}
// // <div className="max-w-7xl mx-auto mb-8 grid grid-cols-1 md:grid-cols-4 gap-4 px-4">
  
// //   {/* Total Students - Registry Baseline */}
// //   <div   onClick={() => {
// //     setActiveFilter("all");
// //     fetchStudents("");
// //   }} className="bg-white rounded-full px-6 shadow-md border border-blue-50 flex items-center justify-between h-20 transition-all hover:shadow-lg">
// //     <div className="flex flex-col">
// //       <span className="bg-blue-600 text-white px-3 py-1 rounded-full font-black uppercase text-[12px] tracking-widest w-fit mb-1">
// //         Students
// //       </span>
// //       <p className="text-blue-900/40 text-[10px] font-bold uppercase">Total</p>
// //     </div>
// //     <div className="text-right">
// //       <h2 className="text-2xl font-black text-blue-900 leading-none">
// //         {dashboardCounts.totalStudents}
// //       </h2>
// //     </div>
// //   </div>

// //   {/* TC Status - Pending vs Submitted */}
// //   <div onClick={() => handleDashboardFilter("tc")} className="bg-red-50/50 rounded-full pl-6 pr-4 shadow-md border border-red-100 flex items-center justify-between h-20 transition-all hover:shadow-lg">
// //     <div className="flex flex-col min-w-[80px]">
// //       <span className="bg-red-600 text-white px-3 py-1 rounded-full font-black uppercase text-[12px] tracking-widest w-fit mb-1">
// //         TC
// //       </span>
// //       <p className="text-red-900/40 text-[10px] font-bold uppercase tracking-tighter">Status</p>
// //     </div>
// //     <div className="flex items-center space-x-4">
// //       <div className="text-center">
// //         <p className="text-[9px] font-black text-red-500 uppercase">Pending</p>
// //         <h2 className="text-2xl font-black text-red-600 leading-none">{dashboardCounts.tcNotSubmitted}</h2>
// //       </div>
// //       <div className="h-8 w-[1px] bg-red-200"></div>
// //       <div className="text-center">
// //         <p className="text-[9px] font-black text-gray-400 uppercase">Recvd</p>
// //         <h2 className="text-xl font-bold text-gray-500 leading-none">{dashboardCounts.tcSubmitted}</h2>
// //       </div>
// //     </div>
// //   </div>

// //   {/* Conduct Status - Pending vs Submitted */}
// //   <div onClick={() => handleDashboardFilter("conduct")} className="bg-orange-50/50 rounded-full pl-6 pr-4 shadow-md border border-orange-100 flex items-center justify-between h-20 transition-all hover:shadow-lg">
// //     <div className="flex flex-col min-w-[80px]">
// //       <span className="bg-orange-500 text-white px-3 py-1 rounded-full font-black uppercase text-[12px] tracking-widest w-fit mb-1">
// //         Conduct
// //       </span>
// //       <p className="text-orange-900/40 text-[10px] font-bold uppercase tracking-tighter">Status</p>
// //     </div>
// //     <div className="flex items-center space-x-4">
// //       <div className="text-center">
// //         <p className="text-[9px] font-black text-orange-500 uppercase">Pending</p>
// //         <h2 className="text-2xl font-black text-orange-600 leading-none">{dashboardCounts.conductNotSubmitted}</h2>
// //       </div>
// //       <div className="h-8 w-[1px] bg-orange-200"></div>
// //       <div className="text-center">
// //         <p className="text-[9px] font-black text-gray-400 uppercase">Recvd</p>
// //         <h2 className="text-xl font-bold text-gray-500 leading-none">{dashboardCounts.conductSubmitted}</h2>
// //       </div>
// //     </div>
// //   </div>

// //   {/* Marks Status - Pending vs Submitted */}
// //   <div onClick={() => handleDashboardFilter("marksmemo")} className="bg-amber-50/50 rounded-full pl-6 pr-4 shadow-md border border-amber-100 flex items-center justify-between h-20 transition-all hover:shadow-lg">
// //     <div className="flex flex-col min-w-[80px]">
// //       <span className="bg-amber-500 text-white px-3 py-1 rounded-full font-black uppercase text-[12px] tracking-widest w-fit mb-1">
// //         Marks Memo
// //       </span>
// //       <p className="text-amber-900/40 text-[10px] font-bold uppercase tracking-tighter">Status</p>
// //     </div>
// //     <div className="flex items-center space-x-4">
// //       <div className="text-center">
// //         <p className="text-[9px] font-black text-amber-600 uppercase">Pending</p>
// //         <h2 className="text-2xl font-black text-amber-600 leading-none">{dashboardCounts.marksMemoNotSubmitted}</h2>
// //       </div>
// //       <div className="h-8 w-[1px] bg-amber-200"></div>
// //       <div className="text-center">
// //         <p className="text-[9px] font-black text-gray-400 uppercase">Recvd</p>
// //         <h2 className="text-xl font-bold text-gray-500 leading-none">{dashboardCounts.marksMemoSubmitted}</h2>
// //       </div>
// //     </div>
// //   </div>

// // </div>



// //       {/* --- TABLE INTERFACE --- */}
// //       <div className="max-w-6xl mx-auto ">
// //         <div className="bg-white rounded-[2rem] shadow-xl border border-gray-100">
// //           <div className="p-8">
// //             <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
// //               <div>
// //                 <h2 className="text-3xl font-black text-blue-900 tracking-tight">
// //   {activeFilter === "tc"
// //     ? "Showing Pending TC Records"
// //     : activeFilter === "conduct"
// //     ? "Showing Pending Conduct Records"
// //     : activeFilter === "marksmemo"
// //     ? "Showing Pending Marks Memo Records"
// //     : "Student Database"}
// // </h2>
// //                 <p className="text-gray-400 text-sm font-medium italic">Showing {students.length} record(s)</p>
// //               </div>
// //               <div className="flex gap-3 w-full md:w-auto items-center">
// //                 <button
// //   onClick={handleExcelDownload}
// //   className="bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-2xl font-bold uppercase text-xs tracking-widest shadow-md whitespace-nowrap"
// // >
// //   Download Excel
// // </button>
// //                 <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
// //                 <input
// //                   type="text"
// //                   placeholder="Search student by name..."
// //                   className="w-full pl-12 pr-4 py-3 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all text-sm font-medium outline-none"
// //                   value={searchTerm}
// //                   onChange={(e) => setSearchTerm(e.target.value)}
// //                 />
// //               </div>
// //             </div>

// //             <div className="overflow-x-auto">
// //               <table className="w-full border-separate border-spacing-y-2">
// //                 <thead>
// //                   <tr className="text-gray-400 text-left">
// //                     <th className="px-6 py-3 text-[15px] font-black uppercase tracking-widest">Admission No</th>
// //                     <th className="px-6 py-3 text-[15px] font-black uppercase tracking-widest">Student Name</th>
// //                     <th className="px-6 py-3 text-[15px] font-black uppercase tracking-widest">Father's Name</th>
// //                     <th className="px-6 py-3 text-[15px] font-black uppercase tracking-widest">Date of Birth</th>
// //                     <th className="px-6 py-3 text-[15px] font-black uppercase tracking-widest text-right">Action</th>
// //                   </tr>
// //                 </thead>
// //                 <tbody>
// //                   {loading ? (
// //                     <tr>
// //                       <td colSpan="5" className="p-20 text-center">
// //                         <Loader2 className="animate-spin inline text-blue-600" />
// //                         <p className="text-gray-400 mt-2 font-bold uppercase text-xs tracking-widest">Loading Database...</p>
// //                       </td>
// //                     </tr>
// //                   ) : students.length > 0 ? (
// //                     students.map((student) => (
// //                       <tr 
// //                         key={student._id} 
// //                         onClick={() => handleOpenProfile(student)}
// //                         className="group cursor-pointer bg-white hover:bg-blue-50/50 transition-all"
// //                       >
// //                         <td className="px-6 py-4 rounded-l-2xl border-y border-l border-gray-50 group-hover:border-blue-100">
// //                           <span className="bg-gray-100 group-hover:bg-blue-100 text-gray-600 group-hover:text-blue-700 px-3 py-1 rounded-lg text-xs font-bold">
// //                             {student.admissionInfo?.admissionNo || 'N/A'}
// //                           </span>
// //                         </td>
// //                         <td className="px-6 py-4 border-y border-gray-50 group-hover:border-blue-100 font-bold text-blue-900">
// //                           {student.name}
// //                         </td>
// //                         <td className="px-6 py-4 border-y border-gray-50 group-hover:border-blue-100 text-gray-500 font-medium">
// //                           {student.parentDetails?.fatherName || 'N/A'}
// //                         </td>
// //                         <td className="px-6 py-4 border-y border-gray-50 group-hover:border-blue-100 text-gray-400 font-medium">
// //                           {student.dob ? new Date(student.dob).toLocaleDateString('en-GB') : 'N/A'}
// //                         </td>
// //                         <td className="px-6 py-4 rounded-r-2xl border-y border-r border-gray-50 group-hover:border-blue-100 text-right">
// //                           <button className="text-[10px] font-black uppercase text-blue-600 bg-blue-50 px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-all">
// //                             View Details
// //                           </button>
// //                         </td>
// //                       </tr>
// //                     ))
// //                   ) : (
// //                     <tr>
// //                       <td colSpan="5" className="p-20 text-center text-gray-400 italic">
// //                         No students found.
// //                       </td>
// //                     </tr>
// //                   )}
// //                 </tbody>
// //               </table>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // const Loader2 = ({ className }) => (
// //   <svg className={`animate-spin ${className}`} width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
// //     <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
// //   </svg>
// // );

// // export default StudentTable;














// // 20-05-2025












// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';
// // import { Search, FileUser, X, GraduationCap, MapPin, UserCircle, Edit3, Save, RotateCcw } from 'lucide-react';
// // import TransferCertificate from './TransferCertificate';



// // /**
// //  * REUSABLE EDITABLE FIELD COMPONENT 
// //  */
// // const EditableField = ({ 
// //   label, 
// //   name, 
// //   value, 
// //   onChange, 
// //   isEditing, 
// //   highlight = false, 
// //   type = "text",
// //   options = null
// // }) => (
// //   <div className="flex flex-col space-y-1">
// //     <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">
// //       {label}
// //     </p>

// //     {isEditing ? (
// //       options ? (
// //         <select
// //           name={name}
// //           value={value || ""}
// //           onChange={onChange}
// //           className="px-3 py-2 border border-blue-400 rounded-lg text-sm bg-white focus:ring-2 focus:ring-blue-500 outline-none transition-all font-medium text-blue-900"
// //         >
// //           <option value="">Select</option>
// //           {options.map((option) => (
// //             <option key={option} value={option}>
// //               {option}
// //             </option>
// //           ))}
// //         </select>
// //       ) : (
// //         <input
// //           type={type}
// //           name={name}
// //           value={value || ""}
// //           onChange={onChange}
// //           className="px-3 py-2 border border-blue-400 rounded-lg text-sm bg-white focus:ring-2 focus:ring-blue-500 outline-none transition-all font-medium text-blue-900"
// //         />
// //       )
// //     ) : (
// //       <div
// //         className={`px-3 py-2 border rounded-lg text-sm transition-all ${
// //           highlight
// //             ? "bg-blue-50 border-blue-200 text-blue-900 font-bold"
// //             : "bg-gray-50 border-gray-200 text-gray-800 font-medium"
// //         }`}
// //       >
// //         {value || <span className="text-gray-300 italic">Not Recorded</span>}
// //       </div>
// //     )}
// //   </div>
// // );
// // const PreviewField = ({ 
// //   label, 
// //   value, 
// //   highlight = false, 
// //   fileUrl = null 
// // }) => (
// //   <div className="flex flex-col space-y-1">
// //     <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
// //       {label}
// //     </p>

// //     <div
// //       className={`px-3 py-2 border rounded-lg text-sm transition-all ${
// //         highlight
// //           ? "bg-blue-50 border-blue-200 text-blue-900 font-bold"
// //           : "bg-gray-50 border-gray-200 text-gray-800 font-medium"
// //       }`}
// //     >
// //       {value ? (
// //         <div className="flex items-center justify-between gap-2">
// //           <span className="truncate">{value}</span>

// //           {fileUrl && (
// //             <a
// //               href={fileUrl}
// //               target="_blank"
// //               rel="noopener noreferrer"
// //               className="text-xs bg-blue-600 text-white px-2 py-1 rounded hover:bg-black"
// //             >
// //               View
// //             </a>
// //           )}
// //         </div>
// //       ) : (
// //         <span className="text-gray-300 italic">Not Recorded</span>
// //       )}
// //     </div>
// //   </div>
// // );
// // const StudentTable = () => {
// //   const [students, setStudents] = useState([]);
// //   const [viewingTC, setViewingTC] = useState(false);
// //   const [searchTerm, setSearchTerm] = useState("");
// //   const [loading, setLoading] = useState(true);
  
// //   const [selectedStudent, setSelectedStudent] = useState(null); 
// //   const [isEditing, setIsEditing] = useState(false);
// //   const [editData, setEditData] = useState(null);
// //   const [isSaving, setIsSaving] = useState(false);
// //   const [dashboardCounts, setDashboardCounts] = useState({
// //   totalStudents: 0,
// //   tcSubmitted: 0,
// //   tcNotSubmitted: 0,
// //   conductSubmitted: 0,
// //   conductNotSubmitted: 0,
// //   marksMemoSubmitted: 0,
// //   marksMemoNotSubmitted: 0
// // });
// // const [activeFilter, setActiveFilter] = useState("all");


// // const fetchDashboardCounts = async () => {
// //   try {
// //     const response = await axios.get(
// //       "http://localhost:5000/api/students/dashboard-counts"
// //     );

// //     setDashboardCounts(response.data);

// //   } catch (error) {
// //     console.error("Dashboard fetch error:", error);
// //   }
// // };

// //   // FETCH FUNCTION
// //   const fetchStudents = async (query = "", pendingType = "") => {
// //   setLoading(true);

// //   try {
// //     let url = `http://localhost:5000/api/students/search?name=${query}`;

// //     if (pendingType) {
// //       url += `&pending=${pendingType}`;
// //     }

// //     const response = await axios.get(url);

// //     setStudents(response.data);

// //   } catch (error) {
// //     console.error("Error fetching students:", error);

// //   } finally {
// //     setLoading(false);
// //   }
// // };

// //   // DEBOUNCED SEARCH & INITIAL LOAD
// //   useEffect(() => {
// //     fetchDashboardCounts();
// //     const delayDebounceFn = setTimeout(() => {
// //       fetchStudents(searchTerm);
// //     }, 400); // Slightly longer debounce for smoother UX

// //     return () => clearTimeout(delayDebounceFn);
// //   }, [searchTerm]);

// // const handleOpenProfile = async (student) => {
// //   try {
// //     // Fetch latest student record from DB
// //     const response = await axios.get(
// //       `http://localhost:5000/api/students/${student._id}`
// //     );

// //     const freshStudent = JSON.parse(
// //       JSON.stringify(response.data)
// //     );

// //     // ALWAYS OPEN MODAL FIRST
// //     setSelectedStudent(freshStudent);

// //     setEditData(
// //       JSON.parse(JSON.stringify(freshStudent))
// //     );

// //     setIsEditing(false);

// //     // IMPORTANT
// //     // DO NOT AUTO OPEN TC
// //     setViewingTC(false);

// //   } catch (error) {
// //     console.error("Profile open error:", error);

// //     const fallbackStudent = JSON.parse(
// //       JSON.stringify(student)
// //     );

// //     setSelectedStudent(fallbackStudent);

// //     setEditData(
// //       JSON.parse(JSON.stringify(fallbackStudent))
// //     );

// //     setIsEditing(false);

// //     // IMPORTANT
// //     setViewingTC(false);
// //   }
// // };

// // const handleDashboardFilter = (type) => {
// //   setActiveFilter(type);
// //   fetchStudents("", type);
// // };

// // const handleFileChange = async (e, fieldName) => {
// //   const file = e.target.files[0];
// //   if (!file) return;

// //   const formData = new FormData();
// //   formData.append("file", file);

// //   try {
// //     const response = await axios.post(
// //   `http://localhost:5000/api/students/upload/${editData._id}/${fieldName}`,
// //   formData
// // );

// // const updatedStudent = response.data.updatedStudent;

// // // Update edit form instantly
// // setEditData(JSON.parse(JSON.stringify(updatedStudent)));

// // // Update modal preview instantly
// // setSelectedStudent(JSON.parse(JSON.stringify(updatedStudent)));

// // // Update table instantly
// // setStudents(prev =>
// //   prev.map(student =>
// //     student._id === updatedStudent._id ? updatedStudent : student
// //   )
// // );
// // fetchDashboardCounts();
// //     alert("File uploaded successfully!");

// //   } catch (error) {
// //     console.error("UPLOAD ERROR:", error.response?.data || error.message);

// //     alert(
// //       error.response?.data?.error || "File upload failed"
// //     );
// //   }
// // };



// //   const handleEditChange = (e) => {
// //   const { name, value } = e.target;

// //   // Parent Details
// //   if (
// //     [
// //       "fatherName", "fatherMobile", "fatherAadhaar", "fatherQualification", "fatherOccupation", "fatherAnnualIncome",
// //       "motherName", "motherMobile", "motherAadhaar", "motherQualification", "motherOccupation", "motherAnnualIncome",
// //       "guardianName", "guardianRelation", "guardianMobile", "guardianAadhaar", "guardianOccupation", "guardianAnnualIncome",
// //       "residence"
// //     ].includes(name)
// //   ) {
// //     setEditData(prev => ({
// //       ...prev,
// //       parentDetails: {
// //         ...prev.parentDetails,
// //         [name]: value
// //       }
// //     }));
// //     return;
// //   }

// //   // Admission Info
// //   if (
// //     [
// //       "admissionNo",
// //       "classAdmittedTo",
// //       "previousSchoolName",
// //       "previousTCNumber",
// //       "previousTCDate"
// //     ].includes(name)
// //   ) {
// //     setEditData(prev => ({
// //       ...prev,
// //       admissionInfo: {
// //         ...prev.admissionInfo,
// //         [name]: value
// //       }
// //     }));
// //     return;
// //   }

// //   // Main Student Fields
// //   setEditData(prev => ({
// //     ...prev,
// //     [name]: value
// //   }));
// // };

// //   const handleUpdate = async () => {
// //   setIsSaving(true);

// //   try {
// //   const payload = {
// //   ...editData,
// //   generatedTC: {
// //     ...selectedStudent.generatedTC,
// //     ...editData.generatedTC
// //   }
// // };

// // const response = await axios.put(
// //   `http://localhost:5000/api/students/${editData._id}`,
// //   payload
// // );

// //     const updatedStudent = response.data.updatedStudent;

// //     // UPDATE TABLE
// //     setStudents(prev =>
// //       prev.map(student =>
// //         student._id === updatedStudent._id ? updatedStudent : student
// //       )
// //     );

// //     // UPDATE MODAL
// //     setSelectedStudent(updatedStudent);

// //     // UPDATE EDIT FORM
// //     setEditData(JSON.parse(JSON.stringify(updatedStudent)));

// //     // OPTIONAL REFRESH
// //     await fetchStudents(searchTerm);

// //     setIsEditing(false);

// //     alert("Student record updated successfully!");

// //   } catch (error) {
// //     console.error("Update failed:", error.response?.data || error.message);
// //     alert("Failed to update record.");
// //   } finally {
// //     setIsSaving(false);
// //   }
// // };


// // const handleExcelDownload = async () => {
// //   try {
// //     const response = await axios.get(
// //       `http://localhost:5000/api/students/export-excel?pending=${activeFilter}`,
// //       {
// //         responseType: "blob"
// //       }
// //     );

// //     const blob = new Blob([response.data], {
// //       type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
// //     });

// //     const url = window.URL.createObjectURL(blob);

// //     const link = document.createElement("a");
// //     link.href = url;

// //     link.download =
// //       activeFilter === "all"
// //         ? "all_students.xlsx"
// //         : `pending_${activeFilter}_students.xlsx`;

// //     document.body.appendChild(link);
// //     link.click();
// //     link.remove();

// //     window.URL.revokeObjectURL(url);

// //   } catch (error) {
// //     console.error("Excel download failed:", error);
// //     alert("Failed to download Excel.");
// //   }
// // };


// // // 3. Update the Return Statement (Conditional Rendering)
// // // 3. Update the Return Statement (Conditional Rendering)
// // if (viewingTC) {
// //   return (
// //  <TransferCertificate
// //   data={selectedStudent}
// //   isEditable={true}
// //   onBack={async () => {
// //         // Close TC screen
// //         setViewingTC(false);

// //         // Clear selected student
// //         setSelectedStudent(null);

// //         // Refresh active students table
// //         await fetchStudents(searchTerm);

// //         // Refresh dashboard counts
// //         await fetchDashboardCounts();
// //       }}
// //     />
// //   );
// // }








// // const handleGenerateTC = async () => {
// //   try {
// //     // 1. FIRST generate TC template in backend
// //     await axios.put(
// //       `http://localhost:5000/api/students/generate-tc/${selectedStudent._id}`,
// //       {
// //         tcNumber: selectedStudent.admissionInfo?.admissionNo || ""
// //       }
// //     );

// //     // 2. THEN fetch updated student (with generatedTC filled)
// //     const response = await axios.get(
// //       `http://localhost:5000/api/students/${selectedStudent._id}`
// //     );

// //     setSelectedStudent(response.data);
// //     setViewingTC(true);

// //   } catch (error) {
// //     console.error("TC Open Error:", error);
// //     alert("Failed to open TC");
// //   }
// // };










// // // const handleGenerateTC = async () => {
// // //   try {
// // //     // IF TC ALREADY SAVED, OPEN DIRECTLY IN PREVIEW
// // //     // IF TC ALREADY FINALIZED, OPEN PREVIEW DIRECTLY
// // // if (selectedStudent?.generatedTC?.isGenerated) {
// // //   setViewingTC(true);
// // //   return;
// // // }

// // //     // OTHERWISE CREATE NEW TC
    

// // //     const updatedStudent = response.data.updatedStudent;

// // //   setSelectedStudent(JSON.parse(JSON.stringify(updatedStudent)));
// // // setEditData(JSON.parse(JSON.stringify(updatedStudent)));

// // // // UPDATE TABLE INSTANTLY
// // // setStudents(prev =>
// // //   prev.map(student =>
// // //     student._id === updatedStudent._id ? updatedStudent : student
// // //   )
// // // );

// // // // REFRESH DASHBOARD
// // // fetchDashboardCounts();

// // //     // OPEN TC PAGE
// // //     setViewingTC(true);

// // //   } catch (error) {
// // //     console.error("TC Generate Error:", error);
// // //     alert("Failed to generate TC");
// // //   }
// // // };
// //   return (
// //     <div className="p-4 lg:p-8 bg-slate-50 min-h-screen font-sans text-left">
      
// //       {/* --- MODAL --- */}
// //       {selectedStudent && (
// //         <div className="fixed inset-0 bg-blue-900/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
// //           <div className="bg-white rounded-[2rem] shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-10 border border-white">
            
// //             <header className="mb-8 border-b-2 border-blue-100 pb-6 flex justify-between items-start">
// //               <div className="flex gap-4 items-center">
// //                 <div className={`p-4 rounded-2xl text-white shadow-lg transition-colors ${isEditing ? 'bg-orange-500' : 'bg-blue-600'}`}>
// //                    {isEditing ? <Edit3 size={32} /> : <FileUser size={32} />}
// //                 </div>
// //                 <div>
// //                   <h2 className="text-3xl font-black text-blue-900 leading-tight">
// //                     {isEditing ? "Edit Record" : selectedStudent.name}
// //                   </h2>
// //                   <p className="text-blue-500 text-xs font-black uppercase tracking-widest">
// //                     {isEditing ? "Modify necessary information below" : `Admission No: ${selectedStudent.admissionInfo?.admissionNo || 'N/A'}`}
// //                   </p>
// //                 </div>
// //               </div>
// //               <button onClick={() => setSelectedStudent(null)} className="p-2 hover:bg-red-50 text-gray-400 hover:text-red-500 rounded-full">
// //                 <X size={28} />
// //               </button>
// //             </header>

// //             <div className="space-y-10">

// //   {/* 1. Personal Identity */}
// //   {/* 1. Personal Identity */}
// // <section>
// //   <div className="flex items-center gap-2 mb-4 text-blue-900 font-black uppercase tracking-tighter text-sm">
// //     <UserCircle size={18} /> Personal Identity
// //   </div>

// //   <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
// //     <EditableField label="Full Name" name="name" value={editData.name} onChange={handleEditChange} isEditing={isEditing} highlight />
// //     <EditableField label="Aadhaar No" name="aadhaarNo" value={editData.aadhaarNo} onChange={handleEditChange} isEditing={isEditing} />
// //     <EditableField label="Date of Birth" name="dob" type="date" value={editData.dob?.split('T')[0]} onChange={handleEditChange} isEditing={isEditing} />
// //     <EditableField
// //   label="Gender"
// //   name="gender"
// //   value={editData.gender}
// //   onChange={handleEditChange}
// //   isEditing={isEditing}
// //   options={["Male", "Female", "Other"]}
// // />
// //     {/* <EditableField label="Gender" name="gender" value={editData.gender} onChange={handleEditChange} isEditing={isEditing} /> */}
    
// //     <EditableField label="Nationality" name="nationality" value={editData.nationality} onChange={handleEditChange} isEditing={isEditing} />
// //     <EditableField label="Religion" name="religion" value={editData.religion} onChange={handleEditChange} isEditing={isEditing} />
// //     <EditableField label="Caste" name="caste" value={editData.caste} onChange={handleEditChange} isEditing={isEditing} />
// //     <EditableField label="Mother Tongue" name="motherTongue" value={editData.motherTongue} onChange={handleEditChange} isEditing={isEditing} />
// //     <EditableField label="State" name="state" value={editData.state} onChange={handleEditChange} isEditing={isEditing} />

// //     {/* NEW FIELDS FROM ADMISSION FORM */}
// //     <EditableField label="UDISE + Number" name="udisePlus" value={editData.udisePlus} onChange={handleEditChange} isEditing={isEditing} />
// //     <EditableField label="Siblings Info" name="siblings" value={editData.siblings} onChange={handleEditChange} isEditing={isEditing} />
// //     <EditableField
// //   label="CWSN Status"
// //   name="cwsn"
// //   value={editData.cwsn}
// //   onChange={handleEditChange}
// //   isEditing={isEditing}
// //   highlight={editData.cwsn && editData.cwsn !== "None"}
// //   options={[
// //     "None",
// //     "Locomotor Disability",
// //     "Visual Impairment",
// //     "Hearing Impairment",
// //     "Speech & Language",
// //     "Intellectual Disability",
// //     "Other"
// //   ]}
// // />
// //     {/* <EditableField label="CWSN Status" name="cwsn" value={editData.cwsn} onChange={handleEditChange} isEditing={isEditing} highlight={editData.cwsn && editData.cwsn !== "None"} /> */}
    
// //     <EditableField label="First Language" name="firstLanguage" value={editData.firstLanguage} onChange={handleEditChange} isEditing={isEditing} />
// //     <EditableField label="Second Language" name="secondLanguage" value={editData.secondLanguage} onChange={handleEditChange} isEditing={isEditing} />
// //     <EditableField label="Third Language" name="thirdLanguage" value={editData.thirdLanguage} onChange={handleEditChange} isEditing={isEditing} />
// //   </div>
// // </section>

// //   {/* 2. Family Records */}
// //   <section className="pt-6 border-t border-gray-100">
// //     <div className="flex items-center gap-2 mb-4 text-blue-900 font-black uppercase tracking-tighter text-sm">
// //       <MapPin size={18} /> Family Records
// //     </div>

// //     <div className="space-y-6">
// //       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-gray-50 p-4 rounded-xl">
// //         <EditableField label="Father Name" name="fatherName" value={editData.parentDetails?.fatherName} onChange={handleEditChange} isEditing={isEditing} highlight />
// //         <EditableField label="Father Mobile" name="fatherMobile" value={editData.parentDetails?.fatherMobile} onChange={handleEditChange} isEditing={isEditing} />
// //         <EditableField label="Father Aadhaar" name="fatherAadhaar" value={editData.parentDetails?.fatherAadhaar} onChange={handleEditChange} isEditing={isEditing} />
// //         <EditableField label="Father Qualification" name="fatherQualification" value={editData.parentDetails?.fatherQualification} onChange={handleEditChange} isEditing={isEditing} />
// //         <EditableField label="Father Occupation" name="fatherOccupation" value={editData.parentDetails?.fatherOccupation} onChange={handleEditChange} isEditing={isEditing} />
// //         <EditableField label="Father Income" name="fatherAnnualIncome" value={editData.parentDetails?.fatherAnnualIncome} onChange={handleEditChange} isEditing={isEditing} />
// //       </div>

// //       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-gray-50 p-4 rounded-xl">
// //         <EditableField label="Mother Name" name="motherName" value={editData.parentDetails?.motherName} onChange={handleEditChange} isEditing={isEditing} />
// //         <EditableField label="Mother Mobile" name="motherMobile" value={editData.parentDetails?.motherMobile} onChange={handleEditChange} isEditing={isEditing} />
// //         <EditableField label="Mother Aadhaar" name="motherAadhaar" value={editData.parentDetails?.motherAadhaar} onChange={handleEditChange} isEditing={isEditing} />
// //         <EditableField label="Mother Qualification" name="motherQualification" value={editData.parentDetails?.motherQualification} onChange={handleEditChange} isEditing={isEditing} />
// //         <EditableField label="Mother Occupation" name="motherOccupation" value={editData.parentDetails?.motherOccupation} onChange={handleEditChange} isEditing={isEditing} />
// //         <EditableField label="Mother Income" name="motherAnnualIncome" value={editData.parentDetails?.motherAnnualIncome} onChange={handleEditChange} isEditing={isEditing} />
// //       </div>

// //       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-gray-50 p-4 rounded-xl">
// //         <EditableField label="Guardian Name" name="guardianName" value={editData.parentDetails?.guardianName} onChange={handleEditChange} isEditing={isEditing} />
// //         <EditableField label="Guardian Relation" name="guardianRelation" value={editData.parentDetails?.guardianRelation} onChange={handleEditChange} isEditing={isEditing} />
// //         <EditableField label="Guardian Mobile" name="guardianMobile" value={editData.parentDetails?.guardianMobile} onChange={handleEditChange} isEditing={isEditing} />
// //         <EditableField label="Guardian Aadhaar" name="guardianAadhaar" value={editData.parentDetails?.guardianAadhaar} onChange={handleEditChange} isEditing={isEditing} />
// //         <EditableField label="Guardian Occupation" name="guardianOccupation" value={editData.parentDetails?.guardianOccupation} onChange={handleEditChange} isEditing={isEditing} />
// //         <EditableField label="Guardian Income" name="guardianAnnualIncome" value={editData.parentDetails?.guardianAnnualIncome} onChange={handleEditChange} isEditing={isEditing} />
// //       </div>

// //       <EditableField label="Residence Address" name="residence" value={editData.parentDetails?.residence} onChange={handleEditChange} isEditing={isEditing} highlight />
// //     </div>
// //   </section>

// //   {/* 3. Academic Information */}
// //   <section className="pt-6 border-t border-gray-100">
// //     <div className="flex items-center gap-2 mb-4 text-blue-900 font-black uppercase tracking-tighter text-sm">
// //       <GraduationCap size={18} /> Academic Information
// //     </div>

// //     <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
// //       <EditableField label="Admission No" name="admissionNo" value={editData.admissionInfo?.admissionNo} onChange={handleEditChange} isEditing={isEditing} highlight />
// //       <EditableField label="Class Admitted To" name="classAdmittedTo" value={editData.admissionInfo?.classAdmittedTo} onChange={handleEditChange} isEditing={isEditing} />
// //       <EditableField label="Previous School" name="previousSchoolName" value={editData.admissionInfo?.previousSchoolName} onChange={handleEditChange} isEditing={isEditing} />
// //       <EditableField label="Previous TC Number" name="previousTCNumber" value={editData.admissionInfo?.previousTCNumber} onChange={handleEditChange} isEditing={isEditing} />
// //       <EditableField label="Previous TC Date" name="previousTCDate" type="date" value={editData.admissionInfo?.previousTCDate?.split('T')[0]} onChange={handleEditChange} isEditing={isEditing} />
// //     </div>
// //   </section>
// //   <section className="pt-6 border-t border-gray-100">
// //   <div className="flex items-center gap-2 mb-4 text-blue-900 font-black uppercase tracking-tighter text-sm">
// //     <FileUser size={18} /> Uploaded Documents
// //   </div>

// //   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// //     {[
// //     ["studentAadhaarFile", "Student Aadhaar File"],
// //     ["fatherAadhaarFile", "Father Aadhaar File"],
// //     ["motherAadhaarFile", "Mother Aadhaar File"],
// //     ["guardianAadhaarFile", "Guardian Aadhaar File"],
// //     ["tcFile", "Transfer Certificate"],
// //     ["conductFile", "Conduct Certificate"],
// //     ["marksMemoFile", "Marks Memo"]
// //   ].map(([field, label]) => (
// //     <div key={field} className="flex flex-col space-y-1">
// //       <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
// //         {label}
// //       </p>

// //       {isEditing ? (
// //         <input
// //           type="file"
// //           accept=".pdf,.jpg,.jpeg,.png"
// //           onChange={(e) => handleFileChange(e, field)}
// //           className="px-3 py-2 border border-blue-300 rounded-lg text-sm bg-white"
// //         />
// //       ) : (
// //         <PreviewField
// //   label={label}
// //   value={editData.documents?.[field] ? "Uploaded" : ""}
// //   fileUrl={editData.documents?.[field]}
// //   highlight={field === "studentAadhaarFile" || field === "tcFile"}
// // />
// //       )}
// //     </div>
// //   ))}
// //   </div>
// // </section>

// // </div>

// //             <div className="mt-10 flex gap-4">
// //               {isEditing ? (
// //                 <>
// //                   <button onClick={handleUpdate} disabled={isSaving} className="flex-1 bg-green-600 text-white py-4 rounded-2xl font-bold uppercase tracking-widest hover:bg-green-700 transition-all flex items-center justify-center gap-2">
// //                     {isSaving ? <Loader2 className="animate-spin" /> : <Save size={20} />}
// //                     {isSaving ? "Saving..." : "Save Changes"}
// //                   </button>
// //                   <button   onClick={() => {
// //     setIsEditing(false);
// //     setEditData(JSON.parse(JSON.stringify(selectedStudent)));
// //   }} className="px-8 bg-gray-100 text-gray-500 py-4 rounded-2xl font-bold uppercase tracking-widest hover:bg-gray-200 transition-all flex items-center gap-2">
// //                     <RotateCcw size={20} /> Cancel
// //                   </button>
// //                 </>
// //               ) : (
// //                 <><div className="flex flex-1 gap-3">


// //   <button
// //     onClick={handleGenerateTC}
// //     className={`flex-1 text-white py-4 rounded-2xl font-bold uppercase tracking-widest transition-all ${
// //       selectedStudent?.generatedTC?.isGenerated
// //         ? "bg-green-600 hover:bg-green-700"
// //         : "bg-orange-600 hover:bg-orange-700"
// //     }`}
// //   >
// //     {selectedStudent?.generatedTC?.isGenerated
// //       ? "Preview TC"
// //       : "Generate TC"}
// //   </button>

// //   <button
// //     onClick={() => setIsEditing(true)}
// //     className="flex-1 bg-blue-600 text-white py-4 rounded-2xl font-bold uppercase tracking-widest hover:bg-blue-700 transition-all flex items-center justify-center gap-2"
// //   >
// //     <Edit3 size={20} />
// //     Edit Profile
// //   </button>

// // </div>





// //                   <button onClick={() => setSelectedStudent(null)} className="px-8 bg-blue-900 text-white py-4 rounded-2xl font-bold uppercase tracking-widest hover:bg-black transition-all">
// //                     Close
// //                   </button>
// //                 </>
// //               )}
// //             </div>
// //           </div>
// //         </div>
// //       )}

// // {/* --- COMPACT DUAL-STAT DASHBOARD (H-20) --- */}
// // <div className="max-w-7xl mx-auto mb-8 grid grid-cols-1 md:grid-cols-4 gap-4 px-4">
  
// //   {/* Total Students - Registry Baseline */}
// //   <div   onClick={() => {
// //     setActiveFilter("all");
// //     fetchStudents("");
// //   }} className="bg-white rounded-full px-6 shadow-md border border-blue-50 flex items-center justify-between h-20 transition-all hover:shadow-lg">
// //     <div className="flex flex-col">
// //       <span className="bg-blue-600 text-white px-3 py-1 rounded-full font-black uppercase text-[12px] tracking-widest w-fit mb-1">
// //         Students
// //       </span>
// //       <p className="text-blue-900/40 text-[10px] font-bold uppercase">Total</p>
// //     </div>
// //     <div className="text-right">
// //       <h2 className="text-2xl font-black text-blue-900 leading-none">
// //         {dashboardCounts.totalStudents}
// //       </h2>
// //     </div>
// //   </div>

// //   {/* TC Status - Pending vs Submitted */}
// //   <div onClick={() => handleDashboardFilter("tc")} className="bg-red-50/50 rounded-full pl-6 pr-4 shadow-md border border-red-100 flex items-center justify-between h-20 transition-all hover:shadow-lg">
// //     <div className="flex flex-col min-w-[80px]">
// //       <span className="bg-red-600 text-white px-3 py-1 rounded-full font-black uppercase text-[12px] tracking-widest w-fit mb-1">
// //         TC
// //       </span>
// //       <p className="text-red-900/40 text-[10px] font-bold uppercase tracking-tighter">Status</p>
// //     </div>
// //     <div className="flex items-center space-x-4">
// //       <div className="text-center">
// //         <p className="text-[9px] font-black text-red-500 uppercase">Pending</p>
// //         <h2 className="text-2xl font-black text-red-600 leading-none">{dashboardCounts.tcNotSubmitted}</h2>
// //       </div>
// //       <div className="h-8 w-[1px] bg-red-200"></div>
// //       <div className="text-center">
// //         <p className="text-[9px] font-black text-gray-400 uppercase">Recvd</p>
// //         <h2 className="text-xl font-bold text-gray-500 leading-none">{dashboardCounts.tcSubmitted}</h2>
// //       </div>
// //     </div>
// //   </div>

// //   {/* Conduct Status - Pending vs Submitted */}
// //   <div onClick={() => handleDashboardFilter("conduct")} className="bg-orange-50/50 rounded-full pl-6 pr-4 shadow-md border border-orange-100 flex items-center justify-between h-20 transition-all hover:shadow-lg">
// //     <div className="flex flex-col min-w-[80px]">
// //       <span className="bg-orange-500 text-white px-3 py-1 rounded-full font-black uppercase text-[12px] tracking-widest w-fit mb-1">
// //         Conduct
// //       </span>
// //       <p className="text-orange-900/40 text-[10px] font-bold uppercase tracking-tighter">Status</p>
// //     </div>
// //     <div className="flex items-center space-x-4">
// //       <div className="text-center">
// //         <p className="text-[9px] font-black text-orange-500 uppercase">Pending</p>
// //         <h2 className="text-2xl font-black text-orange-600 leading-none">{dashboardCounts.conductNotSubmitted}</h2>
// //       </div>
// //       <div className="h-8 w-[1px] bg-orange-200"></div>
// //       <div className="text-center">
// //         <p className="text-[9px] font-black text-gray-400 uppercase">Recvd</p>
// //         <h2 className="text-xl font-bold text-gray-500 leading-none">{dashboardCounts.conductSubmitted}</h2>
// //       </div>
// //     </div>
// //   </div>

// //   {/* Marks Status - Pending vs Submitted */}
// //   <div onClick={() => handleDashboardFilter("marksmemo")} className="bg-amber-50/50 rounded-full pl-6 pr-4 shadow-md border border-amber-100 flex items-center justify-between h-20 transition-all hover:shadow-lg">
// //     <div className="flex flex-col min-w-[80px]">
// //       <span className="bg-amber-500 text-white px-3 py-1 rounded-full font-black uppercase text-[12px] tracking-widest w-fit mb-1">
// //         Marks Memo
// //       </span>
// //       <p className="text-amber-900/40 text-[10px] font-bold uppercase tracking-tighter">Status</p>
// //     </div>
// //     <div className="flex items-center space-x-4">
// //       <div className="text-center">
// //         <p className="text-[9px] font-black text-amber-600 uppercase">Pending</p>
// //         <h2 className="text-2xl font-black text-amber-600 leading-none">{dashboardCounts.marksMemoNotSubmitted}</h2>
// //       </div>
// //       <div className="h-8 w-[1px] bg-amber-200"></div>
// //       <div className="text-center">
// //         <p className="text-[9px] font-black text-gray-400 uppercase">Recvd</p>
// //         <h2 className="text-xl font-bold text-gray-500 leading-none">{dashboardCounts.marksMemoSubmitted}</h2>
// //       </div>
// //     </div>
// //   </div>

// // </div>



// //       {/* --- TABLE INTERFACE --- */}
// //       <div className="max-w-6xl mx-auto ">
// //         <div className="bg-white rounded-[2rem] shadow-xl border border-gray-100">
// //           <div className="p-8">
// //             <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
// //               <div>
// //                 <h2 className="text-3xl font-black text-blue-900 tracking-tight">
// //   {activeFilter === "tc"
// //     ? "Showing Pending TC Records"
// //     : activeFilter === "conduct"
// //     ? "Showing Pending Conduct Records"
// //     : activeFilter === "marksmemo"
// //     ? "Showing Pending Marks Memo Records"
// //     : "Student Database"}
// // </h2>
// //                 <p className="text-gray-400 text-sm font-medium italic">Showing {students.length} record(s)</p>
// //               </div>
// //               <div className="flex gap-3 w-full md:w-auto items-center">
// //                 <button
// //   onClick={handleExcelDownload}
// //   className="bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-2xl font-bold uppercase text-xs tracking-widest shadow-md whitespace-nowrap"
// // >
// //   Download Excel
// // </button>
// //                 <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
// //                 <input
// //                   type="text"
// //                   placeholder="Search student by name..."
// //                   className="w-full pl-12 pr-4 py-3 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all text-sm font-medium outline-none"
// //                   value={searchTerm}
// //                   onChange={(e) => setSearchTerm(e.target.value)}
// //                 />
// //               </div>
// //             </div>

// //             <div className="overflow-x-auto">
// //               <table className="w-full border-separate border-spacing-y-2">
// //                 <thead>
// //                   <tr className="text-gray-400 text-left">
// //                     <th className="px-6 py-3 text-[15px] font-black uppercase tracking-widest">Admission No</th>
// //                     <th className="px-6 py-3 text-[15px] font-black uppercase tracking-widest">Student Name</th>
// //                     <th className="px-6 py-3 text-[15px] font-black uppercase tracking-widest">Father's Name</th>
// //                     <th className="px-6 py-3 text-[15px] font-black uppercase tracking-widest">Date of Birth</th>
// //                     <th className="px-6 py-3 text-[15px] font-black uppercase tracking-widest text-right">Action</th>
// //                   </tr>
// //                 </thead>
// //                 <tbody>
// //                   {loading ? (
// //                     <tr>
// //                       <td colSpan="5" className="p-20 text-center">
// //                         <Loader2 className="animate-spin inline text-blue-600" />
// //                         <p className="text-gray-400 mt-2 font-bold uppercase text-xs tracking-widest">Loading Database...</p>
// //                       </td>
// //                     </tr>
// //                   ) : students.length > 0 ? (
// //                     students.map((student) => (
// //                       <tr 
// //                         key={student._id} 
// //                         onClick={() => handleOpenProfile(student)}
// //                         className="group cursor-pointer bg-white hover:bg-blue-50/50 transition-all"
// //                       >
// //                         <td className="px-6 py-4 rounded-l-2xl border-y border-l border-gray-50 group-hover:border-blue-100">
// //                           <span className="bg-gray-100 group-hover:bg-blue-100 text-gray-600 group-hover:text-blue-700 px-3 py-1 rounded-lg text-xs font-bold">
// //                             {student.admissionInfo?.admissionNo || 'N/A'}
// //                           </span>
// //                         </td>
// //                         <td className="px-6 py-4 border-y border-gray-50 group-hover:border-blue-100 font-bold text-blue-900">
// //                           {student.name}
// //                         </td>
// //                         <td className="px-6 py-4 border-y border-gray-50 group-hover:border-blue-100 text-gray-500 font-medium">
// //                           {student.parentDetails?.fatherName || 'N/A'}
// //                         </td>
// //                         <td className="px-6 py-4 border-y border-gray-50 group-hover:border-blue-100 text-gray-400 font-medium">
// //                           {student.dob ? new Date(student.dob).toLocaleDateString('en-GB') : 'N/A'}
// //                         </td>
// //                         <td className="px-6 py-4 rounded-r-2xl border-y border-r border-gray-50 group-hover:border-blue-100 text-right">
// //                           <button className="text-[10px] font-black uppercase text-blue-600 bg-blue-50 px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-all">
// //                             View Details
// //                           </button>
// //                         </td>
// //                       </tr>
// //                     ))
// //                   ) : (
// //                     <tr>
// //                       <td colSpan="5" className="p-20 text-center text-gray-400 italic">
// //                         No students found.
// //                       </td>
// //                     </tr>
// //                   )}
// //                 </tbody>
// //               </table>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // const Loader2 = ({ className }) => (
// //   <svg className={`animate-spin ${className}`} width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
// //     <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
// //   </svg>
// // );

// // export default StudentTable;












// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Search, FileUser, X, GraduationCap, MapPin, UserCircle, Edit3, Save, RotateCcw } from 'lucide-react';
// import TransferCertificate from './TransferCertificate';

// /**
//  * REUSABLE EDITABLE FIELD COMPONENT 
//  */
// const EditableField = ({ 
//   label, 
//   name, 
//   value, 
//   onChange, 
//   isEditing, 
//   highlight = false, 
//   type = "text",
//   options = null
// }) => (
//   <div className="flex flex-col space-y-1">
//     <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">
//       {label}
//     </p>

//     {isEditing ? (
//       options ? (
//         <select
//           name={name}
//           value={value || ""}
//           onChange={onChange}
//           className="px-3 py-2 border border-blue-400 rounded-lg text-sm bg-white focus:ring-2 focus:ring-blue-500 outline-none transition-all font-medium text-blue-900"
//         >
//           <option value="">Select</option>
//           {options.map((option) => (
//             <option key={option} value={option}>
//               {option}
//             </option>
//           ))}
//         </select>
//       ) : (
//         <input
//           type={type}
//           name={name}
//           value={value || ""}
//           onChange={onChange}
//           className="px-3 py-2 border border-blue-400 rounded-lg text-sm bg-white focus:ring-2 focus:ring-blue-500 outline-none transition-all font-medium text-blue-900"
//         />
//       )
//     ) : (
//       <div
//         className={`px-3 py-2 border rounded-lg text-sm transition-all ${
//           highlight
//             ? "bg-blue-50 border-blue-200 text-blue-900 font-bold"
//             : "bg-gray-50 border-gray-200 text-gray-800 font-medium"
//         }`}
//       >
//         {value || <span className="text-gray-300 italic">Not Recorded</span>}
//       </div>
//     )}
//   </div>
// );
// const PreviewField = ({ 
//   label, 
//   value, 
//   highlight = false, 
//   fileUrl = null 
// }) => (
//   <div className="flex flex-col space-y-1">
//     <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
//       {label}
//     </p>

//     <div
//       className={`px-3 py-2 border rounded-lg text-sm transition-all ${
//         highlight
//           ? "bg-blue-50 border-blue-200 text-blue-900 font-bold"
//           : "bg-gray-50 border-gray-200 text-gray-800 font-medium"
//       }`}
//     >
//       {value ? (
//         <div className="flex items-center justify-between gap-2">
//           <span className="truncate">{value}</span>

//           {fileUrl && (
//             <a
//               href={fileUrl}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-xs bg-blue-600 text-white px-2 py-1 rounded hover:bg-black"
//             >
//               View
//             </a>
//           )}
//         </div>
//       ) : (
//         <span className="text-gray-300 italic">Not Recorded</span>
//       )}
//     </div>
//   </div>
// );
// const StudentTable = () => {
//   const [students, setStudents] = useState([]);
//   const [viewingTC, setViewingTC] = useState(false);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [loading, setLoading] = useState(true);
  
//   const [selectedStudent, setSelectedStudent] = useState(null); 
//   const [isEditing, setIsEditing] = useState(false);
//   const [editData, setEditData] = useState(null);
//   const [isSaving, setIsSaving] = useState(false);
//   const [dashboardCounts, setDashboardCounts] = useState({
//   totalStudents: 0,
//   tcSubmitted: 0,
//   tcNotSubmitted: 0,
//   conductSubmitted: 0,
//   conductNotSubmitted: 0,
//   marksMemoSubmitted: 0,
//   marksMemoNotSubmitted: 0
// });
// const [activeFilter, setActiveFilter] = useState("all");


// const fetchDashboardCounts = async () => {
//   try {
//     const response = await axios.get(
//       "http://localhost:5000/api/students/dashboard-counts"
//     );

//     setDashboardCounts(response.data);

//   } catch (error) {
//     console.error("Dashboard fetch error:", error);
//   }
// };

//   // FETCH FUNCTION
//   const fetchStudents = async (query = "", pendingType = "") => {
//   setLoading(true);

//   try {
//     let url = `http://localhost:5000/api/students/search?name=${query}`;

//     if (pendingType) {
//       url += `&pending=${pendingType}`;
//     }

//     const response = await axios.get(url);

//     setStudents(response.data);

//   } catch (error) {
//     console.error("Error fetching students:", error);

//   } finally {
//     setLoading(false);
//   }
// };

//   // DEBOUNCED SEARCH & INITIAL LOAD
//   useEffect(() => {
//     fetchDashboardCounts();
//     const delayDebounceFn = setTimeout(() => {
//       fetchStudents(searchTerm);
//     }, 400); // Slightly longer debounce for smoother UX

//     return () => clearTimeout(delayDebounceFn);
//   }, [searchTerm]);

// const handleOpenProfile = async (student) => {
//   try {
//     // Fetch latest student record from DB
//     const response = await axios.get(
//       `http://localhost:5000/api/students/${student._id}`
//     );

//     const freshStudent = JSON.parse(
//       JSON.stringify(response.data)
//     );

//     // ALWAYS OPEN MODAL FIRST
//     setSelectedStudent(freshStudent);

//     setEditData(
//       JSON.parse(JSON.stringify(freshStudent))
//     );

//     setIsEditing(false);

//     // IMPORTANT
//     // DO NOT AUTO OPEN TC
//     setViewingTC(false);

//   } catch (error) {
//     console.error("Profile open error:", error);

//     const fallbackStudent = JSON.parse(
//       JSON.stringify(student)
//     );

//     setSelectedStudent(fallbackStudent);

//     setEditData(
//       JSON.parse(JSON.stringify(fallbackStudent))
//     );

//     setIsEditing(false);

//     // IMPORTANT
//     setViewingTC(false);
//   }
// };

// const handleDashboardFilter = (type) => {
//   setActiveFilter(type);
//   fetchStudents("", type);
// };

// const handleFileChange = async (e, fieldName) => {
//   const file = e.target.files[0];
//   if (!file) return;

//   const formData = new FormData();
//   formData.append("file", file);

//   try {
//     const response = await axios.post(
//   `http://localhost:5000/api/students/upload/${editData._id}/${fieldName}`,
//   formData
// );

// const updatedStudent = response.data.updatedStudent;

// // Update edit form instantly
// setEditData(JSON.parse(JSON.stringify(updatedStudent)));

// // Update modal preview instantly
// setSelectedStudent(JSON.parse(JSON.stringify(updatedStudent)));

// // Update table instantly
// setStudents(prev =>
//   prev.map(student =>
//     student._id === updatedStudent._id ? updatedStudent : student
//   )
// );
// fetchDashboardCounts();
//     alert("File uploaded successfully!");

//   } catch (error) {
//     console.error("UPLOAD ERROR:", error.response?.data || error.message);

//     alert(
//       error.response?.data?.error || "File upload failed"
//     );
//   }
// };



//   const handleEditChange = (e) => {
//   const { name, value } = e.target;

//   // Parent Details
//   if (
//     [
//       "fatherName", "fatherMobile", "fatherAadhaar", "fatherQualification", "fatherOccupation", "fatherAnnualIncome",
//       "motherName", "motherMobile", "motherAadhaar", "motherQualification", "motherOccupation", "motherAnnualIncome",
//       "guardianName", "guardianRelation", "guardianMobile", "guardianAadhaar", "guardianOccupation", "guardianAnnualIncome",
//       "residence"
//     ].includes(name)
//   ) {
//     setEditData(prev => ({
//       ...prev,
//       parentDetails: {
//         ...prev.parentDetails,
//         [name]: value
//       }
//     }));
//     return;
//   }

//   // Admission Info
//   if (
//     [
//       "admissionNo",
//       "classAdmittedTo",
//       "previousSchoolName",
//       "previousTCNumber",
//       "previousTCDate"
//     ].includes(name)
//   ) {
//     setEditData(prev => ({
//       ...prev,
//       admissionInfo: {
//         ...prev.admissionInfo,
//         [name]: value
//       }
//     }));
//     return;
//   }

//   // Main Student Fields
//   setEditData(prev => ({
//     ...prev,
//     [name]: value
//   }));
// };

//   const handleUpdate = async () => {
//   setIsSaving(true);

//   try {
//   const payload = {
//   ...editData,
//   generatedTC: {
//     ...selectedStudent.generatedTC,
//     ...editData.generatedTC
//   }
// };

// const response = await axios.put(
//   `http://localhost:5000/api/students/${editData._id}`,
//   payload
// );

//     const updatedStudent = response.data.updatedStudent;

//     // UPDATE TABLE
//     setStudents(prev =>
//       prev.map(student =>
//         student._id === updatedStudent._id ? updatedStudent : student
//       )
//     );

//     // UPDATE MODAL
//     setSelectedStudent(updatedStudent);

//     // UPDATE EDIT FORM
//     setEditData(JSON.parse(JSON.stringify(updatedStudent)));

//     // OPTIONAL REFRESH
//     await fetchStudents(searchTerm);

//     setIsEditing(false);

//     alert("Student record updated successfully!");

//   } catch (error) {
//     console.error("Update failed:", error.response?.data || error.message);
//     alert("Failed to update record.");
//   } finally {
//     setIsSaving(false);
//   }
// };


// const handleExcelDownload = async () => {
//   try {
//     const response = await axios.get(
//       `http://localhost:5000/api/students/export-excel?pending=${activeFilter}`,
//       {
//         responseType: "blob"
//       }
//     );

//     const blob = new Blob([response.data], {
//       type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
//     });

//     const url = window.URL.createObjectURL(blob);

//     const link = document.createElement("a");
//     link.href = url;

//     link.download =
//       activeFilter === "all"
//         ? "all_students.xlsx"
//         : `pending_${activeFilter}_students.xlsx`;

//     document.body.appendChild(link);
//     link.click();
//     link.remove();

//     window.URL.revokeObjectURL(url);

//   } catch (error) {
//     console.error("Excel download failed:", error);
//     alert("Failed to download Excel.");
//   }
// };


// // 3. Update the Return Statement (Conditional Rendering)
// if (viewingTC) {
//   return (
//  <TransferCertificate
//   data={selectedStudent}
//   isEditable={true}
//   onBack={async () => {
//         // Close TC screen
//         setViewingTC(false);

//         // Clear selected student
//         setSelectedStudent(null);

//         // Refresh active students table
//         await fetchStudents(searchTerm);

//         // Refresh dashboard counts
//         await fetchDashboardCounts();
//       }}
//     />
//   );
// }

// const handleGenerateTC = async () => {
//   try {

//     // IF TC ALREADY GENERATED
//     // OPEN DIRECTLY WITHOUT RESETTING DATA
//     if (selectedStudent?.generatedTC?.isGenerated) {

//       // Fetch latest saved TC
//       const response = await axios.get(
//         `http://localhost:5000/api/students/${selectedStudent._id}`
//       );

//       setSelectedStudent(response.data);

//       setViewingTC(true);

//       return;
//     }

//     // FIRST TIME ONLY → CREATE TC TEMPLATE
//     await axios.put(
//       `http://localhost:5000/api/students/generate-tc/${selectedStudent._id}`,
//       {
//         tcNumber:
//           selectedStudent.admissionInfo?.admissionNo || ""
//       }
//     );

//     // FETCH UPDATED RECORD
//     const response = await axios.get(
//       `http://localhost:5000/api/students/${selectedStudent._id}`
//     );

//     setSelectedStudent(response.data);

//     setViewingTC(true);

//   } catch (error) {

//     console.error("TC Open Error:", error);

//     alert("Failed to open TC");
//   }
// };

//   return (
//     <div className="p-4 lg:p-8 bg-slate-50 min-h-screen font-sans text-left">
      
//       {/* --- MODAL --- */}
//       {selectedStudent && (
//         <div className="fixed inset-0 bg-blue-900/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
//           <div className="bg-white rounded-[2rem] shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-10 border border-white">
            
//             <header className="mb-8 border-b-2 border-blue-100 pb-6 flex justify-between items-start">
//               <div className="flex gap-4 items-center">
//                 <div className={`p-4 rounded-2xl text-white shadow-lg transition-colors ${isEditing ? 'bg-orange-500' : 'bg-blue-600'}`}>
//                    {isEditing ? <Edit3 size={32} /> : <FileUser size={32} />}
//                 </div>
//                 <div>
//                   <h2 className="text-3xl font-black text-blue-900 leading-tight">
//                     {isEditing ? "Edit Record" : selectedStudent.name}
//                   </h2>
//                   <p className="text-blue-500 text-xs font-black uppercase tracking-widest">
//                     {isEditing ? "Modify necessary information below" : `Admission No: ${selectedStudent.admissionInfo?.admissionNo || 'N/A'}`}
//                   </p>
//                 </div>
//               </div>
//               <button onClick={() => setSelectedStudent(null)} className="p-2 hover:bg-red-50 text-gray-400 hover:text-red-500 rounded-full">
//                 <X size={28} />
//               </button>
//             </header>

//             <div className="space-y-10">

//   {/* 1. Personal Identity */}
//   {/* 1. Personal Identity */}
// <section>
//   <div className="flex items-center gap-2 mb-4 text-blue-900 font-black uppercase tracking-tighter text-sm">
//     <UserCircle size={18} /> Personal Identity
//   </div>

//   <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//     <EditableField label="Full Name" name="name" value={editData.name} onChange={handleEditChange} isEditing={isEditing} highlight />
//     <EditableField label="Aadhaar No" name="aadhaarNo" value={editData.aadhaarNo} onChange={handleEditChange} isEditing={isEditing} />
//     <EditableField label="Date of Birth" name="dob" type="date" value={editData.dob?.split('T')[0]} onChange={handleEditChange} isEditing={isEditing} />
//     <EditableField
//   label="Gender"
//   name="gender"
//   value={editData.gender}
//   onChange={handleEditChange}
//   isEditing={isEditing}
//   options={["Male", "Female", "Other"]}
// />
//     {/* <EditableField label="Gender" name="gender" value={editData.gender} onChange={handleEditChange} isEditing={isEditing} /> */}
    
//     <EditableField label="Nationality" name="nationality" value={editData.nationality} onChange={handleEditChange} isEditing={isEditing} />
//     <EditableField label="Religion" name="religion" value={editData.religion} onChange={handleEditChange} isEditing={isEditing} />
//     <EditableField label="Caste" name="caste" value={editData.caste} onChange={handleEditChange} isEditing={isEditing} />
//     <EditableField label="Mother Tongue" name="motherTongue" value={editData.motherTongue} onChange={handleEditChange} isEditing={isEditing} />
//     <EditableField label="State" name="state" value={editData.state} onChange={handleEditChange} isEditing={isEditing} />

//     {/* NEW FIELDS FROM ADMISSION FORM */}
//     <EditableField label="UDISE + Number" name="udisePlus" value={editData.udisePlus} onChange={handleEditChange} isEditing={isEditing} />
//     <EditableField label="Siblings Info" name="siblings" value={editData.siblings} onChange={handleEditChange} isEditing={isEditing} />
//     <EditableField
//   label="CWSN Status"
//   name="cwsn"
//   value={editData.cwsn}
//   onChange={handleEditChange}
//   isEditing={isEditing}
//   highlight={editData.cwsn && editData.cwsn !== "None"}
//   options={[
//     "None",
//     "Locomotor Disability",
//     "Visual Impairment",
//     "Hearing Impairment",
//     "Speech & Language",
//     "Intellectual Disability",
//     "Other"
//   ]}
// />
//     {/* <EditableField label="CWSN Status" name="cwsn" value={editData.cwsn} onChange={handleEditChange} isEditing={isEditing} highlight={editData.cwsn && editData.cwsn !== "None"} /> */}
    
//     <EditableField label="First Language" name="firstLanguage" value={editData.firstLanguage} onChange={handleEditChange} isEditing={isEditing} />
//     <EditableField label="Second Language" name="secondLanguage" value={editData.secondLanguage} onChange={handleEditChange} isEditing={isEditing} />
//     <EditableField label="Third Language" name="thirdLanguage" value={editData.thirdLanguage} onChange={handleEditChange} isEditing={isEditing} />
//   </div>
// </section>

//   {/* 2. Family Records */}
//   <section className="pt-6 border-t border-gray-100">
//     <div className="flex items-center gap-2 mb-4 text-blue-900 font-black uppercase tracking-tighter text-sm">
//       <MapPin size={18} /> Family Records
//     </div>

//     <div className="space-y-6">
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-gray-50 p-4 rounded-xl">
//         <EditableField label="Father Name" name="fatherName" value={editData.parentDetails?.fatherName} onChange={handleEditChange} isEditing={isEditing} highlight />
//         <EditableField label="Father Mobile" name="fatherMobile" value={editData.parentDetails?.fatherMobile} onChange={handleEditChange} isEditing={isEditing} />
//         <EditableField label="Father Aadhaar" name="fatherAadhaar" value={editData.parentDetails?.fatherAadhaar} onChange={handleEditChange} isEditing={isEditing} />
//         <EditableField label="Father Qualification" name="fatherQualification" value={editData.parentDetails?.fatherQualification} onChange={handleEditChange} isEditing={isEditing} />
//         <EditableField label="Father Occupation" name="fatherOccupation" value={editData.parentDetails?.fatherOccupation} onChange={handleEditChange} isEditing={isEditing} />
//         <EditableField label="Father Income" name="fatherAnnualIncome" value={editData.parentDetails?.fatherAnnualIncome} onChange={handleEditChange} isEditing={isEditing} />
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-gray-50 p-4 rounded-xl">
//         <EditableField label="Mother Name" name="motherName" value={editData.parentDetails?.motherName} onChange={handleEditChange} isEditing={isEditing} />
//         <EditableField label="Mother Mobile" name="motherMobile" value={editData.parentDetails?.motherMobile} onChange={handleEditChange} isEditing={isEditing} />
//         <EditableField label="Mother Aadhaar" name="motherAadhaar" value={editData.parentDetails?.motherAadhaar} onChange={handleEditChange} isEditing={isEditing} />
//         <EditableField label="Mother Qualification" name="motherQualification" value={editData.parentDetails?.motherQualification} onChange={handleEditChange} isEditing={isEditing} />
//         <EditableField label="Mother Occupation" name="motherOccupation" value={editData.parentDetails?.motherOccupation} onChange={handleEditChange} isEditing={isEditing} />
//         <EditableField label="Mother Income" name="motherAnnualIncome" value={editData.parentDetails?.motherAnnualIncome} onChange={handleEditChange} isEditing={isEditing} />
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-gray-50 p-4 rounded-xl">
//         <EditableField label="Guardian Name" name="guardianName" value={editData.parentDetails?.guardianName} onChange={handleEditChange} isEditing={isEditing} />
//         <EditableField label="Guardian Relation" name="guardianRelation" value={editData.parentDetails?.guardianRelation} onChange={handleEditChange} isEditing={isEditing} />
//         <EditableField label="Guardian Mobile" name="guardianMobile" value={editData.parentDetails?.guardianMobile} onChange={handleEditChange} isEditing={isEditing} />
//         <EditableField label="Guardian Aadhaar" name="guardianAadhaar" value={editData.parentDetails?.guardianAadhaar} onChange={handleEditChange} isEditing={isEditing} />
//         <EditableField label="Guardian Occupation" name="guardianOccupation" value={editData.parentDetails?.guardianOccupation} onChange={handleEditChange} isEditing={isEditing} />
//         <EditableField label="Guardian Income" name="guardianAnnualIncome" value={editData.parentDetails?.guardianAnnualIncome} onChange={handleEditChange} isEditing={isEditing} />
//       </div>

//       <EditableField label="Residence Address" name="residence" value={editData.parentDetails?.residence} onChange={handleEditChange} isEditing={isEditing} highlight />
//     </div>
//   </section>

//   {/* 3. Academic Information */}
//   <section className="pt-6 border-t border-gray-100">
//     <div className="flex items-center gap-2 mb-4 text-blue-900 font-black uppercase tracking-tighter text-sm">
//       <GraduationCap size={18} /> Academic Information
//     </div>

//     <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//       <EditableField label="Admission No" name="admissionNo" value={editData.admissionInfo?.admissionNo} onChange={handleEditChange} isEditing={isEditing} highlight />
//       <EditableField label="Class Admitted To" name="classAdmittedTo" value={editData.admissionInfo?.classAdmittedTo} onChange={handleEditChange} isEditing={isEditing} />
//       <EditableField label="Previous School" name="previousSchoolName" value={editData.admissionInfo?.previousSchoolName} onChange={handleEditChange} isEditing={isEditing} />
//       <EditableField label="Previous TC Number" name="previousTCNumber" value={editData.admissionInfo?.previousTCNumber} onChange={handleEditChange} isEditing={isEditing} />
//       <EditableField label="Previous TC Date" name="previousTCDate" type="date" value={editData.admissionInfo?.previousTCDate?.split('T')[0]} onChange={handleEditChange} isEditing={isEditing} />
//     </div>
//   </section>
//   <section className="pt-6 border-t border-gray-100">
//   <div className="flex items-center gap-2 mb-4 text-blue-900 font-black uppercase tracking-tighter text-sm">
//     <FileUser size={18} /> Uploaded Documents
//   </div>

//   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//     {[
//     ["studentAadhaarFile", "Student Aadhaar File"],
//     ["fatherAadhaarFile", "Father Aadhaar File"],
//     ["motherAadhaarFile", "Mother Aadhaar File"],
//     ["guardianAadhaarFile", "Guardian Aadhaar File"],
//     ["tcFile", "Transfer Certificate"],
//     ["conductFile", "Conduct Certificate"],
//     ["marksMemoFile", "Marks Memo"]
//   ].map(([field, label]) => (
//     <div key={field} className="flex flex-col space-y-1">
//       <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
//         {label}
//       </p>

//       {isEditing ? (
//         <input
//           type="file"
//           accept=".pdf,.jpg,.jpeg,.png"
//           onChange={(e) => handleFileChange(e, field)}
//           className="px-3 py-2 border border-blue-300 rounded-lg text-sm bg-white"
//         />
//       ) : (
//         <PreviewField
//   label={label}
//   value={editData.documents?.[field] ? "Uploaded" : ""}
//   fileUrl={editData.documents?.[field]}
//   highlight={field === "studentAadhaarFile" || field === "tcFile"}
// />
//       )}
//     </div>
//   ))}
//   </div>
// </section>

// </div>

//             <div className="mt-10 flex gap-4">
//               {isEditing ? (
//                 <>
//                   <button onClick={handleUpdate} disabled={isSaving} className="flex-1 bg-green-600 text-white py-4 rounded-2xl font-bold uppercase tracking-widest hover:bg-green-700 transition-all flex items-center justify-center gap-2">
//                     {isSaving ? <Loader2 className="animate-spin" /> : <Save size={20} />}
//                     {isSaving ? "Saving..." : "Save Changes"}
//                   </button>
//                   <button   onClick={() => {
//     setIsEditing(false);
//     setEditData(JSON.parse(JSON.stringify(selectedStudent)));
//   }} className="px-8 bg-gray-100 text-gray-500 py-4 rounded-2xl font-bold uppercase tracking-widest hover:bg-gray-200 transition-all flex items-center gap-2">
//                     <RotateCcw size={20} /> Cancel
//                   </button>
//                 </>
//               ) : (
//                 <><div className="flex flex-1 gap-3">


//   <button
//     onClick={handleGenerateTC}
//     className={`flex-1 text-white py-4 rounded-2xl font-bold uppercase tracking-widest transition-all ${
//       selectedStudent?.generatedTC?.isGenerated
//         ? "bg-green-600 hover:bg-green-700"
//         : "bg-orange-600 hover:bg-orange-700"
//     }`}
//   >
//     {selectedStudent?.generatedTC?.isGenerated
//       ? "Preview TC"
//       : "Generate TC"}
//   </button>

//   <button
//     onClick={() => setIsEditing(true)}
//     className="flex-1 bg-blue-600 text-white py-4 rounded-2xl font-bold uppercase tracking-widest hover:bg-blue-700 transition-all flex items-center justify-center gap-2"
//   >
//     <Edit3 size={20} />
//     Edit Profile
//   </button>

// </div>





//                   <button onClick={() => setSelectedStudent(null)} className="px-8 bg-blue-900 text-white py-4 rounded-2xl font-bold uppercase tracking-widest hover:bg-black transition-all">
//                     Close
//                   </button>
//                 </>
//               )}
//             </div>
//           </div>
//         </div>
//       )}

// {/* --- COMPACT DUAL-STAT DASHBOARD (H-20) --- */}
// <div className="max-w-7xl mx-auto mb-8 grid grid-cols-1 md:grid-cols-4 gap-4 px-4">
  
//   {/* Total Students - Registry Baseline */}
//   <div   onClick={() => {
//     setActiveFilter("all");
//     fetchStudents("");
//   }} className="bg-white rounded-full px-6 shadow-md border border-blue-50 flex items-center justify-between h-20 transition-all hover:shadow-lg">
//     <div className="flex flex-col">
//       <span className="bg-blue-600 text-white px-3 py-1 rounded-full font-black uppercase text-[12px] tracking-widest w-fit mb-1">
//         Students
//       </span>
//       <p className="text-blue-900/40 text-[10px] font-bold uppercase">Total</p>
//     </div>
//     <div className="text-right">
//       <h2 className="text-2xl font-black text-blue-900 leading-none">
//         {dashboardCounts.totalStudents}
//       </h2>
//     </div>
//   </div>

//   {/* TC Status - Pending vs Submitted */}
//   <div onClick={() => handleDashboardFilter("tc")} className="bg-red-50/50 rounded-full pl-6 pr-4 shadow-md border border-red-100 flex items-center justify-between h-20 transition-all hover:shadow-lg">
//     <div className="flex flex-col min-w-[80px]">
//       <span className="bg-blue-600 text-white px-3 py-1 rounded-full font-black uppercase text-[12px] tracking-widest w-fit mb-1">
//         TC
//       </span>
//       <p className="text-red-900/40 text-[10px] font-bold uppercase tracking-tighter">Status</p>
//     </div>
//     <div className="flex items-center space-x-4">
//       <div className="text-center">
//         <p className="text-[9px] font-black text-red-500 uppercase">Pending</p>
//         <h2 className="text-2xl font-black text-red-600 leading-none">{dashboardCounts.tcNotSubmitted}</h2>
//       </div>
//       <div className="h-8 w-[1px] bg-red-200"></div>
//       <div className="text-center">
//         <p className="text-[9px] font-black text-green-400 uppercase">Recvd</p>
//         <h2 className="text-xl font-bold text-gray-500 leading-none">{dashboardCounts.tcSubmitted}</h2>
//       </div>
//     </div>
//   </div>

//   {/* Conduct Status - Pending vs Submitted */}
//   <div onClick={() => handleDashboardFilter("conduct")} className="bg-orange-50/50 rounded-full pl-6 pr-4 shadow-md border border-orange-100 flex items-center justify-between h-20 transition-all hover:shadow-lg">
//     <div className="flex flex-col min-w-[80px]">
//       <span className="bg-blue-600 text-white px-3 py-1 rounded-full font-black uppercase text-[12px] tracking-widest w-fit mb-1">
//         Conduct
//       </span>
//       <p className="text-orange-900/40 text-[10px] font-bold uppercase tracking-tighter">Status</p>
//     </div>
//     <div className="flex items-center space-x-4">
//       <div className="text-center">
//         <p className="text-[9px] font-black text-orange-500 uppercase">Pending</p>
//         <h2 className="text-2xl font-black text-orange-600 leading-none">{dashboardCounts.conductNotSubmitted}</h2>
//       </div>
//       <div className="h-8 w-[1px] bg-orange-200"></div>
//       <div className="text-center">
//         <p className="text-[9px] font-black text-green-400 uppercase">Recvd</p>
//         <h2 className="text-xl font-bold text-gray-500 leading-none">{dashboardCounts.conductSubmitted}</h2>
//       </div>
//     </div>
//   </div>

//   {/* Marks Status - Pending vs Submitted */}
//   <div onClick={() => handleDashboardFilter("marksmemo")} className="bg-amber-50/50 rounded-full pl-6 pr-4 shadow-md border border-amber-100 flex items-center justify-between h-20 transition-all hover:shadow-lg">
//     <div className="flex flex-col min-w-[80px]">
//       <span className="bg-blue-600 text-white px-3 py-1 rounded-full font-black uppercase text-[12px] tracking-widest w-fit mb-1">
//         Marks Memo
//       </span>
//       <p className="text-amber-900/40 text-[10px] font-bold uppercase tracking-tighter">Status</p>
//     </div>
//     <div className="flex items-center space-x-4">
//       <div className="text-center">
//         <p className="text-[9px] font-black text-amber-600 uppercase">Pending</p>
//         <h2 className="text-2xl font-black text-amber-600 leading-none">{dashboardCounts.marksMemoNotSubmitted}</h2>
//       </div>
//       <div className="h-8 w-[1px] bg-amber-200"></div>
//       <div className="text-center">
//         <p className="text-[9px] font-black text-green-400 uppercase">Recvd</p>
//         <h2 className="text-xl font-bold text-gray-500 leading-none">{dashboardCounts.marksMemoSubmitted}</h2>
//       </div>
//     </div>
//   </div>

// </div>



//       {/* --- TABLE INTERFACE --- */}
//       <div className="max-w-6xl mx-auto ">
//         <div className="bg-white rounded-[2rem] shadow-xl border border-gray-100">
//           <div className="p-8">
//             <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
//               <div>
//                 <h2 className="text-3xl font-black text-blue-900 tracking-tight">
//   {activeFilter === "tc"
//     ? "Showing Pending TC Records"
//     : activeFilter === "conduct"
//     ? "Showing Pending Conduct Records"
//     : activeFilter === "marksmemo"
//     ? "Showing Pending Marks Memo Records"
//     : "Student Database"}
// </h2>
//                 <p className="text-gray-400 text-sm font-medium italic">Showing {students.length} record(s)</p>
//               </div>
//               <div className="flex gap-3 w-full md:w-auto items-center">
//                 <button
//   onClick={handleExcelDownload}
//   className="bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-2xl font-bold uppercase text-xs tracking-widest shadow-md whitespace-nowrap"
// >
//   Download Excel
// </button>
//                 <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
//                 <input
//                   type="text"
//                   placeholder="Search student by name..."
//                   className="w-full pl-12 pr-4 py-3 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all text-sm font-medium outline-none"
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                 />
//               </div>
//             </div>

//             <div className="overflow-x-auto">
//               <table className="w-full border-separate border-spacing-y-2">
//                 <thead>
//                   <tr className="text-gray-400 text-left">
//                     <th className="px-6 py-3 text-[15px] font-black uppercase tracking-widest">Admission No</th>
//                     <th className="px-6 py-3 text-[15px] font-black uppercase tracking-widest">Student Name</th>
//                     <th className="px-6 py-3 text-[15px] font-black uppercase tracking-widest">Father's Name</th>
//                     <th className="px-6 py-3 text-[15px] font-black uppercase tracking-widest">Date of Birth</th>
//                     <th className="px-6 py-3 text-[15px] font-black uppercase tracking-widest text-right">Action</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {loading ? (
//                     <tr>
//                       <td colSpan="5" className="p-20 text-center">
//                         <Loader2 className="animate-spin inline text-blue-600" />
//                         <p className="text-gray-400 mt-2 font-bold uppercase text-xs tracking-widest">Loading Database...</p>
//                       </td>
//                     </tr>
//                   ) : students.length > 0 ? (
//                     students.map((student) => (
//                       <tr 
//                         key={student._id} 
//                         onClick={() => handleOpenProfile(student)}
//                         className="group cursor-pointer bg-white hover:bg-blue-50/50 transition-all"
//                       >
//                         <td className="px-6 py-4 rounded-l-2xl border-y border-l border-gray-50 group-hover:border-blue-100">
//                           <span className="bg-gray-100 group-hover:bg-blue-100 text-gray-600 group-hover:text-blue-700 px-3 py-1 rounded-lg text-xs font-bold">
//                             {student.admissionInfo?.admissionNo || 'N/A'}
//                           </span>
//                         </td>
//                         <td className="px-6 py-4 border-y border-gray-50 group-hover:border-blue-100 font-bold text-blue-900">
//                           {student.name}
//                         </td>
//                         <td className="px-6 py-4 border-y border-gray-50 group-hover:border-blue-100 text-gray-500 font-medium">
//                           {student.parentDetails?.fatherName || 'N/A'}
//                         </td>
//                         <td className="px-6 py-4 border-y border-gray-50 group-hover:border-blue-100 text-gray-400 font-medium">
//                           {student.dob ? new Date(student.dob).toLocaleDateString('en-GB') : 'N/A'}
//                         </td>
//                         <td className="px-6 py-4 rounded-r-2xl border-y border-r border-gray-50 group-hover:border-blue-100 text-right">
//                           <button className="text-[10px] font-black uppercase text-blue-600 bg-blue-50 px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-all">
//                             View Details
//                           </button>
//                         </td>
//                       </tr>
//                     ))
//                   ) : (
//                     <tr>
//                       <td colSpan="5" className="p-20 text-center text-gray-400 italic">
//                         No students found.
//                       </td>
//                     </tr>
//                   )}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const Loader2 = ({ className }) => (
//   <svg className={`animate-spin ${className}`} width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
//     <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
//   </svg>
// );

// export default StudentTable;







// 21-05-2026













import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Search, FileUser, X, GraduationCap, MapPin, UserCircle, Edit3, Save, RotateCcw } from 'lucide-react';
import TransferCertificate from './TransferCertificate';

/**
 * REUSABLE EDITABLE FIELD COMPONENT 
 */
const EditableField = ({ 
  label, 
  name, 
  value, 
  onChange, 
  isEditing, 
  highlight = false, 
  type = "text",
  options = null
}) => (
  <div className="flex flex-col space-y-1">
    <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">
      {label}
    </p>

    {isEditing ? (
      options ? (
        <select
          name={name}
          value={value || ""}
          onChange={onChange}
          className="px-3 py-2 border border-blue-400 rounded-lg text-sm bg-white focus:ring-2 focus:ring-blue-500 outline-none transition-all font-medium text-blue-900"
        >
          <option value="">Select</option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          name={name}
          value={value || ""}
          onChange={onChange}
          className="px-3 py-2 border border-blue-400 rounded-lg text-sm bg-white focus:ring-2 focus:ring-blue-500 outline-none transition-all font-medium text-blue-900"
        />
      )
    ) : (
      <div
        className={`px-3 py-2 border rounded-lg text-sm transition-all ${
          highlight
            ? "bg-blue-50 border-blue-200 text-blue-900 font-bold"
            : "bg-gray-50 border-gray-200 text-gray-800 font-medium"
        }`}
      >
        {value || <span className="text-gray-300 italic">Not Recorded</span>}
      </div>
    )}
  </div>
);
const PreviewField = ({ 
  label, 
  value, 
  highlight = false, 
  fileUrl = null 
}) => (
  <div className="flex flex-col space-y-1">
    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
      {label}
    </p>

    <div
      className={`px-3 py-2 border rounded-lg text-sm transition-all ${
        highlight
          ? "bg-blue-50 border-blue-200 text-blue-900 font-bold"
          : "bg-gray-50 border-gray-200 text-gray-800 font-medium"
      }`}
    >
      {value ? (
        <div className="flex items-center justify-between gap-2">
          <span className="truncate">{value}</span>

          {fileUrl && (
            <a
              href={fileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs bg-blue-600 text-white px-2 py-1 rounded hover:bg-black"
            >
              View
            </a>
          )}
        </div>
      ) : (
        <span className="text-gray-300 italic">Not Recorded</span>
      )}
    </div>
  </div>
);
const StudentTable = () => {


  const baseURL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';
  const [students, setStudents] = useState([]);
  const [viewingTC, setViewingTC] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  
  const [selectedStudent, setSelectedStudent] = useState(null); 
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState(null);
  const [isSaving, setIsSaving] = useState(false);
  const [dashboardCounts, setDashboardCounts] = useState({
  totalStudents: 0,
  tcSubmitted: 0,
  tcNotSubmitted: 0,
  conductSubmitted: 0,
  conductNotSubmitted: 0,
  marksMemoSubmitted: 0,
  marksMemoNotSubmitted: 0
});
const [activeFilter, setActiveFilter] = useState("all");


const fetchDashboardCounts = async () => {
  try {
  const response = await axios.get(`${baseURL}/api/students/dashboard-counts`);
    // const response = await axios.get(
    //   "http://localhost:5000/api/students/dashboard-counts"
    // );

    setDashboardCounts(response.data);

  } catch (error) {
    console.error("Dashboard fetch error:", error);
  }
};

  // FETCH FUNCTION
  const fetchStudents = async (query = "", pendingType = "") => {
  setLoading(true);

  try {
   let url = `${baseURL}/api/students/search?name=${query}`;
    // let url = `http://localhost:5000/api/students/search?name=${query}`;

    if (pendingType) {
      url += `&pending=${pendingType}`;
    }

    const response = await axios.get(url);

    setStudents(response.data);

  } catch (error) {
    console.error("Error fetching students:", error);

  } finally {
    setLoading(false);
  }
};

  // DEBOUNCED SEARCH & INITIAL LOAD
  useEffect(() => {
    fetchDashboardCounts();
    const delayDebounceFn = setTimeout(() => {
      fetchStudents(searchTerm);
    }, 400); // Slightly longer debounce for smoother UX

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm]);

const handleOpenProfile = async (student) => {
  try {
    // Fetch latest student record from DB
    // const response = await axios.get(
      
    //   `http://localhost:5000/api/students/${student._id}`
    // );
const response = await axios.get(`${baseURL}/api/students/${student._id}`);
    const freshStudent = JSON.parse(
      JSON.stringify(response.data)
    );

    // ALWAYS OPEN MODAL FIRST
    setSelectedStudent(freshStudent);

    setEditData(
      JSON.parse(JSON.stringify(freshStudent))
    );

    setIsEditing(false);

    // IMPORTANT
    // DO NOT AUTO OPEN TC
    setViewingTC(false);

  } catch (error) {
    console.error("Profile open error:", error);

    const fallbackStudent = JSON.parse(
      JSON.stringify(student)
    );

    setSelectedStudent(fallbackStudent);

    setEditData(
      JSON.parse(JSON.stringify(fallbackStudent))
    );

    setIsEditing(false);

    // IMPORTANT
    setViewingTC(false);
  }
};

const handleDashboardFilter = (type) => {
  setActiveFilter(type);
  fetchStudents("", type);
};

const handleFileChange = async (e, fieldName) => {
  const file = e.target.files[0];
  if (!file) return;

  const formData = new FormData();
  formData.append("file", file);

  try {
    const response = await axios.post(
  `${baseURL}/api/students/upload/${editData._id}/${fieldName}`,
      // `http://localhost:5000/api/students/upload/${editData._id}/${fieldName}`,
  formData
);

const updatedStudent = response.data.updatedStudent;

// Update edit form instantly
setEditData(JSON.parse(JSON.stringify(updatedStudent)));

// Update modal preview instantly
setSelectedStudent(JSON.parse(JSON.stringify(updatedStudent)));

// Update table instantly
setStudents(prev =>
  prev.map(student =>
    student._id === updatedStudent._id ? updatedStudent : student
  )
);
fetchDashboardCounts();
    alert("File uploaded successfully!");

  } catch (error) {
    console.error("UPLOAD ERROR:", error.response?.data || error.message);

    alert(
      error.response?.data?.error || "File upload failed"
    );
  }
};



  const handleEditChange = (e) => {
  const { name, value } = e.target;

  // Parent Details
  if (
    [
      "fatherName", "fatherMobile", "fatherAadhaar", "fatherQualification", "fatherOccupation", "fatherAnnualIncome",
      "motherName", "motherMobile", "motherAadhaar", "motherQualification", "motherOccupation", "motherAnnualIncome",
      "guardianName", "guardianRelation", "guardianMobile", "guardianAadhaar", "guardianOccupation", "guardianAnnualIncome",
      "residence"
    ].includes(name)
  ) {
    setEditData(prev => ({
      ...prev,
      parentDetails: {
        ...prev.parentDetails,
        [name]: value
      }
    }));
    return;
  }

  // Admission Info
  if (
    [
      "admissionNo",
      "classAdmittedTo",
      "previousSchoolName",
      "previousTCNumber",
      "previousTCDate"
    ].includes(name)
  ) {
    setEditData(prev => ({
      ...prev,
      admissionInfo: {
        ...prev.admissionInfo,
        [name]: value
      }
    }));
    return;
  }

  // Main Student Fields
  setEditData(prev => ({
    ...prev,
    [name]: value
  }));
};

  const handleUpdate = async () => {
  setIsSaving(true);

  try {
  const payload = {
  ...editData,
  generatedTC: {
    ...selectedStudent.generatedTC,
    ...editData.generatedTC
  }
};

const response = await axios.put(`${baseURL}/api/students/${editData._id}`,
  payload
);

    const updatedStudent = response.data.updatedStudent;

    // UPDATE TABLE
    setStudents(prev =>
      prev.map(student =>
        student._id === updatedStudent._id ? updatedStudent : student
      )
    );

    // UPDATE MODAL
    setSelectedStudent(updatedStudent);

    // UPDATE EDIT FORM
    setEditData(JSON.parse(JSON.stringify(updatedStudent)));

    // OPTIONAL REFRESH
    await fetchStudents(searchTerm);

    setIsEditing(false);

    alert("Student record updated successfully!");

  } catch (error) {
    console.error("Update failed:", error.response?.data || error.message);
    alert("Failed to update record.");
  } finally {
    setIsSaving(false);
  }
};


const handleExcelDownload = async () => {
  try {
    const response = await axios.get(
      `${baseURL}/api/students/export-excel?pending=${activeFilter}`,
      // `http://localhost:5000/api/students/export-excel?pending=${activeFilter}`,
      {
        responseType: "blob"
      }
    );

    const blob = new Blob([response.data], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    });

    const url = window.URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;

    link.download =
      activeFilter === "all"
        ? "all_students.xlsx"
        : `pending_${activeFilter}_students.xlsx`;

    document.body.appendChild(link);
    link.click();
    link.remove();

    window.URL.revokeObjectURL(url);

  } catch (error) {
    console.error("Excel download failed:", error);
    alert("Failed to download Excel.");
  }
};


// 3. Update the Return Statement (Conditional Rendering)
if (viewingTC) {
  return (
 <TransferCertificate
  data={selectedStudent}
  isEditable={true}
  onBack={async () => {
        // Close TC screen
        setViewingTC(false);

        // Clear selected student
        setSelectedStudent(null);

        // Refresh active students table
        await fetchStudents(searchTerm);

        // Refresh dashboard counts
        await fetchDashboardCounts();
      }}
    />
  );
}

const handleGenerateTC = async () => {
  try {

    // IF TC ALREADY GENERATED
    // OPEN DIRECTLY WITHOUT RESETTING DATA
    if (selectedStudent?.generatedTC?.isGenerated) {

      // Fetch latest saved TC
      const response = await axios.get(`${baseURL}/api/students/${selectedStudent._id}`);
      // const response = await axios.get(
      //   `http://localhost:5000/api/students/${selectedStudent._id}`
      // );

      setSelectedStudent(response.data);

      setViewingTC(true);

      return;
    }

    // FIRST TIME ONLY → CREATE TC TEMPLATE
    await axios.put(
     `${baseURL}/api/students/generate-tc/${selectedStudent._id}`,
      // `http://localhost:5000/api/students/generate-tc/${selectedStudent._id}`,
      {
        tcNumber:
          selectedStudent.admissionInfo?.admissionNo || ""
      }
    );

    // FETCH UPDATED RECORD
    const response = await axios.get(
     `${baseURL}/api/students/${selectedStudent._id}`
      // `http://localhost:5000/api/students/${selectedStudent._id}`
    );

    setSelectedStudent(response.data);

    setViewingTC(true);

  } catch (error) {

    console.error("TC Open Error:", error);

    alert("Failed to open TC");
  }
};

  return (
    <div className="p-4 lg:p-8 bg-slate-50 min-h-screen font-sans text-left">
      
      {/* --- MODAL --- */}
      {selectedStudent && (
        <div className="fixed inset-0 bg-blue-900/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-[2rem] shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-10 border border-white">
            
            <header className="mb-8 border-b-2 border-blue-100 pb-6 flex justify-between items-start">
              <div className="flex gap-4 items-center">
                <div className={`p-4 rounded-2xl text-white shadow-lg transition-colors ${isEditing ? 'bg-orange-500' : 'bg-blue-600'}`}>
                   {isEditing ? <Edit3 size={32} /> : <FileUser size={32} />}
                </div>
                <div>
                  <h2 className="text-3xl font-black text-blue-900 leading-tight">
                    {isEditing ? "Edit Record" : selectedStudent.name}
                  </h2>
                  <p className="text-blue-500 text-xs font-black uppercase tracking-widest">
                    {isEditing ? "Modify necessary information below" : `Admission No: ${selectedStudent.admissionInfo?.admissionNo || 'N/A'}`}
                  </p>
                </div>
              </div>
              <button onClick={() => setSelectedStudent(null)} className="p-2 hover:bg-red-50 text-gray-400 hover:text-red-500 rounded-full">
                <X size={28} />
              </button>
            </header>

            <div className="space-y-10">

  {/* 1. Personal Identity */}
  {/* 1. Personal Identity */}
<section>
  <div className="flex items-center gap-2 mb-4 text-blue-900 font-black uppercase tracking-tighter text-sm">
    <UserCircle size={18} /> Personal Identity
  </div>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    <EditableField label="Full Name" name="name" value={editData.name} onChange={handleEditChange} isEditing={isEditing} highlight />
    <EditableField label="Aadhaar No" name="aadhaarNo" value={editData.aadhaarNo} onChange={handleEditChange} isEditing={isEditing} />
    <EditableField label="Date of Birth" name="dob" type="date" value={editData.dob?.split('T')[0]} onChange={handleEditChange} isEditing={isEditing} />
    <EditableField
  label="Gender"
  name="gender"
  value={editData.gender}
  onChange={handleEditChange}
  isEditing={isEditing}
  options={["Male", "Female", "Other"]}
/>
    {/* <EditableField label="Gender" name="gender" value={editData.gender} onChange={handleEditChange} isEditing={isEditing} /> */}
    
    <EditableField label="Nationality" name="nationality" value={editData.nationality} onChange={handleEditChange} isEditing={isEditing} />
    <EditableField label="Religion" name="religion" value={editData.religion} onChange={handleEditChange} isEditing={isEditing} />
    <EditableField label="Caste" name="caste" value={editData.caste} onChange={handleEditChange} isEditing={isEditing} />
    <EditableField label="Mother Tongue" name="motherTongue" value={editData.motherTongue} onChange={handleEditChange} isEditing={isEditing} />
    <EditableField label="State" name="state" value={editData.state} onChange={handleEditChange} isEditing={isEditing} />

    {/* NEW FIELDS FROM ADMISSION FORM */}
    <EditableField label="UDISE + Number" name="udisePlus" value={editData.udisePlus} onChange={handleEditChange} isEditing={isEditing} />
    <EditableField label="Siblings Info" name="siblings" value={editData.siblings} onChange={handleEditChange} isEditing={isEditing} />
    <EditableField
  label="CWSN Status"
  name="cwsn"
  value={editData.cwsn}
  onChange={handleEditChange}
  isEditing={isEditing}
  highlight={editData.cwsn && editData.cwsn !== "None"}
  options={[
    "None",
    "Locomotor Disability",
    "Visual Impairment",
    "Hearing Impairment",
    "Speech & Language",
    "Intellectual Disability",
    "Other"
  ]}
/>
    {/* <EditableField label="CWSN Status" name="cwsn" value={editData.cwsn} onChange={handleEditChange} isEditing={isEditing} highlight={editData.cwsn && editData.cwsn !== "None"} /> */}
    
    <EditableField label="First Language" name="firstLanguage" value={editData.firstLanguage} onChange={handleEditChange} isEditing={isEditing} />
    <EditableField label="Second Language" name="secondLanguage" value={editData.secondLanguage} onChange={handleEditChange} isEditing={isEditing} />
    <EditableField label="Third Language" name="thirdLanguage" value={editData.thirdLanguage} onChange={handleEditChange} isEditing={isEditing} />
  </div>
</section>

  {/* 2. Family Records */}
  <section className="pt-6 border-t border-gray-100">
    <div className="flex items-center gap-2 mb-4 text-blue-900 font-black uppercase tracking-tighter text-sm">
      <MapPin size={18} /> Family Records
    </div>

    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-gray-50 p-4 rounded-xl">
        <EditableField label="Father Name" name="fatherName" value={editData.parentDetails?.fatherName} onChange={handleEditChange} isEditing={isEditing} highlight />
        <EditableField label="Father Mobile" name="fatherMobile" value={editData.parentDetails?.fatherMobile} onChange={handleEditChange} isEditing={isEditing} />
        <EditableField label="Father Aadhaar" name="fatherAadhaar" value={editData.parentDetails?.fatherAadhaar} onChange={handleEditChange} isEditing={isEditing} />
        <EditableField label="Father Qualification" name="fatherQualification" value={editData.parentDetails?.fatherQualification} onChange={handleEditChange} isEditing={isEditing} />
        <EditableField label="Father Occupation" name="fatherOccupation" value={editData.parentDetails?.fatherOccupation} onChange={handleEditChange} isEditing={isEditing} />
        <EditableField label="Father Income" name="fatherAnnualIncome" value={editData.parentDetails?.fatherAnnualIncome} onChange={handleEditChange} isEditing={isEditing} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-gray-50 p-4 rounded-xl">
        <EditableField label="Mother Name" name="motherName" value={editData.parentDetails?.motherName} onChange={handleEditChange} isEditing={isEditing} />
        <EditableField label="Mother Mobile" name="motherMobile" value={editData.parentDetails?.motherMobile} onChange={handleEditChange} isEditing={isEditing} />
        <EditableField label="Mother Aadhaar" name="motherAadhaar" value={editData.parentDetails?.motherAadhaar} onChange={handleEditChange} isEditing={isEditing} />
        <EditableField label="Mother Qualification" name="motherQualification" value={editData.parentDetails?.motherQualification} onChange={handleEditChange} isEditing={isEditing} />
        <EditableField label="Mother Occupation" name="motherOccupation" value={editData.parentDetails?.motherOccupation} onChange={handleEditChange} isEditing={isEditing} />
        <EditableField label="Mother Income" name="motherAnnualIncome" value={editData.parentDetails?.motherAnnualIncome} onChange={handleEditChange} isEditing={isEditing} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-gray-50 p-4 rounded-xl">
        <EditableField label="Guardian Name" name="guardianName" value={editData.parentDetails?.guardianName} onChange={handleEditChange} isEditing={isEditing} />
        <EditableField label="Guardian Relation" name="guardianRelation" value={editData.parentDetails?.guardianRelation} onChange={handleEditChange} isEditing={isEditing} />
        <EditableField label="Guardian Mobile" name="guardianMobile" value={editData.parentDetails?.guardianMobile} onChange={handleEditChange} isEditing={isEditing} />
        <EditableField label="Guardian Aadhaar" name="guardianAadhaar" value={editData.parentDetails?.guardianAadhaar} onChange={handleEditChange} isEditing={isEditing} />
        <EditableField label="Guardian Occupation" name="guardianOccupation" value={editData.parentDetails?.guardianOccupation} onChange={handleEditChange} isEditing={isEditing} />
        <EditableField label="Guardian Income" name="guardianAnnualIncome" value={editData.parentDetails?.guardianAnnualIncome} onChange={handleEditChange} isEditing={isEditing} />
      </div>

      <EditableField label="Residence Address" name="residence" value={editData.parentDetails?.residence} onChange={handleEditChange} isEditing={isEditing} highlight />
    </div>
  </section>

  {/* 3. Academic Information */}
  <section className="pt-6 border-t border-gray-100">
    <div className="flex items-center gap-2 mb-4 text-blue-900 font-black uppercase tracking-tighter text-sm">
      <GraduationCap size={18} /> Academic Information
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <EditableField label="Admission No" name="admissionNo" value={editData.admissionInfo?.admissionNo} onChange={handleEditChange} isEditing={isEditing} highlight />
      <EditableField label="Class Admitted To" name="classAdmittedTo" value={editData.admissionInfo?.classAdmittedTo} onChange={handleEditChange} isEditing={isEditing} />
      <EditableField label="Previous School" name="previousSchoolName" value={editData.admissionInfo?.previousSchoolName} onChange={handleEditChange} isEditing={isEditing} />
      <EditableField label="Previous TC Number" name="previousTCNumber" value={editData.admissionInfo?.previousTCNumber} onChange={handleEditChange} isEditing={isEditing} />
      <EditableField label="Previous TC Date" name="previousTCDate" type="date" value={editData.admissionInfo?.previousTCDate?.split('T')[0]} onChange={handleEditChange} isEditing={isEditing} />
    </div>
  </section>
  <section className="pt-6 border-t border-gray-100">
  <div className="flex items-center gap-2 mb-4 text-blue-900 font-black uppercase tracking-tighter text-sm">
    <FileUser size={18} /> Uploaded Documents
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    {[
    ["studentAadhaarFile", "Student Aadhaar File"],
    ["fatherAadhaarFile", "Father Aadhaar File"],
    ["motherAadhaarFile", "Mother Aadhaar File"],
    ["guardianAadhaarFile", "Guardian Aadhaar File"],
    ["tcFile", "Transfer Certificate"],
    ["conductFile", "Conduct Certificate"],
    ["marksMemoFile", "Marks Memo"]
  ].map(([field, label]) => (
    <div key={field} className="flex flex-col space-y-1">
      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
        {label}
      </p>

      {isEditing ? (
        <input
          type="file"
          accept=".pdf,.jpg,.jpeg,.png"
          onChange={(e) => handleFileChange(e, field)}
          className="px-3 py-2 border border-blue-300 rounded-lg text-sm bg-white"
        />
      ) : (
        <PreviewField
  label={label}
  value={editData.documents?.[field] ? "Uploaded" : ""}
  fileUrl={editData.documents?.[field]}
  highlight={field === "studentAadhaarFile" || field === "tcFile"}
/>
      )}
    </div>
  ))}
  </div>
</section>

</div>

            <div className="mt-10 flex gap-4">
              {isEditing ? (
                <>
                  <button onClick={handleUpdate} disabled={isSaving} className="flex-1 bg-green-600 text-white py-4 rounded-2xl font-bold uppercase tracking-widest hover:bg-green-700 transition-all flex items-center justify-center gap-2">
                    {isSaving ? <Loader2 className="animate-spin" /> : <Save size={20} />}
                    {isSaving ? "Saving..." : "Save Changes"}
                  </button>
                  <button   onClick={() => {
    setIsEditing(false);
    setEditData(JSON.parse(JSON.stringify(selectedStudent)));
  }} className="px-8 bg-gray-100 text-gray-500 py-4 rounded-2xl font-bold uppercase tracking-widest hover:bg-gray-200 transition-all flex items-center gap-2">
                    <RotateCcw size={20} /> Cancel
                  </button>
                </>
              ) : (
                <><div className="flex flex-1 gap-3">


  <button
    onClick={handleGenerateTC}
    className={`flex-1 text-white py-4 rounded-2xl font-bold uppercase tracking-widest transition-all ${
      selectedStudent?.generatedTC?.isGenerated
        ? "bg-green-600 hover:bg-green-700"
        : "bg-orange-600 hover:bg-orange-700"
    }`}
  >
    {selectedStudent?.generatedTC?.isGenerated
      ? "Preview TC"
      : "Generate TC"}
  </button>

  <button
    onClick={() => setIsEditing(true)}
    className="flex-1 bg-blue-600 text-white py-4 rounded-2xl font-bold uppercase tracking-widest hover:bg-blue-700 transition-all flex items-center justify-center gap-2"
  >
    <Edit3 size={20} />
    Edit Profile
  </button>

</div>





                  <button onClick={() => setSelectedStudent(null)} className="px-8 bg-blue-900 text-white py-4 rounded-2xl font-bold uppercase tracking-widest hover:bg-black transition-all">
                    Close
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}

{/* =========================
   MODERN ANALYTICS DASHBOARD
========================= */}
<div className="max-w-7xl mx-auto px-4 mb-8">

  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">

    {/* TOTAL STUDENTS */}
    <div
      onClick={() => {
        setActiveFilter("all");
        fetchStudents("");
      }}
      className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100 hover:shadow-lg transition-all cursor-pointer group"
    >
      <div className="flex items-start justify-between">

        <div>
          <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-800">
            Total Students
          </p>

          <h2 className="text-4xl font-black text-slate-900 mt-3">
            {dashboardCounts.totalStudents}
          </h2>

          <p className="text-sm text-gray-400 mt-1 font-medium">
            Registered database records
          </p>
        </div>

        <div className="h-14 w-14 rounded-2xl bg-blue-50 flex items-center justify-center">
          <GraduationCap className="text-blue-600" size={28} />
        </div>
      </div>
    </div>

    {/* TC */}
    <div
      onClick={() => handleDashboardFilter("tc")}
      className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100 hover:shadow-lg transition-all cursor-pointer"
    >
      <div className="flex justify-between items-start">

        <div>
          <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-800">
            Transfer Certificate
          </p>

          <div className="flex items-end gap-4 mt-4">

            <div>
              <h2 className="text-3xl font-black text-red-600">
                {dashboardCounts.tcNotSubmitted}
              </h2>
              <p className="text-xs uppercase font-bold text-red-400">
                Pending
              </p>
            </div>

            <div className="h-10 w-[1px] bg-gray-200"></div>

            <div>
              <h2 className="text-2xl font-black text-green-600">
                {dashboardCounts.tcSubmitted}
              </h2>
              <p className="text-xs uppercase font-bold text-green-400">
                Received
              </p>
            </div>

          </div>
        </div>

        <div className="h-14 w-14 rounded-2xl bg-red-50 flex items-center justify-center">
          <FileUser className="text-red-500" size={26} />
        </div>
      </div>
    </div>

    {/* CONDUCT */}
    <div
      onClick={() => handleDashboardFilter("conduct")}
      className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100 hover:shadow-lg transition-all cursor-pointer"
    >
      <div className="flex justify-between items-start">

        <div>
          <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-800">
            Conduct Certificate
          </p>

          <div className="flex items-end gap-4 mt-4">

            <div>
              <h2 className="text-3xl font-black text-orange-600">
                {dashboardCounts.conductNotSubmitted}
              </h2>
              <p className="text-xs uppercase font-bold text-red-400">
                Pending
              </p>
            </div>

            <div className="h-10 w-[1px] bg-gray-200"></div>

            <div>
              <h2 className="text-2xl font-black text-green-600">
                {dashboardCounts.conductSubmitted}
              </h2>
              <p className="text-xs uppercase font-bold text-green-400">
                Received
              </p>
            </div>

          </div>
        </div>

        <div className="h-14 w-14 rounded-2xl bg-orange-50 flex items-center justify-center">
          <UserCircle className="text-orange-500" size={26} />
        </div>
      </div>
    </div>

    {/* MARKS MEMO */}
    <div
      onClick={() => handleDashboardFilter("marksmemo")}
      className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100 hover:shadow-lg transition-all cursor-pointer"
    >
      <div className="flex justify-between items-start">

        <div>
          <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-800">
            Marks Memo
          </p>

          <div className="flex items-end gap-4 mt-4">

            <div>
              <h2 className="text-3xl font-black text-amber-600">
                {dashboardCounts.marksMemoNotSubmitted}
              </h2>
              <p className="text-xs uppercase font-bold text-red-400">
                Pending
              </p>
            </div>

            <div className="h-10 w-[1px] bg-gray-200"></div>

            <div>
              <h2 className="text-2xl font-black text-green-600">
                {dashboardCounts.marksMemoSubmitted}
              </h2>
              <p className="text-xs uppercase font-bold text-green-400">
                Received
              </p>
            </div>

          </div>
        </div>

        <div className="h-14 w-14 rounded-2xl bg-amber-50 flex items-center justify-center">
          <FileUser className="text-amber-500" size={26} />
        </div>
      </div>
    </div>

  </div>
</div>



      {/* --- TABLE INTERFACE --- */}
      <div className="max-w-6xl mx-auto ">
        <div className="bg-white rounded-[2rem] shadow-xl border border-gray-100">
          <div className="p-8">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
              <div>
                <h2 className="text-3xl font-black text-blue-900 tracking-tight">
  {activeFilter === "tc"
    ? "Showing Pending TC Records"
    : activeFilter === "conduct"
    ? "Showing Pending Conduct Records"
    : activeFilter === "marksmemo"
    ? "Showing Pending Marks Memo Records"
    : "Student Database"}
</h2>
                <p className="text-gray-400 text-sm font-medium italic">Showing {students.length} record(s)</p>
              </div>
              <div className="flex gap-3 w-full md:w-auto items-center">
                <button
  onClick={handleExcelDownload}
  className="bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-2xl font-bold uppercase text-xs tracking-widest shadow-md whitespace-nowrap"
>
  Download Excel
</button>
                {/* <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={12} /> */}
                <input
                  type="text"
                  placeholder="Search student by name..."
                  className="w-full pl-12 pr-4 py-3 bg-gray-50 border-1 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all text-sm font-medium outline-none"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-separate border-spacing-y-2">
                <thead>
                  <tr className="text-gray-400 text-left">
                    <th className="px-6 py-3 text-[15px] font-black uppercase tracking-widest">Admission No</th>
                    <th className="px-6 py-3 text-[15px] font-black uppercase tracking-widest">Student Name</th>
                    <th className="px-6 py-3 text-[15px] font-black uppercase tracking-widest">Father's Name</th>
                    <th className="px-6 py-3 text-[15px] font-black uppercase tracking-widest">Date of Birth</th>
                    <th className="px-6 py-3 text-[15px] font-black uppercase tracking-widest text-right">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {loading ? (
                    <tr>
                      <td colSpan="5" className="p-20 text-center">
                        <Loader2 className="animate-spin inline text-blue-600" />
                        <p className="text-gray-400 mt-2 font-bold uppercase text-xs tracking-widest">Loading Database...</p>
                      </td>
                    </tr>
                  ) : students.length > 0 ? (
                    students.map((student) => (
                      <tr 
                        key={student._id} 
                        onClick={() => handleOpenProfile(student)}
                        className="group cursor-pointer bg-white hover:bg-blue-50/50 transition-all"
                      >
                        <td className="px-6 py-4 rounded-l-2xl border-y border-l border-gray-50 group-hover:border-blue-100">
                          <span className="bg-gray-100 group-hover:bg-blue-100 text-gray-600 group-hover:text-blue-700 px-3 py-1 rounded-lg text-xs font-bold">
                            {student.admissionInfo?.admissionNo || 'N/A'}
                          </span>
                        </td>
                        <td className="px-6 py-4 border-y border-gray-50 group-hover:border-blue-100 font-bold text-blue-900">
                          {student.name}
                        </td>
                        <td className="px-6 py-4 border-y border-gray-50 group-hover:border-blue-100 text-gray-500 font-medium">
                          {student.parentDetails?.fatherName || 'N/A'}
                        </td>
                        <td className="px-6 py-4 border-y border-gray-50 group-hover:border-blue-100 text-gray-400 font-medium">
                          {student.dob ? new Date(student.dob).toLocaleDateString('en-GB') : 'N/A'}
                        </td>
                        <td className="px-6 py-4 rounded-r-2xl border-y border-r border-gray-50 group-hover:border-blue-100 text-right">
                          <button className="text-[10px] font-black uppercase text-blue-600 bg-blue-50 px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-all">
                            View Details
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="5" className="p-20 text-center text-gray-400 italic">
                        No students found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Loader2 = ({ className }) => (
  <svg className={`animate-spin ${className}`} width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
  </svg>
);

export default StudentTable;