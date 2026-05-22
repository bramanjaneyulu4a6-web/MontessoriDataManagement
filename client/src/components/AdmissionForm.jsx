
// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';

// // /**
// //  * REUSABLE FORM INPUT COMPONENT
// //  */
// // // FIX 1: UPGRADE FormInput COMPONENT
// // // Replace your current FormInput with this version

// // const FormInput = ({
// //   label,
// //   name,
// //   type = "text",
// //   placeholder = "",
// //   required = false,
// //   value,
// //   onChange,
// //   onFileChange,
// //   showUpload = false,
// //   uploadedFileName = ""
// // }) => (
// //   <div className="flex flex-col space-y-1">
// //     <div className="flex justify-between items-center">
// //       <label className="text-xs font-bold text-gray-600 uppercase tracking-tight">
// //         {label}
// //       </label>

// //       {showUpload && (
// //         <label className="cursor-pointer flex flex-col items-end">
// //           <span className="text-[10px] font-bold text-blue-600 hover:text-blue-800 transition-colors uppercase decoration-dotted underline underline-offset-2">
// //             Upload
// //           </span>

// //           <input
// //             type="file"
// //             className="hidden"
// //             onChange={(e) => onFileChange(name, e.target.files[0])}
// //           />

// //           {uploadedFileName && (
// //             <span className="text-[9px] text-green-600 font-bold mt-1">
// //               ✓ {uploadedFileName}
// //             </span>
// //           )}
// //         </label>
// //       )}
// //     </div>

// //     <input
// //       type={type}
// //       name={name}
// //       value={value || ""}
// //       placeholder={placeholder}
// //       required={required}
// //       onChange={onChange}
// //       className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all bg-gray-50 text-sm"
// //     />
// //   </div>
// // );

// // /**
// //  * REUSABLE PREVIEW FIELD COMPONENT 
// //  */
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
// //       className={`px-3 py-2 border rounded-md text-sm transition-all ${
// //         highlight
// //           ? "bg-blue-50 border-blue-200 text-blue-900 font-bold"
// //           : "bg-gray-50 border-gray-200 text-gray-800 font-medium"
// //       }`}
// //     >
// //       {value ? (
// //         <div className="flex items-center justify-between gap-2">
// //           <span className="truncate">{value}</span>

// //           {fileUrl && (
// //   <a
// //     href={fileUrl}
// //     target="_blank"
// //     rel="noopener noreferrer"
// //     className="text-xs bg-blue-600 text-white px-2 py-1 rounded hover:bg-black"
// //   >
// //     View
// //   </a>
// // )}
// //         </div>
// //       ) : (
// //         <span className="text-gray-300 italic">Not Recorded</span>
// //       )}
// //     </div>
// //   </div>
// // );

// // const AdmissionForm = () => {
// //   const initialFormState = {
// //     name: '',
// //     dob: '',
// //     gender: '',
// //     aadhaarNo: '',
// //     nationality: 'Indian',
// //     religion: '',
// //     caste: '',
// //     motherTongue: '',
// //     state: '',
// //     parentDetails: { 
// //       fatherName: '', fatherAadhaar: '', fatherOccupation: '', fatherQualification: '', fatherAnnualIncome: '', fatherMobile: '',
// //       motherName: '', motherAadhaar: '', motherOccupation: '', motherQualification: '', motherAnnualIncome: '', motherMobile: '',
// //       guardianName: '', guardianAadhaar: '', guardianOccupation: '', guardianQualification: '', guardianAnnualIncome: '', guardianMobile: '', guardianRelation: '',
// //       residence: '' 
// //     },
// //     admissionInfo: { 
// //       admissionNo: '', classAdmittedTo: '', previousSchoolName: '', previousTCNumber: '', previousTCDate: '' 
// //     },
// //     documents: {
// //       hasTC: false,
// //       hasConduct: false,
// //       hasMarksMemo: false
// //     }
// //   };

// //   const [formData, setFormData] = useState(initialFormState);
// //   const [files, setFiles] = useState({}); 
// //   const [duplicates, setDuplicates] = useState([]);
// //   const [selectedStudent, setSelectedStudent] = useState(null); 
// //   const [isSubmitting, setIsSubmitting] = useState(false);

// //   const handleSubmit = async (e) => {
// //   e.preventDefault();
// //   setIsSubmitting(true);

// //   const submissionData = new FormData();
// //   submissionData.append('data', JSON.stringify(formData));
  
// //   // Explicitly map files to the field names expected by your Schema/Backend logic
// //   // These names (e.g., 'tcFile') must match your schema's document keys
// //   if (files.tcFile) submissionData.append('tcFile', files.tcFile);
// //   if (files.conductFile) submissionData.append('conductFile', files.conductFile);
// //   if (files.marksMemoFile) submissionData.append('marksMemoFile', files.marksMemoFile);
  
// //   // Handle Aadhaar uploads
// //   if (files.aadhaarNo) submissionData.append('studentAadhaarFile', files.aadhaarNo);
// //   if (files.fatherAadhaar) submissionData.append('fatherAadhaarFile', files.fatherAadhaar);
// //   if (files.motherAadhaar) submissionData.append('motherAadhaarFile', files.motherAadhaar);
// //   if (files.guardianAadhaar) submissionData.append('guardianAadhaarFile', files.guardianAadhaar);

// //   try {
// //     // FIX 4: ADD FINAL SUBMIT VALIDATION
// // // Inside handleSubmit BEFORE axios.post()

// // console.log("FILES BEING SENT:", files);

// // if (files.aadhaarNo) {
// //   console.log("Student Aadhaar:", files.aadhaarNo.name);
// // }
// // if (files.fatherAadhaar) {
// //   console.log("Father Aadhaar:", files.fatherAadhaar.name);
// // }
// // if (files.motherAadhaar) {
// //   console.log("Mother Aadhaar:", files.motherAadhaar.name);
// // }
// // if (files.guardianAadhaar) {
// //   console.log("Guardian Aadhaar:", files.guardianAadhaar.name);
// // }
// //     const res = await axios.post('http://localhost:5000/api/students/admission', submissionData, {
// //       headers: { 'Content-Type': 'multipart/form-data' }
// //     });
// //     alert("Success!");
// //     setFormData(initialFormState);
// //     setFiles({});
// //   } catch (err) {
// //     alert(err.response?.data?.message || "Error occurred");
// //   } finally { 
// //     setIsSubmitting(false); 
// //   }
// // };

// //   // FIX 2: UPGRADE handleFileChange
// // // Replace your current handleFileChange

// // const handleFileChange = (identifier, file) => {
// //   if (!file) return;

// //   setFiles((prev) => ({
// //     ...prev,
// //     [identifier]: file,
// //   }));

// //   alert(`${identifier} uploaded successfully: ${file.name}`);
// // };

// //   useEffect(() => {
// //     const searchDuplicates = async () => {
// //       try {
// //         const res = await axios.get(`http://localhost:5000/api/students/search`, {
// //           params: { name: formData.name, fatherName: formData.parentDetails.fatherName }
// //         });
// //         setDuplicates(res.data);
// //       } catch (err) { console.error("Search failed", err); }
// //     };

// //     const timer = setTimeout(() => {
// //       if (formData.name.trim().length >= 2) searchDuplicates();
// //       else setDuplicates([]);
// //     }, 300);

// //     return () => clearTimeout(timer);
// //   }, [formData.name, formData.parentDetails.fatherName]);



// //   const handleInputChange = (e) => {
// //   const { name, value, type, checked } = e.target;

// //   // Checkbox handling for documents
// //   if (name === "hasTC" || name === "hasConduct" || name === "hasMarksMemo") {
// //     setFormData((prev) => ({
// //       ...prev,
// //       documents: {
// //         ...prev.documents,
// //         [name]: checked,
// //       },
// //     }));
// //     return;
// //   }

// //   // Parent details fields
// //   if (
// //     [
// //       "fatherName",
// //       "fatherAadhaar",
// //       "fatherOccupation",
// //       "fatherQualification",
// //       "fatherAnnualIncome",
// //       "fatherMobile",
// //       "motherName",
// //       "motherAadhaar",
// //       "motherOccupation",
// //       "motherQualification",
// //       "motherAnnualIncome",
// //       "motherMobile",
// //       "guardianName",
// //       "guardianAadhaar",
// //       "guardianOccupation",
// //       "guardianQualification",
// //       "guardianAnnualIncome",
// //       "guardianMobile",
// //       "guardianRelation",
// //       "residence",
// //     ].includes(name)
// //   ) {
// //     setFormData((prev) => ({
// //       ...prev,
// //       parentDetails: {
// //         ...prev.parentDetails,
// //         [name]: value,
// //       },
// //     }));
// //     return;
// //   }

// //   // Admission info fields
// //   if (
// //     [
// //       "admissionNo",
// //       "classAdmittedTo",
// //       "previousSchoolName",
// //       "previousTCNumber",
// //       "previousTCDate",
// //     ].includes(name)
// //   ) {
// //     setFormData((prev) => ({
// //       ...prev,
// //       admissionInfo: {
// //         ...prev.admissionInfo,
// //         [name]: value,
// //       },
// //     }));
// //     return;
// //   }

// //   // Main student fields
// //   setFormData((prev) => ({
// //     ...prev,
// //     [name]: type === "checkbox" ? checked : value,
// //   }));
// // };

// //   return (
// //     <div className="flex flex-col lg:flex-row gap-6 p-4 lg:p-6 bg-slate-50 min-h-screen font-sans">
      
// //       {/* DUPLICATE PREVIEW MODAL - UPDATED WITH ALL FIELDS */}
// //       {selectedStudent && (
// //         <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 text-left">
// //           <div className="bg-white rounded-2xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto">
// //             <header className="sticky top-0 bg-white border-b border-gray-100 p-6 flex justify-between items-center z-10">
// //               <div>
// //                 <h2 className="text-2xl font-black text-red-600 uppercase">Duplicate Record Found</h2>
// //                 <p className="text-gray-500 text-[10px] font-bold tracking-widest uppercase">Compare with existing database entry</p>
// //               </div>
// //               <button onClick={() => setSelectedStudent(null)} className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-red-100 hover:text-red-600 transition-colors text-2xl">&times;</button>
// //             </header>

// //             <div className="p-8 space-y-10">
// //               {/* 1. Personal Identity */}
// //               <section>
// //                 <h3 className="text-xs font-black text-blue-800 uppercase mb-4 border-l-4 border-blue-600 pl-2">1. Personal Identity</h3>
// //                 <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
// //                   <PreviewField label="Full Name" value={selectedStudent.name} highlight />
// //                   <PreviewField label="Aadhaar No" value={selectedStudent.aadhaarNo} />
// //                   <PreviewField label="Date of Birth" value={selectedStudent.dob} />
// //                   <PreviewField label="Gender" value={selectedStudent.gender} />
// //                   <PreviewField label="Nationality" value={selectedStudent.nationality} />
// //                   <PreviewField label="Religion" value={selectedStudent.religion} />
// //                   <PreviewField label="Caste" value={selectedStudent.caste} />
// //                   <PreviewField label="Mother Tongue" value={selectedStudent.motherTongue} />
// //                   <PreviewField label="State" value={selectedStudent.state} />
// //                 </div>
// //               </section>

// //               {/* 2. Family Records */}
// //               <section>
// //                 <h3 className="text-xs font-black text-blue-800 uppercase mb-4 border-l-4 border-blue-600 pl-2">2. Family Records</h3>
                
// //                 <div className="space-y-6">
// //                   {/* Father */}
// //                   <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-gray-50/50 p-4 rounded-lg">
// //                     <PreviewField label="Father's Name" value={selectedStudent.parentDetails?.fatherName} highlight />
// //                     <PreviewField label="Father Mobile" value={selectedStudent.parentDetails?.fatherMobile} />
// //                     <PreviewField label="Father Aadhaar" value={selectedStudent.parentDetails?.fatherAadhaar} />
// //                     <PreviewField label="Father Qualification" value={selectedStudent.parentDetails?.fatherQualification} />
// //                     <PreviewField label="Father Occupation" value={selectedStudent.parentDetails?.fatherOccupation} />
// //                     <PreviewField label="Father Annual Income" value={selectedStudent.parentDetails?.fatherAnnualIncome} />
// //                   </div>

// //                   {/* Mother */}
// //                   <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-gray-50/50 p-4 rounded-lg">
// //                     <PreviewField label="Mother's Name" value={selectedStudent.parentDetails?.motherName} />
// //                     <PreviewField label="Mother Mobile" value={selectedStudent.parentDetails?.motherMobile} />
// //                     <PreviewField label="Mother Aadhaar" value={selectedStudent.parentDetails?.motherAadhaar} />
// //                     <PreviewField label="Mother Qualification" value={selectedStudent.parentDetails?.motherQualification} />
// //                     <PreviewField label="Mother Occupation" value={selectedStudent.parentDetails?.motherOccupation} />
// //                     <PreviewField label="Mother Annual Income" value={selectedStudent.parentDetails?.motherAnnualIncome} />
// //                   </div>

// //                   {/* Guardian & Residence */}
// //                   <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-gray-50/50 p-4 rounded-lg">
// //                     <PreviewField label="Guardian Name" value={selectedStudent.parentDetails?.guardianName} />
// //                     <PreviewField label="Relation" value={selectedStudent.parentDetails?.guardianRelation} />
// //                     <PreviewField label="Guardian Mobile" value={selectedStudent.parentDetails?.guardianMobile} />
// //                     <div className="md:col-span-3">
// //                       <PreviewField label="Residence Address" value={selectedStudent.parentDetails?.residence} highlight />
// //                     </div>
// //                   </div>
// //                 </div>
// //               </section>

// //               {/* 3. Academic & Admission */}
// //               <section>
// //                 <h3 className="text-xs font-black text-blue-800 uppercase mb-4 border-l-4 border-blue-600 pl-2">3. Academic & Admission</h3>
// //                 <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
// //                   <PreviewField label="Admission No" value={selectedStudent.admissionInfo?.admissionNo} highlight />
// //                   <PreviewField label="Class Admitted To" value={selectedStudent.admissionInfo?.classAdmittedTo} />
// //                   <PreviewField label="Previous School" value={selectedStudent.admissionInfo?.previousSchoolName} />
// //                   <PreviewField label="Prev. TC Number" value={selectedStudent.admissionInfo?.previousTCNumber} />
// //                   <PreviewField label="Prev. TC Date" value={selectedStudent.admissionInfo?.previousTCDate} />
// //                 </div>
// //               </section>

// //               {/* 4. Uploaded Documents */}
// // <section>
// //   <h3 className="text-xs font-black text-blue-800 uppercase mb-4 border-l-4 border-blue-600 pl-2">
// //     4. Uploaded Documents
// //   </h3>

// //   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    
// //     {/* Student Aadhaar */}
// //     <PreviewField
// //       label="Student Aadhaar File"
// //       value={selectedStudent.documents?.studentAadhaarFile ? "Uploaded" : ""}
// //       fileUrl={selectedStudent.documents?.studentAadhaarFile}
// //       highlight
// //     />

// //     {/* Father Aadhaar */}
// //     <PreviewField
// //       label="Father Aadhaar File"
// //       value={selectedStudent.documents?.fatherAadhaarFile ? "Uploaded" : ""}
// //       fileUrl={selectedStudent.documents?.fatherAadhaarFile}
// //     />

// //     {/* Mother Aadhaar */}
// //     <PreviewField
// //       label="Mother Aadhaar File"
// //       value={selectedStudent.documents?.motherAadhaarFile ? "Uploaded" : ""}
// //       fileUrl={selectedStudent.documents?.motherAadhaarFile}
// //     />

// //     {/* Guardian Aadhaar */}
// //     <PreviewField
// //       label="Guardian Aadhaar File"
// //       value={selectedStudent.documents?.guardianAadhaarFile ? "Uploaded" : ""}
// //       fileUrl={selectedStudent.documents?.guardianAadhaarFile}
// //     />

// //     {/* TC */}
// //     <PreviewField
// //       label="Transfer Certificate"
// //       value={selectedStudent.documents?.tcFile ? "Uploaded" : ""}
// //       fileUrl={selectedStudent.documents?.tcFile}
// //       highlight
// //     />

// //     {/* Conduct */}
// //     <PreviewField
// //       label="Conduct Certificate"
// //       value={selectedStudent.documents?.conductFile ? "Uploaded" : ""}
// //       fileUrl={selectedStudent.documents?.conductFile}
// //     />

// //     {/* Marks Memo */}
// //     <PreviewField
// //       label="Marks Memo"
// //       value={selectedStudent.documents?.marksMemoFile ? "Uploaded" : ""}
// //       fileUrl={selectedStudent.documents?.marksMemoFile}
// //     />
// //   </div>
// // </section>



// //             </div>

// //             <footer className="p-6 bg-gray-50 border-t border-gray-100">
// //               <button onClick={() => setSelectedStudent(null)} className="w-full bg-blue-900 text-white py-4 rounded-xl font-bold uppercase hover:bg-black transition-colors">Close Preview</button>
// //             </footer>



// //           </div>
// //         </div>
// //       )}

// //       {/* MAIN ADMISSION FORM */}
// //       <div className="flex-1 bg-white p-6 lg:p-10 rounded-2xl shadow-xl border border-gray-100 text-left">
// //         <header className="mb-8 border-b-2 border-blue-100 pb-4">
// //           <h2 className="text-3xl font-extrabold text-blue-900 uppercase">Student Admission</h2>
// //           <p className="text-gray-500 text-sm italic">Complete all sections and upload required digital documents.</p>
// //         </header>

// //         <form onSubmit={handleSubmit} className="space-y-10">
// //           {/* SECTION 1: PERSONAL IDENTITY */}
// //           <section>
// //             <div className="flex items-center gap-2 mb-6 text-blue-800">
// //               <span className="bg-blue-800 text-white w-6 h-6 flex items-center justify-center rounded-full text-xs font-bold">1</span>
// //               <h3 className="font-bold uppercase tracking-widest text-sm">Personal Identity</h3>
// //             </div>
// //             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// //               <FormInput label="Full Name" name="name" value={formData.name} onChange={handleInputChange} required />
// //               <FormInput
// //   label="Student Aadhaar"
// //   name="aadhaarNo"
// //   placeholder="12-digit number"
// //   value={formData.aadhaarNo}
// //   onChange={handleInputChange}
// //   showUpload={true}
// //   onFileChange={handleFileChange}
// //   uploadedFileName={files.aadhaarNo?.name}
// // />
// //               {/* <FormInput label="Student Aadhaar" name="aadhaarNo" placeholder="12-digit number" value={formData.aadhaarNo} onChange={handleInputChange} showUpload={true} onFileChange={handleFileChange} /> */}
// //               <FormInput label="Date of Birth" name="dob" type="date" value={formData.dob} onChange={handleInputChange} required />
// //               <div className="flex flex-col space-y-1">
// //                 <label className="text-xs font-bold text-gray-600 uppercase">Gender</label>
// //                 <select name="gender" value={formData.gender} onChange={handleInputChange} className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-sm outline-none focus:ring-2 focus:ring-blue-500">
// //                   <option value="">Select</option>
// //                   <option value="Male">Male</option>
// //                   <option value="Female">Female</option>
// //                   <option value="Other">Other</option>
// //                 </select>
// //               </div>
// //               <FormInput label="Nationality" name="nationality" value={formData.nationality} onChange={handleInputChange} />
// //               <FormInput label="Religion" name="religion" value={formData.religion} onChange={handleInputChange} />
// //               <FormInput label="Caste" name="caste" value={formData.caste} onChange={handleInputChange} />
// //               <FormInput label="Mother Tongue" name="motherTongue" value={formData.motherTongue} onChange={handleInputChange} />
// //               <FormInput label="State" name="state" value={formData.state} onChange={handleInputChange} />
// //             </div>
// //           </section>

// //           {/* SECTION 2: FAMILY RECORDS */}
// //           <section className="pt-4 border-t border-gray-100">
// //             <div className="flex items-center gap-2 mb-6 text-blue-800">
// //               <span className="bg-blue-800 text-white w-6 h-6 flex items-center justify-center rounded-full text-xs font-bold">2</span>
// //               <h3 className="font-bold uppercase tracking-widest text-sm">Family Records</h3>
// //             </div>
            
// //             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// //               <div className="lg:col-span-3 h-4"><h4 className="text-[10px] font-black text-blue-600 uppercase tracking-widest">Father Profile</h4></div>
// //               <FormInput label="Father's Name" name="fatherName" value={formData.parentDetails.fatherName} onChange={handleInputChange} />
// //               <FormInput label="Father Mobile" name="fatherMobile" value={formData.parentDetails.fatherMobile} onChange={handleInputChange} />
// //               <FormInput
// //   label="Father Aadhaar"
// //   name="fatherAadhaar"
// //   value={formData.parentDetails.fatherAadhaar}
// //   onChange={handleInputChange}
// //   showUpload={true}
// //   onFileChange={handleFileChange}
// //   uploadedFileName={files.fatherAadhaar?.name}
// // />
              
// //               <FormInput label="Qualification" name="fatherQualification" value={formData.parentDetails.fatherQualification} onChange={handleInputChange} />
// //               <FormInput label="Occupation" name="fatherOccupation" value={formData.parentDetails.fatherOccupation} onChange={handleInputChange} />
// //               <FormInput label="Annual Income" name="fatherAnnualIncome" type="number" value={formData.parentDetails.fatherAnnualIncome} onChange={handleInputChange} />

// //               <div className="lg:col-span-3 h-px bg-gray-100 my-4"></div>
// //               <div className="lg:col-span-3 h-4"><h4 className="text-[10px] font-black text-blue-600 uppercase tracking-widest">Mother Profile</h4></div>
// //               <FormInput label="Mother's Name" name="motherName" value={formData.parentDetails.motherName} onChange={handleInputChange} />
// //               <FormInput label="Mother Mobile" name="motherMobile" value={formData.parentDetails.motherMobile} onChange={handleInputChange} />
// //               <FormInput
// //   label="Mother Aadhaar"
// //   name="motherAadhaar"
// //   value={formData.parentDetails.motherAadhaar}
// //   onChange={handleInputChange}
// //   showUpload={true}
// //   onFileChange={handleFileChange}
// //   uploadedFileName={files.motherAadhaar?.name}
// // />
             
// //               <FormInput label="Qualification" name="motherQualification" value={formData.parentDetails.motherQualification} onChange={handleInputChange} />
// //               <FormInput label="Occupation" name="motherOccupation" value={formData.parentDetails.motherOccupation} onChange={handleInputChange} />
// //               <FormInput label="Annual Income" name="motherAnnualIncome" type="number" value={formData.parentDetails.motherAnnualIncome} onChange={handleInputChange} />

// //               <div className="lg:col-span-3 h-px bg-gray-100 my-4"></div>
// //               <div className="lg:col-span-3 h-4"><h4 className="text-[10px] font-black text-blue-600 uppercase tracking-widest">Guardian Profile</h4></div>
// //               <FormInput label="Guardian Name" name="guardianName" value={formData.parentDetails.guardianName} onChange={handleInputChange} />
// //               <FormInput label="Relation" name="guardianRelation" value={formData.parentDetails.guardianRelation} onChange={handleInputChange} />
// //               <FormInput label="Guardian Mobile" name="guardianMobile" value={formData.parentDetails.guardianMobile} onChange={handleInputChange} />
// //               <FormInput
// //   label="Guardian Aadhaar"
// //   name="guardianAadhaar"
// //   value={formData.parentDetails.guardianAadhaar}
// //   onChange={handleInputChange}
// //   showUpload={true}
// //   onFileChange={handleFileChange}
// //   uploadedFileName={files.guardianAadhaar?.name}
// // />
             
// //               <FormInput label="Guardian Occupation" name="guardianOccupation" value={formData.parentDetails.guardianOccupation} onChange={handleInputChange} />
// //               <FormInput label="Guardian Annual Income" name="guardianAnnualIncome" type="number" value={formData.parentDetails.guardianAnnualIncome} onChange={handleInputChange} />

// //               <div className="lg:col-span-3">
// //                 <FormInput label="Residence Address" name="residence" value={formData.parentDetails.residence} onChange={handleInputChange} />
// //               </div>
// //             </div>
// //           </section>

// //           {/* SECTION 3: ACADEMIC & DOCUMENTS */}
// //           <section className="pt-4 border-t border-gray-100">
// //             <div className="flex items-center gap-2 mb-6 text-blue-800">
// //               <span className="bg-blue-800 text-white w-6 h-6 flex items-center justify-center rounded-full text-xs font-bold">3</span>
// //               <h3 className="font-bold uppercase tracking-widest text-sm">Academic & Documents</h3>
// //             </div>
// //             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
// //               <FormInput label="Admission No." name="admissionNo" value={formData.admissionInfo.admissionNo} onChange={handleInputChange} required />
// //               <FormInput label="Class Admitted" name="classAdmittedTo" value={formData.admissionInfo.classAdmittedTo} onChange={handleInputChange} />
// //               <FormInput label="Previous School" name="previousSchoolName" value={formData.admissionInfo.previousSchoolName} onChange={handleInputChange} />
// //               <FormInput label="Prev. TC No." name="previousTCNumber" value={formData.admissionInfo.previousTCNumber} onChange={handleInputChange} />
// //               <FormInput label="Prev. TC Date" name="previousTCDate" type="date" value={formData.admissionInfo.previousTCDate} onChange={handleInputChange} />
// //             </div>

// //             {/* DOCUMENT CHECKLIST */}
// //             <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
// //               <h4 className="text-xs font-black text-blue-900 uppercase tracking-widest mb-4">Submission Checklist</h4>
// //               <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
// //                 <div className="flex flex-col space-y-3">
// //                   <label className="flex items-center space-x-3 cursor-pointer group">
// //                     <input type="checkbox" name="hasTC" checked={formData.documents.hasTC} onChange={handleInputChange} className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
// //                     <span className="text-sm font-bold text-gray-700">TC</span>
// //                   </label>
// //                   {formData.documents.hasTC && (
// //                     <div className="ml-8 animate-in fade-in slide-in-from-top-1">
// //                       <input type="file" onChange={(e) => handleFileChange('tcFile', e.target.files[0])} className="text-xs text-gray-500 file:mr-4 file:py-1 file:px-3 file:rounded-full file:border-0 file:bg-blue-600 file:text-white file:font-bold hover:file:bg-black" />
// //                     </div>
// //                   )}
// //                 </div>

// //                 <div className="flex flex-col space-y-3">
// //                   <label className="flex items-center space-x-3 cursor-pointer group">
// //                     <input type="checkbox" name="hasConduct" checked={formData.documents.hasConduct} onChange={handleInputChange} className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
// //                     <span className="text-sm font-bold text-gray-700">Conduct Certificate</span>
// //                   </label>
// //                   {formData.documents.hasConduct && (
// //                     <div className="ml-8 animate-in fade-in slide-in-from-top-1">
// //                       <input type="file" onChange={(e) => handleFileChange('conductFile', e.target.files[0])} className="text-xs text-gray-500 file:mr-4 file:py-1 file:px-3 file:rounded-full file:border-0 file:bg-blue-600 file:text-white file:font-bold hover:file:bg-black" />
// //                     </div>
// //                   )}
// //                 </div>

// //                 <div className="flex flex-col space-y-3">
// //                   <label className="flex items-center space-x-3 cursor-pointer group">
// //                     <input type="checkbox" name="hasMarksMemo" checked={formData.documents.hasMarksMemo} onChange={handleInputChange} className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
// //                     <span className="text-sm font-bold text-gray-700">Marks Memo</span>
// //                   </label>
// //                   {formData.documents.hasMarksMemo && (
// //                     <div className="ml-8 animate-in fade-in slide-in-from-top-1">
// //                       <input type="file" onChange={(e) => handleFileChange('marksMemoFile', e.target.files[0])} className="text-xs text-gray-500 file:mr-4 file:py-1 file:px-3 file:rounded-full file:border-0 file:bg-blue-600 file:text-white file:font-bold hover:file:bg-black" />
// //                     </div>
// //                   )}
// //                 </div>
// //               </div>
// //             </div>
// //           </section>

// //           <button type="submit" disabled={isSubmitting} className={`w-full py-4 rounded-xl font-bold uppercase tracking-widest transition-all shadow-lg ${isSubmitting ? 'bg-gray-400' : 'bg-blue-700 hover:bg-black text-white'}`}>
// //             {isSubmitting ? 'Finalizing Entry...' : 'Finalize Admission'}
// //           </button>
// //         </form>
// //       </div>

// //       {/* SIDEBAR DUPLICATE LISTING */}
// //       {duplicates.length > 0 && (
// //         <aside className="w-full lg:w-80">
// //           <div className="sticky top-6 p-6 rounded-2xl shadow-lg border-t-8 bg-red-50 border-red-500 text-left">
// //             <h4 className="font-black text-xs uppercase mb-4 tracking-tighter text-red-600">⚠️ {duplicates.length} Potential Match(es)</h4>
// //             <div className="space-y-3">
// //               {duplicates.map(student => (
// //                 <div key={student._id} onClick={() => setSelectedStudent(student)} className="cursor-pointer p-3 bg-white rounded-lg border border-red-100 hover:border-blue-500 transition-all shadow-sm text-[10px]">
// //                   <p className="font-black text-red-800 uppercase">{student.name}</p>
// //                   <p className="text-gray-500 mt-1 font-bold">ADM: {student.admissionInfo?.admissionNo}</p>
// //                   <p className="text-gray-500 font-bold">FATHER: {student.parentDetails?.fatherName}</p>
// //                   <p className="text-blue-600 mt-2 font-black">CLICK TO COMPARE ALL FIELDS →</p>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //         </aside>
// //       )}
// //     </div>
// //   );
// // };

// // export default AdmissionForm;













// // 18-05-2026






// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';

// // /**
// //  * REUSABLE FORM INPUT COMPONENT
// //  */
// // const FormInput = ({
// //   label,
// //   name,
// //   type = "text",
// //   placeholder = "",
// //   required = false,
// //   value,
// //   onChange,
// //   onFileChange,
// //   showUpload = false,
// //   uploadedFileName = ""
// // }) => (
// //   <div className="flex flex-col space-y-1">
// //     <div className="flex justify-between items-center">
// //       <label className="text-xs font-bold text-gray-600 uppercase tracking-tight">
// //         {label} {required && <span className="text-red-500">*</span>}
// //       </label>

// //       {showUpload && (
// //         <label className="cursor-pointer flex flex-col items-end">
// //           <span className="text-[10px] font-bold text-blue-600 hover:text-blue-800 transition-colors uppercase decoration-dotted underline underline-offset-2">
// //             Upload
// //           </span>

// //           <input
// //             type="file"
// //             className="hidden"
// //             onChange={(e) => onFileChange(name, e.target.files[0])}
// //           />

// //           {uploadedFileName && (
// //             <span className="text-[9px] text-green-600 font-bold mt-1">
// //               ✓ {uploadedFileName}
// //             </span>
// //           )}
// //         </label>
// //       )}
// //     </div>

// //     <input
// //       type={type}
// //       name={name}
// //       value={value || ""}
// //       placeholder={placeholder}
// //       required={required}
// //       onChange={onChange}
// //       className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all bg-gray-50 text-sm"
// //     />
// //   </div>
// // );

// // /**
// //  * REUSABLE PREVIEW FIELD COMPONENT 
// //  */
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
// //       className={`px-3 py-2 border rounded-md text-sm transition-all ${
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

// // const AdmissionForm = () => {
// //   const initialFormState = {
// //     name: '',
// //     dob: '',
// //     gender: '',
// //     aadhaarNo: '',
// //     nationality: 'Indian',
// //     religion: '',
// //     caste: '',
// //     motherTongue: '',
// //     state: '',
// //     siblings: '',
// //     cwsn: '',
// //     firstLanguage: '',
// //     secondLanguage: '',
// //     thirdLanguage: '',
// //     udisePlus: '',
// //     parentDetails: { 
// //       fatherName: '', fatherMobile: '', fatherAadhaar: '', fatherQualification: '', fatherOccupation: '', fatherAnnualIncome: '',
// //       motherName: '', motherMobile: '', motherAadhaar: '', motherQualification: '', motherAnnualIncome: '', motherOccupation: '',
// //       guardianName: '', guardianRelation: '', guardianMobile: '', guardianAadhaar: '', guardianOccupation: '', guardianAnnualIncome: '',
// //       residence: '' 
// //     },
// //     admissionInfo: { 
// //       admissionNo: '', classAdmittedTo: '', previousSchoolName: '', previousTCNumber: '', previousTCDate: '' 
// //     },
// //     documents: {
// //       hasTC: false,
// //       hasConduct: false,
// //       hasMarksMemo: false
// //     }
// //   };

// //   const [formData, setFormData] = useState(initialFormState);
// //   const [files, setFiles] = useState({}); 
// //   const [duplicates, setDuplicates] = useState([]);
// //   const [selectedStudent, setSelectedStudent] = useState(null); 
// //   const [isSubmitting, setIsSubmitting] = useState(false);

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setIsSubmitting(true);

// //     const submissionData = new FormData();
// //     submissionData.append('data', JSON.stringify(formData));
    
// //     if (files.tcFile) submissionData.append('tcFile', files.tcFile);
// //     if (files.conductFile) submissionData.append('conductFile', files.conductFile);
// //     if (files.marksMemoFile) submissionData.append('marksMemoFile', files.marksMemoFile);
    
// //     if (files.aadhaarNo) submissionData.append('studentAadhaarFile', files.aadhaarNo);
// //     if (files.fatherAadhaar) submissionData.append('fatherAadhaarFile', files.fatherAadhaar);
// //     if (files.motherAadhaar) submissionData.append('motherAadhaarFile', files.motherAadhaar);
// //     if (files.guardianAadhaar) submissionData.append('guardianAadhaarFile', files.guardianAadhaar);

// //     try {
// //       console.log("FILES BEING SENT:", files);
      
// //       const res = await axios.post('http://localhost:5000/api/students/admission', submissionData, {
// //         headers: { 'Content-Type': 'multipart/form-data' }
// //       });
// //       alert("Success!");
// //       setFormData(initialFormState);
// //       setFiles({});
// //     } catch (err) {
// //       alert(err.response?.data?.message || "Error occurred");
// //     } finally { 
// //       setIsSubmitting(false); 
// //     }
// //   };

// //   const handleFileChange = (identifier, file) => {
// //     if (!file) return;
// //     setFiles((prev) => ({
// //       ...prev,
// //       [identifier]: file,
// //     }));
// //     alert(`${identifier} uploaded successfully: ${file.name}`);
// //   };

// //   useEffect(() => {
// //     const searchDuplicates = async () => {
// //       try {
// //         const res = await axios.get(`http://localhost:5000/api/students/search`, {
// //           params: { name: formData.name, fatherName: formData.parentDetails.fatherName }
// //         });
// //         setDuplicates(res.data);
// //       } catch (err) { console.error("Search failed", err); }
// //     };

// //     const timer = setTimeout(() => {
// //       if (formData.name.trim().length >= 2) searchDuplicates();
// //       else setDuplicates([]);
// //     }, 300);

// //     return () => clearTimeout(timer);
// //   }, [formData.name, formData.parentDetails.fatherName]);

// //   const handleInputChange = (e) => {
// //     const { name, value, type, checked } = e.target;

// //     // Checkbox handling for documents
// //     if (name === "hasTC" || name === "hasConduct" || name === "hasMarksMemo") {
// //       setFormData((prev) => ({
// //         ...prev,
// //         documents: { ...prev.documents, [name]: checked },
// //       }));
// //       return;
// //     }

// //     // Parent details object parsing
// //     if (
// //       [
// //         "fatherName", "fatherMobile", "fatherAadhaar", "fatherQualification", "fatherOccupation", "fatherAnnualIncome",
// //         "motherName", "motherMobile", "motherAadhaar", "motherQualification", "motherOccupation", "motherAnnualIncome",
// //         "guardianName", "guardianRelation", "guardianMobile", "guardianAadhaar", "guardianOccupation", "guardianAnnualIncome",
// //         "residence"
// //       ].includes(name)
// //     ) {
// //       setFormData((prev) => ({
// //         ...prev,
// //         parentDetails: { ...prev.parentDetails, [name]: value },
// //       }));
// //       return;
// //     }

// //     // Admission info object parsing
// //     if (
// //       [
// //         "admissionNo", "classAdmittedTo", "previousSchoolName", "previousTCNumber", "previousTCDate"
// //       ].includes(name)
// //     ) {
// //       setFormData((prev) => ({
// //         ...prev,
// //         admissionInfo: { ...prev.admissionInfo, [name]: value },
// //       }));
// //       return;
// //     }

// //     // Direct student fields (Includes siblings, cwsn, languages, udisePlus)
// //     setFormData((prev) => ({
// //       ...prev,
// //       [name]: type === "checkbox" ? checked : value,
// //     }));
// //   };

// //   return (
// //     <div className="flex flex-col lg:flex-row gap-6 p-4 lg:p-6 bg-slate-50 min-h-screen font-sans">
      
// //       {/* DUPLICATE PREVIEW MODAL */}
// //       {selectedStudent && (
// //         <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 text-left">
// //           <div className="bg-white rounded-2xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto">
// //             <header className="sticky top-0 bg-white border-b border-gray-100 p-6 flex justify-between items-center z-10">
// //               <div>
// //                 <h2 className="text-2xl font-black text-red-600 uppercase">Duplicate Record Found</h2>
// //                 <p className="text-gray-500 text-[10px] font-bold tracking-widest uppercase">Compare with existing database entry</p>
// //               </div>
// //               <button onClick={() => setSelectedStudent(null)} className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-red-100 hover:text-red-600 transition-colors text-2xl">&times;</button>
// //             </header>

// //             <div className="p-8 space-y-10">
// //               {/* 1. Personal Identity Preview */}
// //               <section>
// //                 <h3 className="text-xs font-black text-blue-800 uppercase mb-4 border-l-4 border-blue-600 pl-2">1. Personal Identity</h3>
// //                 <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
// //                   <PreviewField label="Full Name" value={selectedStudent.name} highlight />
// //                   <PreviewField label="Aadhaar No" value={selectedStudent.aadhaarNo} />
// //                   <PreviewField label="Date of Birth" value={selectedStudent.dob ? new Date(selectedStudent.dob).toLocaleDateString() : ""} />
// //                   <PreviewField label="Gender" value={selectedStudent.gender} />
// //                   <PreviewField label="Nationality" value={selectedStudent.nationality} />
// //                   <PreviewField label="Religion" value={selectedStudent.religion} />
// //                   <PreviewField label="Caste" value={selectedStudent.caste} />
// //                   <PreviewField label="Mother Tongue" value={selectedStudent.motherTongue} />
// //                   <PreviewField label="State" value={selectedStudent.state} />
// //                   <PreviewField label="Siblings Info" value={selectedStudent.siblings} />
// //                   <PreviewField label="CWSN Status" value={selectedStudent.cwsn} highlight={selectedStudent.cwsn && selectedStudent.cwsn !== "None"} />
// //                   <PreviewField label="UDISE + Number" value={selectedStudent.udisePlus} />
// //                   <PreviewField label="1st Language" value={selectedStudent.firstLanguage} />
// //                   <PreviewField label="2nd Language" value={selectedStudent.secondLanguage} />
// //                   <PreviewField label="3rd Language" value={selectedStudent.thirdLanguage} />
// //                 </div>
// //               </section>

// //               {/* 2. Family Records Preview */}
// //               <section>
// //                 <h3 className="text-xs font-black text-blue-800 uppercase mb-4 border-l-4 border-blue-600 pl-2">2. Family Records</h3>
// //                 <div className="space-y-6">
// //                   <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-gray-50/50 p-4 rounded-lg">
// //                     <PreviewField label="Father's Name" value={selectedStudent.parentDetails?.fatherName} highlight />
// //                     <PreviewField label="Father Mobile" value={selectedStudent.parentDetails?.fatherMobile} />
// //                     <PreviewField label="Father Aadhaar" value={selectedStudent.parentDetails?.fatherAadhaar} />
// //                     <PreviewField label="Father Qualification" value={selectedStudent.parentDetails?.fatherQualification} />
// //                     <PreviewField label="Father Occupation" value={selectedStudent.parentDetails?.fatherOccupation} />
// //                     <PreviewField label="Father Annual Income" value={selectedStudent.parentDetails?.fatherAnnualIncome} />
// //                   </div>
// //                   <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-gray-50/50 p-4 rounded-lg">
// //                     <PreviewField label="Mother's Name" value={selectedStudent.parentDetails?.motherName} />
// //                     <PreviewField label="Mother Mobile" value={selectedStudent.parentDetails?.motherMobile} />
// //                     <PreviewField label="Mother Aadhaar" value={selectedStudent.parentDetails?.motherAadhaar} />
// //                     <PreviewField label="Mother Qualification" value={selectedStudent.parentDetails?.motherQualification} />
// //                     <PreviewField label="Mother Occupation" value={selectedStudent.parentDetails?.motherOccupation} />
// //                     <PreviewField label="Mother Annual Income" value={selectedStudent.parentDetails?.motherAnnualIncome} />
// //                   </div>
// //                 </div>
// //               </section>

// //               {/* 3. Academic & Admission Preview */}
// //               <section>
// //                 <h3 className="text-xs font-black text-blue-800 uppercase mb-4 border-l-4 border-blue-600 pl-2">3. Academic & Admission</h3>
// //                 <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
// //                   <PreviewField label="Admission No" value={selectedStudent.admissionInfo?.admissionNo} highlight />
// //                   <PreviewField label="Class Admitted To" value={selectedStudent.admissionInfo?.classAdmittedTo} />
// //                   <PreviewField label="Previous School" value={selectedStudent.admissionInfo?.previousSchoolName} />
// //                 </div>
// //               </section>
// //             </div>
// //             <footer className="p-6 bg-gray-50 border-t border-gray-100">
// //               <button onClick={() => setSelectedStudent(null)} className="w-full bg-blue-900 text-white py-4 rounded-xl font-bold uppercase hover:bg-black transition-colors">Close Preview</button>
// //             </footer>
// //           </div>
// //         </div>
// //       )}

// //       {/* MAIN ADMISSION FORM */}
// //       <div className="flex-1 bg-white p-6 lg:p-10 rounded-2xl shadow-xl border border-gray-100 text-left">
// //         <header className="mb-8 border-b-2 border-blue-100 pb-4">
// //           <h2 className="text-3xl font-extrabold text-blue-900 uppercase">Student Admission</h2>
// //           <p className="text-gray-500 text-sm italic">Complete all sections and upload required digital documents.</p>
// //         </header>

// //         <form onSubmit={handleSubmit} className="space-y-10">
          
// //           {/* SECTION 1: PERSONAL IDENTITY */}
// //           <section>
// //             <div className="flex items-center gap-2 mb-6 text-blue-800">
// //               <span className="bg-blue-800 text-white w-6 h-6 flex items-center justify-center rounded-full text-xs font-bold">1</span>
// //               <h3 className="font-bold uppercase tracking-widest text-sm">Personal Identity</h3>
// //             </div>
            
// //             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// //               <FormInput label="Full Name" name="name" value={formData.name} onChange={handleInputChange} required />
// //               <FormInput
// //                 label="Student Aadhaar"
// //                 name="aadhaarNo"
// //                 placeholder="12-digit number"
// //                 value={formData.aadhaarNo}
// //                 onChange={handleInputChange}
// //                 showUpload={true}
// //                 onFileChange={handleFileChange}
// //                 uploadedFileName={files.aadhaarNo?.name}
// //               />
// //               <FormInput label="Date of Birth" name="dob" type="date" value={formData.dob} onChange={handleInputChange} required />
              
// //               <div className="flex flex-col space-y-1">
// //                 <label className="text-xs font-bold text-gray-600 uppercase">Gender</label>
// //                 <select name="gender" value={formData.gender} onChange={handleInputChange} className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-sm outline-none focus:ring-2 focus:ring-blue-500">
// //                   <option value="">Select</option>
// //                   <option value="Male">Male</option>
// //                   <option value="Female">Female</option>
// //                   <option value="Other">Other</option>
// //                 </select>
// //               </div>

// //               <FormInput label="Nationality" name="nationality" value={formData.nationality} onChange={handleInputChange} />
// //               <FormInput label="Religion" name="religion" value={formData.religion} onChange={handleInputChange} />
// //               <FormInput label="Caste" name="caste" value={formData.caste} onChange={handleInputChange} />
// //               <FormInput label="Mother Tongue" name="motherTongue" value={formData.motherTongue} onChange={handleInputChange} />
// //               <FormInput label="State" name="state" value={formData.state} onChange={handleInputChange} />
              
// //               {/* NEW FIELDS ATTACHED DIRECTLY TO STUDENT OBJECT */}
// //               <FormInput label="UDISE + Number" name="udisePlus" placeholder="Enter UDISE ID" value={formData.udisePlus} onChange={handleInputChange} />
// //               <FormInput label="Siblings Info" name="siblings" placeholder="Names / Classes / Counts" value={formData.siblings} onChange={handleInputChange} />
              
// //               <div className="flex flex-col space-y-1">
// //                 <label className="text-xs font-bold text-gray-600 uppercase">CWSN Status</label>
// //                 <select name="cwsn" value={formData.cwsn} onChange={handleInputChange} className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-sm outline-none focus:ring-2 focus:ring-blue-500">
// //                   <option value="">Select Option</option>
// //                   <option value="None">None</option>
// //                   <option value="Locomotor Disability">Locomotor Disability</option>
// //                   <option value="Visual Impairment">Visual Impairment</option>
// //                   <option value="Hearing Impairment">Hearing Impairment</option>
// //                   <option value="Speech & Language">Speech & Language Disability</option>
// //                   <option value="Intellectual Disability">Intellectual Disability</option>
// //                   <option value="Other">Other Specific Needs</option>
// //                 </select>
// //               </div>

// //               <FormInput label="First Language" name="firstLanguage" placeholder="e.g. English" value={formData.firstLanguage} onChange={handleInputChange} />
// //               <FormInput label="Second Language" name="secondLanguage" placeholder="e.g. Hindi" value={formData.secondLanguage} onChange={handleInputChange} />
// //               <FormInput label="Third Language" name="thirdLanguage" placeholder="e.g. Sanskrit" value={formData.thirdLanguage} onChange={handleInputChange} />
// //             </div>
// //           </section>

// //           {/* SECTION 2: FAMILY RECORDS */}
// //           <section className="pt-4 border-t border-gray-100">
// //             <div className="flex items-center gap-2 mb-6 text-blue-800">
// //               <span className="bg-blue-800 text-white w-6 h-6 flex items-center justify-center rounded-full text-xs font-bold">2</span>
// //               <h3 className="font-bold uppercase tracking-widest text-sm">Family Records</h3>
// //             </div>
            
// //             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// //               <div className="lg:col-span-3 h-4"><h4 className="text-[10px] font-black text-blue-600 uppercase tracking-widest">Father Profile</h4></div>
// //               <FormInput label="Father's Name" name="fatherName" value={formData.parentDetails.fatherName} onChange={handleInputChange} />
// //               <FormInput label="Father Mobile" name="fatherMobile" value={formData.parentDetails.fatherMobile} onChange={handleInputChange} />
// //               <FormInput
// //                 label="Father Aadhaar"
// //                 name="fatherAadhaar"
// //                 value={formData.parentDetails.fatherAadhaar}
// //                 onChange={handleInputChange}
// //                 showUpload={true}
// //                 onFileChange={handleFileChange}
// //                 uploadedFileName={files.fatherAadhaar?.name}
// //               />
              
// //               <FormInput label="Qualification" name="fatherQualification" value={formData.parentDetails.fatherQualification} onChange={handleInputChange} />
// //               <FormInput label="Occupation" name="fatherOccupation" value={formData.parentDetails.fatherOccupation} onChange={handleInputChange} />
// //               <FormInput label="Annual Income" name="fatherAnnualIncome" type="number" value={formData.parentDetails.fatherAnnualIncome} onChange={handleInputChange} />

// //               <div className="lg:col-span-3 h-px bg-gray-100 my-4"></div>
// //               <div className="lg:col-span-3 h-4"><h4 className="text-[10px] font-black text-blue-600 uppercase tracking-widest">Mother Profile</h4></div>
// //               <FormInput label="Mother's Name" name="motherName" value={formData.parentDetails.motherName} onChange={handleInputChange} />
// //               <FormInput label="Mother Mobile" name="motherMobile" value={formData.parentDetails.motherMobile} onChange={handleInputChange} />
// //               <FormInput
// //                 label="Mother Aadhaar"
// //                 name="motherAadhaar"
// //                 value={formData.parentDetails.motherAadhaar}
// //                 onChange={handleInputChange}
// //                 showUpload={true}
// //                 onFileChange={handleFileChange}
// //                 uploadedFileName={files.motherAadhaar?.name}
// //               />
             
// //               <FormInput label="Qualification" name="motherQualification" value={formData.parentDetails.motherQualification} onChange={handleInputChange} />
// //               <FormInput label="Occupation" name="motherOccupation" value={formData.parentDetails.motherOccupation} onChange={handleInputChange} />
// //               <FormInput label="Annual Income" name="motherAnnualIncome" type="number" value={formData.parentDetails.motherAnnualIncome} onChange={handleInputChange} />

// //               <div className="lg:col-span-3 h-px bg-gray-100 my-4"></div>
// //               <div className="lg:col-span-3 h-4"><h4 className="text-[10px] font-black text-blue-600 uppercase tracking-widest">Guardian Profile</h4></div>
// //               <FormInput label="Guardian Name" name="guardianName" value={formData.parentDetails.guardianName} onChange={handleInputChange} />
// //               <FormInput label="Relation" name="guardianRelation" value={formData.parentDetails.guardianRelation} onChange={handleInputChange} />
// //               <FormInput label="Guardian Mobile" name="guardianMobile" value={formData.parentDetails.guardianMobile} onChange={handleInputChange} />
// //               <FormInput
// //                 label="Guardian Aadhaar"
// //                 name="guardianAadhaar"
// //                 value={formData.parentDetails.guardianAadhaar}
// //                 onChange={handleInputChange}
// //                 showUpload={true}
// //                 onFileChange={handleFileChange}
// //                 uploadedFileName={files.guardianAadhaar?.name}
// //               />
// //               <FormInput label="Guardian Occupation" name="guardianOccupation" value={formData.parentDetails.guardianOccupation} onChange={handleInputChange} />
// //               <FormInput label="Guardian Annual Income" name="guardianAnnualIncome" type="number" value={formData.parentDetails.guardianAnnualIncome} onChange={handleInputChange} />

// //               <div className="lg:col-span-3">
// //                 <FormInput label="Residence Address" name="residence" value={formData.parentDetails.residence} onChange={handleInputChange} />
// //               </div>
// //             </div>
// //           </section>

// //           {/* SECTION 3: ACADEMIC & DOCUMENTS */}
// //           <section className="pt-4 border-t border-gray-100">
// //             <div className="flex items-center gap-2 mb-6 text-blue-800">
// //               <span className="bg-blue-800 text-white w-6 h-6 flex items-center justify-center rounded-full text-xs font-bold">3</span>
// //               <h3 className="font-bold uppercase tracking-widest text-sm">Academic & Documents</h3>
// //             </div>
// //             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
// //               <FormInput label="Admission No." name="admissionNo" value={formData.admissionInfo.admissionNo} onChange={handleInputChange} required />
// //               <FormInput label="Class Admitted" name="classAdmittedTo" value={formData.admissionInfo.classAdmittedTo} onChange={handleInputChange} />
// //               <FormInput label="Previous School" name="previousSchoolName" value={formData.admissionInfo.previousSchoolName} onChange={handleInputChange} />
// //               <FormInput label="Prev. TC No." name="previousTCNumber" value={formData.admissionInfo.previousTCNumber} onChange={handleInputChange} />
// //               <FormInput label="Prev. TC Date" name="previousTCDate" type="date" value={formData.admissionInfo.previousTCDate} onChange={handleInputChange} />
// //             </div>

// //             {/* CHECKLIST */}
// //             <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
// //               <h4 className="text-xs font-black text-blue-900 uppercase tracking-widest mb-4">Submission Checklist</h4>
// //               <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
// //                 <div className="flex flex-col space-y-3">
// //                   <label className="flex items-center space-x-3 cursor-pointer group">
// //                     <input type="checkbox" name="hasTC" checked={formData.documents.hasTC} onChange={handleInputChange} className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
// //                     <span className="text-sm font-bold text-gray-700">TC</span>
// //                   </label>
// //                   {formData.documents.hasTC && (
// //                     <div className="ml-8 animate-in fade-in slide-in-from-top-1">
// //                       <input type="file" onChange={(e) => handleFileChange('tcFile', e.target.files[0])} className="text-xs text-gray-500 file:mr-4 file:py-1 file:px-3 file:rounded-full file:border-0 file:bg-blue-600 file:text-white file:font-bold hover:file:bg-black" />
// //                     </div>
// //                   )}
// //                 </div>

// //                 <div className="flex flex-col space-y-3">
// //                   <label className="flex items-center space-x-3 cursor-pointer group">
// //                     <input type="checkbox" name="hasConduct" checked={formData.documents.hasConduct} onChange={handleInputChange} className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
// //                     <span className="text-sm font-bold text-gray-700">Conduct Certificate</span>
// //                   </label>
// //                   {formData.documents.hasConduct && (
// //                     <div className="ml-8 animate-in fade-in slide-in-from-top-1">
// //                       <input type="file" onChange={(e) => handleFileChange('conductFile', e.target.files[0])} className="text-xs text-gray-500 file:mr-4 file:py-1 file:px-3 file:rounded-full file:border-0 file:bg-blue-600 file:text-white file:font-bold hover:file:bg-black" />
// //                     </div>
// //                   )}
// //                 </div>

// //                 <div className="flex flex-col space-y-3">
// //                   <label className="flex items-center space-x-3 cursor-pointer group">
// //                     <input type="checkbox" name="hasMarksMemo" checked={formData.documents.hasMarksMemo} onChange={handleInputChange} className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
// //                     <span className="text-sm font-bold text-gray-700">Marks Memo</span>
// //                   </label>
// //                   {formData.documents.hasMarksMemo && (
// //                     <div className="ml-8 animate-in fade-in slide-in-from-top-1">
// //                       <input type="file" onChange={(e) => handleFileChange('marksMemoFile', e.target.files[0])} className="text-xs text-gray-500 file:mr-4 file:py-1 file:px-3 file:rounded-full file:border-0 file:bg-blue-600 file:text-white file:font-bold hover:file:bg-black" />
// //                     </div>
// //                   )}
// //                 </div>
// //               </div>
// //             </div>
// //           </section>

// //           <button type="submit" disabled={isSubmitting} className={`w-full py-4 rounded-xl font-bold uppercase tracking-widest transition-all shadow-lg ${isSubmitting ? 'bg-gray-400' : 'bg-blue-700 hover:bg-black text-white'}`}>
// //             {isSubmitting ? 'Finalizing Entry...' : 'Finalize Admission'}
// //           </button>
// //         </form>
// //       </div>

// //       {/* SIDEBAR DUPLICATE LISTING */}
// //       {duplicates.length > 0 && (
// //         <aside className="w-full lg:w-80">
// //           <div className="sticky top-6 p-6 rounded-2xl shadow-lg border-t-8 bg-red-50 border-red-500 text-left">
// //             <h4 className="font-black text-xs uppercase mb-4 tracking-tighter text-red-600">⚠️ {duplicates.length} Potential Match(es)</h4>
// //             <div className="space-y-3">
// //               {duplicates.map(student => (
// //                 <div key={student._id} onClick={() => setSelectedStudent(student)} className="cursor-pointer p-3 bg-white rounded-lg border border-red-100 hover:border-blue-500 transition-all shadow-sm text-[10px]">
// //                   <p className="font-black text-red-800 uppercase">{student.name}</p>
// //                   <p className="text-gray-500 mt-1 font-bold">ADM: {student.admissionInfo?.admissionNo}</p>
// //                   <p className="text-gray-500 font-bold">FATHER: {student.parentDetails?.fatherName}</p>
// //                   <p className="text-blue-600 mt-2 font-black">CLICK TO COMPARE ALL FIELDS →</p>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //         </aside>
// //       )}
// //     </div>
// //   );
// // };

// // export default AdmissionForm;








// // 20-05-2026











// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// /**
//  * REUSABLE FORM INPUT COMPONENT
//  */
// const FormInput = ({
//   label,
//   name,
//   type = "text",
//   placeholder = "",
//   required = false,
//   value,
//   onChange,
//   onFileChange,
//   showUpload = false,
//   uploadedFileName = ""
// }) => (
//   <div className="flex flex-col space-y-1">
//     <div className="flex justify-between items-center">
//       <label className="text-xs font-bold text-gray-600 uppercase tracking-tight">
//         {label} {required && <span className="text-red-500">*</span>}
//       </label>

//       {showUpload && (
//         <label className="cursor-pointer flex flex-col items-end">
//           <span className="text-[10px] font-bold text-blue-600 hover:text-blue-800 transition-colors uppercase decoration-dotted underline underline-offset-2">
//             Upload
//           </span>

//           <input
//             type="file"
//             className="hidden"
//             onChange={(e) => onFileChange(name, e.target.files[0])}
//           />

//           {uploadedFileName && (
//             <span className="text-[9px] text-green-600 font-bold mt-1">
//               ✓ {uploadedFileName}
//             </span>
//           )}
//         </label>
//       )}
//     </div>

//     <input
//       type={type}
//       name={name}
//       value={value || ""}
//       placeholder={placeholder}
//       required={required}
//       onChange={onChange}
//       className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all bg-gray-50 text-sm"
//     />
//   </div>
// );

// /**
//  * REUSABLE PREVIEW FIELD COMPONENT 
//  */
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
//       className={`px-3 py-2 border rounded-md text-sm transition-all ${
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

// const AdmissionForm = () => {
//   const initialFormState = {
//     name: '',
//     dob: '',
//     gender: '',
//     aadhaarNo: '',
//     nationality: 'Indian',
//     religion: '',
//     caste: '',
//     motherTongue: '',
//     state: '',
//     siblings: '',
//     cwsn: '',
//     firstLanguage: '',
//     secondLanguage: '',
//     thirdLanguage: '',
//     udisePlus: '',
//     parentDetails: { 
//       fatherName: '', fatherMobile: '', fatherAadhaar: '', fatherQualification: '', fatherOccupation: '', fatherAnnualIncome: '',
//       motherName: '', motherMobile: '', motherAadhaar: '', motherQualification: '', motherAnnualIncome: '', motherOccupation: '',
//       guardianName: '', guardianRelation: '', guardianMobile: '', guardianAadhaar: '', guardianOccupation: '', guardianAnnualIncome: '',
//       residence: '' 
//     },
//     admissionInfo: { 
//       admissionNo: '', classAdmittedTo: '', previousSchoolName: '', previousTCNumber: '', previousTCDate: '' 
//     },
//     documents: {
//       hasTC: false,
//       hasConduct: false,
//       hasMarksMemo: false
//     }
//   };

//   const [formData, setFormData] = useState(initialFormState);
//   const [files, setFiles] = useState({}); 
//   const [duplicates, setDuplicates] = useState([]);
//   const [selectedStudent, setSelectedStudent] = useState(null); 
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     const submissionData = new FormData();
//     submissionData.append('data', JSON.stringify(formData));
    
//     if (files.tcFile) submissionData.append('tcFile', files.tcFile);
//     if (files.conductFile) submissionData.append('conductFile', files.conductFile);
//     if (files.marksMemoFile) submissionData.append('marksMemoFile', files.marksMemoFile);
    
//     if (files.aadhaarNo) submissionData.append('studentAadhaarFile', files.aadhaarNo);
//     if (files.fatherAadhaar) submissionData.append('fatherAadhaarFile', files.fatherAadhaar);
//     if (files.motherAadhaar) submissionData.append('motherAadhaarFile', files.motherAadhaar);
//     if (files.guardianAadhaar) submissionData.append('guardianAadhaarFile', files.guardianAadhaar);

//     try {
//       console.log("FILES BEING SENT:", files);
      
//       const res = await axios.post('http://localhost:5000/api/students/admission', submissionData, {
//         headers: { 'Content-Type': 'multipart/form-data' }
//       });
//       alert("Success!");
//       setFormData(initialFormState);
//       setFiles({});
//     } catch (err) {
//       alert(err.response?.data?.message || "Error occurred");
//     } finally { 
//       setIsSubmitting(false); 
//     }
//   };

//   const handleFileChange = (identifier, file) => {
//     if (!file) return;
//     setFiles((prev) => ({
//       ...prev,
//       [identifier]: file,
//     }));
//     alert(`${identifier} uploaded successfully: ${file.name}`);
//   };

//   useEffect(() => {
//     const searchDuplicates = async () => {
//       try {
//         const res = await axios.get(`http://localhost:5000/api/students/search`, {
//           params: { name: formData.name, fatherName: formData.parentDetails.fatherName }
//         });
//         setDuplicates(res.data);
//       } catch (err) { console.error("Search failed", err); }
//     };

//     const timer = setTimeout(() => {
//       if (formData.name.trim().length >= 2) searchDuplicates();
//       else setDuplicates([]);
//     }, 300);

//     return () => clearTimeout(timer);
//   }, [formData.name, formData.parentDetails.fatherName]);

//   const handleInputChange = (e) => {
//     const { name, value, type, checked } = e.target;

//     // Checkbox handling for documents
//     if (name === "hasTC" || name === "hasConduct" || name === "hasMarksMemo") {
//       setFormData((prev) => ({
//         ...prev,
//         documents: { ...prev.documents, [name]: checked },
//       }));
//       return;
//     }

//     // Parent details object parsing
//     if (
//       [
//         "fatherName", "fatherMobile", "fatherAadhaar", "fatherQualification", "fatherOccupation", "fatherAnnualIncome",
//         "motherName", "motherMobile", "motherAadhaar", "motherQualification", "motherOccupation", "motherAnnualIncome",
//         "guardianName", "guardianRelation", "guardianMobile", "guardianAadhaar", "guardianOccupation", "guardianAnnualIncome",
//         "residence"
//       ].includes(name)
//     ) {
//       setFormData((prev) => ({
//         ...prev,
//         parentDetails: { ...prev.parentDetails, [name]: value },
//       }));
//       return;
//     }

//     // Admission info object parsing
//     if (
//       [
//         "admissionNo", "classAdmittedTo", "previousSchoolName", "previousTCNumber", "previousTCDate"
//       ].includes(name)
//     ) {
//       setFormData((prev) => ({
//         ...prev,
//         admissionInfo: { ...prev.admissionInfo, [name]: value },
//       }));
//       return;
//     }

//     // Direct student fields (Includes siblings, cwsn, languages, udisePlus)
//     setFormData((prev) => ({
//       ...prev,
//       [name]: type === "checkbox" ? checked : value,
//     }));
//   };

//   return (
//     <div className="flex flex-col lg:flex-row gap-6 p-4 lg:p-6 bg-slate-50 min-h-screen font-sans">
      
//       {/* DUPLICATE PREVIEW MODAL */}
//       {selectedStudent && (
//         <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 text-left">
//           <div className="bg-white rounded-2xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto">
//             <header className="sticky top-0 bg-white border-b border-gray-100 p-6 flex justify-between items-center z-10">
//               <div>
//                 <h2 className="text-2xl font-black text-red-600 uppercase">Duplicate Record Found</h2>
//                 <p className="text-gray-500 text-[10px] font-bold tracking-widest uppercase">Compare with existing database entry</p>
//               </div>
//               <button onClick={() => setSelectedStudent(null)} className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-red-100 hover:text-red-600 transition-colors text-2xl">&times;</button>
//             </header>

//             <div className="p-8 space-y-10">
//               {/* 1. Personal Identity Preview */}
//               <section>
//                 <h3 className="text-xs font-black text-blue-800 uppercase mb-4 border-l-4 border-blue-600 pl-2">1. Personal Identity</h3>
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                   <PreviewField label="Full Name" value={selectedStudent.name} highlight />
//                   <PreviewField label="Aadhaar No" value={selectedStudent.aadhaarNo} />
//                   <PreviewField label="Date of Birth" value={selectedStudent.dob ? new Date(selectedStudent.dob).toLocaleDateString() : ""} />
//                   <PreviewField label="Gender" value={selectedStudent.gender} />
//                   <PreviewField label="Nationality" value={selectedStudent.nationality} />
//                   <PreviewField label="Religion" value={selectedStudent.religion} />
//                   <PreviewField label="Caste" value={selectedStudent.caste} />
//                   <PreviewField label="Mother Tongue" value={selectedStudent.motherTongue} />
//                   <PreviewField label="State" value={selectedStudent.state} />
//                   <PreviewField label="Siblings Info" value={selectedStudent.siblings} />
//                   <PreviewField label="CWSN Status" value={selectedStudent.cwsn} highlight={selectedStudent.cwsn && selectedStudent.cwsn !== "None"} />
//                   <PreviewField label="UDISE + Number" value={selectedStudent.udisePlus} />
//                   <PreviewField label="1st Language" value={selectedStudent.firstLanguage} />
//                   <PreviewField label="2nd Language" value={selectedStudent.secondLanguage} />
//                   <PreviewField label="3rd Language" value={selectedStudent.thirdLanguage} />
//                 </div>
//               </section>

//               {/* 2. Family Records Preview */}
//               <section>
//                 <h3 className="text-xs font-black text-blue-800 uppercase mb-4 border-l-4 border-blue-600 pl-2">2. Family Records</h3>
//                 <div className="space-y-6">
//                   <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-gray-50/50 p-4 rounded-lg">
//                     <PreviewField label="Father's Name" value={selectedStudent.parentDetails?.fatherName} highlight />
//                     <PreviewField label="Father Mobile" value={selectedStudent.parentDetails?.fatherMobile} />
//                     <PreviewField label="Father Aadhaar" value={selectedStudent.parentDetails?.fatherAadhaar} />
//                     <PreviewField label="Father Qualification" value={selectedStudent.parentDetails?.fatherQualification} />
//                     <PreviewField label="Father Occupation" value={selectedStudent.parentDetails?.fatherOccupation} />
//                     <PreviewField label="Father Annual Income" value={selectedStudent.parentDetails?.fatherAnnualIncome} />
//                   </div>
//                   <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-gray-50/50 p-4 rounded-lg">
//                     <PreviewField label="Mother's Name" value={selectedStudent.parentDetails?.motherName} />
//                     <PreviewField label="Mother Mobile" value={selectedStudent.parentDetails?.motherMobile} />
//                     <PreviewField label="Mother Aadhaar" value={selectedStudent.parentDetails?.motherAadhaar} />
//                     <PreviewField label="Mother Qualification" value={selectedStudent.parentDetails?.motherQualification} />
//                     <PreviewField label="Mother Occupation" value={selectedStudent.parentDetails?.motherOccupation} />
//                     <PreviewField label="Mother Annual Income" value={selectedStudent.parentDetails?.motherAnnualIncome} />
//                   </div>
//                 </div>
//               </section>

//               {/* 3. Academic & Admission Preview */}
//               <section>
//                 <h3 className="text-xs font-black text-blue-800 uppercase mb-4 border-l-4 border-blue-600 pl-2">3. Academic & Admission</h3>
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                   <PreviewField label="Admission No" value={selectedStudent.admissionInfo?.admissionNo} highlight />
//                   <PreviewField label="Class Admitted To" value={selectedStudent.admissionInfo?.classAdmittedTo} />
//                   <PreviewField label="Previous School" value={selectedStudent.admissionInfo?.previousSchoolName} />
//                 </div>
//               </section>
//             </div>
//             <footer className="p-6 bg-gray-50 border-t border-gray-100">
//               <button onClick={() => setSelectedStudent(null)} className="w-full bg-blue-900 text-white py-4 rounded-xl font-bold uppercase hover:bg-black transition-colors">Close Preview</button>
//             </footer>
//           </div>
//         </div>
//       )}

//       {/* MAIN ADMISSION FORM */}
//       <div className="flex-1 bg-white p-6 lg:p-10 rounded-2xl shadow-xl border border-gray-100 text-left">
//         <header className="mb-8 border-b-2 border-blue-100 pb-4">
//           <h2 className="text-3xl font-extrabold text-blue-900 uppercase">Student Admission</h2>
//           <p className="text-gray-500 text-sm italic">Complete all sections and upload required digital documents.</p>
//         </header>

//         <form onSubmit={handleSubmit} className="space-y-10">
          
//           {/* SECTION 1: PERSONAL IDENTITY */}
//           <section>
//             <div className="flex items-center gap-2 mb-6 text-blue-800">
//               <span className="bg-blue-800 text-white w-6 h-6 flex items-center justify-center rounded-full text-xs font-bold">1</span>
//               <h3 className="font-bold uppercase tracking-widest text-sm">Personal Identity</h3>
//             </div>
            
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//               <FormInput label="Full Name" name="name" value={formData.name} onChange={handleInputChange} required />
//               <FormInput
//                 label="Student Aadhaar"
//                 name="aadhaarNo"
//                 placeholder="12-digit number"
//                 value={formData.aadhaarNo}
//                 onChange={handleInputChange}
//                 showUpload={true}
//                 onFileChange={handleFileChange}
//                 uploadedFileName={files.aadhaarNo?.name}
//               />
//               <FormInput label="Date of Birth" name="dob" type="date" value={formData.dob} onChange={handleInputChange} required />
              
//               <div className="flex flex-col space-y-1">
//                 <label className="text-xs font-bold text-gray-600 uppercase">Gender</label>
//                 <select name="gender" value={formData.gender} onChange={handleInputChange} className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-sm outline-none focus:ring-2 focus:ring-blue-500">
//                   <option value="">Select</option>
//                   <option value="Male">Male</option>
//                   <option value="Female">Female</option>
//                   <option value="Other">Other</option>
//                 </select>
//               </div>

//               <FormInput label="Nationality" name="nationality" value={formData.nationality} onChange={handleInputChange} />
//               <FormInput label="Religion" name="religion" value={formData.religion} onChange={handleInputChange} />
//               <FormInput label="Caste" name="caste" value={formData.caste} onChange={handleInputChange} />
//               <FormInput label="Mother Tongue" name="motherTongue" value={formData.motherTongue} onChange={handleInputChange} />
//               <FormInput label="State" name="state" value={formData.state} onChange={handleInputChange} />
              
//               {/* NEW FIELDS ATTACHED DIRECTLY TO STUDENT OBJECT */}
//               <FormInput label="UDISE + Number" name="udisePlus" placeholder="Enter UDISE ID" value={formData.udisePlus} onChange={handleInputChange} />
//               <FormInput label="Siblings Info" name="siblings" placeholder="Names / Classes / Counts" value={formData.siblings} onChange={handleInputChange} />
              
//               <div className="flex flex-col space-y-1">
//                 <label className="text-xs font-bold text-gray-600 uppercase">CWSN Status</label>
//                 <select name="cwsn" value={formData.cwsn} onChange={handleInputChange} className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-sm outline-none focus:ring-2 focus:ring-blue-500">
//                   <option value="">Select Option</option>
//                   <option value="None">None</option>
//                   <option value="Locomotor Disability">Locomotor Disability</option>
//                   <option value="Visual Impairment">Visual Impairment</option>
//                   <option value="Hearing Impairment">Hearing Impairment</option>
//                   <option value="Speech & Language">Speech & Language Disability</option>
//                   <option value="Intellectual Disability">Intellectual Disability</option>
//                   <option value="Other">Other Specific Needs</option>
//                 </select>
//               </div>

//               <FormInput label="First Language" name="firstLanguage" placeholder="e.g. English" value={formData.firstLanguage} onChange={handleInputChange} />
//               <FormInput label="Second Language" name="secondLanguage" placeholder="e.g. Hindi" value={formData.secondLanguage} onChange={handleInputChange} />
//               <FormInput label="Third Language" name="thirdLanguage" placeholder="e.g. Sanskrit" value={formData.thirdLanguage} onChange={handleInputChange} />
//             </div>
//           </section>

//           {/* SECTION 2: FAMILY RECORDS */}
//           <section className="pt-4 border-t border-gray-100">
//             <div className="flex items-center gap-2 mb-6 text-blue-800">
//               <span className="bg-blue-800 text-white w-6 h-6 flex items-center justify-center rounded-full text-xs font-bold">2</span>
//               <h3 className="font-bold uppercase tracking-widest text-sm">Family Records</h3>
//             </div>
            
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//               <div className="lg:col-span-3 h-4"><h4 className="text-[10px] font-black text-blue-600 uppercase tracking-widest">Father Profile</h4></div>
//               <FormInput label="Father's Name" name="fatherName" value={formData.parentDetails.fatherName} onChange={handleInputChange} />
//               <FormInput label="Father Mobile" name="fatherMobile" value={formData.parentDetails.fatherMobile} onChange={handleInputChange} />
//               <FormInput
//                 label="Father Aadhaar"
//                 name="fatherAadhaar"
//                 value={formData.parentDetails.fatherAadhaar}
//                 onChange={handleInputChange}
//                 showUpload={true}
//                 onFileChange={handleFileChange}
//                 uploadedFileName={files.fatherAadhaar?.name}
//               />
              
//               <FormInput label="Qualification" name="fatherQualification" value={formData.parentDetails.fatherQualification} onChange={handleInputChange} />
//               <FormInput label="Occupation" name="fatherOccupation" value={formData.parentDetails.fatherOccupation} onChange={handleInputChange} />
//               <FormInput label="Annual Income" name="fatherAnnualIncome" type="number" value={formData.parentDetails.fatherAnnualIncome} onChange={handleInputChange} />

//               <div className="lg:col-span-3 h-px bg-gray-100 my-4"></div>
//               <div className="lg:col-span-3 h-4"><h4 className="text-[10px] font-black text-blue-600 uppercase tracking-widest">Mother Profile</h4></div>
//               <FormInput label="Mother's Name" name="motherName" value={formData.parentDetails.motherName} onChange={handleInputChange} />
//               <FormInput label="Mother Mobile" name="motherMobile" value={formData.parentDetails.motherMobile} onChange={handleInputChange} />
//               <FormInput
//                 label="Mother Aadhaar"
//                 name="motherAadhaar"
//                 value={formData.parentDetails.motherAadhaar}
//                 onChange={handleInputChange}
//                 showUpload={true}
//                 onFileChange={handleFileChange}
//                 uploadedFileName={files.motherAadhaar?.name}
//               />
             
//               <FormInput label="Qualification" name="motherQualification" value={formData.parentDetails.motherQualification} onChange={handleInputChange} />
//               <FormInput label="Occupation" name="motherOccupation" value={formData.parentDetails.motherOccupation} onChange={handleInputChange} />
//               <FormInput label="Annual Income" name="motherAnnualIncome" type="number" value={formData.parentDetails.motherAnnualIncome} onChange={handleInputChange} />

//               <div className="lg:col-span-3 h-px bg-gray-100 my-4"></div>
//               <div className="lg:col-span-3 h-4"><h4 className="text-[10px] font-black text-blue-600 uppercase tracking-widest">Guardian Profile</h4></div>
//               <FormInput label="Guardian Name" name="guardianName" value={formData.parentDetails.guardianName} onChange={handleInputChange} />
//               <FormInput label="Relation" name="guardianRelation" value={formData.parentDetails.guardianRelation} onChange={handleInputChange} />
//               <FormInput label="Guardian Mobile" name="guardianMobile" value={formData.parentDetails.guardianMobile} onChange={handleInputChange} />
//               <FormInput
//                 label="Guardian Aadhaar"
//                 name="guardianAadhaar"
//                 value={formData.parentDetails.guardianAadhaar}
//                 onChange={handleInputChange}
//                 showUpload={true}
//                 onFileChange={handleFileChange}
//                 uploadedFileName={files.guardianAadhaar?.name}
//               />
//               <FormInput label="Guardian Occupation" name="guardianOccupation" value={formData.parentDetails.guardianOccupation} onChange={handleInputChange} />
//               <FormInput label="Guardian Annual Income" name="guardianAnnualIncome" type="number" value={formData.parentDetails.guardianAnnualIncome} onChange={handleInputChange} />

//               <div className="lg:col-span-3">
//                 <FormInput label="Residence Address" name="residence" value={formData.parentDetails.residence} onChange={handleInputChange} />
//               </div>
//             </div>
//           </section>

//           {/* SECTION 3: ACADEMIC & DOCUMENTS */}
//           <section className="pt-4 border-t border-gray-100">
//             <div className="flex items-center gap-2 mb-6 text-blue-800">
//               <span className="bg-blue-800 text-white w-6 h-6 flex items-center justify-center rounded-full text-xs font-bold">3</span>
//               <h3 className="font-bold uppercase tracking-widest text-sm">Academic & Documents</h3>
//             </div>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
//               <FormInput label="Admission No." name="admissionNo" value={formData.admissionInfo.admissionNo} onChange={handleInputChange} required />
//               <FormInput label="Class Admitted" name="classAdmittedTo" value={formData.admissionInfo.classAdmittedTo} onChange={handleInputChange} />
//               <FormInput label="Previous School" name="previousSchoolName" value={formData.admissionInfo.previousSchoolName} onChange={handleInputChange} />
//               <FormInput label="Prev. TC No." name="previousTCNumber" value={formData.admissionInfo.previousTCNumber} onChange={handleInputChange} />
//               <FormInput label="Prev. TC Date" name="previousTCDate" type="date" value={formData.admissionInfo.previousTCDate} onChange={handleInputChange} />
//             </div>

//             {/* CHECKLIST */}
//             <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
//               <h4 className="text-xs font-black text-blue-900 uppercase tracking-widest mb-4">Submission Checklist</h4>
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//                 <div className="flex flex-col space-y-3">
//                   <label className="flex items-center space-x-3 cursor-pointer group">
//                     <input type="checkbox" name="hasTC" checked={formData.documents.hasTC} onChange={handleInputChange} className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
//                     <span className="text-sm font-bold text-gray-700">TC</span>
//                   </label>
//                   {formData.documents.hasTC && (
//                     <div className="ml-8 animate-in fade-in slide-in-from-top-1">
//                       <input type="file" onChange={(e) => handleFileChange('tcFile', e.target.files[0])} className="text-xs text-gray-500 file:mr-4 file:py-1 file:px-3 file:rounded-full file:border-0 file:bg-blue-600 file:text-white file:font-bold hover:file:bg-black" />
//                     </div>
//                   )}
//                 </div>

//                 <div className="flex flex-col space-y-3">
//                   <label className="flex items-center space-x-3 cursor-pointer group">
//                     <input type="checkbox" name="hasConduct" checked={formData.documents.hasConduct} onChange={handleInputChange} className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
//                     <span className="text-sm font-bold text-gray-700">Conduct Certificate</span>
//                   </label>
//                   {formData.documents.hasConduct && (
//                     <div className="ml-8 animate-in fade-in slide-in-from-top-1">
//                       <input type="file" onChange={(e) => handleFileChange('conductFile', e.target.files[0])} className="text-xs text-gray-500 file:mr-4 file:py-1 file:px-3 file:rounded-full file:border-0 file:bg-blue-600 file:text-white file:font-bold hover:file:bg-black" />
//                     </div>
//                   )}
//                 </div>

//                 <div className="flex flex-col space-y-3">
//                   <label className="flex items-center space-x-3 cursor-pointer group">
//                     <input type="checkbox" name="hasMarksMemo" checked={formData.documents.hasMarksMemo} onChange={handleInputChange} className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
//                     <span className="text-sm font-bold text-gray-700">Marks Memo</span>
//                   </label>
//                   {formData.documents.hasMarksMemo && (
//                     <div className="ml-8 animate-in fade-in slide-in-from-top-1">
//                       <input type="file" onChange={(e) => handleFileChange('marksMemoFile', e.target.files[0])} className="text-xs text-gray-500 file:mr-4 file:py-1 file:px-3 file:rounded-full file:border-0 file:bg-blue-600 file:text-white file:font-bold hover:file:bg-black" />
//                     </div>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </section>

//           <button type="submit" disabled={isSubmitting} className={`w-full py-4 rounded-xl font-bold uppercase tracking-widest transition-all shadow-lg ${isSubmitting ? 'bg-gray-400' : 'bg-blue-700 hover:bg-black text-white'}`}>
//             {isSubmitting ? 'Finalizing Entry...' : 'Finalize Admission'}
//           </button>
//         </form>
//       </div>

//       {/* SIDEBAR DUPLICATE LISTING */}
//       {duplicates.length > 0 && (
//         <aside className="w-full lg:w-80">
//           <div className="sticky top-6 p-6 rounded-2xl shadow-lg border-t-8 bg-red-50 border-red-500 text-left">
//             <h4 className="font-black text-xs uppercase mb-4 tracking-tighter text-red-600">⚠️ {duplicates.length} Potential Match(es)</h4>
//             <div className="space-y-3">
//               {duplicates.map(student => (
//                 <div key={student._id} onClick={() => setSelectedStudent(student)} className="cursor-pointer p-3 bg-white rounded-lg border border-red-100 hover:border-blue-500 transition-all shadow-sm text-[10px]">
//                   <p className="font-black text-red-800 uppercase">{student.name}</p>
//                   <p className="text-gray-500 mt-1 font-bold">ADM: {student.admissionInfo?.admissionNo}</p>
//                   <p className="text-gray-500 font-bold">FATHER: {student.parentDetails?.fatherName}</p>
//                   <p className="text-blue-600 mt-2 font-black">CLICK TO COMPARE ALL FIELDS →</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </aside>
//       )}
//     </div>
//   );
// };

// export default AdmissionForm;


import React, { useState, useEffect } from 'react';
import axios from 'axios';

/**
 * REUSABLE FORM INPUT COMPONENT
 */
const FormInput = ({
  label,
  name,
  type = "text",
  placeholder = "",
  required = false,
  value,
  onChange,
  onFileChange,
  showUpload = false,
  uploadedFileName = ""
}) => (
  <div className="flex flex-col space-y-1">
    <div className="flex justify-between items-center">
      <label className="text-xs font-bold text-gray-600 uppercase tracking-tight">
        {label} {required && <span className="text-red-500">*</span>}
      </label>

      {showUpload && (
        <label className="cursor-pointer flex flex-col items-end">
          <span className="text-[10px] font-bold text-blue-600 hover:text-blue-800 transition-colors uppercase decoration-dotted underline underline-offset-2">
            Upload
          </span>

          <input
            type="file"
            className="hidden"
            onChange={(e) => onFileChange(name, e.target.files[0])}
          />

          {uploadedFileName && (
            <span className="text-[9px] text-green-600 font-bold mt-1">
              ✓ {uploadedFileName}
            </span>
          )}
        </label>
      )}
    </div>

    <input
      type={type}
      name={name}
      value={value || ""}
      placeholder={placeholder}
      required={required}
      onChange={onChange}
      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all bg-gray-50 text-sm"
    />
  </div>
);

/**
 * REUSABLE PREVIEW FIELD COMPONENT 
 */
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
      className={`px-3 py-2 border rounded-md text-sm transition-all ${
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

const AdmissionForm = () => {

  const baseURL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';
  const initialFormState = {
    name: '',
    dob: '',
    gender: '',
    aadhaarNo: '',
    nationality: 'Indian',
    religion: '',
    caste: '',
    motherTongue: '',
    state: '',
    siblings: '',
    cwsn: '',
    firstLanguage: '',
    secondLanguage: '',
    thirdLanguage: '',
    udisePlus: '',
    parentDetails: { 
      fatherName: '', fatherMobile: '', fatherAadhaar: '', fatherQualification: '', fatherOccupation: '', fatherAnnualIncome: '',
      motherName: '', motherMobile: '', motherAadhaar: '', motherQualification: '', motherAnnualIncome: '', motherOccupation: '',
      guardianName: '', guardianRelation: '', guardianMobile: '', guardianAadhaar: '', guardianOccupation: '', guardianAnnualIncome: '',
      residence: '' 
    },
    admissionInfo: { 
      admissionNo: '', classAdmittedTo: '', previousSchoolName: '', previousTCNumber: '', previousTCDate: '' 
    },
    documents: {
      hasTC: false,
      hasConduct: false,
      hasMarksMemo: false
    }
  };

  const [formData, setFormData] = useState(initialFormState);
  const [files, setFiles] = useState({}); 
  const [duplicates, setDuplicates] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null); 
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const submissionData = new FormData();
    submissionData.append('data', JSON.stringify(formData));
    
    if (files.tcFile) submissionData.append('tcFile', files.tcFile);
    if (files.conductFile) submissionData.append('conductFile', files.conductFile);
    if (files.marksMemoFile) submissionData.append('marksMemoFile', files.marksMemoFile);
    
    if (files.aadhaarNo) submissionData.append('studentAadhaarFile', files.aadhaarNo);
    if (files.fatherAadhaar) submissionData.append('fatherAadhaarFile', files.fatherAadhaar);
    if (files.motherAadhaar) submissionData.append('motherAadhaarFile', files.motherAadhaar);
    if (files.guardianAadhaar) submissionData.append('guardianAadhaarFile', files.guardianAadhaar);

    try {
      console.log("FILES BEING SENT:", files);
      const res = await axios.post(`${baseURL}/api/students/admission`, submissionData, {
      // const res = await axios.post('http://localhost:5000/api/students/admission', submissionData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      alert("Success!");
      setFormData(initialFormState);
      setFiles({});
    } catch (err) {
      alert(err.response?.data?.message || "Error occurred");
    } finally { 
      setIsSubmitting(false); 
    }
  };

  const handleFileChange = (identifier, file) => {
    if (!file) return;
    setFiles((prev) => ({
      ...prev,
      [identifier]: file,
    }));
    alert(`${identifier} uploaded successfully: ${file.name}`);
  };

  useEffect(() => {
    const searchDuplicates = async () => {
      try {
        const res = await axios.get(`${baseURL}/api/students/search`, {
        // const res = await axios.get(`http://localhost:5000/api/students/search`, {
          params: { name: formData.name, fatherName: formData.parentDetails.fatherName }
        });
        setDuplicates(res.data);
      } catch (err) { console.error("Search failed", err); }
    };

    const timer = setTimeout(() => {
      if (formData.name.trim().length >= 2) searchDuplicates();
      else setDuplicates([]);
    }, 300);

    return () => clearTimeout(timer);
  }, [formData.name, formData.parentDetails.fatherName]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    // Checkbox handling for documents
    if (name === "hasTC" || name === "hasConduct" || name === "hasMarksMemo") {
      setFormData((prev) => ({
        ...prev,
        documents: { ...prev.documents, [name]: checked },
      }));
      return;
    }

    // Parent details object parsing
    if (
      [
        "fatherName", "fatherMobile", "fatherAadhaar", "fatherQualification", "fatherOccupation", "fatherAnnualIncome",
        "motherName", "motherMobile", "motherAadhaar", "motherQualification", "motherOccupation", "motherAnnualIncome",
        "guardianName", "guardianRelation", "guardianMobile", "guardianAadhaar", "guardianOccupation", "guardianAnnualIncome",
        "residence"
      ].includes(name)
    ) {
      setFormData((prev) => ({
        ...prev,
        parentDetails: { ...prev.parentDetails, [name]: value },
      }));
      return;
    }

    // Admission info object parsing
    if (
      [
        "admissionNo", "classAdmittedTo", "previousSchoolName", "previousTCNumber", "previousTCDate"
      ].includes(name)
    ) {
      setFormData((prev) => ({
        ...prev,
        admissionInfo: { ...prev.admissionInfo, [name]: value },
      }));
      return;
    }

    // Direct student fields (Includes siblings, cwsn, languages, udisePlus)
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <div className="flex flex-col lg:flex-row gap-6 p-4 lg:p-6 bg-slate-50 min-h-screen font-sans">
      
      {/* DUPLICATE PREVIEW MODAL */}
      {selectedStudent && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 text-left">
          <div className="bg-white rounded-2xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto">
            <header className="sticky top-0 bg-white border-b border-gray-100 p-6 flex justify-between items-center z-10">
              <div>
                <h2 className="text-2xl font-black text-red-600 uppercase">Duplicate Record Found</h2>
                <p className="text-gray-500 text-[10px] font-bold tracking-widest uppercase">Compare with existing database entry</p>
              </div>
              <button onClick={() => setSelectedStudent(null)} className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-red-100 hover:text-red-600 transition-colors text-2xl">&times;</button>
            </header>

            <div className="p-8 space-y-10">
              {/* 1. Personal Identity Preview */}
              <section>
                <h3 className="text-xs font-black text-blue-800 uppercase mb-4 border-l-4 border-blue-600 pl-2">1. Personal Identity</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <PreviewField label="Full Name" value={selectedStudent.name} highlight />
                  <PreviewField label="Aadhaar No" value={selectedStudent.aadhaarNo} />
                  <PreviewField label="Date of Birth" value={selectedStudent.dob ? new Date(selectedStudent.dob).toLocaleDateString() : ""} />
                  <PreviewField label="Gender" value={selectedStudent.gender} />
                  <PreviewField label="Nationality" value={selectedStudent.nationality} />
                  <PreviewField label="Religion" value={selectedStudent.religion} />
                  <PreviewField label="Caste" value={selectedStudent.caste} />
                  <PreviewField label="Mother Tongue" value={selectedStudent.motherTongue} />
                  <PreviewField label="State" value={selectedStudent.state} />
                  <PreviewField label="UDISE + Number" value={selectedStudent.udisePlus} />
                  <PreviewField label="Siblings Info" value={selectedStudent.siblings} />
                  <PreviewField label="CWSN Status" value={selectedStudent.cwsn} highlight={selectedStudent.cwsn && selectedStudent.cwsn !== "None"} />
                  <PreviewField label="1st Language" value={selectedStudent.firstLanguage} />
                  <PreviewField label="2nd Language" value={selectedStudent.secondLanguage} />
                  <PreviewField label="3rd Language" value={selectedStudent.thirdLanguage} />
                </div>
              </section>

              {/* 2. Family Records Preview */}
              <section>
                <h3 className="text-xs font-black text-blue-800 uppercase mb-4 border-l-4 border-blue-600 pl-2">2. Family Records</h3>
                <div className="space-y-6">
                  {/* Father Profile */}
                  <div className="bg-gray-50/50 p-4 rounded-lg space-y-3">
                    <h4 className="text-[10px] font-black text-blue-600 uppercase tracking-widest">Father Profile</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <PreviewField label="Father's Name" value={selectedStudent.parentDetails?.fatherName} highlight />
                      <PreviewField label="Father Mobile" value={selectedStudent.parentDetails?.fatherMobile} />
                      <PreviewField label="Father Aadhaar" value={selectedStudent.parentDetails?.fatherAadhaar} />
                      <PreviewField label="Qualification" value={selectedStudent.parentDetails?.fatherQualification} />
                      <PreviewField label="Occupation" value={selectedStudent.parentDetails?.fatherOccupation} />
                      <PreviewField label="Annual Income" value={selectedStudent.parentDetails?.fatherAnnualIncome} />
                    </div>
                  </div>

                  {/* Mother Profile */}
                  <div className="bg-gray-50/50 p-4 rounded-lg space-y-3">
                    <h4 className="text-[10px] font-black text-blue-600 uppercase tracking-widest">Mother Profile</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <PreviewField label="Mother's Name" value={selectedStudent.parentDetails?.motherName} />
                      <PreviewField label="Mother Mobile" value={selectedStudent.parentDetails?.motherMobile} />
                      <PreviewField label="Mother Aadhaar" value={selectedStudent.parentDetails?.motherAadhaar} />
                      <PreviewField label="Qualification" value={selectedStudent.parentDetails?.motherQualification} />
                      <PreviewField label="Occupation" value={selectedStudent.parentDetails?.motherOccupation} />
                      <PreviewField label="Annual Income" value={selectedStudent.parentDetails?.motherAnnualIncome} />
                    </div>
                  </div>

                  {/* Guardian Profile */}
                  <div className="bg-gray-50/50 p-4 rounded-lg space-y-3">
                    <h4 className="text-[10px] font-black text-blue-600 uppercase tracking-widest">Guardian Profile</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <PreviewField label="Guardian Name" value={selectedStudent.parentDetails?.guardianName} />
                      <PreviewField label="Relation" value={selectedStudent.parentDetails?.guardianRelation} />
                      <PreviewField label="Guardian Mobile" value={selectedStudent.parentDetails?.guardianMobile} />
                      <PreviewField label="Guardian Aadhaar" value={selectedStudent.parentDetails?.guardianAadhaar} />
                      <PreviewField label="Occupation" value={selectedStudent.parentDetails?.guardianOccupation} />
                      <PreviewField label="Annual Income" value={selectedStudent.parentDetails?.guardianAnnualIncome} />
                    </div>
                  </div>

                  {/* Address Section */}
                  <div className="bg-gray-50/50 p-4 rounded-lg">
                    <PreviewField label="Residence Address" value={selectedStudent.parentDetails?.residence} />
                  </div>
                </div>
              </section>

              {/* 3. Academic & Admission Preview */}
              <section>
                <h3 className="text-xs font-black text-blue-800 uppercase mb-4 border-l-4 border-blue-600 pl-2">3. Academic & Admission Info</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <PreviewField label="Admission No" value={selectedStudent.admissionInfo?.admissionNo} highlight />
                  <PreviewField label="Class Admitted To" value={selectedStudent.admissionInfo?.classAdmittedTo} />
                  <PreviewField label="Previous School" value={selectedStudent.admissionInfo?.previousSchoolName} />
                  <PreviewField label="Prev. TC No." value={selectedStudent.admissionInfo?.previousTCNumber} />
                  <PreviewField label="Prev. TC Date" value={selectedStudent.admissionInfo?.previousTCDate ? new Date(selectedStudent.admissionInfo.previousTCDate).toLocaleDateString() : ""} />
                </div>
              </section>

              {/* 4. Checklist Documents Status */}
<section>
  <h3 className="text-xs font-black text-blue-800 uppercase mb-4 border-l-4 border-blue-600 pl-2">
    4. Document Checklist Status
  </h3>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

    {/* STUDENT AADHAAR */}
    <PreviewField
      label="Student Aadhaar"
      value={
        selectedStudent.documents?.studentAadhaarFile
          ? "Submitted"
          : "Not Submitted"
      }
      highlight={!!selectedStudent.documents?.studentAadhaarFile}
      fileUrl={selectedStudent.documents?.studentAadhaarFile}
    />

    {/* FATHER AADHAAR */}
    <PreviewField
      label="Father Aadhaar"
      value={
        selectedStudent.documents?.fatherAadhaarFile
          ? "Submitted"
          : "Not Submitted"
      }
      highlight={!!selectedStudent.documents?.fatherAadhaarFile}
      fileUrl={selectedStudent.documents?.fatherAadhaarFile}
    />

    {/* MOTHER AADHAAR */}
    <PreviewField
      label="Mother Aadhaar"
      value={
        selectedStudent.documents?.motherAadhaarFile
          ? "Submitted"
          : "Not Submitted"
      }
      highlight={!!selectedStudent.documents?.motherAadhaarFile}
      fileUrl={selectedStudent.documents?.motherAadhaarFile}
    />

    {/* GUARDIAN AADHAAR */}
    <PreviewField
      label="Guardian Aadhaar"
      value={
        selectedStudent.documents?.guardianAadhaarFile
          ? "Submitted"
          : "Not Submitted"
      }
      highlight={!!selectedStudent.documents?.guardianAadhaarFile}
      fileUrl={selectedStudent.documents?.guardianAadhaarFile}
    />

    {/* TC */}
    <PreviewField
      label="Transfer Certificate (TC)"
      value={
        selectedStudent.documents?.tcFile
          ? "Submitted"
          : "Not Submitted"
      }
      highlight={!!selectedStudent.documents?.tcFile}
      fileUrl={selectedStudent.documents?.tcFile}
    />

    {/* Conduct */}
    <PreviewField
      label="Conduct Certificate"
      value={
        selectedStudent.documents?.conductFile
          ? "Submitted"
          : "Not Submitted"
      }
      highlight={!!selectedStudent.documents?.conductFile}
      fileUrl={selectedStudent.documents?.conductFile}
    />

    {/* Marks Memo */}
    <PreviewField
      label="Marks Memo"
      value={
        selectedStudent.documents?.marksMemoFile
          ? "Submitted"
          : "Not Submitted"
      }
      highlight={!!selectedStudent.documents?.marksMemoFile}
      fileUrl={selectedStudent.documents?.marksMemoFile}
    />

  </div>
</section>
            </div>
            <footer className="p-6 bg-gray-50 border-t border-gray-100">
              <button onClick={() => setSelectedStudent(null)} className="w-full bg-blue-900 text-white py-4 rounded-xl font-bold uppercase hover:bg-black transition-colors">Close Preview</button>
            </footer>
          </div>
        </div>
      )}

      {/* MAIN ADMISSION FORM */}
      <div className="flex-1 bg-white p-6 lg:p-10 rounded-2xl shadow-xl border border-gray-100 text-left">
        <header className="mb-8 border-b-2 border-blue-100 pb-4">
          <h2 className="text-3xl font-extrabold text-blue-900">Student Admission</h2>
          <p className="text-gray-500 text-sm italic">Complete all sections and upload required digital documents.</p>
        </header>

        <form onSubmit={handleSubmit} className="space-y-10">
          
          {/* SECTION 1: PERSONAL IDENTITY */}
          <section>
            <div className="flex items-center gap-2 mb-6 text-blue-800">
              <span className="bg-blue-800 text-white w-6 h-6 flex items-center justify-center rounded-full text-xs font-bold">1</span>
              <h3 className="font-bold uppercase tracking-widest text-sm">Personal Identity</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <FormInput label="Full Name" name="name" value={formData.name} onChange={handleInputChange} required />
              <FormInput
                label="Student Aadhaar"
                name="aadhaarNo"
                placeholder="12-digit number"
                value={formData.aadhaarNo}
                onChange={handleInputChange}
                showUpload={true}
                onFileChange={handleFileChange}
                uploadedFileName={files.aadhaarNo?.name}
              />
              <FormInput label="Date of Birth" name="dob" type="date" value={formData.dob} onChange={handleInputChange} required />
              
              <div className="flex flex-col space-y-1">
                <label className="text-xs font-bold text-gray-600 uppercase">Gender</label>
                <select name="gender" value={formData.gender} onChange={handleInputChange} className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-sm outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="">Select</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <FormInput label="Nationality" name="nationality" value={formData.nationality} onChange={handleInputChange} />
              <FormInput label="Religion" name="religion" value={formData.religion} onChange={handleInputChange} />
              <FormInput label="Caste" name="caste" value={formData.caste} onChange={handleInputChange} />
              <FormInput label="Mother Tongue" name="motherTongue" value={formData.motherTongue} onChange={handleInputChange} />
              <FormInput label="State" name="state" value={formData.state} onChange={handleInputChange} />
              
              {/* DIRECT STUDENT OBJECT FIELDS */}
              <FormInput label="UDISE + Number" name="udisePlus" placeholder="Enter UDISE ID" value={formData.udisePlus} onChange={handleInputChange} />
              <FormInput label="Siblings Info" name="siblings" placeholder="Names / Classes / Counts" value={formData.siblings} onChange={handleInputChange} />
              
              <div className="flex flex-col space-y-1">
                <label className="text-xs font-bold text-gray-600 uppercase">CWSN Status</label>
                <select name="cwsn" value={formData.cwsn} onChange={handleInputChange} className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-sm outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="">Select Option</option>
                  <option value="None">None</option>
                  <option value="Locomotor Disability">Locomotor Disability</option>
                  <option value="Visual Impairment">Visual Impairment</option>
                  <option value="Hearing Impairment">Hearing Impairment</option>
                  <option value="Speech & Language">Speech & Language Disability</option>
                  <option value="Intellectual Disability">Intellectual Disability</option>
                  <option value="Other">Other Specific Needs</option>
                </select>
              </div>

              <FormInput label="First Language" name="firstLanguage" placeholder="e.g. English" value={formData.firstLanguage} onChange={handleInputChange} />
              <FormInput label="Second Language" name="secondLanguage" placeholder="e.g. Hindi" value={formData.secondLanguage} onChange={handleInputChange} />
              <FormInput label="Third Language" name="thirdLanguage" placeholder="e.g. Sanskrit" value={formData.thirdLanguage} onChange={handleInputChange} />
            </div>
          </section>

          {/* SECTION 2: FAMILY RECORDS */}
          <section className="pt-4 border-t border-gray-100">
            <div className="flex items-center gap-2 mb-6 text-blue-800">
              <span className="bg-blue-800 text-white w-6 h-6 flex items-center justify-center rounded-full text-xs font-bold">2</span>
              <h3 className="font-bold uppercase tracking-widest text-sm">Family Records</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-3 h-4"><h4 className="text-[10px] font-black text-blue-600 uppercase tracking-widest">Father Profile</h4></div>
              <FormInput label="Father's Name" name="fatherName" value={formData.parentDetails.fatherName} onChange={handleInputChange} />
              <FormInput label="Father Mobile" name="fatherMobile" value={formData.parentDetails.fatherMobile} onChange={handleInputChange} />
              <FormInput
                label="Father Aadhaar"
                name="fatherAadhaar"
                value={formData.parentDetails.fatherAadhaar}
                onChange={handleInputChange}
                showUpload={true}
                onFileChange={handleFileChange}
                uploadedFileName={files.fatherAadhaar?.name}
              />
              
              <FormInput label="Qualification" name="fatherQualification" value={formData.parentDetails.fatherQualification} onChange={handleInputChange} />
              <FormInput label="Occupation" name="fatherOccupation" value={formData.parentDetails.fatherOccupation} onChange={handleInputChange} />
              <FormInput label="Annual Income" name="fatherAnnualIncome" type="number" value={formData.parentDetails.fatherAnnualIncome} onChange={handleInputChange} />

              <div className="lg:col-span-3 h-px bg-gray-100 my-4"></div>
              <div className="lg:col-span-3 h-4"><h4 className="text-[10px] font-black text-blue-600 uppercase tracking-widest">Mother Profile</h4></div>
              <FormInput label="Mother's Name" name="motherName" value={formData.parentDetails.motherName} onChange={handleInputChange} />
              <FormInput label="Mother Mobile" name="motherMobile" value={formData.parentDetails.motherMobile} onChange={handleInputChange} />
              <FormInput
                label="Mother Aadhaar"
                name="motherAadhaar"
                value={formData.parentDetails.motherAadhaar}
                onChange={handleInputChange}
                showUpload={true}
                onFileChange={handleFileChange}
                uploadedFileName={files.motherAadhaar?.name}
              />
             
              <FormInput label="Qualification" name="motherQualification" value={formData.parentDetails.motherQualification} onChange={handleInputChange} />
              <FormInput label="Occupation" name="motherOccupation" value={formData.parentDetails.motherOccupation} onChange={handleInputChange} />
              <FormInput label="Annual Income" name="motherAnnualIncome" type="number" value={formData.parentDetails.motherAnnualIncome} onChange={handleInputChange} />

              <div className="lg:col-span-3 h-px bg-gray-100 my-4"></div>
              <div className="lg:col-span-3 h-4"><h4 className="text-[10px] font-black text-blue-600 uppercase tracking-widest">Guardian Profile</h4></div>
              <FormInput label="Guardian Name" name="guardianName" value={formData.parentDetails.guardianName} onChange={handleInputChange} />
              <FormInput label="Relation" name="guardianRelation" value={formData.parentDetails.guardianRelation} onChange={handleInputChange} />
              <FormInput label="Guardian Mobile" name="guardianMobile" value={formData.parentDetails.guardianMobile} onChange={handleInputChange} />
              <FormInput
                label="Guardian Aadhaar"
                name="guardianAadhaar"
                value={formData.parentDetails.guardianAadhaar}
                onChange={handleInputChange}
                showUpload={true}
                onFileChange={handleFileChange}
                uploadedFileName={files.guardianAadhaar?.name}
              />
              <FormInput label="Guardian Occupation" name="guardianOccupation" value={formData.parentDetails.guardianOccupation} onChange={handleInputChange} />
              <FormInput label="Guardian Annual Income" name="guardianAnnualIncome" type="number" value={formData.parentDetails.guardianAnnualIncome} onChange={handleInputChange} />

              <div className="lg:col-span-3">
                <FormInput label="Residence Address" name="residence" value={formData.parentDetails.residence} onChange={handleInputChange} />
              </div>
            </div>
          </section>

          {/* SECTION 3: ACADEMIC & DOCUMENTS */}
          <section className="pt-4 border-t border-gray-100">
            <div className="flex items-center gap-2 mb-6 text-blue-800">
              <span className="bg-blue-800 text-white w-6 h-6 flex items-center justify-center rounded-full text-xs font-bold">3</span>
              <h3 className="font-bold uppercase tracking-widest text-sm">Academic & Documents</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <FormInput label="Admission No." name="admissionNo" value={formData.admissionInfo.admissionNo} onChange={handleInputChange} required />
              <FormInput label="Class Admitted" name="classAdmittedTo" value={formData.admissionInfo.classAdmittedTo} onChange={handleInputChange} />
              <FormInput label="Previous School" name="previousSchoolName" value={formData.admissionInfo.previousSchoolName} onChange={handleInputChange} />
              <FormInput label="Prev. TC No." name="previousTCNumber" value={formData.admissionInfo.previousTCNumber} onChange={handleInputChange} />
              <FormInput label="Prev. TC Date" name="previousTCDate" type="date" value={formData.admissionInfo.previousTCDate} onChange={handleInputChange} />
            </div>

            {/* CHECKLIST */}
            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
              <h4 className="text-xs font-black text-blue-900 uppercase tracking-widest mb-4">Submission Checklist</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex flex-col space-y-3">
                  <label className="flex items-center space-x-3 cursor-pointer group">
                    <input type="checkbox" name="hasTC" checked={formData.documents.hasTC} onChange={handleInputChange} className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                    <span className="text-sm font-bold text-gray-700">TC</span>
                  </label>
                  {formData.documents.hasTC && (
                    <div className="ml-8 animate-in fade-in slide-in-from-top-1">
                      <input type="file" onChange={(e) => handleFileChange('tcFile', e.target.files[0])} className="text-xs text-gray-500 file:mr-4 file:py-1 file:px-3 file:rounded-full file:border-0 file:bg-blue-600 file:text-white file:font-bold hover:file:bg-black" />
                    </div>
                  )}
                </div>

                <div className="flex flex-col space-y-3">
                  <label className="flex items-center space-x-3 cursor-pointer group">
                    <input type="checkbox" name="hasConduct" checked={formData.documents.hasConduct} onChange={handleInputChange} className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                    <span className="text-sm font-bold text-gray-700">Conduct Certificate</span>
                  </label>
                  {formData.documents.hasConduct && (
                    <div className="ml-8 animate-in fade-in slide-in-from-top-1">
                      <input type="file" onChange={(e) => handleFileChange('conductFile', e.target.files[0])} className="text-xs text-gray-500 file:mr-4 file:py-1 file:px-3 file:rounded-full file:border-0 file:bg-blue-600 file:text-white file:font-bold hover:file:bg-black" />
                    </div>
                  )}
                </div>

                <div className="flex flex-col space-y-3">
                  <label className="flex items-center space-x-3 cursor-pointer group">
                    <input type="checkbox" name="hasMarksMemo" checked={formData.documents.hasMarksMemo} onChange={handleInputChange} className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                    <span className="text-sm font-bold text-gray-700">Marks Memo</span>
                  </label>
                  {formData.documents.hasMarksMemo && (
                    <div className="ml-8 animate-in fade-in slide-in-from-top-1">
                      <input type="file" onChange={(e) => handleFileChange('marksMemoFile', e.target.files[0])} className="text-xs text-gray-500 file:mr-4 file:py-1 file:px-3 file:rounded-full file:border-0 file:bg-blue-600 file:text-white file:font-bold hover:file:bg-black" />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>

          <button type="submit" disabled={isSubmitting} className={`w-full py-4 rounded-xl font-bold uppercase tracking-widest transition-all shadow-lg ${isSubmitting ? 'bg-gray-400' : 'bg-blue-700 hover:bg-black text-white'}`}>
            {isSubmitting ? 'Finalizing Entry...' : 'Finalize Admission'}
          </button>
        </form>
      </div>

      {/* SIDEBAR DUPLICATE LISTING */}
      {duplicates.length > 0 && (
        <aside className="w-full lg:w-80">
          <div className="sticky top-6 p-6 rounded-2xl shadow-lg border-t-8 bg-red-50 border-red-500 text-left">
            <h4 className="font-black text-xs uppercase mb-4 tracking-tighter text-red-600">⚠️ {duplicates.length} Potential Match(es)</h4>
            <div className="space-y-3">
              {duplicates.map(student => (
                <div key={student._id} onClick={() => setSelectedStudent(student)} className="cursor-pointer p-3 bg-white rounded-lg border border-red-100 hover:border-blue-500 transition-all shadow-sm text-[10px]">
                  <p className="font-black text-red-800 uppercase">{student.name}</p>
                  <p className="text-gray-500 mt-1 font-bold">ADM: {student.admissionInfo?.admissionNo}</p>
                  <p className="text-gray-500 font-bold">FATHER: {student.parentDetails?.fatherName}</p>
                  <p className="text-blue-600 mt-2 font-black">CLICK TO COMPARE ALL FIELDS →</p>
                </div>
              ))}
            </div>
          </div>
        </aside>
      )}
    </div>
  );
};

export default AdmissionForm;