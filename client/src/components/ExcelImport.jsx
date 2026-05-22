
// import React, { useState } from 'react';
// import * as XLSX from 'xlsx';
// import axios from 'axios';
// import { Upload, CheckCircle, FileSpreadsheet, Loader2, X } from 'lucide-react';

// const ExcelImport = () => {
//   const [previewData, setPreviewData] = useState([]);
//   const [uploading, setUploading] = useState(false);
//   const [isReading, setIsReading] = useState(false);
//   const [fileName, setFileName] = useState("");

//   const handleFileUpload = (e) => {
//     const file = e.target.files[0];
//     if (!file) return;

//     setFileName(file.name);
//     setIsReading(true);

//     const reader = new FileReader();

//     reader.onload = (evt) => {
//       try {
//         const data = evt.target.result;
//         const workbook = XLSX.read(data, { type: 'array', cellDates: true });
//         const sheetName = workbook.SheetNames[0];
//         const worksheet = workbook.Sheets[sheetName];

//         const rawData = XLSX.utils.sheet_to_json(worksheet, { defval: "" });

//         if (rawData.length === 0) {
//           alert("The selected file appears to be empty.");
//           setIsReading(false);
//           return;
//         }

//         const structuredData = rawData.map(row => {
//           const norm = {};
//           Object.keys(row).forEach(key => {
//             const normalizedKey = key.toString().toLowerCase().replace(/[^a-z0-9]/g, '');
//             norm[normalizedKey] = row[key];
//           });

//           const getV = (keys, isDate = false) => {
//             for (let k of keys) {
//               const cleanK = k.toLowerCase().replace(/[^a-z0-9]/g, '');
//               let value = norm[cleanK];
//               if (value !== undefined && value !== null && String(value).trim() !== "") {
//                 return isDate ? value : String(value).trim();
//               }
//             }
//             return isDate ? null : "N/A";
//           };

//           return {
//             name: getV(['studentname', 'name', 'fullname', 'student']),
//             dob: getV(['dateofbirth', 'dob', 'birthdate'], true),
//             gender: getV(['gender', 'sex']),
//             nationality: getV(['nationality', 'citizen']) === "N/A" ? "Indian" : getV(['nationality', 'citizen']),
//             religion: getV(['religion']),
//             caste: getV(['caste', 'category', 'community']),
//             motherTongue: getV(['mothertongue', 'language']),
//             state: getV(['state', 'province']),
//             parentDetails: {
//   fatherName: getV(['fathername', 'fathersname', 'guardian', 'parentname']),
//   fatherMobile: getV(['fathermobile', 'fatherphone']),
//   fatherAadhaar: getV(['fatheraadhaar', 'fatheraadhaarno']),
//   fatherQualification: getV(['fatherqualification']),
//   fatherOccupation: getV(['fatheroccupation']),
//   fatherAnnualIncome: getV(['fatherannualincome']),

//   motherName: getV(['mothername', 'mothersname']),
//   motherMobile: getV(['mothermobile']),
//   motherAadhaar: getV(['motheraadhaar']),
//   motherQualification: getV(['motherqualification']),
//   motherOccupation: getV(['motheroccupation']),
//   motherAnnualIncome: getV(['motherannualincome']),

//   guardianName: getV(['guardianname']),
//   guardianRelation: getV(['guardianrelation']),
//   guardianMobile: getV(['guardianmobile']),
//   guardianAadhaar: getV(['guardianaadhaar']),
//   guardianOccupation: getV(['guardianoccupation']),
//   guardianAnnualIncome: getV(['guardianannualincome']),

//   residence: getV(['residenceaddress', 'address', 'location'])
// },
//             admissionInfo: {
//               admissionNo: getV(['admissionno', 'admisionno', 'admno', 'enrollmentno']),
//               classAdmittedTo: getV(['class', 'grade', 'standard']),
//               previousSchoolName: getV(['previousschool', 'prevschool']),
//               previousTCNumber: getV(['tcno', 'previoustcnumber']),
//               previousTCDate: getV(['tcdate', 'previoustcdate'], true)
//             }
//           };
//         });

//         setPreviewData(structuredData);
//       } catch (error) {
//         console.error("Read Error:", error);
//         alert("Failed to read file. Make sure it is a valid Excel or CSV.");
//       } finally {
//         setIsReading(false);
//       }
//     };

//     reader.readAsArrayBuffer(file);
//   };

//   const handleBulkSubmit = async () => {
//     const validRecords = previewData.filter(s => 
//   s.name !== "N/A" &&
//   s.dob &&
//   s.parentDetails?.fatherName !== "N/A" &&
//   s.parentDetails?.motherName !== "N/A" &&
//   s.admissionInfo?.admissionNo !== "N/A"
// );

//     if (validRecords.length === 0) {
//       alert("No valid records found. Please check if your Excel headers match (e.g., 'Student Name', 'Admission No')");
//       return;
//     }

//     setUploading(true);
//     try {
//       const res = await axios.post('http://localhost:5000/api/students/bulk-admission', {
//         students: validRecords
//       });
//       alert(`Success: ${res.data.count || validRecords.length} records processed.`);
//       setPreviewData([]);
//     } catch (err) {
//       console.error("Upload error:", err);
//       alert(err.response?.data?.message || "Import failed. Check server connection.");
//     } finally {
//       setUploading(false);
//     }
//   };

//   return (
//     <div className="max-w-6xl mx-auto p-6 bg-white rounded-[2.5rem] shadow-2xl  border border-gray-100">
//       <div className="flex justify-between items-center mb-8">
//         <div>
//           <h2 className="text-3xl font-black text-blue-900 flex items-center gap-3">
//             <FileSpreadsheet className="text-blue-600" size={32} /> Bulk Import Portal
//           </h2>
//           <p className="text-gray-400 text-sm mt-1">Automatic header detection & sanitization enabled</p>
//         </div>
//         {previewData.length > 0 && (
//           <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg">
//             {previewData.length} ROWS DETECTED
//           </span>
//         )}
//       </div>

//       {!previewData.length ? (
//         <div className="relative">
//           {isReading && (
//             <div className="absolute inset-0 bg-white/80 z-10 flex flex-col items-center justify-center rounded-[2rem]">
//               <Loader2 className="w-12 h-12 text-blue-600 animate-spin mb-2" />
//               <p className="font-bold text-blue-900">Reading Excel File...</p>
//             </div>
//           )}
//           <label className="flex flex-col items-center justify-center w-full h-32 border-4 border-dashed border-blue-100 rounded-[2rem] cursor-pointer hover:bg-blue-50 transition-all group">
//             <Upload className="w-12 h-12 text-blue-400 mb-4 group-hover:scale-110 transition-transform" />
//             <span className="text-blue-900 font-bold">Click to upload or drag and drop</span>
//             <input type="file" className="hidden" accept=".xlsx,.xls,.csv" onChange={handleFileUpload} />
//           </label>
//         </div>
//       ) : (
//         <div className="space-y-6">
//           <div className="bg-blue-900 p-6 rounded-3xl flex items-center justify-between text-white shadow-xl">
//             <div className="flex items-center gap-4">
//               <FileSpreadsheet size={24} />
//               <div>
//                 <p className="text-sm font-medium opacity-70">Active Spreadsheet</p>
//                 <p className="font-bold truncate max-w-[200px]">{fileName}</p>
//               </div>
//             </div>
//             <button onClick={() => setPreviewData([])} className="p-2 hover:bg-white/10 rounded-full">
//               <X size={20} />
//             </button>
//           </div>

//           <div className="max-h-96 overflow-auto border-2 border-gray-50 rounded-[2rem] bg-gray-50/30">
//             <table className="w-full text-left border-collapse">
//               <thead className="bg-white sticky top-0 border-b-2 border-gray-50">
//                 <tr>
//                   <th className="p-5 text-[10px] font-black text-gray-400 uppercase tracking-widest">Student Name</th>
//                   <th className="p-5 text-[10px] font-black text-gray-400 uppercase tracking-widest">Admission No</th>
//                   <th className="p-5 text-[10px] font-black text-gray-400 uppercase tracking-widest">Father Name</th>
//                   <th className="p-5 text-[10px] font-black text-gray-400 uppercase tracking-widest">Class</th>
//                   <th className="p-5 text-[10px] font-black text-gray-400 uppercase tracking-widest">Data Quality</th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-gray-100">
//                 {previewData.slice(0, 100).map((row, i) => (
//                   <tr key={i} className="bg-white hover:bg-blue-50/30 transition-colors">
//                     <td className="p-5 font-bold text-blue-900">{row.name}</td>
//                     <td className="p-5 text-gray-500 font-medium">
//                       {row.admissionInfo?.admissionNo || "N/A"}
//                     </td>
//                     <td className="p-5 text-gray-400 italic">
//                       {row.parentDetails?.fatherName || "N/A"}
//                     </td>
//                     <td className="p-5 text-gray-500">
//                       {row.admissionInfo?.classAdmittedTo || "N/A"}
//                     </td>
//                     <td className="p-5">
//                       <span className={`px-3 py-1 rounded-full text-[9px] font-black tracking-tighter ${
//                         row.name === "N/A" || !row.admissionInfo?.admissionNo || row.admissionInfo?.admissionNo === "N/A" 
//                         ? 'bg-orange-100 text-orange-600' 
//                         : 'bg-green-100 text-green-600'
//                       }`}>
//                         {row.name === "N/A" || !row.admissionInfo?.admissionNo || row.admissionInfo?.admissionNo === "N/A" 
//                         ? 'INCOMPLETE HEADER' 
//                         : 'VALID RECORD'}
//                       </span>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>

//           <div className="flex gap-4">
//             <button onClick={() => setPreviewData([])} className="flex-1 py-4 bg-white border-2 border-gray-100 rounded-2xl font-bold text-gray-400">
//               Discard
//             </button>
//             <button 
//               onClick={handleBulkSubmit} 
//               disabled={uploading} 
//               className="flex-[2.5] py-4 bg-blue-600 text-white rounded-2xl font-bold flex items-center justify-center gap-3 shadow-xl disabled:opacity-50"
//             >
//               {uploading ? <Loader2 className="animate-spin" /> : <CheckCircle size={20} />}
//               <span>{uploading ? 'Processing Migration...' : 'Confirm Bulk Admission'}</span>
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ExcelImport;





// 20-05-2026







import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import axios from 'axios';
import { Upload, CheckCircle, FileSpreadsheet, Loader2, X, RotateCcw } from 'lucide-react';

const ExcelImport = () => {
  const baseURL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';
  const [previewData, setPreviewData] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [isReading, setIsReading] = useState(false);
  const [fileName, setFileName] = useState("");

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setFileName(file.name);
    setIsReading(true);

    const reader = new FileReader();

    reader.onload = (evt) => {
      try {
        const data = evt.target.result;
        const workbook = XLSX.read(data, { type: 'array', cellDates: true });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];

        const rawData = XLSX.utils.sheet_to_json(worksheet, { defval: "" });

        if (rawData.length === 0) {
          alert("The selected file appears to be empty.");
          setIsReading(false);
          return;
        }

        const structuredData = rawData.map(row => {
          const norm = {};
          Object.keys(row).forEach(key => {
            const normalizedKey = key.toString().toLowerCase().replace(/[^a-z0-9]/g, '');
            norm[normalizedKey] = row[key];
          });

          const getV = (keys, isDate = false) => {
            for (let k of keys) {
              const cleanK = k.toLowerCase().replace(/[^a-z0-9]/g, '');
              const value = norm[cleanK];
              if (value !== undefined && value !== null && String(value).trim() !== "") {
                return isDate ? value : String(value).trim();
              }
            }
            return isDate ? null : "N/A";
          };

          return {
            name: getV(['studentname', 'name', 'fullname', 'student']),
            dob: getV(['dateofbirth', 'dob', 'birthdate'], true),
            gender: getV(['gender', 'sex']),
            nationality: getV(['nationality', 'citizen']) === "N/A" ? "Indian" : getV(['nationality', 'citizen']),
            religion: getV(['religion']),
            caste: getV(['caste', 'category', 'community']),
            motherTongue: getV(['mothertongue', 'language']),
            state: getV(['state', 'province']),
            parentDetails: {
              fatherName: getV(['fathername', 'fathersname', 'guardian', 'parentname']),
              fatherMobile: getV(['fathermobile', 'fatherphone']),
              fatherAadhaar: getV(['fatheraadhaar', 'fatheraadhaarno']),
              fatherQualification: getV(['fatherqualification']),
              fatherOccupation: getV(['fatheroccupation']),
              fatherAnnualIncome: getV(['fatherannualincome']),

              motherName: getV(['mothername', 'mothersname']),
              motherMobile: getV(['mothermobile']),
              motherAadhaar: getV(['motheraadhaar']),
              motherQualification: getV(['motherqualification']),
              motherOccupation: getV(['motheroccupation']),
              motherAnnualIncome: getV(['motherannualincome']),

              guardianName: getV(['guardianname']),
              guardianRelation: getV(['guardianrelation']),
              guardianMobile: getV(['guardianmobile']),
              guardianAadhaar: getV(['guardianaadhaar']),
              guardianOccupation: getV(['guardianoccupation']),
              guardianAnnualIncome: getV(['guardianannualincome']),

              residence: getV(['residenceaddress', 'address', 'location'])
            },
            admissionInfo: {
              admissionNo: getV(['admissionno', 'admisionno', 'admno', 'enrollmentno']),
              classAdmittedTo: getV(['class', 'grade', 'standard']),
              previousSchoolName: getV(['previousschool', 'prevschool']),
              previousTCNumber: getV(['tcno', 'previoustcnumber']),
              previousTCDate: getV(['tcdate', 'previoustcdate'], true)
            }
          };
        });

        setPreviewData(structuredData);
      } catch (error) {
        console.error("Read Error:", error);
        alert("Failed to read file. Make sure it is a valid Excel or CSV.");
      } finally {
        setIsReading(false);
      }
    };

    reader.readAsArrayBuffer(file);
  };

  const handleBulkSubmit = async () => {
    const validRecords = previewData.filter(s => 
      s.name !== "N/A" &&
      s.dob &&
      s.parentDetails?.fatherName !== "N/A" &&
      s.parentDetails?.motherName !== "N/A" &&
      s.admissionInfo?.admissionNo !== "N/A"
    );

    if (validRecords.length === 0) {
      alert("No valid records found. Please check if your Excel headers match (e.g., 'Student Name', 'Admission No')");
      return;
    }

    setUploading(true);
    try {
      const res = await axios.post(`${baseURL}/api/students/bulk-admission`, {
      // const res = await axios.post('http://localhost:5000/api/students/bulk-admission', {
        students: validRecords
      });
      alert(`Success: ${res.data.count || validRecords.length} records processed.`);
      setPreviewData([]);
    } catch (err) {
      console.error("Upload error:", err);
      alert(err.response?.data?.message || "Import failed. Check server connection.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="w-full bg-slate-50 min-h-screen text-left p-6 md:p-8">
      
      {/* --- DATA RECORDS LIST LOG CARD --- */}
      <div className="w-full pb-12">
        <div className="bg-white rounded-[2rem] shadow-xl border border-gray-100">
          <div className="p-6 md:p-8">
            
            {/* TITLE BAR FRAME LAYOUT */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
              <div>
                <h2 className="text-3xl font-black text-blue-900 tracking-tight flex items-center gap-3">
                  <FileSpreadsheet className="text-blue-600" size={32} /> Bulk Import Portal
                </h2>
                <p className="text-gray-400 text-sm font-medium italic mt-0.5">
                  Automatic header detection & sanitization enabled
                </p>
              </div>

              {previewData.length > 0 && (
                <div className="flex gap-2 items-center">
                  <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-xs font-bold shadow-md tracking-wider uppercase">
                    {previewData.length} Rows Detected
                  </span>
                </div>
              )}
            </div>

            {/* ACTION INTERFACE HUB AREA */}
            {!previewData.length ? (
              <div className="relative">
                {isReading && (
                  <div className="absolute inset-0 bg-white/80 z-10 flex flex-col items-center justify-center rounded-[2rem]">
                    <Loader2 className="w-12 h-12 text-blue-600 animate-spin mb-2" />
                    <p className="font-bold text-blue-900 uppercase tracking-wider text-xs">Reading Excel File...</p>
                  </div>
                )}
                <label className="flex flex-col items-center justify-center w-full h-64 border-4 border-dashed border-blue-100 rounded-[2rem] cursor-pointer hover:bg-blue-50/40 transition-all group shadow-inner">
                  <Upload className="w-14 h-14 text-blue-400 mb-4 group-hover:scale-110 transition-transform" />
                  <span className="text-blue-900 font-black uppercase text-xs tracking-widest">Click to upload or drag and drop</span>
                  <p className="text-gray-400 text-xs mt-1 font-medium">Accepts .xlsx, .xls, or .csv configuration templates</p>
                  <input type="file" className="hidden" accept=".xlsx,.xls,.csv" onChange={handleFileUpload} />
                </label>
              </div>
            ) : (
              <div className="space-y-6">
                
                {/* FILE ATTACHMENT CARD BANNER */}
                <div className="bg-[#1e3a8a] p-5 rounded-2xl flex items-center justify-between text-white shadow-md">
                  <div className="flex items-center gap-4">
                    <div className="p-2.5 bg-blue-800 rounded-xl text-blue-200">
                      <FileSpreadsheet size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-blue-200 uppercase tracking-wider">Active Spreadsheet</p>
                      <p className="font-bold text-sm truncate max-w-sm">{fileName}</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => setPreviewData([])} 
                    className="p-2 text-blue-200 hover:text-white hover:bg-white/10 rounded-full transition-colors"
                    title="Remove Spreadsheet File"
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* TABULAR METRICS INTERFACE PREVIEW */}
                <div className="overflow-x-auto max-h-96 border border-gray-100 rounded-2xl shadow-inner bg-gray-50/20">
                  <table className="w-full border-separate border-spacing-y-1 px-2">
                    <thead className="bg-white sticky top-0 z-10">
                      <tr className="text-gray-400 text-left text-xs font-black uppercase tracking-widest border-b border-gray-100">
                        <th className="px-5 py-4">Student Name</th>
                        <th className="px-5 py-4">Admission No</th>
                        <th className="px-5 py-4">Father Name</th>
                        <th className="px-5 py-4">Class</th>
                        <th className="px-5 py-4 text-right">Data Quality</th>
                      </tr>
                    </thead>
                    <tbody>
                      {previewData.slice(0, 100).map((row, i) => {
                        const isIncomplete = row.name === "N/A" || !row.admissionInfo?.admissionNo || row.admissionInfo?.admissionNo === "N/A";
                        return (
                          <tr key={i} className="bg-white hover:bg-blue-50/40 transition-all border-y border-gray-100">
                            <td className="px-5 py-3.5 rounded-l-xl font-bold text-blue-900 text-sm">
                              {row.name}
                            </td>
                            <td className="px-5 py-3.5 text-gray-700 font-medium text-sm">
                              {row.admissionInfo?.admissionNo || "N/A"}
                            </td>
                            <td className="px-5 py-3.5 text-gray-500 font-medium text-sm">
                              {row.parentDetails?.fatherName || "N/A"}
                            </td>
                            <td className="px-5 py-3.5 text-gray-500 text-sm">
                              {row.admissionInfo?.classAdmittedTo || "N/A"}
                            </td>
                            <td className="px-5 py-3.5 rounded-r-xl text-right">
                              <span className={`inline-block px-3 py-1 rounded-full text-[9px] font-black tracking-wider uppercase ${
                                isIncomplete 
                                  ? 'bg-orange-100 text-orange-600' 
                                  : 'bg-green-100 text-green-600'
                              }`}>
                                {isIncomplete ? 'Incomplete Header' : 'Valid Record'}
                              </span>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>

                {/* CONTAINER MIGRATION ACTIONS CONTROL */}
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button 
                    onClick={() => setPreviewData([])} 
                    className="px-6 py-3.5 bg-white border border-gray-200 text-gray-500 rounded-xl font-bold uppercase text-xs tracking-widest hover:bg-gray-50 hover:text-gray-700 transition-colors flex items-center justify-center gap-2 shadow-sm order-2 sm:order-1"
                  >
                    <RotateCcw size={16} /> Discard
                  </button>
                  <button 
                    onClick={handleBulkSubmit} 
                    disabled={uploading} 
                    className="flex-1 py-3.5 bg-blue-700 hover:bg-blue-800 disabled:bg-blue-400 text-white rounded-xl font-bold uppercase text-xs tracking-widest flex items-center justify-center gap-3 shadow-md transition-colors order-1 sm:order-2"
                  >
                    {uploading ? <Loader2 className="animate-spin" size={16} /> : <CheckCircle size={16} />}
                    <span>{uploading ? 'Processing Migration...' : 'Confirm Bulk Admission'}</span>
                  </button>
                </div>

              </div>
            )}

          </div>
        </div>
      </div>

    </div>
  );
};

export default ExcelImport;