// // import React, { useEffect, useState } from "react";
// // import axios from "axios";
// // import { Search, ArrowLeft } from "lucide-react";
// // import TransferCertificate from "./TransferCertificate";

// // const GeneratedTCList = ({ onBack }) => {
// //   const [students, setStudents] = useState([]);
// //   const [searchTerm, setSearchTerm] = useState("");
// //   const [loading, setLoading] = useState(true);
// //   const [selectedStudent, setSelectedStudent] = useState(null);
// // const [viewingTC, setViewingTC] = useState(false);



// //   const fetchGeneratedTC = async (query = "") => {
// //     setLoading(true);

// //     try {
// //       const response = await axios.get(
// //         `http://localhost:5000/api/students/generated-tc?name=${query}`
// //       );
// //       setStudents(response.data);
// //     } catch (error) {
// //       console.error("Generated TC Fetch Error:", error);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   useEffect(() => {
// //     const delay = setTimeout(() => {
// //       fetchGeneratedTC(searchTerm);
// //     }, 300);

// //     return () => clearTimeout(delay);
// //   }, [searchTerm]);


// // if (viewingTC && selectedStudent) {
// //   return (
// //     <TransferCertificate
// //   data={selectedStudent}
// //   previewMode={true}
// //       onBack={() => {
// //         setViewingTC(false);
// //         setSelectedStudent(null);
// //       }}
// //     />
// //   );
// // }

// //   return (
// //     <div className="min-h-screen bg-slate-50 p-6">
// //       {/* HEADER */}
// //       <div className="max-w-6xl mx-auto bg-white rounded-[2rem] shadow-xl p-8 mb-6">
// //         <div className="flex flex-col md:flex-row justify-between gap-4 items-center">
// //           <div className="flex items-center gap-4">
// //             {onBack && (
// //               <button
// //                 onClick={onBack}
// //                 className="p-3 rounded-full bg-gray-100 hover:bg-black hover:text-white transition-all"
// //               >
// //                 <ArrowLeft size={22} />
// //               </button>
// //             )}

// //             <div>
// //               <h1 className="text-3xl font-black text-green-700">
// //                 Generated TC Records
// //               </h1>

// //               <p className="text-sm text-gray-400 font-medium">
// //                 Showing {students.length} generated TC record(s)
// //               </p>
// //             </div>
// //           </div>

// //           <div className="relative w-full md:w-80">
// //             <Search
// //               className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
// //               size={18}
// //             />

// //             <input
// //               type="text"
// //               placeholder="Search by student name..."
// //               value={searchTerm}
// //               onChange={(e) => setSearchTerm(e.target.value)}
// //               className="w-full pl-12 pr-4 py-3 rounded-2xl bg-gray-50 outline-none"
// //             />
// //           </div>
// //         </div>
// //       </div>

// //       {/* TABLE */}
// //       <div className="max-w-6xl mx-auto bg-white rounded-[2rem] shadow-xl p-8">
// //         <div className="overflow-x-auto">
// //           <table className="w-full border-separate border-spacing-y-2">
// //             <thead>
// //               <tr className="text-left text-gray-500">
// //                 <th className="px-4 py-3">TC No</th>
// //                 <th className="px-4 py-3">Admission No</th>
// //                 <th className="px-4 py-3">Student Name</th>
// //                 <th className="px-4 py-3">Father Name</th>
// //                 <th className="px-4 py-3">Generated Date</th>
// //                 <th className="px-4 py-3 text-center">View</th>
// //               </tr>
// //             </thead>

// //             <tbody>
// //               {loading ? (
// //                 <tr>
// //                   <td colSpan="5" className="text-center py-12">
// //                     Loading...
// //                   </td>
// //                 </tr>
// //               ) : students.length > 0 ? (
// //                 students.map((student) => (
// //                   <tr
// //   key={student._id}
// //   className="bg-green-50 hover:bg-green-100 transition-all"
// // >
// //   <td className="px-4 py-4 rounded-l-xl font-bold text-green-700">
// //     {student.generatedTC?.tcNumber || "N/A"}
// //   </td>

// //   <td className="px-4 py-4">
// //     {student.admissionInfo?.admissionNo || "N/A"}
// //   </td>

// //   <td className="px-4 py-4 font-bold text-gray-800">
// //     {student.name || "N/A"}
// //   </td>

// //   <td className="px-4 py-4">
// //     {student.parentDetails?.fatherName || "N/A"}
// //   </td>

// //   <td className="px-4 py-4">
// //     {student.generatedTC?.generatedDate
// //       ? new Date(student.generatedTC.generatedDate).toLocaleDateString("en-GB")
// //       : "N/A"}
// //   </td>

// //   <td className="px-4 py-4 rounded-r-xl text-center">
// //     <button
// //       onClick={() => {
// //         setSelectedStudent(student);
// //         setViewingTC(true);
// //       }}
// //       className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl text-xs font-bold uppercase"
// //     >
// //       View TC
// //     </button>
// //   </td>
// // </tr>
// //                 ))
// //               ) : (
// //                 <tr>
// //                   <td
// //                     colSpan="6"
// //                     className="text-center py-12 text-gray-400"
// //                   >
// //                     No Generated TC Records Found
// //                   </td>
// //                 </tr>
// //               )}
// //             </tbody>
// //           </table>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default GeneratedTCList;





// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Search, ArrowLeft, FileText, Eye, RefreshCw } from "lucide-react";
// import TransferCertificate from "./TransferCertificate";

// const GeneratedTCList = ({ onBack }) => {
//   const [students, setStudents] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [loading, setLoading] = useState(true);
//   const [selectedStudent, setSelectedStudent] = useState(null);
//   const [viewingTC, setViewingTC] = useState(false);

//   // Fetch records from backend api
//   const fetchGeneratedTC = async (query = "") => {
//     setLoading(true);
//     try {
//       const response = await axios.get(
//         `http://localhost:5000/api/students/generated-tc?name=${query}`
//       );
//       setStudents(response.data);
//     } catch (error) {
//       console.error("Generated TC Fetch Error:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Debounce search input to prevent rapid server hammering
//   useEffect(() => {
//     const delay = setTimeout(() => {
//       fetchGeneratedTC(searchTerm);
//     }, 300);

//     return () => clearTimeout(delay);
//   }, [searchTerm]);

//   // Clean toggle handler for drilling into the TC document view
//   const handleViewTC = (student) => {
//     setSelectedStudent(student);
//     setViewingTC(true);
//   };

//   const handleCloseTC = () => {
//     setViewingTC(false);
//     setSelectedStudent(null);
//   };

//   // Conditional rendering for the specific TC view wrapper
//   if (viewingTC && selectedStudent) {
//     return (
//       <TransferCertificate
//         data={selectedStudent}
//         previewMode={true}
//         onBack={handleCloseTC}
//       />
//     );
//   }

//   return (
//     <div className="min-h-screen bg-slate-50/50 p-4 md:p-8 font-sans antialiased">
//       <div className="max-w-7xl mx-auto space-y-6">
        
//         {/* DASHBOARD ACTION HEADER */}
//         <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
//           <div className="flex items-center gap-4">
//             {onBack && (
//               <button
//                 onClick={onBack}
//                 className="p-2.5 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-all shadow-sm active:scale-95"
//                 title="Go back to dashboard"
//               >
//                 <ArrowLeft size={20} />
//               </button>
//             )}

//             <div>
//               <div className="flex items-center gap-2">
//                 <FileText className="text-emerald-600" size={24} />
//                 <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
//                   Transfer Certificates
//                 </h1>
//               </div>
//               <p className="text-xs font-medium text-slate-500 mt-1">
//                  Records &bull; {students.length} historical TC document(s) available
//               </p>
//             </div>
//           </div>

//           {/* DYNAMIC FILTERS PANEL */}
//           <div className="flex items-center gap-3 w-full md:w-auto">
//             <div className="relative w-full md:w-80">
//               <Search
//                 className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
//                 size={18}
//               />
//               <input
//                 type="text"
//                 placeholder="Search by student name..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="w-full pl-11 pr-4 py-2.5 rounded-xl bg-slate-50 text-sm text-slate-800 placeholder-slate-400 border border-slate-200 focus:bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10 outline-none transition-all"
//               />
//             </div>
            
//             <button 
//               onClick={() => fetchGeneratedTC(searchTerm)}
//               className="p-2.5 text-slate-500 hover:text-slate-800 bg-slate-50 rounded-xl border border-slate-200 hover:bg-slate-100 transition-colors"
//               title="Refresh Records"
//             >
//               <RefreshCw size={18} className={loading ? "animate-spin text-emerald-600" : ""} />
//             </button>
//           </div>
//         </div>

//         {/* RECORDS DATA TABLE */}
//         <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
//           <div className="overflow-x-auto">
//             <table className="w-full text-left border-collapse">
//               <thead>
//                 <tr className="bg-slate-50/70 border-b border-slate-100 text-xs font-semibold text-slate-500 uppercase tracking-wider">
//                   <th className="px-6 py-4">TC Number</th>
//                   <th className="px-6 py-4">Admission No</th>
//                   <th className="px-6 py-4">Student Name</th>
//                   <th className="px-6 py-4">Father's Name</th>
//                   <th className="px-6 py-4">Date of Issue</th>
//                   <th className="px-6 py-4 text-right">Actions</th>
//                 </tr>
//               </thead>

//               <tbody className="divide-y divide-slate-100 text-sm text-slate-700">
//                 {loading ? (
//                   // Elegant loading state blocks instead of raw text
//                   [...Array(3)].map((_, index) => (
//                     <tr key={`skeleton-${index}`} className="animate-pulse">
//                       <td colSpan="6" className="px-6 py-5">
//                         <div className="h-5 bg-slate-100 rounded-lg w-full"></div>
//                       </td>
//                     </tr>
//                   ))
//                 ) : students.length > 0 ? (
//                   students.map((student) => (
//                     <tr
//                       key={student._id}
//                       className="hover:bg-slate-50/80 transition-colors group"
//                     >
//                       <td className="px-6 py-4 font-mono font-semibold text-emerald-700">
//                         #{student.generatedTC?.tcNumber || "N/A"}
//                       </td>

//                       <td className="px-6 py-4 font-medium text-slate-600">
//                         {student.admissionInfo?.admissionNo || "N/A"}
//                       </td>

//                       <td className="px-6 py-4 font-semibold text-slate-900">
//                         {student.name || "N/A"}
//                       </td>

//                       <td className="px-6 py-4 text-slate-600">
//                         {student.parentDetails?.fatherName || "N/A"}
//                       </td>

//                       <td className="px-6 py-4 text-slate-500 font-medium">
//                         {student.generatedTC?.generatedDate
//                           ? new Date(student.generatedTC.generatedDate).toLocaleDateString("en-GB", {
//                               day: "2-digit",
//                               month: "short",
//                               year: "numeric"
//                             })
//                           : "N/A"}
//                       </td>

//                       <td className="px-6 py-4 text-right">
//                         <button
//                           onClick={() => handleViewTC(student)}
//                           className="inline-flex items-center gap-1.5 bg-white border border-slate-200 text-slate-700 hover:text-white hover:bg-emerald-600 hover:border-emerald-600 px-3.5 py-1.5 rounded-lg text-xs font-bold shadow-sm transition-all active:scale-95"
//                         >
//                           <Eye size={14} />
//                           <span>View TC</span>
//                         </button>
//                       </td>
//                     </tr>
//                   ))
//                 ) : (
//                   <tr>
//                     <td colSpan="6" className="text-center py-16 text-slate-400">
//                       <FileText size={40} className="mx-auto mb-3 text-slate-300 stroke-[1.5]" />
//                       <p className="font-medium text-sm text-slate-500">No Generated TC Records Found</p>
//                       <p className="text-xs text-slate-400 mt-0.5">Try altering your search keywords</p>
//                     </td>
//                   </tr>
//                 )}
//               </tbody>
//             </table>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default GeneratedTCList;





import React, { useEffect, useState } from "react";
import axios from "axios";
import { Search, ArrowLeft, Eye, RefreshCw, FileSpreadsheet } from "lucide-react";
import TransferCertificate from "./TransferCertificate";

const GeneratedTCList = ({ onBack }) => {
  const [students, setStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [viewingTC, setViewingTC] = useState(false);

  // Fetch records from backend API
  const fetchGeneratedTC = async (query = "") => {
    setLoading(true);
    try {
      const response = await axios.get(
        `http://localhost:5000/api/students/generated-tc?name=${query}`
      );
      setStudents(response.data);
    } catch (error) {
      console.error("Generated TC Fetch Error:", error);
    } finally {
      setLoading(false);
    }
  };

  // Debounce search input to prevent rapid server hammering
  useEffect(() => {
    const delay = setTimeout(() => {
      fetchGeneratedTC(searchTerm);
    }, 300);

    return () => clearTimeout(delay);
  }, [searchTerm]);

  // Clean toggle handler for drilling into the TC document view
  const handleViewTC = (student) => {
    setSelectedStudent(student);
    setViewingTC(true);
  };

  const handleCloseTC = () => {
    setViewingTC(false);
    setSelectedStudent(null);
  };

  // Conditional rendering for the specific TC view wrapper
  if (viewingTC && selectedStudent) {
    return (
      <TransferCertificate
        data={selectedStudent}
        previewMode={true}
        onBack={handleCloseTC}
      />
    );
  }

  return (
    <div className="min-h-screen bg-slate-50/50 p-4 md:p-8 font-sans antialiased">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* DASHBOARD ACTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
          
          {/* LEFT SIDE: HEADER TITLE & COUNTER */}
          <div className="flex flex-col justify-center">
            <h2 className="text-xl font-bold text-slate-800 tracking-tight">
              TC Records
            </h2>
            <p className="text-xs font-medium text-slate-400 mt-1">
              Records &bull; {students.length} historical TC document(s) available
            </p>
          </div>

          {/* RIGHT SIDE: DYNAMIC FILTERS PANEL */}
          <div className="flex items-center gap-3 w-full md:w-auto">
            {onBack && (
              <button
                onClick={onBack}
                className="p-2.5 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-all shadow-sm active:scale-95"
                title="Go back to dashboard"
              >
                <ArrowLeft size={18} />
              </button>
            )}

            <div className="relative w-full md:w-80">
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
                size={18}
              />
              <input
                type="text"
                placeholder="Search by student name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-11 pr-4 py-2.5 rounded-xl bg-slate-50 text-sm text-slate-800 placeholder-slate-400 border border-slate-200 focus:bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10 outline-none transition-all"
              />
            </div>
            
            <button 
              onClick={() => fetchGeneratedTC(searchTerm)}
              className="p-2.5 text-slate-500 hover:text-slate-800 bg-slate-50 rounded-xl border border-slate-200 hover:bg-slate-100 transition-colors"
              title="Refresh Records"
            >
              <RefreshCw size={18} className={loading ? "animate-spin text-emerald-600" : ""} />
            </button>
          </div>
        </div>

        {/* RECORDS DATA TABLE */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50/70 border-b border-slate-100 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  <th className="px-6 py-4">TC Number</th>
                  <th className="px-6 py-4">Admission No</th>
                  <th className="px-6 py-4">Student Name</th>
                  <th className="px-6 py-4">Father's Name</th>
                  <th className="px-6 py-4">Date of Issue</th>
                  <th className="px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-100 text-sm text-slate-700">
                {loading ? (
                  // Elegant loading state skeleton blocks
                  [...Array(3)].map((_, index) => (
                    <tr key={`skeleton-${index}`} className="animate-pulse">
                      <td colSpan="6" className="px-6 py-5">
                        <div className="h-5 bg-slate-100 rounded-lg w-full"></div>
                      </td>
                    </tr>
                  ))
                ) : students.length > 0 ? (
                  students.map((student) => (
                    <tr
                      key={student._id}
                      className="hover:bg-slate-50/80 transition-colors group"
                    >
                      <td className="px-6 py-4 font-mono font-semibold text-emerald-700">
                        #{student.generatedTC?.tcNumber || "N/A"}
                      </td>

                      <td className="px-6 py-4 font-medium text-slate-600">
                        {student.admissionInfo?.admissionNo || "N/A"}
                      </td>

                      <td className="px-6 py-4 font-semibold text-slate-900">
                        {student.name || "N/A"}
                      </td>

                      <td className="px-6 py-4 text-slate-600">
                        {student.parentDetails?.fatherName || "N/A"}
                      </td>

                      <td className="px-6 py-4 text-slate-500 font-medium">
                        {student.generatedTC?.generatedDate
                          ? new Date(student.generatedTC.generatedDate).toLocaleDateString("en-GB", {
                              day: "2-digit",
                              month: "short",
                              year: "numeric"
                            })
                          : "N/A"}
                      </td>

                      <td className="px-6 py-4 text-right">
                        <button
                          onClick={() => handleViewTC(student)}
                          className="inline-flex items-center gap-1.5 bg-white border border-slate-200 text-slate-700 hover:text-white hover:bg-blue-600 hover:border-blue-600 px-3.5 py-1.5 rounded-lg text-xs font-bold shadow-sm transition-all active:scale-95"
                        >
                          <Eye size={14} />
                          <span>View TC</span>
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="text-center py-16 text-slate-400">
                      <FileSpreadsheet size={40} className="mx-auto mb-3 text-slate-300 stroke-[1.5]" />
                      <p className="font-medium text-sm text-slate-500">No Generated TC Records Found</p>
                      <p className="text-xs text-slate-400 mt-0.5">Try altering your search keywords</p>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
};

export default GeneratedTCList;