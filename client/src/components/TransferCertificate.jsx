// // import React, { useState } from 'react';
// import React, { useState } from 'react';
// import axios from 'axios';
// const TransferCertificate = ({ data, onBack, previewMode = false }) => {

//   if (!data) return null;

// const [tcData, setTcData] = useState({
//   bookNo: data.generatedTC?.bookNo || "",
//   slNo: data.generatedTC?.slNo || data.generatedTC?.tcNumber || "",

//   firstAdmissionDate:
//     data.generatedTC?.firstAdmissionDate ||
//     data.admissionInfo?.admissionDate ||
//     "",

//   lastStudiedClass:
//     data.generatedTC?.lastStudiedClass ||
//     data.admissionInfo?.classAdmittedTo ||
//     "",

//   subjectsStudied:
//     data.generatedTC?.subjectsStudied ||
//     "Eng, Math, Sci, Soc, Hindi",

//   qualifiedForPromotion:
//     data.generatedTC?.qualifiedForPromotion || "",

//   feeConcession:
//     data.generatedTC?.feeConcession || "",

//   totalWorkingDays:
//     data.generatedTC?.totalWorkingDays || "",

//   totalPresentDays:
//     data.generatedTC?.totalPresentDays || "",

//   nccScout:
//     data.generatedTC?.nccScout || "",

//   gamesPlayed:
//     data.generatedTC?.gamesPlayed || "",

//   conduct:
//     data.generatedTC?.conduct || "",

//   dateOfApplication:
//     data.generatedTC?.dateOfApplication || "",

//   dateOfIssue:
//     data.generatedTC?.dateOfIssue || "",

//   reasonForLeaving:
//     data.generatedTC?.reasonForLeaving || "",

//   remarks:
//     data.generatedTC?.remarks || ""
// });

// const handleChange = (field, value) => {
//   setTcData(prev => ({
//     ...prev,
//     [field]: value
//   }));
// };


//   const handlePrint = () => {
//     window.print();
//   };


// const handleSaveTC = async () => {
//   try {
//     const response = await axios.put(
//       `http://localhost:5000/api/students/finalize-tc/${data._id}`,
//       tcData
//     );

//     alert("TC Saved Successfully!");

//     // Close TC page + refresh StudentTable
//     if (onBack) {
//       await onBack();
//     }

//   } catch (error) {
//     console.error(
//       "TC Save Error:",
//       error.response?.data || error.message
//     );

//     alert(
//       error.response?.data?.message || "Failed to save TC"
//     );
//   }
// };
// const handleFinalSave = async () => {
//   try {
//     const response = await axios.put(
//       `http://localhost:5000/api/students/finalize-tc/${data._id}`,
//       tcData
//     );

//     alert("TC finalized successfully!");

//     if (onBack) {
//       onBack();
//     }

//   } catch (error) {
//     console.error("Final Save Error:", error);
//     alert("Failed to finalize TC");
//   }
// };
//   return (
//     <div className="bg-slate-100 min-h-screen p-4 md:p-10 print:p-0 print:bg-white">
//       {/* Action Buttons - Hidden during print */}
//       <div className="max-w-4xl mx-auto mb-6 flex justify-between items-center print:hidden">
//         <button 
//           onClick={onBack}
//           className="text-gray-600 font-bold uppercase text-xs hover:text-blue-600 flex items-center gap-2"
//         >
//           ← Back to Profile
//         </button>
//         <button 
//           onClick={handlePrint}
//           className="bg-blue-600 text-white px-6 py-2 rounded-lg font-bold shadow-lg hover:bg-blue-700 transition-all"
//         >
//           Print Transfer Certificate
//         </button>
//       </div>

//       {/* The Certificate Sheet */}
//       <div className="max-w-[800px] mx-auto bg-white shadow-2xl p-12 border border-gray-200 print:shadow-none print:border-none print:p-8" id="tc-content">
        
//         {/* Header Section */}
//         <div className="text-center mb-4">
//                   <h1 className="text-3xl font-black text-red-600 uppercase tracking-tighter leading-none mb-1">Montessori Indus School</h1>
//                 <div className="text-[11px] text-gray-600 leading-snug">
//           Address: NH-44, Indus School Lane, Pandipadu, Kallur, Kurnool, Andhra Pradesh 518002. <br />
// Near Flyover, Opposite Carbide Factory | Pin: 518002 <br />
// +91 9866162900 | 08886637310 | info@montessoriindus.com | montessoriindus.in
//           </div>
//           <h2 className="mt-1 text-xl font-bold border-y-2 border-black py-1 uppercase tracking-[0.2em]">Transfer Certificate</h2>
//           <p className="text-xs text-blue-600 font-bold mt-2 print:hidden">
//   Blue highlighted fields are editable before printing
// </p>
//         </div>

//         {/* Top Metadata */}
//         <div className="flex justify-between text-sm font-bold mb-8 gap-4">
//   <p>
//     Book No:
//     <input
//       type="text"
//       value={tcData.bookNo}
//       onChange={(e) => handleChange("bookNo", e.target.value)}
//       className="ml-2 px-2 py-1 border border-blue-400 rounded bg-blue-50 w-24 outline-none text-blue-900 font-bold print:bg-transparent print:border-b print:border-black print:border-t-0 print:border-l-0 print:border-r-0"
//     />
//   </p>

//   <p>
//     Sl. No:
//     <input
//       type="text"
//       value={tcData.slNo}
//       onChange={(e) => handleChange("slNo", e.target.value)}
//       className="ml-2 px-2 py-1 border border-blue-400 rounded bg-blue-50 w-24 outline-none text-blue-900 font-bold print:bg-transparent print:border-b print:border-black print:border-t-0 print:border-l-0 print:border-r-0"
//     />
//   </p>

//   <p>
//     Admission No:
//     <span className="underline decoration-dotted ml-2">
//       {data.admissionInfo?.admissionNo}
//     </span>
//   </p>
// </div>

//         {/* Form Fields */}
//         <div className="space-y-3 text-sm leading-relaxed">
//           {[
//             ["1. Name of Pupil", data.name],
//             ["2. Father's / Guardian's Name", data.parentDetails?.fatherName],
//             ["3. Mother's Name", data.parentDetails?.motherName],
//             ["4. Nationality", data.nationality],
//             ["5. Whether candidate belongs to SC/ST", data.caste],
            
//             // ["6. Date of first admission in the School", data.admissionInfo?.admissionDate || '.........................'],
//             ["6. Date of first admission in the School", 
//   <input
//     type="date"
//     value={tcData.firstAdmissionDate ? tcData.firstAdmissionDate.split("T")[0] : ""}
//     onChange={(e) => handleChange("firstAdmissionDate", e.target.value)}
//     className="bg-blue-50 border border-blue-400 rounded px-2 py-1 outline-none w-full text-blue-900 font-bold print:bg-transparent print:border-none print:p-0"
//   />
// ],
//             ["7. Date of birth (in figures)", data.dob ? new Date(data.dob).toLocaleDateString('en-GB') : '.........................'],
           
//            ["8. Class in which the pupil last studied", 
//   <input
//     type="text"
//     value={tcData.lastStudiedClass}
//     onChange={(e) => handleChange("lastStudiedClass", e.target.value)}
//     className="bg-blue-50 border border-blue-400 rounded px-2 py-1 outline-none w-full text-blue-900 font-bold print:bg-transparent print:border-none print:p-0"
//   />
// ],
//             // ["8. Class in which the pupil last studied", data.admissionInfo?.classAdmittedTo],
           
//             ["9. School / Board Annual examination result", "Passed"],
//             ["10. Whether failed, if so once/twice", "No"],
           
           
//            ["11. Subject Studied", 
//   <input
//     type="text"
//     value={tcData.subjectsStudied}
//     onChange={(e) => handleChange("subjectsStudied", e.target.value)}
//     className="bg-blue-50 border border-blue-400 rounded px-2 py-1 outline-none w-full text-blue-900 font-bold print:bg-transparent print:border-none print:p-0"
//   />
// ],
//             // ["11. Subject Studied", "Eng, Math, Sci, Soc, L2"],
           
           
//             ["12. Qualified for promotion to higher class", "Yes"],
           
// ["13. Month upto which pupil has paid dues", 
//   <input
//     type="text"
//     value={tcData.paidDuesMonth}
//     onChange={(e) => handleChange("paidDuesMonth", e.target.value)}
//     className="bg-blue-50 border border-blue-400 rounded px-2 py-1 outline-none w-full text-blue-900 font-bold print:bg-transparent print:border-none print:p-0"
//   />
// ],
//             // ["13. Month upto which pupil has paid dues", "March 2026"],
            
            
//             ["19. General conduct", "Good"],
//             ["21. Date of issue of certificate", new Date().toLocaleDateString('en-GB')],
//             ["22. Reasons for leaving the school", "Completed Course / Parent Request"],
//           ].map(([label, value], idx) => (
//             <div key={idx} className="flex items-baseline gap-2">
//               <span className="whitespace-nowrap font-medium">{label}:</span>
//               <span className="flex-1 border-b border-dotted border-black px-2 font-bold text-blue-900">
//                 {value || 'N/A'}
//               </span>
//             </div>
//           ))}
//         </div>

//         {/* Signature Footer */}
//         <div className="mt-20 flex justify-between text-xs font-bold uppercase">
//           <div className="text-center">
//             <div className="w-32 border-t border-black mb-1"></div>
//             Signature of Class Teacher
//           </div>
//           <div className="text-center">
//             <div className="w-32 border-t border-black mb-1"></div>
//             Checked By
//           </div>
//           <div className="text-center">
//             <div className="w-32 border-t border-black mb-1"></div>
//             Principal SEAL
//           </div>
//         </div>
//       </div>
      
//       {/* Styles for Printing */}
//       <style dangerouslySetInnerHTML={{ __html: `
//         @media print {
//           body * { visibility: hidden; }
//           #tc-content, #tc-content * { visibility: visible; }
//           #tc-content { 
//             position: absolute; 
//             left: 0; 
//             top: 0; 
//             width: 100%; 
//             border: none !important;
//           }
//         }
//       `}} />

//       {!previewMode && (
//   <button
//     onClick={handleFinalSave}
//     className="bg-green-600 text-white ..."
//   >
//     Save TC
//   </button>
// )}
//     </div>

    
//   );
// };

// export default TransferCertificate;





// // FIXED TransferCertificate.jsx
// import React, { useState } from "react";
// import axios from "axios";

// const TransferCertificate = ({ data, onBack, previewMode = false }) => {
//   if (!data) return null;

//   const [tcData, setTcData] = useState({
//     bookNo: data.generatedTC?.bookNo || "",
//     slNo:
//   data.generatedTC?.slNo ||
//   data.generatedTC?.tcNumber ||
//   data.tcNumber ||
//   "",
//     firstAdmissionDate:
//       data.generatedTC?.firstAdmissionDate ||
//       data.admissionInfo?.admissionDate ||
//       "",
//     lastStudiedClass:
//       data.generatedTC?.lastStudiedClass ||
//       data.admissionInfo?.classAdmittedTo ||
//       "",
//     subjectsStudied:
//       data.generatedTC?.subjectsStudied ||
//       "Eng, Math, Sci, Soc, Hindi",
//     paidDuesMonth: data.generatedTC?.paidDuesMonth || "",
//     conduct: data.generatedTC?.conduct || "Good",
//     dateOfIssue:
//       data.generatedTC?.dateOfIssue ||
//       new Date().toISOString().split("T")[0],
//     reasonForLeaving:
//       data.generatedTC?.reasonForLeaving ||
//       "Completed Course / Parent Request"
//   });

//   const handleChange = (field, value) => {
//     setTcData((prev) => ({
//       ...prev,
//       [field]: value
//     }));
//   };

//   const handlePrint = () => {
//     window.print();
//   };

//   // FINAL SAVE FUNCTION
//   const handleFinalSave = async () => {
//     try {
//       await axios.put(
//         `http://localhost:5000/api/students/finalize-tc/${data._id}`,
//         tcData
//       );

//      alert("TC finalized successfully!");

// // UPDATE LOCAL STUDENT DATA SO PREVIEW LOADS SAVED VALUES
// if (data.generatedTC) {
//   data.generatedTC = {
//     ...data.generatedTC,
//     ...tcData
//   };
// } else {
//   data.generatedTC = { ...tcData };
// }

// if (onBack) {
//   await onBack();
// }
//     } catch (error) {
//       console.error(
//         "Final Save Error:",
//         error.response?.data || error.message
//       );

//       alert(
//         error.response?.data?.message ||
//           "Failed to finalize TC"
//       );
//     }
//   };

//   return (
//     <div className="bg-slate-100 min-h-screen p-4 md:p-10 print:p-0 print:bg-white">
//       {/* ACTION BUTTONS */}
//       <div className="max-w-4xl mx-auto mb-6 flex justify-between items-center print:hidden">
//         <button
//           onClick={onBack}
//           className="text-gray-600 font-bold uppercase text-xs hover:text-blue-600"
//         >
//           ← Back to Profile
//         </button>

//         <div className="flex gap-3">
//           <button
//             onClick={handlePrint}
//             className="bg-blue-600 text-white px-6 py-2 rounded-lg font-bold shadow-lg hover:bg-blue-700"
//           >
//             Print Transfer Certificate
//           </button>

//           {!previewMode && (
//             <button
//               onClick={handleFinalSave}
//               className="bg-green-600 text-white px-6 py-2 rounded-lg font-bold shadow-lg hover:bg-green-700"
//             >
//               Save TC
//             </button>
//           )}
//         </div>
//       </div>

//       {/* CERTIFICATE */}
//       <div
//         id="tc-content"
//         className="max-w-[800px] mx-auto bg-white shadow-2xl p-12 border border-gray-200 print:shadow-none print:border-none print:p-8"
//       >
//         {/* HEADER */}
//         <div className="text-center mb-4">
//           <h1 className="text-3xl font-black text-red-600 uppercase">
//             Montessori Indus School
//           </h1>

//           <div className="text-[11px] text-gray-600 leading-snug">
//             Address: NH-44, Indus School Lane, Pandipadu, Kallur,
//             Kurnool, Andhra Pradesh 518002.
//             <br />
//             Near Flyover, Opposite Carbide Factory | Pin: 518002
//             <br />
//             +91 9866162900 | 08886637310
//           </div>

//           <h2 className="mt-2 text-xl font-bold border-y-2 border-black py-1 uppercase tracking-[0.2em]">
//             Transfer Certificate
//           </h2>
//         </div>

//         {/* TOP META */}
//         <div className="flex justify-between text-sm font-bold mb-8 gap-4">
//           <p>
//             Book No:
//             <input
//               type="text"
//               value={tcData.bookNo}
//               onChange={(e) =>
//                 handleChange("bookNo", e.target.value)
//               }
//               className="ml-2 px-2 py-1 border border-blue-400 rounded bg-blue-50 w-24"
//             />
//           </p>

//           <p>
//             Sl. No:
//             <input
//               type="text"
//               value={tcData.slNo}
//               onChange={(e) =>
//                 handleChange("slNo", e.target.value)
//               }
//               className="ml-2 px-2 py-1 border border-blue-400 rounded bg-blue-50 w-24"
//             />
//           </p>

//           <p>
//             Admission No:
//             <span className="ml-2 underline">
//               {data.admissionInfo?.admissionNo || "N/A"}
//             </span>
//           </p>
//         </div>

//         {/* REPLACE YOUR ENTIRE FIELDS SECTION WITH THIS ORDERED VERSION */}

// {/* FIELDS */}
// <div className="space-y-3 text-sm leading-relaxed">

//   {/* 1 */}
//   <div className="flex gap-2">
//     <span className="font-medium whitespace-nowrap">
//       1. Name of Pupil:
//     </span>
//     <span className="flex-1 border-b border-dotted border-black px-2 font-bold">
//       {data.name || "N/A"}
//     </span>
//   </div>

//   {/* 2 */}
//   <div className="flex gap-2">
//     <span className="font-medium whitespace-nowrap">
//       2. Father's / Guardian's Name:
//     </span>
//     <span className="flex-1 border-b border-dotted border-black px-2 font-bold">
//       {data.parentDetails?.fatherName || "N/A"}
//     </span>
//   </div>

//   {/* 3 */}
//   <div className="flex gap-2">
//     <span className="font-medium whitespace-nowrap">
//       3. Mother's Name:
//     </span>
//     <span className="flex-1 border-b border-dotted border-black px-2 font-bold">
//       {data.parentDetails?.motherName || "N/A"}
//     </span>
//   </div>

//   {/* 4 */}
//   <div className="flex gap-2">
//     <span className="font-medium whitespace-nowrap">
//       4. Nationality:
//     </span>
//     <span className="flex-1 border-b border-dotted border-black px-2 font-bold">
//       {data.nationality || "N/A"}
//     </span>
//   </div>

//   {/* 5 */}
//   <div className="flex gap-2">
//     <span className="font-medium whitespace-nowrap">
//       5. Whether candidate belongs to SC/ST:
//     </span>
//     <span className="flex-1 border-b border-dotted border-black px-2 font-bold">
//       {data.caste || "N/A"}
//     </span>
//   </div>

//   {/* 6 */}
//   <div className="flex gap-2">
//     <span className="font-medium whitespace-nowrap">
//       6. Date of first admission in the School:
//     </span>
//     <input
//       type="date"
//       value={
//         tcData.firstAdmissionDate
//           ? tcData.firstAdmissionDate.split("T")[0]
//           : ""
//       }
//       onChange={(e) =>
//         handleChange("firstAdmissionDate", e.target.value)
//       }
//       className="flex-1 border border-blue-400 rounded px-2 py-1 bg-blue-50"
//     />
//   </div>

//   {/* 7 */}
//   <div className="flex gap-2">
//     <span className="font-medium whitespace-nowrap">
//       7. Date of birth (in figures):
//     </span>
//     <span className="flex-1 border-b border-dotted border-black px-2 font-bold">
//       {data.dob
//         ? new Date(data.dob).toLocaleDateString("en-GB")
//         : "N/A"}
//     </span>
//   </div>

//   {/* 8 */}
//   <div className="flex gap-2">
//     <span className="font-medium whitespace-nowrap">
//       8. Class in which the pupil last studied:
//     </span>
//     <input
//       type="text"
//       value={tcData.lastStudiedClass}
//       onChange={(e) =>
//         handleChange("lastStudiedClass", e.target.value)
//       }
//       className="flex-1 border border-blue-400 rounded px-2 py-1 bg-blue-50"
//     />
//   </div>

//   {/* 9 */}
//   <div className="flex gap-2">
//     <span className="font-medium whitespace-nowrap">
//       9. School / Board Annual examination result:
//     </span>
//     <span className="flex-1 border-b border-dotted border-black px-2 font-bold">
//       Passed
//     </span>
//   </div>

//   {/* 10 */}
//   <div className="flex gap-2">
//     <span className="font-medium whitespace-nowrap">
//       10. Whether failed, if so once/twice:
//     </span>
//     <span className="flex-1 border-b border-dotted border-black px-2 font-bold">
//       No
//     </span>
//   </div>

//   {/* 11 */}
//   <div className="flex gap-2">
//     <span className="font-medium whitespace-nowrap">
//       11. Subjects Studied:
//     </span>
//     <input
//       type="text"
//       value={tcData.subjectsStudied}
//       onChange={(e) =>
//         handleChange("subjectsStudied", e.target.value)
//       }
//       className="flex-1 border border-blue-400 rounded px-2 py-1 bg-blue-50"
//     />
//   </div>

//   {/* 12 */}
//   <div className="flex gap-2">
//     <span className="font-medium whitespace-nowrap">
//       12. Qualified for promotion to higher class:
//     </span>
//     <span className="flex-1 border-b border-dotted border-black px-2 font-bold">
//       Yes
//     </span>
//   </div>

//   {/* 13 */}
//   <div className="flex gap-2">
//     <span className="font-medium whitespace-nowrap">
//       13. Month upto which pupil has paid dues:
//     </span>
//     <input
//       type="text"
//       value={tcData.paidDuesMonth}
//       onChange={(e) =>
//         handleChange("paidDuesMonth", e.target.value)
//       }
//       className="flex-1 border border-blue-400 rounded px-2 py-1 bg-blue-50"
//     />
//   </div>

//   {/* 14 */}
//   <div className="flex gap-2">
//     <span className="font-medium whitespace-nowrap">
//       14. Fee concession, if any:
//     </span>
//     <span className="flex-1 border-b border-dotted border-black px-2 font-bold">
//       No
//     </span>
//   </div>

//   {/* 15 */}
//   <div className="flex gap-2">
//     <span className="font-medium whitespace-nowrap">
//       15. Total number of working days:
//     </span>
//     <span className="flex-1 border-b border-dotted border-black px-2 font-bold">
//       N/A
//     </span>
//   </div>

//   {/* 16 */}
//   <div className="flex gap-2">
//     <span className="font-medium whitespace-nowrap">
//       16. Total number of working days present:
//     </span>
//     <span className="flex-1 border-b border-dotted border-black px-2 font-bold">
//       N/A
//     </span>
//   </div>

//   {/* 17 */}
//   <div className="flex gap-2">
//     <span className="font-medium whitespace-nowrap">
//       17. Whether NCC Cadet / Scout / Guide:
//     </span>
//     <span className="flex-1 border-b border-dotted border-black px-2 font-bold">
//       No
//     </span>
//   </div>

//   {/* 18 */}
//   <div className="flex gap-2">
//     <span className="font-medium whitespace-nowrap">
//       18. Games played / extracurricular:
//     </span>
//     <span className="flex-1 border-b border-dotted border-black px-2 font-bold">
//       N/A
//     </span>
//   </div>

//   {/* 19 */}
//   <div className="flex gap-2">
//     <span className="font-medium whitespace-nowrap">
//       19. General Conduct:
//     </span>
//     <input
//       type="text"
//       value={tcData.conduct}
//       onChange={(e) =>
//         handleChange("conduct", e.target.value)
//       }
//       className="flex-1 border border-blue-400 rounded px-2 py-1 bg-blue-50"
//     />
//   </div>

//   {/* 20 */}
//   <div className="flex gap-2">
//     <span className="font-medium whitespace-nowrap">
//       20. Date of application for certificate:
//     </span>
//     <span className="flex-1 border-b border-dotted border-black px-2 font-bold">
//       {new Date().toLocaleDateString("en-GB")}
//     </span>
//   </div>

//   {/* 21 */}
//   <div className="flex gap-2">
//     <span className="font-medium whitespace-nowrap">
//       21. Date of issue:
//     </span>
//     <input
//       type="date"
//       value={tcData.dateOfIssue}
//       onChange={(e) =>
//         handleChange("dateOfIssue", e.target.value)
//       }
//       className="flex-1 border border-blue-400 rounded px-2 py-1 bg-blue-50"
//     />
//   </div>

//   {/* 22 */}
//   <div className="flex gap-2">
//     <span className="font-medium whitespace-nowrap">
//       22. Reason for leaving:
//     </span>
//     <input
//       type="text"
//       value={tcData.reasonForLeaving}
//       onChange={(e) =>
//         handleChange("reasonForLeaving", e.target.value)
//       }
//       className="flex-1 border border-blue-400 rounded px-2 py-1 bg-blue-50"
//     />
//   </div>

// </div>

//         {/* FOOTER */}
//         <div className="mt-20 flex justify-between text-xs font-bold uppercase">
//           <div className="text-center">
//             <div className="w-32 border-t border-black mb-1"></div>
//             Signature of Class Teacher
//           </div>

//           <div className="text-center">
//             <div className="w-32 border-t border-black mb-1"></div>
//             Checked By
//           </div>

//           <div className="text-center">
//             <div className="w-32 border-t border-black mb-1"></div>
//             Principal Seal
//           </div>
//         </div>
//       </div>

//       {/* PRINT CSS */}
//       <style>{`
//         @media print {
//           body * {
//             visibility: hidden;
//           }

//           #tc-content,
//           #tc-content * {
//             visibility: visible;
//           }

//           #tc-content {
//             position: absolute;
//             left: 0;
//             top: 0;
//             width: 100%;
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default TransferCertificate;










// 19-05-2026












// // FIXED TransferCertificate.jsx
// import React, { useState } from "react";
// import axios from "axios";

// const TransferCertificate = ({ data, onBack, isEditable }) => {
//   if (!data) return null;


// const student = data?.generatedTC ? data.generatedTC : data;

//   const [tcData, setTcData] = useState({
//   schoolBoardResult: student.schoolBoardResult || "",
//   whetherFailed: student.whetherFailed || "",
//   qualifiedPromotion: student.qualifiedPromotion || "",
//   totalWorkingDaysPresent: student.totalWorkingDaysPresent || "",
//   gamesPlayed: student.gamesPlayed || "",

//   tcNumber: student.tcNumber || student.slNo || "",
//   bookNo: student.bookNo || "",
//   slNo: student.slNo || student.tcNumber || "",

//   admissionNo: student.admissionInfo?.admissionNo || "",

//   studentName: student.name || "",
//   fatherName: student.parentDetails?.fatherName || "",
//   motherName: student.parentDetails?.motherName || "",

//   nationality: student.nationality || "",
//   religion: student.religion || "",
//   caste: student.caste || "",

//   dob: student.dob || "",

//   firstAdmissionDate:
//     student.admissionInfo?.admissionDate ||
//     student.firstAdmissionDate ||
//     "",

//   lastStudiedClass:
//     student.admissionInfo?.classAdmittedTo || "",

//   subjectsStudied: student.subjectsStudied || "Eng, Math, Sci, Soc, Hindi",

//   paidDuesMonth: student.paidDuesMonth || "",

//   whetherSCST:
//   student.whetherSCST ||
//   student.casteCategory ||
//   student.caste ||
//   student.parentDetails?.caste ||
//   "",

//   feeConcession: student.feeConcession || "",
//   totalWorkingDays: student.totalWorkingDays || "",

//   nccScoutGuide: student.nccScoutGuide || "",
//   dateOfApplication: student.dateOfApplication || "",
//   lastAttendanceDate: student.lastAttendanceDate || "",
//   remarks: student.remarks || "",

//   conduct: student.conduct || "Good",

//   dateOfIssue:
//     student.dateOfIssue ||
//     new Date().toISOString().split("T")[0],

//   reasonForLeaving:
//     student.reasonForLeaving ||
//     "Completed Course / Parent Request"
// });
//   const handleChange = (field, value) => {
//     setTcData((prev) => ({
//       ...prev,
//       [field]: value
//     }));
//   };

//   const handlePrint = () => {
//     window.print();
//   };

//   // FINAL SAVE FUNCTION
//   const handleFinalSave = async () => {
//     try {
//       await axios.put(
//         `http://localhost:5000/api/students/finalize-tc/${data._id}`, {
//   generatedTC: tcData
// });

  

//      alert("TC finalized successfully!");

// // UPDATE LOCAL STUDENT DATA SO PREVIEW LOADS SAVED VALUES
// if (data.generatedTC) {
//   const updated = {
//   ...data,
//   generatedTC: {
//     ...data.generatedTC,
//     ...tcData
//   }
// };
// } else {
//   data.generatedTC = { ...tcData };
// }

// if (onBack) {
//   await onBack();
// }
//     } catch (error) {
//       console.error(
//         "Final Save Error:",
//         error.response?.data || error.message
//       );

//       alert(
//         error.response?.data?.message ||
//           "Failed to finalize TC"
//       );
//     }
//   };

//   return (
//     <div className="bg-slate-100 min-h-screen p-4 md:p-10 print:p-0 print:bg-white">
//       {/* ACTION BUTTONS */}
//       <div className="max-w-4xl mx-auto mb-6 flex justify-between items-center print:hidden">
//         <button
//           onClick={onBack}
//           className="text-gray-600 font-bold uppercase text-xs hover:text-blue-600"
//         >
//           ← Back to Profile
//         </button>

//         <div className="flex gap-3">
//           <button
//             onClick={handlePrint}
//             className="bg-blue-600 text-white px-6 py-2 rounded-lg font-bold shadow-lg hover:bg-blue-700"
//           >
//             Print Transfer Certificate
//           </button>

//           {isEditable && (
//             <button
//               onClick={handleFinalSave}
//               className="bg-green-600 text-white px-6 py-2 rounded-lg font-bold shadow-lg hover:bg-green-700"
//             >
//               Save TC
//             </button>
//           )}
//         </div>
//       </div>

//       {/* CERTIFICATE */}
//       <div
//         id="tc-content"
//         className="max-w-[800px] mx-auto bg-white shadow-2xl p-12 border border-gray-200 print:shadow-none print:border-none print:p-8"
//       >
//         {/* HEADER */}
//         <div className="text-center mb-4">
//           <h1 className="text-3xl font-black text-red-600 uppercase">
//             Montessori Indus School
//           </h1>

//           <div className="text-[11px] text-gray-600 leading-snug">
//             Address: NH-44, Indus School Lane, Pandipadu, Kallur,
//             Kurnool, Andhra Pradesh 518002.
//             <br />
//             Near Flyover, Opposite Carbide Factory | Pin: 518002
//             <br />
//             +91 9866162900 | 08886637310
//           </div>

//           <h2 className="mt-2 text-xl font-bold border-y-2 border-black py-1 uppercase tracking-[0.2em]">
//             Transfer Certificate
//           </h2>
//         </div>

//         {/* TOP META */}
//         <div className="flex justify-between text-sm font-bold mb-8 gap-4">
//           <p>
//             Book No:
//             <input
//               type="text"
//               value={tcData.bookNo}
//               onChange={(e) =>
//                 handleChange("bookNo", e.target.value)
//               }
//               className="ml-2 px-2 py-1 border border-blue-400 rounded bg-blue-50 w-24"
//             />
//           </p>

//           <p>
//             Sl. No:
//             <input
//               type="text"
//               value={tcData.slNo}
//               onChange={(e) =>
//                 handleChange("slNo", e.target.value)
//               }
//               className="ml-2 px-2 py-1 border border-blue-400 rounded bg-blue-50 w-24"
//             />
//           </p>

//           <p>
//             Admission No:
//             <span className="ml-2 underline">
//               {data.admissionInfo?.admissionNo || "N/A"}
//             </span>
//           </p>
//         </div>

//         {/* REPLACE YOUR ENTIRE FIELDS SECTION WITH THIS ORDERED VERSION */}

// {/* FIELDS */}
// <div className="space-y-3 text-sm leading-relaxed">

//   {/* 1 */}
//   <div className="flex gap-2">
//     <span className="font-medium whitespace-nowrap">
//       1. Name of Pupil:
//     </span>
//     <span className="flex-1 border-b border-dotted border-black px-2 font-bold">
//       {data.name || "N/A"}
//     </span>
//   </div>

//   {/* 2 */}
//   <div className="flex gap-2">
//     <span className="font-medium whitespace-nowrap">
//       2. Father's / Guardian's Name:
//     </span>
//     <span className="flex-1 border-b border-dotted border-black px-2 font-bold">
//       {data.parentDetails?.fatherName || "N/A"}
//     </span>
//   </div>

//   {/* 3 */}
//   <div className="flex gap-2">
//     <span className="font-medium whitespace-nowrap">
//       3. Mother's Name:
//     </span>
//     <span className="flex-1 border-b border-dotted border-black px-2 font-bold">
//       {data.parentDetails?.motherName || "N/A"}
//     </span>
//   </div>

//   {/* 4 */}
//   <div className="flex gap-2">
//     <span className="font-medium whitespace-nowrap">
//       4. Nationality:
//     </span>
//     <span className="flex-1 border-b border-dotted border-black px-2 font-bold">
//       {data.nationality || "N/A"}
//     </span>
//   </div>

//   {/* 5 */}
//   <div className="flex gap-2">
//     <span className="font-medium whitespace-nowrap">
//       5. Whether candidate belongs to SC/ST:
//     </span>
//    <input
//   type="text"
//   value={tcData.whetherSCST}
//   onChange={(e) =>
//     handleChange("whetherSCST", e.target.value)
//   }
//   className="flex-1 border border-blue-400 rounded px-2 py-1 bg-blue-50"
// />
//   </div>

//   {/* 6 */}
//   <div className="flex gap-2">
//     <span className="font-medium whitespace-nowrap">
//       6. Date of first admission in the School:
//     </span>
//     <input
//       type="date"
//       value={
//         tcData.firstAdmissionDate
//           ? tcData.firstAdmissionDate.split("T")[0]
//           : ""
//       }
//       onChange={(e) =>
//         handleChange("firstAdmissionDate", e.target.value)
//       }
//       className="flex-1 border border-blue-400 rounded px-2 py-1 bg-blue-50"
//     />
//   </div>

//   {/* 7 */}
//   <div className="flex gap-2">
//     <span className="font-medium whitespace-nowrap">
//       7. Date of birth (in figures):
//     </span>
//     <span className="flex-1 border-b border-dotted border-black px-2 font-bold">
//       {data.dob
//         ? new Date(data.dob).toLocaleDateString("en-GB")
//         : "N/A"}
//     </span>
//   </div>

//   {/* 8 */}
//   <div className="flex gap-2">
//     <span className="font-medium whitespace-nowrap">
//       8. Class in which the pupil last studied:
//     </span>
//     <input
//       type="text"
//       value={tcData.lastStudiedClass}
//       onChange={(e) =>
//         handleChange("lastStudiedClass", e.target.value)
//       }
//       className="flex-1 border border-blue-400 rounded px-2 py-1 bg-blue-50"
//     />
//   </div>

//   {/* 9 */}
//   <div className="flex gap-2">
//     <span className="font-medium whitespace-nowrap">
//       9. School / Board Annual examination result:
//     </span>
//     <input
//   type="text"
//   value={tcData.schoolBoardResult}
//   onChange={(e) =>
//     - setTcData({ ...tcData, schoolBoardResult: e.target.value })
// + handleChange("schoolBoardResult", e.target.value)
//   }
//   className="flex-1 border border-blue-400 rounded px-2 py-1 bg-blue-50"
// />
//   </div>

//   {/* 10 */}
//   <div className="flex gap-2">
//     <span className="font-medium whitespace-nowrap">
//       10. Whether failed, if so once/twice:
//     </span>
//     <input
//   type="text"
//   value={tcData.whetherFailed}
//   onChange={(e) =>
//     - setTcData({ ...tcData, whetherFailed: e.target.value })
// + handleChange("whetherFailed", e.target.value)
//   }
//   className="flex-1 border border-blue-400 rounded px-2 py-1 bg-blue-50"
// />
//   </div>

//   {/* 11 */}
//   <div className="flex gap-2">
//     <span className="font-medium whitespace-nowrap">
//       11. Subjects Studied:
//     </span>
//     <input
//       type="text"
//       value={tcData.subjectsStudied}
//       onChange={(e) =>
//         handleChange("subjectsStudied", e.target.value)
//       }
//       className="flex-1 border border-blue-400 rounded px-2 py-1 bg-blue-50"
//     />
//   </div>

//   {/* 12 */}
//   <div className="flex gap-2">
//     <span className="font-medium whitespace-nowrap">
//       12. Qualified for promotion to higher class:
//     </span>
//     <input
//   type="text"
//   value={tcData.qualifiedPromotion}
//   onChange={(e) =>
//     setTcData({
//       ...tcData,
//       qualifiedPromotion: e.target.value
//     })
//   }
//   className="flex-1 border border-blue-400 rounded px-2 py-1 bg-blue-50"
// />
//   </div>

//   {/* 13 */}
//   <div className="flex gap-2">
//     <span className="font-medium whitespace-nowrap">
//       13. Month upto which pupil has paid dues:
//     </span>
//     <input
//       type="text"
//       value={tcData.paidDuesMonth}
//       onChange={(e) =>
//         handleChange("paidDuesMonth", e.target.value)
//       }
//       className="flex-1 border border-blue-400 rounded px-2 py-1 bg-blue-50"
//     />
//   </div>

//   {/* 14 */}
//   <div className="flex gap-2">
//     <span className="font-medium whitespace-nowrap">
//       14. Fee concession, if any:
//     </span>
  


// <input
//   type="text"
//   value={tcData.feeConcession}
//   onChange={(e) =>
   
//     - setTcData({ ...tcData, feeConcession: e.target.value })
// + handleChange("feeConcession", e.target.value)



//   }
//   className="flex-1 border border-blue-400 rounded px-2 py-1 bg-blue-50"
// />



//   </div>

//   {/* 15 */}
//   <div className="flex gap-2">
//     <span className="font-medium whitespace-nowrap">
//       15. Total number of working days:
//     </span>


//     <input
//   type="text"
//   value={tcData.totalWorkingDays}
//   onChange={(e) =>
   
   
   
//     - setTcData({ ...tcData, totalWorkingDays: e.target.value })
// + handleChange("totalWorkingDays", e.target.value)

   

//   }
//   className="flex-1 border border-blue-400 rounded px-2 py-1 bg-blue-50"
// />



//   </div>

//   {/* 16 */}
//   <div className="flex gap-2">
//     <span className="font-medium whitespace-nowrap">
//       16. Total number of working days present:
//     </span>
//     <input
//   type="text"
//   value={tcData.totalWorkingDaysPresent}
//   onChange={(e) =>
    

//      - setTcData({ ...tcData, totalWorkingDaysPresent: e.target.value })
// + handleChange("totalWorkingDaysPresent", e.target.value)


//   }
//   className="flex-1 border border-blue-400 rounded px-2 py-1 bg-blue-50"
// />
//   </div>

//   {/* 17 */}
//   <div className="flex gap-2">
//     <span className="font-medium whitespace-nowrap">
//       17. Whether NCC Cadet / Scout / Guide:
//     </span>



// <input
//   type="text"
//   value={tcData.nccScoutGuide}
//   onChange={(e) =>

    
//      - setTcData({ ...tcData, nccScoutGuide: e.target.value })
// + handleChange("nccScoutGuide", e.target.value)




   
//   }
//   className="flex-1 border border-blue-400 rounded px-2 py-1 bg-blue-50"
// />


//   </div>

//   {/* 18 */}
//   <div className="flex gap-2">
//     <span className="font-medium whitespace-nowrap">
//       18. Games played / extracurricular:
//     </span>
//    <input
//   type="text"
//  value={tcData.gamesPlayed}
//   onChange={(e) =>

//        - setTcData({ ...tcData, gamesPlayed: e.target.value })
// + handleChange("gamesPlayed", e.target.value)


    
//   }
//   className="flex-1 border border-blue-400 rounded px-2 py-1 bg-blue-50"
// />
//   </div>

//   {/* 19 */}
//   <div className="flex gap-2">
//     <span className="font-medium whitespace-nowrap">
//       19. General Conduct:
//     </span>
//     <input
//       type="text"
//       value={tcData.conduct}
//       onChange={(e) =>
//         handleChange("conduct", e.target.value)
//       }
//       className="flex-1 border border-blue-400 rounded px-2 py-1 bg-blue-50"
//     />
//   </div>

//   {/* 20 */}
//   <div className="flex gap-2">
//     <span className="font-medium whitespace-nowrap">
//       20. Date of application for certificate:
//     </span>



// <input
//   type="date"
//   value={
//     tcData.dateOfApplication
//       ? tcData.dateOfApplication.split("T")[0]
//       : ""
//   }
//   onChange={(e) =>
//     handleChange("dateOfApplication", e.target.value)
//   }
//   className="flex-1 border border-blue-400 rounded px-2 py-1 bg-blue-50"
// />




//   </div>

//   {/* 21 */}
//   <div className="flex gap-2">
//     <span className="font-medium whitespace-nowrap">
//       21. Date of issue:
//     </span>
//     <input
//       type="date"
//       value={tcData.dateOfIssue}
//       onChange={(e) =>
//         handleChange("dateOfIssue", e.target.value)
//       }
//       className="flex-1 border border-blue-400 rounded px-2 py-1 bg-blue-50"
//     />
//   </div>

//   {/* 22 */}
//   <div className="flex gap-2">
//     <span className="font-medium whitespace-nowrap">
//       22. Reason for leaving:
//     </span>
//     <input
//       type="text"
//       value={tcData.reasonForLeaving}
//       onChange={(e) =>
//         handleChange("reasonForLeaving", e.target.value)
//       }
//       className="flex-1 border border-blue-400 rounded px-2 py-1 bg-blue-50"
//     />
//   </div>

// </div>

//         {/* FOOTER */}
//         <div className="mt-20 flex justify-between text-xs font-bold uppercase">
//           <div className="text-center">
//             <div className="w-32 border-t border-black mb-1"></div>
//             Signature of Class Teacher
//           </div>

//           <div className="text-center">
//             <div className="w-32 border-t border-black mb-1"></div>
//             Checked By
//           </div>

//           <div className="text-center">
//             <div className="w-32 border-t border-black mb-1"></div>
//             Principal Seal
//           </div>
//         </div>
//       </div>

//       {/* PRINT CSS */}
//       <style>{`
//         @media print {
//           body * {
//             visibility: hidden;
//           }

//           #tc-content,
//           #tc-content * {
//             visibility: visible;
//           }

//           #tc-content {
//             position: absolute;
//             left: 0;
//             top: 0;
//             width: 100%;
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default TransferCertificate;










// 20-05-2025
















// FIXED TransferCertificate.jsx
import React, { useState } from "react";
import axios from "axios";

const TransferCertificate = ({ data, onBack, isEditable }) => {
  const baseURL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';
  if (!data) return null;


const student = data;
const generatedTC = data?.generatedTC || {};

  const [tcData, setTcData] = useState({
  schoolBoardResult: generatedTC.schoolBoardResult || "",
whetherFailed: generatedTC.whetherFailed || "",
qualifiedPromotion: generatedTC.qualifiedPromotion || "",
totalWorkingDaysPresent: generatedTC.totalWorkingDaysPresent || "",
gamesPlayed: generatedTC.gamesPlayed || "",

  tcNumber: generatedTC.tcNumber || generatedTC.slNo || "",
bookNo: generatedTC.bookNo || "",
slNo: generatedTC.slNo || generatedTC.tcNumber || "",

  admissionNo: student.admissionInfo?.admissionNo || "",

  studentName: student.name || "",
  fatherName: student.parentDetails?.fatherName || "",
  motherName: student.parentDetails?.motherName || "",

  nationality: student.nationality || "",
  religion: student.religion || "",
  caste: student.caste || "",

  dob: student.dob || "",

  firstAdmissionDate:
  generatedTC.firstAdmissionDate ||
  student.admissionInfo?.admissionDate ||
  student.firstAdmissionDate ||
  "",

  lastStudiedClass:
    student.admissionInfo?.classAdmittedTo || "",

  subjectsStudied:
  generatedTC.subjectsStudied || "Eng, Math, Sci, Soc, Hindi",

paidDuesMonth:
  generatedTC.paidDuesMonth || "",

  whetherSCST:
generatedTC.whetherSCST ||
student.caste ||
"",

  feeConcession: generatedTC.feeConcession || "",

totalWorkingDays:
  generatedTC.totalWorkingDays || "",

nccScoutGuide:
  generatedTC.nccScoutGuide || "",

dateOfApplication:
  generatedTC.dateOfApplication || "",

lastAttendanceDate:
  generatedTC.lastAttendanceDate || "",

remarks:
  generatedTC.remarks || "",

conduct:
  generatedTC.conduct || "Good",

  dateOfIssue:
  generatedTC.dateOfIssue ||
  new Date().toISOString().split("T")[0],

 reasonForLeaving:
  generatedTC.reasonForLeaving ||
  "Completed Course / Parent Request"
});
  const handleChange = (field, value) => {
    setTcData((prev) => ({
      ...prev,
      [field]: value
    }));
  };

  const handlePrint = () => {
    window.print();
  };

  // FINAL SAVE FUNCTION
  const handleFinalSave = async () => {
    try {
      await axios.put(
 `${baseURL}/api/students/finalize-tc/${data._id}`,
        // `http://localhost:5000/api/students/finalize-tc/${data._id}`,
  tcData
);

  

     alert("TC finalized successfully!");

// UPDATE LOCAL STUDENT DATA SO PREVIEW LOADS SAVED VALUES
if (data.generatedTC) {
  const updated = {
  ...data,
  generatedTC: {
    ...data.generatedTC,
    ...tcData
  }
};
} else {
  data.generatedTC = { ...tcData };
}

if (onBack) {
  await onBack();
}
    } catch (error) {
      console.error(
        "Final Save Error:",
        error.response?.data || error.message
      );

      alert(
        error.response?.data?.message ||
          "Failed to finalize TC"
      );
    }
  };

  return (
    <div className="bg-slate-100 min-h-screen p-4 md:p-10 print:p-0 print:bg-white">
      {/* ACTION BUTTONS */}
      <div className="max-w-4xl mx-auto mb-6 flex justify-between items-center print:hidden">
        <button
          onClick={onBack}
          className="text-gray-600 font-bold uppercase text-xs hover:text-blue-600"
        >
          ← Back to Profile
        </button>

        <div className="flex gap-3">
          <button
            onClick={handlePrint}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg font-bold shadow-lg hover:bg-blue-700"
          >
            Print Transfer Certificate
          </button>

          {isEditable && (
            <button
              onClick={handleFinalSave}
              className="bg-green-600 text-white px-6 py-2 rounded-lg font-bold shadow-lg hover:bg-green-700"
            >
              Save TC
            </button>
          )}
        </div>
      </div>

      {/* CERTIFICATE */}
      <div
        id="tc-content"
        className="max-w-[800px] mx-auto bg-white shadow-2xl p-12 border border-gray-200 print:shadow-none print:border-none print:p-8"
      >
        {/* HEADER */}
        {/* HEADER */}
         <div className="text-center mb-4">
           <h1 className="text-3xl font-black text-red-600 uppercase">
             Montessori Indus School
           </h1>

           <div className="text-[11px] text-gray-600 leading-snug">
             Address: NH-44, Indus School Lane, Pandipadu, Kallur,
             Kurnool, Andhra Pradesh 518002.
             <br />
             Near Flyover, Opposite Carbide Factory | Pin: 518002
             <br />
             +91 9866162900 | 08886637310
           </div>

           <h2 className="mt-2 text-xl font-bold border-y-2 border-black py-1 uppercase tracking-[0.2em]">
             Transfer Certificate
           </h2>
         </div>

        {/* <div className="text-center mb-4">
          <h1 className="text-3xl font-black text-red-600 uppercase">
            Montessori Indus School
          </h1>
          
          <div className="text-[11px] text-gray-600 leading-snug">
            Address: NH-44, Indus School Lane, Pandipadu, Kallur,
            Kurnool, Andhra Pradesh 518002.
            <br />
            Near Flyover, Opposite Carbide Factory | Pin: 518002
            <br />
            +91 9866162900 | 08886637310
          </div>

          <h2 className="mt-2 text-xl font-bold border-y-2 border-black py-1 uppercase tracking-[0.2em]">
            Transfer Certificate
          </h2>
        </div> */}

        {/* TOP META */}
        <div className="flex justify-between text-sm font-bold mb-8 gap-4">
          <p>
            Book No:
            <input
              type="text"
              value={tcData.bookNo}
              onChange={(e) =>
                handleChange("bookNo", e.target.value)
              }
              className="ml-2 px-2 py-1 border border-blue-400 rounded bg-blue-50 w-24"
            />
          </p>

          <p>
            Sl. No:
            <input
              type="text"
              value={tcData.slNo}
              onChange={(e) =>
                handleChange("slNo", e.target.value)
              }
              className="ml-2 px-2 py-1 border border-blue-400 rounded bg-blue-50 w-24"
            />
          </p>

          <p>
            Admission No:
            <span className="ml-2 underline">
              {data.admissionInfo?.admissionNo || "N/A"}
            </span>
          </p>
        </div>

        {/* REPLACE YOUR ENTIRE FIELDS SECTION WITH THIS ORDERED VERSION */}

{/* FIELDS */}
<div className="space-y-3 text-sm leading-relaxed">

  {/* 1 */}
  <div className="flex gap-2">
    <span className="font-medium whitespace-nowrap">
      1. Name of Pupil:
    </span>
    <span className="flex-1 border-b border-dotted border-black px-2 font-bold">
      {data.name || "N/A"}
    </span>
  </div>

  {/* 2 */}
  <div className="flex gap-2">
    <span className="font-medium whitespace-nowrap">
      2. Father's / Guardian's Name:
    </span>
    <span className="flex-1 border-b border-dotted border-black px-2 font-bold">
      {data.parentDetails?.fatherName || "N/A"}
    </span>
  </div>

  {/* 3 */}
  <div className="flex gap-2">
    <span className="font-medium whitespace-nowrap">
      3. Mother's Name:
    </span>
    <span className="flex-1 border-b border-dotted border-black px-2 font-bold">
      {data.parentDetails?.motherName || "N/A"}
    </span>
  </div>

  {/* 4 */}
  <div className="flex gap-2">
    <span className="font-medium whitespace-nowrap">
      4. Nationality:
    </span>
    <span className="flex-1 border-b border-dotted border-black px-2 font-bold">
      {data.nationality || "N/A"}
    </span>
  </div>

  {/* 5 */}
  <div className="flex gap-2">
    <span className="font-medium whitespace-nowrap">
      5. Whether candidate belongs to SC/ST:
    </span>
   <input
  type="text"
  value={tcData.whetherSCST}
  onChange={(e) =>
    handleChange("whetherSCST", e.target.value)
  }
  className="flex-1 border border-blue-400 rounded px-2 py-1 bg-blue-50"
/>
  </div>

  {/* 6 */}
  <div className="flex gap-2">
    <span className="font-medium whitespace-nowrap">
      6. Date of first admission in the School:
    </span>
    <input
      type="date"
      value={
        tcData.firstAdmissionDate
          ? tcData.firstAdmissionDate.split("T")[0]
          : ""
      }
      onChange={(e) =>
        handleChange("firstAdmissionDate", e.target.value)
      }
      className="flex-1 border border-blue-400 rounded px-2 py-1 bg-blue-50"
    />
  </div>

  {/* 7 */}
  <div className="flex gap-2">
    <span className="font-medium whitespace-nowrap">
      7. Date of birth (in figures):
    </span>
    <span className="flex-1 border-b border-dotted border-black px-2 font-bold">
      {data.dob
        ? new Date(data.dob).toLocaleDateString("en-GB")
        : "N/A"}
    </span>
  </div>

  {/* 8 */}
  <div className="flex gap-2">
    <span className="font-medium whitespace-nowrap">
      8. Class in which the pupil last studied:
    </span>
    <input
      type="text"
      value={tcData.lastStudiedClass}
      onChange={(e) =>
        handleChange("lastStudiedClass", e.target.value)
      }
      className="flex-1 border border-blue-400 rounded px-2 py-1 bg-blue-50"
    />
  </div>

  {/* 9 */}
  <div className="flex gap-2">
    <span className="font-medium whitespace-nowrap">
      9. School / Board Annual examination result:
    </span>
    <input
  type="text"
  value={tcData.schoolBoardResult}
  onChange={(e) =>handleChange("schoolBoardResult", e.target.value)
  }
  className="flex-1 border border-blue-400 rounded px-2 py-1 bg-blue-50"
/>






  </div>

  {/* 10 */}
  <div className="flex gap-2">
    <span className="font-medium whitespace-nowrap">
      10. Whether failed, if so once/twice:
    </span>
    <input
  type="text"
  value={tcData.whetherFailed}
  onChange={(e) =>handleChange("whetherFailed", e.target.value)
  }
  className="flex-1 border border-blue-400 rounded px-2 py-1 bg-blue-50"
/>
  </div>

  {/* 11 */}
  <div className="flex gap-2">
    <span className="font-medium whitespace-nowrap">
      11. Subjects Studied:
    </span>
    <input
      type="text"
      value={tcData.subjectsStudied}
      onChange={(e) =>
        handleChange("subjectsStudied", e.target.value)
      }
      className="flex-1 border border-blue-400 rounded px-2 py-1 bg-blue-50"
    />
  </div>

  {/* 12 */}
  <div className="flex gap-2">
    <span className="font-medium whitespace-nowrap">
      12. Qualified for promotion to higher class:
    </span>
    <input
  type="text"
  value={tcData.qualifiedPromotion}
  onChange={(e) =>
    setTcData({
      ...tcData,
      qualifiedPromotion: e.target.value
    })
  }
  className="flex-1 border border-blue-400 rounded px-2 py-1 bg-blue-50"
/>
  </div>

  {/* 13 */}
  <div className="flex gap-2">
    <span className="font-medium whitespace-nowrap">
      13. Month upto which pupil has paid dues:
    </span>
    <input
      type="text"
      value={tcData.paidDuesMonth}
      onChange={(e) =>
        handleChange("paidDuesMonth", e.target.value)
      }
      className="flex-1 border border-blue-400 rounded px-2 py-1 bg-blue-50"
    />
  </div>

  {/* 14 */}
  <div className="flex gap-2">
    <span className="font-medium whitespace-nowrap">
      14. Fee concession, if any:
    </span>
  


<input
  type="text"
  value={tcData.feeConcession}
  onChange={(e) =>handleChange("feeConcession", e.target.value)
  }
  className="flex-1 border border-blue-400 rounded px-2 py-1 bg-blue-50"
/>



  </div>

  {/* 15 */}
  <div className="flex gap-2">
    <span className="font-medium whitespace-nowrap">
      15. Total number of working days:
    </span>


    <input
  type="text"
  value={tcData.totalWorkingDays}
  onChange={(e) => handleChange("totalWorkingDays", e.target.value)

   

  }
  className="flex-1 border border-blue-400 rounded px-2 py-1 bg-blue-50"
/>



  </div>

  {/* 16 */}
  <div className="flex gap-2">
    <span className="font-medium whitespace-nowrap">
      16. Total number of working days present:
    </span>
    <input
  type="text"
  value={tcData.totalWorkingDaysPresent}
  onChange={(e) =>handleChange("totalWorkingDaysPresent", e.target.value)
  }
  className="flex-1 border border-blue-400 rounded px-2 py-1 bg-blue-50"
/>
  </div>

  {/* 17 */}
  <div className="flex gap-2">
    <span className="font-medium whitespace-nowrap">
      17. Whether NCC Cadet / Scout / Guide:
    </span>



<input
  type="text"
  value={tcData.nccScoutGuide}
  onChange={(e) =>handleChange("nccScoutGuide", e.target.value)
   }
  className="flex-1 border border-blue-400 rounded px-2 py-1 bg-blue-50"
/>


  </div>

  {/* 18 */}
  <div className="flex gap-2">
    <span className="font-medium whitespace-nowrap">
      18. Games played / extracurricular:
    </span>
   <input
  type="text"
 value={tcData.gamesPlayed}
  onChange={(e) =>handleChange("gamesPlayed", e.target.value)


    
  }
  className="flex-1 border border-blue-400 rounded px-2 py-1 bg-blue-50"
/>
  </div>

  {/* 19 */}
  <div className="flex gap-2">
    <span className="font-medium whitespace-nowrap">
      19. General Conduct:
    </span>
    <input
      type="text"
      value={tcData.conduct}
      onChange={(e) =>
        handleChange("conduct", e.target.value)
      }
      className="flex-1 border border-blue-400 rounded px-2 py-1 bg-blue-50"
    />
  </div>

  {/* 20 */}
  <div className="flex gap-2">
    <span className="font-medium whitespace-nowrap">
      20. Date of application for certificate:
    </span>



<input
  type="date"
  value={
    tcData.dateOfApplication
      ? tcData.dateOfApplication.split("T")[0]
      : ""
  }
  onChange={(e) =>
    handleChange("dateOfApplication", e.target.value)
  }
  className="flex-1 border border-blue-400 rounded px-2 py-1 bg-blue-50"
/>




  </div>

  {/* 21 */}
  <div className="flex gap-2">
    <span className="font-medium whitespace-nowrap">
      21. Date of issue:
    </span>
    <input
      type="date"
      value={tcData.dateOfIssue}
      onChange={(e) =>
        handleChange("dateOfIssue", e.target.value)
      }
      className="flex-1 border border-blue-400 rounded px-2 py-1 bg-blue-50"
    />
  </div>

  {/* 22 */}
  <div className="flex gap-2">
    <span className="font-medium whitespace-nowrap">
      22. Reason for leaving:
    </span>
    <input
      type="text"
      value={tcData.reasonForLeaving}
      onChange={(e) =>
        handleChange("reasonForLeaving", e.target.value)
      }
      className="flex-1 border border-blue-400 rounded px-2 py-1 bg-blue-50"
    />
  </div>

</div>

        {/* FOOTER */}
        <div className="mt-20 flex justify-between text-xs font-bold uppercase">
          <div className="text-center">
            <div className="w-32 border-t border-black mb-1"></div>
            Signature of Class Teacher
          </div>

          <div className="text-center">
            <div className="w-32 border-t border-black mb-1"></div>
            Checked By
          </div>

          <div className="text-center">
            <div className="w-32 border-t border-black mb-1"></div>
            Principal Seal
          </div>
        </div>
      </div>

      {/* PRINT CSS */}
      <style>{`
        @media print {
          body * {
            visibility: hidden;
          }

          #tc-content,
          #tc-content * {
            visibility: visible;
          }

          #tc-content {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default TransferCertificate;