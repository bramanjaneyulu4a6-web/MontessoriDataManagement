// // // // // // // // // // // // import React, { useState } from 'react';
// // // // // // // // // // // // import AdmissionForm from './components/AdmissionForm';
// // // // // // // // // // // // import ExcelImport from './components/ExcelImport';

// // // // // // // // // // // // function App() {
// // // // // // // // // // // //   const [activeTab, setActiveTab] = useState('admission');

// // // // // // // // // // // //   return (
// // // // // // // // // // // //     <div className="min-h-screen bg-gray-100 font-sans">
// // // // // // // // // // // //       {/* HEADER */}
// // // // // // // // // // // //       <header className="bg-blue-900 text-white py-6 shadow-md">
// // // // // // // // // // // //         <div className="max-w-7xl mx-auto px-4">
// // // // // // // // // // // //           <h1 className="text-2xl font-bold tracking-tight">Vandana School TC Management System</h1>
// // // // // // // // // // // //           <p className="text-blue-200 text-sm">Digital Record & Transfer Certificate Portal</p>
// // // // // // // // // // // //         </div>
// // // // // // // // // // // //       </header>

// // // // // // // // // // // //       {/* NAVIGATION TABS */}
// // // // // // // // // // // //       <nav className="max-w-7xl mx-auto px-4 mt-6">
// // // // // // // // // // // //         <div className="flex border-b border-gray-300">
// // // // // // // // // // // //           <button
// // // // // // // // // // // //             onClick={() => setActiveTab('admission')}
// // // // // // // // // // // //             className={`py-2 px-6 font-semibold transition-all ${
// // // // // // // // // // // //               activeTab === 'admission' 
// // // // // // // // // // // //               ? 'border-b-4 border-blue-800 text-blue-800' 
// // // // // // // // // // // //               : 'text-gray-500 hover:text-blue-600'
// // // // // // // // // // // //             }`}
// // // // // // // // // // // //           >
// // // // // // // // // // // //             New Admission
// // // // // // // // // // // //           </button>
// // // // // // // // // // // //           <button
// // // // // // // // // // // //             onClick={() => setActiveTab('import')}
// // // // // // // // // // // //             className={`py-2 px-6 font-semibold transition-all ${
// // // // // // // // // // // //               activeTab === 'import' 
// // // // // // // // // // // //               ? 'border-b-4 border-blue-800 text-blue-800' 
// // // // // // // // // // // //               : 'text-gray-500 hover:text-blue-600'
// // // // // // // // // // // //             }`}
// // // // // // // // // // // //           >
// // // // // // // // // // // //             Bulk Excel Import
// // // // // // // // // // // //           </button>
// // // // // // // // // // // //         </div>
// // // // // // // // // // // //       </nav>

// // // // // // // // // // // //       {/* MAIN CONTENT AREA */}
// // // // // // // // // // // //       <main className="max-w-7xl mx-auto px-4 py-8">
// // // // // // // // // // // //         {activeTab === 'admission' ? (
// // // // // // // // // // // //           <div className="animate-fadeIn">
// // // // // // // // // // // //             <AdmissionForm />
// // // // // // // // // // // //           </div>
// // // // // // // // // // // //         ) : (
// // // // // // // // // // // //           <div className="animate-fadeIn">
// // // // // // // // // // // //             <ExcelImport />
// // // // // // // // // // // //           </div>
// // // // // // // // // // // //         )}
// // // // // // // // // // // //       </main>
// // // // // // // // // // // //     </div>
// // // // // // // // // // // //   );
// // // // // // // // // // // // }

// // // // // // // // // // // // export default App;















// // // // // // // // // // // import React, { useState } from 'react';
// // // // // // // // // // // import AdmissionForm from './components/AdmissionForm';
// // // // // // // // // // // import ExcelImport from './components/ExcelImport';

// // // // // // // // // // // function App() {
// // // // // // // // // // //   const [activeTab, setActiveTab] = useState('admission');

// // // // // // // // // // //   return (
// // // // // // // // // // //     <div className="min-h-screen bg-gray-100 font-sans w-full">
// // // // // // // // // // //       {/* HEADER - Updated to full width */}
// // // // // // // // // // //       <header className="bg-blue-900 text-white py-6 shadow-md w-full">
// // // // // // // // // // //         <div className="max-w-full mx-auto px-6">
// // // // // // // // // // //           <h1 className="text-2xl font-bold tracking-tight">Montessori TC Management System</h1>
// // // // // // // // // // //           <p className="text-blue-200 text-sm">Digital Record & Transfer Certificate Portal</p>
// // // // // // // // // // //         </div>
// // // // // // // // // // //       </header>

// // // // // // // // // // //       {/* NAVIGATION TABS - Updated to full width */}
// // // // // // // // // // //       <nav className="max-w-full mx-auto px-6 mt-6">
// // // // // // // // // // //         <div className="flex border-b border-gray-300">
// // // // // // // // // // //           <button
// // // // // // // // // // //             onClick={() => setActiveTab('admission')}
// // // // // // // // // // //             className={`py-2 px-6 font-semibold transition-all ${
// // // // // // // // // // //               activeTab === 'admission' 
// // // // // // // // // // //               ? 'border-b-4 border-blue-800 text-blue-800' 
// // // // // // // // // // //               : 'text-gray-500 hover:text-blue-600'
// // // // // // // // // // //             }`}
// // // // // // // // // // //           >
// // // // // // // // // // //             New Admission
// // // // // // // // // // //           </button>
// // // // // // // // // // //           <button
// // // // // // // // // // //             onClick={() => setActiveTab('import')}
// // // // // // // // // // //             className={`py-2 px-6 font-semibold transition-all ${
// // // // // // // // // // //               activeTab === 'import' 
// // // // // // // // // // //               ? 'border-b-4 border-blue-800 text-blue-800' 
// // // // // // // // // // //               : 'text-gray-500 hover:text-blue-600'
// // // // // // // // // // //             }`}
// // // // // // // // // // //           >
// // // // // // // // // // //             Bulk Excel Import
// // // // // // // // // // //           </button>
// // // // // // // // // // //         </div>
// // // // // // // // // // //       </nav>

// // // // // // // // // // //       {/* MAIN CONTENT AREA - Updated to full width */}
// // // // // // // // // // //       <main className="max-w-full mx-auto px-6 py-8">
// // // // // // // // // // //         {activeTab === 'admission' ? (
// // // // // // // // // // //           <div className="animate-fadeIn">
// // // // // // // // // // //             <AdmissionForm />
// // // // // // // // // // //           </div>
// // // // // // // // // // //         ) : (
// // // // // // // // // // //           <div className="animate-fadeIn">
// // // // // // // // // // //             <ExcelImport />
// // // // // // // // // // //           </div>
// // // // // // // // // // //         )}
// // // // // // // // // // //       </main>
// // // // // // // // // // //     </div>
// // // // // // // // // // //   );
// // // // // // // // // // // }

// // // // // // // // // // // export default App;








// // // // // // // // // // import React, { useState } from 'react';
// // // // // // // // // // import AdmissionForm from './components/AdmissionForm';
// // // // // // // // // // import ExcelImport from './components/ExcelImport'; // Ensure this matches your component filename
// // // // // // // // // // import StudentTable from './components/StudentTable';

// // // // // // // // // // function App() {
// // // // // // // // // //   // We now support three states: 'view', 'admission', and 'import'
// // // // // // // // // //   const [activeTab, setActiveTab] = useState('view');

// // // // // // // // // //   return (
// // // // // // // // // //     <div className="min-h-screen bg-gray-50 font-sans w-full">
// // // // // // // // // //       {/* HEADER - Professional Blue Theme */}
// // // // // // // // // //       <header className="bg-blue-900 text-white py-8 shadow-lg w-full text-center">
// // // // // // // // // //         <div className="max-w-full mx-auto px-6">
// // // // // // // // // //           <h1 className="text-4xl font-bold tracking-tight">Montessori TC Management System</h1>
// // // // // // // // // //           <p className="text-blue-200 mt-2 text-lg">Digital Record & Transfer Certificate Portal</p>
// // // // // // // // // //         </div>
// // // // // // // // // //       </header>

// // // // // // // // // //       {/* NAVIGATION TABS - Full Width Centered */}
// // // // // // // // // //       <nav className="bg-white shadow-sm sticky top-0 z-30">
// // // // // // // // // //         <div className="max-w-full mx-auto px-6 flex justify-center space-x-2 py-4">
// // // // // // // // // //           <button
// // // // // // // // // //             onClick={() => setActiveTab('view')}
// // // // // // // // // //             className={`px-8 py-2.5 rounded-full font-bold transition-all duration-200 ${
// // // // // // // // // //               activeTab === 'view' 
// // // // // // // // // //               ? 'bg-blue-800 text-white shadow-md' 
// // // // // // // // // //               : 'text-gray-500 hover:bg-blue-50 hover:text-blue-800'
// // // // // // // // // //             }`}
// // // // // // // // // //           >
// // // // // // // // // //             Database Records
// // // // // // // // // //           </button>
          
// // // // // // // // // //           <button
// // // // // // // // // //             onClick={() => setActiveTab('admission')}
// // // // // // // // // //             className={`px-8 py-2.5 rounded-full font-bold transition-all duration-200 ${
// // // // // // // // // //               activeTab === 'admission' 
// // // // // // // // // //               ? 'bg-blue-800 text-white shadow-md' 
// // // // // // // // // //               : 'text-gray-500 hover:bg-blue-50 hover:text-blue-800'
// // // // // // // // // //             }`}
// // // // // // // // // //           >
// // // // // // // // // //             New Admission
// // // // // // // // // //           </button>

// // // // // // // // // //           <button
// // // // // // // // // //             onClick={() => setActiveTab('import')}
// // // // // // // // // //             className={`px-8 py-2.5 rounded-full font-bold transition-all duration-200 ${
// // // // // // // // // //               activeTab === 'import' 
// // // // // // // // // //               ? 'bg-blue-800 text-white shadow-md' 
// // // // // // // // // //               : 'text-gray-500 hover:bg-blue-50 hover:text-blue-800'
// // // // // // // // // //             }`}
// // // // // // // // // //           >
// // // // // // // // // //             Bulk Excel Import
// // // // // // // // // //           </button>
// // // // // // // // // //         </div>
// // // // // // // // // //       </nav>

// // // // // // // // // //       {/* MAIN CONTENT AREA */}
// // // // // // // // // //       <main className="max-w-full mx-auto px-6 py-10">
// // // // // // // // // //         <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
// // // // // // // // // //           {activeTab === 'view' && <StudentTable />}
// // // // // // // // // //           {activeTab === 'admission' && <AdmissionForm />}
// // // // // // // // // //           {activeTab === 'import' && <ExcelImport />}
// // // // // // // // // //         </div>
// // // // // // // // // //       </main>

// // // // // // // // // //       {/* FOOTER */}
// // // // // // // // // //       <footer className="py-10 text-center text-gray-400 text-sm">
// // // // // // // // // //         &copy; {new Date().getFullYear()} Montessori School Management Data Pipeline
// // // // // // // // // //       </footer>
// // // // // // // // // //     </div>
// // // // // // // // // //   );
// // // // // // // // // // }

// // // // // // // // // // export default App;












// // // // // // // // // import React, { useState } from 'react';
// // // // // // // // // import AdmissionForm from './components/AdmissionForm';
// // // // // // // // // import ExcelImport from './components/ExcelImport'; 
// // // // // // // // // import StudentTable from './components/StudentTable';

// // // // // // // // // function App() {
// // // // // // // // //   // Navigation states: 'view', 'admission', and 'import'
// // // // // // // // //   const [activeTab, setActiveTab] = useState('view');

// // // // // // // // //   return (
// // // // // // // // //     <div className="min-h-screen bg-gray-50 font-sans w-full overflow-x-hidden">
// // // // // // // // //       {/* HEADER - Full Width with no side padding */}
// // // // // // // // //       <header className="bg-blue-900 text-white py-10 shadow-lg w-full text-center">
// // // // // // // // //         <div className="w-full">
// // // // // // // // //           <h1 className="text-4xl md:text-5xl font-black tracking-tighter uppercase">
// // // // // // // // //             Montessori TC Management System
// // // // // // // // //           </h1>
// // // // // // // // //           <p className="text-blue-300 mt-2 text-lg font-medium opacity-90">
// // // // // // // // //             Digital Record & Transfer Certificate Portal
// // // // // // // // //           </p>
// // // // // // // // //         </div>
// // // // // // // // //       </header>

// // // // // // // // //       {/* NAVIGATION TABS - Fluid width */}
// // // // // // // // //       <nav className="bg-white shadow-md sticky top-0 z-30 w-full border-b border-gray-100">
// // // // // // // // //         <div className="w-full flex justify-center space-x-1 md:space-x-4 py-4 px-2">
// // // // // // // // //           <button
// // // // // // // // //             onClick={() => setActiveTab('view')}
// // // // // // // // //             className={`px-4 md:px-10 py-3 rounded-xl font-black uppercase text-xs tracking-widest transition-all duration-200 ${
// // // // // // // // //               activeTab === 'view' 
// // // // // // // // //               ? 'bg-blue-800 text-white shadow-lg scale-105' 
// // // // // // // // //               : 'text-gray-400 hover:bg-blue-50 hover:text-blue-800'
// // // // // // // // //             }`}
// // // // // // // // //           >
// // // // // // // // //             Database Records
// // // // // // // // //           </button>
          
// // // // // // // // //           <button
// // // // // // // // //             onClick={() => setActiveTab('admission')}
// // // // // // // // //             className={`px-4 md:px-10 py-3 rounded-xl font-black uppercase text-xs tracking-widest transition-all duration-200 ${
// // // // // // // // //               activeTab === 'admission' 
// // // // // // // // //               ? 'bg-blue-800 text-white shadow-lg scale-105' 
// // // // // // // // //               : 'text-gray-400 hover:bg-blue-50 hover:text-blue-800'
// // // // // // // // //             }`}
// // // // // // // // //           >
// // // // // // // // //             New Admission
// // // // // // // // //           </button>

// // // // // // // // //           <button
// // // // // // // // //             onClick={() => setActiveTab('import')}
// // // // // // // // //             className={`px-4 md:px-10 py-3 rounded-xl font-black uppercase text-xs tracking-widest transition-all duration-200 ${
// // // // // // // // //               activeTab === 'import' 
// // // // // // // // //               ? 'bg-blue-800 text-white shadow-lg scale-105' 
// // // // // // // // //               : 'text-gray-400 hover:bg-blue-50 hover:text-blue-800'
// // // // // // // // //             }`}
// // // // // // // // //           >
// // // // // // // // //             Bulk Excel Import
// // // // // // // // //           </button>
// // // // // // // // //         </div>
// // // // // // // // //       </nav>

// // // // // // // // //       {/* MAIN CONTENT AREA - Removed max-width and horizontal padding */}
// // // // // // // // //       <main className="w-full min-h-screen">
// // // // // // // // //         <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
// // // // // // // // //           {activeTab === 'view' && (
// // // // // // // // //             <div className="w-full">
// // // // // // // // //                <StudentTable />
// // // // // // // // //             </div>
// // // // // // // // //           )}
          
// // // // // // // // //           {activeTab === 'admission' && (
// // // // // // // // //             <div className="w-full px-4 py-10">
// // // // // // // // //                <AdmissionForm />
// // // // // // // // //             </div>
// // // // // // // // //           )}
          
// // // // // // // // //           {activeTab === 'import' && (
// // // // // // // // //             <div className="w-full px-4 py-10">
// // // // // // // // //                <ExcelImport />
// // // // // // // // //             </div>
// // // // // // // // //           )}
// // // // // // // // //         </div>
// // // // // // // // //       </main>

// // // // // // // // //       {/* FOOTER */}
// // // // // // // // //       <footer className="py-12 bg-gray-100 text-center text-gray-500 text-xs font-bold uppercase tracking-[0.2em] border-t border-gray-200">
// // // // // // // // //         &copy; {new Date().getFullYear()} Montessori School Management Data Pipeline
// // // // // // // // //       </footer>
// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // }

// // // // // // // // // export default App;











// // // // // // // // import React, { useState } from 'react';
// // // // // // // // import AdmissionForm from './components/AdmissionForm';
// // // // // // // // import ExcelImport from './components/ExcelImport'; 
// // // // // // // // import StudentTable from './components/StudentTable';

// // // // // // // // function App() {
// // // // // // // //   const [activeTab, setActiveTab] = useState('view');

// // // // // // // //   return (
// // // // // // // //     <div className="min-h-screen bg-white font-sans w-full overflow-x-hidden">
// // // // // // // //       {/* HEADER - Sharp Full Width */}
// // // // // // // //       <header className="bg-blue-900 text-white py-12 w-full text-center shadow-xl">
// // // // // // // //         <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase">
// // // // // // // //           Montessori TC Management System
// // // // // // // //         </h1>
// // // // // // // //         <p className="text-blue-300 mt-3 text-xl font-bold tracking-widest opacity-80 uppercase">
// // // // // // // //           Digital Record & Transfer Certificate Portal
// // // // // // // //         </p>
// // // // // // // //       </header>

// // // // // // // //       {/* NAVIGATION - Sticky Full Width */}
// // // // // // // //       <nav className="bg-white shadow-md sticky top-0 z-30 w-full border-b border-gray-200">
// // // // // // // //         <div className="w-full flex justify-center space-x-2 md:space-x-6 py-6">
// // // // // // // //           {['view', 'admission', 'import'].map((tab) => (
// // // // // // // //             <button
// // // // // // // //               key={tab}
// // // // // // // //               onClick={() => setActiveTab(tab)}
// // // // // // // //               className={`px-6 md:px-12 py-3 rounded-xl font-black uppercase text-sm tracking-widest transition-all duration-300 ${
// // // // // // // //                 activeTab === tab 
// // // // // // // //                 ? 'bg-blue-800 text-white shadow-2xl scale-105' 
// // // // // // // //                 : 'text-gray-400 hover:bg-blue-50 hover:text-blue-900'
// // // // // // // //               }`}
// // // // // // // //             >
// // // // // // // //               {tab === 'view' ? 'Database Records' : tab === 'admission' ? 'New Admission' : 'Bulk Excel Import'}
// // // // // // // //             </button>
// // // // // // // //           ))}
// // // // // // // //         </div>
// // // // // // // //       </nav>

// // // // // // // //       {/* MAIN CONTENT AREA - Zero Margin/Padding for Table */}
// // // // // // // //       <main className="w-full">
// // // // // // // //         <div className="transition-all duration-500">
// // // // // // // //           {activeTab === 'view' && (
// // // // // // // //             <div className="w-full">
// // // // // // // //                <StudentTable />
// // // // // // // //             </div>
// // // // // // // //           )}
          
// // // // // // // //           {activeTab === 'admission' && (
// // // // // // // //             <div className="w-full px-4 md:px-20 py-10">
// // // // // // // //                <AdmissionForm />
// // // // // // // //             </div>
// // // // // // // //           )}
          
// // // // // // // //           {activeTab === 'import' && (
// // // // // // // //             <div className="w-full px-4 md:px-20 py-10">
// // // // // // // //                <ExcelImport />
// // // // // // // //             </div>
// // // // // // // //           )}
// // // // // // // //         </div>
// // // // // // // //       </main>

// // // // // // // //       {/* FOOTER */}
// // // // // // // //       <footer className="py-12 bg-gray-50 text-center text-gray-400 text-xs font-black uppercase tracking-[0.3em] border-t border-gray-200">
// // // // // // // //         &copy; {new Date().getFullYear()} Montessori School Management Data Pipeline
// // // // // // // //       </footer>
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // }

// // // // // // // // export default App;












// // // // // // // import React, { useState } from 'react';
// // // // // // // import AdmissionForm from './components/AdmissionForm';
// // // // // // // import ExcelImport from './components/ExcelImport'; 
// // // // // // // import StudentTable from './components/StudentTable';

// // // // // // // function App() {
// // // // // // //   const [activeTab, setActiveTab] = useState('view');

// // // // // // //   return (
// // // // // // //     <div className="min-h-screen bg-white font-sans w-full overflow-x-hidden p-0 m-0">
// // // // // // //       {/* HEADER - Sharp Full Width */}
// // // // // // //       <header className="bg-[#1e3a8a] text-white py-12 w-full text-center shadow-md">
// // // // // // //         <h1 className="text-5xl md:text-6xl font-black tracking-tighter uppercase">
// // // // // // //           Montessori TC Management System
// // // // // // //         </h1>
// // // // // // //         <p className="text-blue-200 mt-3 text-xl font-bold tracking-widest uppercase opacity-90">
// // // // // // //           Digital Record & Transfer Certificate Portal
// // // // // // //         </p>
// // // // // // //       </header>

// // // // // // //       {/* NAVIGATION - Sticky Full Width */}
// // // // // // //       <nav className="bg-white shadow-sm sticky top-0 z-30 w-full border-b border-gray-100">
// // // // // // //         <div className="w-full flex justify-center space-x-4 py-6 px-0">
// // // // // // //           {['view', 'admission', 'import'].map((tab) => (
// // // // // // //             <button
// // // // // // //               key={tab}
// // // // // // //               onClick={() => setActiveTab(tab)}
// // // // // // //               className={`px-10 py-3 rounded-full font-black uppercase text-xs tracking-[0.2em] transition-all duration-300 ${
// // // // // // //                 activeTab === tab 
// // // // // // //                 ? 'bg-blue-700 text-white shadow-xl' 
// // // // // // //                 : 'text-gray-400 hover:text-blue-800 hover:bg-blue-50'
// // // // // // //               }`}
// // // // // // //             >
// // // // // // //               {tab === 'view' ? 'Database Records' : tab === 'admission' ? 'New Admission' : 'Bulk Excel Import'}
// // // // // // //             </button>
// // // // // // //           ))}
// // // // // // //         </div>
// // // // // // //       </nav>

// // // // // // //       {/* MAIN CONTENT AREA - STRETCHED EDGE TO EDGE */}
// // // // // // //       <main className="w-full m-0 p-0">
// // // // // // //         <div className="w-full">
// // // // // // //           {activeTab === 'view' && <StudentTable />}
          
// // // // // // //           {/* Form and Import get slight padding only to keep inputs readable */}
// // // // // // //           {activeTab === 'admission' && (
// // // // // // //             <div className="w-full px-6 py-10 bg-gray-50">
// // // // // // //                <AdmissionForm />
// // // // // // //             </div>
// // // // // // //           )}
          
// // // // // // //           {activeTab === 'import' && (
// // // // // // //             <div className="w-full px-6 py-10 bg-gray-50">
// // // // // // //                <ExcelImport />
// // // // // // //             </div>
// // // // // // //           )}
// // // // // // //         </div>
// // // // // // //       </main>

// // // // // // //       {/* FOOTER */}
// // // // // // //       <footer className="py-10 bg-white text-center text-gray-300 text-[10px] font-black uppercase tracking-[0.5em] border-t border-gray-100">
// // // // // // //         &copy; {new Date().getFullYear()} Montessori School Management Data Pipeline
// // // // // // //       </footer>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // }

// // // // // // // export default App;












// // // // // // import React, { useState } from 'react';
// // // // // // import AdmissionForm from './components/AdmissionForm';
// // // // // // import ExcelImport from './components/ExcelImport'; 
// // // // // // import StudentTable from './components/StudentTable';

// // // // // // function App() {
// // // // // //   const [activeTab, setActiveTab] = useState('view');

// // // // // //   return (
// // // // // //     // 'min-w-full' and 'p-0' ensure we fill the browser window entirely
// // // // // //     <div className="min-h-screen bg-white w-full m-0 p-0 overflow-x-hidden">
      
// // // // // //       {/* HEADER - No Max Width */}
// // // // // //       <header className="bg-[#1e3a8a] text-white py-12 w-full text-center shadow-md m-0">
// // // // // //         <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase">
// // // // // //           Montessori TC Management System
// // // // // //         </h1>
// // // // // //         <p className="text-blue-200 mt-2 text-lg font-bold tracking-widest uppercase opacity-80">
// // // // // //           Digital Record & Transfer Certificate Portal
// // // // // //         </p>
// // // // // //       </header>

// // // // // //       {/* NAVIGATION - Sticky and Stretched */}
// // // // // //       <nav className="bg-white shadow-sm sticky top-0 z-30 w-full border-b border-gray-100 m-0">
// // // // // //         <div className="w-full flex justify-center space-x-2 md:space-x-6 py-6 px-0">
// // // // // //           {['view', 'admission', 'import'].map((tab) => (
// // // // // //             <button
// // // // // //               key={tab}
// // // // // //               onClick={() => setActiveTab(tab)}
// // // // // //               className={`px-6 md:px-12 py-3 rounded-full font-black uppercase text-[10px] md:text-xs tracking-[0.2em] transition-all duration-300 ${
// // // // // //                 activeTab === tab 
// // // // // //                 ? 'bg-blue-700 text-white shadow-xl scale-105' 
// // // // // //                 : 'text-gray-400 hover:text-blue-800 hover:bg-blue-50'
// // // // // //               }`}
// // // // // //             >
// // // // // //               {tab === 'view' ? 'Database Records' : tab === 'admission' ? 'New Admission' : 'Bulk Excel Import'}
// // // // // //             </button>
// // // // // //           ))}
// // // // // //         </div>
// // // // // //       </nav>

// // // // // //       {/* MAIN CONTENT - Removed all horizontal padding and max-widths */}
// // // // // //       <main className="w-full m-0 p-0 block">
// // // // // //           {activeTab === 'view' && (
// // // // // //             <section className="w-full m-0 p-0">
// // // // // //                <StudentTable />
// // // // // //             </section>
// // // // // //           )}
          
// // // // // //           {activeTab === 'admission' && (
// // // // // //             <section className="w-full px-4 md:px-20 py-10 bg-gray-50">
// // // // // //                <AdmissionForm />
// // // // // //             </section>
// // // // // //           )}
          
// // // // // //           {activeTab === 'import' && (
// // // // // //             <section className="w-full px-4 md:px-20 py-10 bg-gray-50">
// // // // // //                <ExcelImport />
// // // // // //             </section>
// // // // // //           )}
// // // // // //       </main>

// // // // // //       {/* FOOTER */}
// // // // // //       <footer className="py-10 bg-white text-center text-gray-300 text-[10px] font-black uppercase tracking-[0.5em] border-t border-gray-100 w-full">
// // // // // //         &copy; {new Date().getFullYear()} Montessori School Management Data Pipeline
// // // // // //       </footer>
// // // // // //     </div>
// // // // // //   );
// // // // // // }

// // // // // // export default App;









// // // // // import React, { useState } from 'react';
// // // // // import AdmissionForm from './components/AdmissionForm';
// // // // // import ExcelImport from './components/ExcelImport'; 
// // // // // import StudentTable from './components/StudentTable';

// // // // // function App() {
// // // // //   const [activeTab, setActiveTab] = useState('view');

// // // // //   return (
// // // // //     <div className="min-h-screen bg-white w-full m-0 p-0 overflow-x-hidden flex flex-col">
      
// // // // //       {/* HEADER - Reduced Height & Pure White Title */}
// // // // //       <header className="bg-[#1e3a8a] py-1 w-full text-center shadow-md m-0">
// // // // //         <h1 className="text-3xl md:text-5xl font-black tracking-tighter uppercase text-white">
// // // // //           Montessori TC Management System
// // // // //         </h1>
// // // // //         <p className="text-blue-200 mt-1 text-sm font-bold tracking-widest uppercase opacity-80">
// // // // //           Digital Record & Transfer Certificate Portal
// // // // //         </p>
// // // // //       </header>

// // // // //       {/* NAVIGATION - Sticky and Stretched */}
// // // // //       <nav className="bg-white shadow-sm sticky top-0 z-30 w-full border-b border-gray-100 m-0">
// // // // //         <div className="w-full flex justify-center space-x-2 md:space-x-6 py-4 px-0">
// // // // //           {['view', 'admission', 'import'].map((tab) => (
// // // // //             <button
// // // // //               key={tab}
// // // // //               onClick={() => setActiveTab(tab)}
// // // // //               className={`px-6 md:px-12 py-2.5 rounded-full font-black uppercase text-[10px] md:text-xs tracking-[0.2em] transition-all duration-300 ${
// // // // //                 activeTab === tab 
// // // // //                 ? 'bg-blue-700 text-white shadow-lg scale-105' 
// // // // //                 : 'text-gray-400 hover:text-blue-800 hover:bg-blue-50'
// // // // //               }`}
// // // // //             >
             
// // // // //               {tab === 'view' ? 'Database Records' : tab === 'admission' ? 'New Admission' : 'Bulk Excel Import'}
// // // // //             </button>
// // // // //           ))}
// // // // //         </div>
// // // // //       </nav>

// // // // //       {/* MAIN CONTENT - Full width integration */}
// // // // //       <main className="w-full flex-grow m-0 p-0 block">
// // // // //           {activeTab === 'view' && (
// // // // //             <section className="w-full m-0 p-0 animate-fadeIn">
// // // // //                <StudentTable />
// // // // //             </section>
// // // // //           )}
          
// // // // //           {activeTab === 'admission' && (
// // // // //             <section className="w-full px-4 md:px-20 py-10 bg-gray-50 animate-fadeIn">
// // // // //                <div className="max-w-7xl mx-auto">
// // // // //                   <AdmissionForm />
// // // // //                </div>
// // // // //             </section>
// // // // //           )}
          
// // // // //           {activeTab === 'import' && (
// // // // //             <section className="w-full px-4 md:px-20 py-10 bg-gray-50 animate-fadeIn">
// // // // //                <div className="max-w-7xl mx-auto">
// // // // //                   <ExcelImport />
// // // // //                </div>
// // // // //             </section>
// // // // //           )}
// // // // //       </main>

// // // // //       {/* FOOTER */}
// // // // //       <footer className="py-8 bg-white text-center text-gray-300 text-[10px] font-black uppercase tracking-[0.5em] border-t border-gray-100 w-full">
// // // // //         &copy; {new Date().getFullYear()} Montessori School Management Data Pipeline
// // // // //       </footer>
// // // // //     </div>
// // // // //   );
// // // // // }

// // // // // export default App;






// // // // // 15-05-2026





// // // // // import React, { useState } from 'react';
// // // // // import AdmissionForm from './components/AdmissionForm';
// // // // // import ExcelImport from './components/ExcelImport'; 
// // // // // import StudentTable from './components/StudentTable';

// // // // // function App() {
// // // // //   // Set default tab to 'admission' as requested
// // // // //   const [activeTab, setActiveTab] = useState('admission');

// // // // //   return (
// // // // //     <div className="min-h-screen bg-white w-full m-0 p-0 overflow-x-hidden flex flex-col">
      
// // // // //       {/* HEADER */}
// // // // //       <header className="bg-[#1e3a8a] py-4 w-full text-center shadow-md m-0">
// // // // //         <h1 className="text-3xl md:text-5xl font-black tracking-tighter uppercase text-white">
// // // // //           Montessori TC Management System
// // // // //         </h1>
// // // // //         <p className="text-blue-200 mt-1 text-sm font-bold tracking-widest uppercase opacity-80">
// // // // //           Digital Record & Transfer Certificate Portal
// // // // //         </p>
// // // // //       </header>

// // // // //       {/* NAVIGATION - Order: Admission -> Database -> Import */}
// // // // //       <nav className="bg-white shadow-sm sticky top-0 z-30 w-full border-b border-gray-100 m-0">
// // // // //         <div className="w-full flex justify-center space-x-2 md:space-x-6 py-4 px-0">
// // // // //           {[
// // // // //             { id: 'admission', label: 'New Admission' },
// // // // //             { id: 'view', label: 'Database Records' },
// // // // //             { id: 'import', label: 'Bulk Excel Import' }
// // // // //           ].map((tab) => (
// // // // //             <button
// // // // //               key={tab.id}
// // // // //               onClick={() => setActiveTab(tab.id)}
// // // // //               className={`px-6 md:px-12 py-2.5 rounded-full font-black uppercase text-[10px] md:text-xs tracking-[0.2em] transition-all duration-300 ${
// // // // //                 activeTab === tab.id 
// // // // //                 ? 'bg-blue-700 text-white shadow-lg scale-105' 
// // // // //                 : 'text-gray-400 hover:text-blue-800 hover:bg-blue-50'
// // // // //               }`}
// // // // //             >
// // // // //               {tab.label}
// // // // //             </button>
// // // // //           ))}
// // // // //         </div>
// // // // //       </nav>

// // // // //       {/* MAIN CONTENT - Spacing sorted to remove gaps */}
// // // // //       <main className="w-full flex-grow m-0 p-0 bg-gray-50">
          
// // // // //           {/* NEW ADMISSION - First Tab */}
// // // // //           {activeTab === 'admission' && (
// // // // //             <section className="w-full px-4 md:px-20 py-6 animate-fadeIn">
// // // // //                <div className="max-w-7xl mx-auto">
// // // // //                   <AdmissionForm />
// // // // //                </div>
// // // // //             </section>
// // // // //           )}

// // // // //           {/* DATABASE RECORDS - Second Tab */}
// // // // //           {activeTab === 'view' && (
// // // // //             <section className="w-full m-0 p-0 animate-fadeIn bg-white">
// // // // //                 <StudentTable />
// // // // //             </section>
// // // // //           )}
          
// // // // //           {/* BULK IMPORT - Third Tab */}
// // // // //           {activeTab === 'import' && (
// // // // //             <section className="w-full px-4 md:px-20 py-10 animate-fadeIn">
// // // // //                <div className="max-w-7xl mx-auto">
// // // // //                   <ExcelImport />
// // // // //                </div>
// // // // //             </section>
// // // // //           )}
// // // // //       </main>

// // // // //       {/* FOOTER */}
// // // // //       <footer className="py-8 bg-white text-center text-gray-300 text-[10px] font-black uppercase tracking-[0.5em] border-t border-gray-100 w-full">
// // // // //         &copy; {new Date().getFullYear()} Montessori School Management Data Pipeline
// // // // //       </footer>
// // // // //     </div>
// // // // //   );
// // // // // }

// // // // // export default App;










// // // // // 18-05-2026











// // // // import React, { useState } from 'react';
// // // // import AdmissionForm from './components/AdmissionForm';
// // // // import ExcelImport from './components/ExcelImport';
// // // // import StudentTable from './components/StudentTable';
// // // // import GeneratedTCList from './components/GeneratedTCList';

// // // // function App() {
// // // //   const [activeTab, setActiveTab] = useState('admission');

// // // //   return (
// // // //     <div className="min-h-screen bg-white w-full m-0 p-0 overflow-x-hidden flex flex-col">

// // // //       <header className="bg-[#1e3a8a] py-4 w-full text-center shadow-md m-0">
// // // //         <h1 className="text-3xl md:text-5xl font-black tracking-tighter uppercase text-white">
// // // //           Montessori TC Management System
// // // //         </h1>
// // // //         <p className="text-blue-200 mt-1 text-sm font-bold tracking-widest uppercase opacity-80">
// // // //           Digital Record & Transfer Certificate Portal
// // // //         </p>
// // // //       </header>

// // // //       <nav className="bg-white shadow-sm sticky top-0 z-30 w-full border-b border-gray-100 m-0">
// // // //         <div className="w-full flex justify-center space-x-2 md:space-x-6 py-4 px-0">
// // // //           {[
// // // //             { id: 'admission', label: 'New Admission' },
// // // //             { id: 'view', label: 'Database Records' },
// // // //             { id: 'generatedTC', label: 'Generated TC Records' },
// // // //             { id: 'import', label: 'Bulk Excel Import' }
// // // //           ].map((tab) => (
// // // //             <button
// // // //               key={tab.id}
// // // //               onClick={() => setActiveTab(tab.id)}
// // // //               className={`px-6 md:px-12 py-2.5 rounded-full font-black uppercase text-[10px] md:text-xs tracking-[0.2em] transition-all duration-300 ${
// // // //                 activeTab === tab.id
// // // //                   ? 'bg-blue-700 text-white shadow-lg scale-105'
// // // //                   : 'text-gray-400 hover:text-blue-800 hover:bg-blue-50'
// // // //               }`}
// // // //             >
// // // //               {tab.label}
// // // //             </button>
// // // //           ))}
// // // //         </div>
// // // //       </nav>

// // // //       <main className="w-full flex-grow m-0 p-0 bg-gray-50">

// // // //         {activeTab === 'admission' && (
// // // //           <section className="w-full px-4 md:px-20 py-6 animate-fadeIn">
// // // //             <div className="max-w-7xl mx-auto">
// // // //               <AdmissionForm />
// // // //             </div>
// // // //           </section>
// // // //         )}

// // // //         {activeTab === 'view' && (
// // // //           <section className="w-full m-0 p-0 animate-fadeIn bg-white">
// // // //             <StudentTable />
// // // //           </section>
// // // //         )}

// // // //         {activeTab === 'generatedTC' && (
// // // //           <section className="w-full m-0 p-0 animate-fadeIn bg-white">
// // // //             <GeneratedTCList />
// // // //           </section>
// // // //         )}

// // // //         {activeTab === 'import' && (
// // // //           <section className="w-full px-4 md:px-20 py-10 animate-fadeIn">
// // // //             <div className="max-w-7xl mx-auto">
// // // //               <ExcelImport />
// // // //             </div>
// // // //           </section>
// // // //         )}

// // // //       </main>

// // // //       <footer className="py-8 bg-white text-center text-gray-300 text-[10px] font-black uppercase tracking-[0.5em] border-t border-gray-100 w-full">
// // // //         &copy; {new Date().getFullYear()} Montessori School Management Data Pipeline
// // // //       </footer>
// // // //     </div>
// // // //   );
// // // // }

// // // // export default App;






// // // import React, { useState } from 'react';
// // // import AdmissionForm from './components/AdmissionForm';
// // // import ExcelImport from './components/ExcelImport';
// // // import StudentTable from './components/StudentTable';
// // // import GeneratedTCList from './components/GeneratedTCList';

// // // function App() {
// // //   const [activeTab, setActiveTab] = useState('admission');

// // //   return (
// // //     <div className="min-h-screen bg-white w-full m-0 p-0 overflow-x-hidden flex flex-col antialiased">

// // //       {/* HEADER BAR */}
// // //       <header className="bg-[#1e3a8a] py-4 w-full text-center shadow-md m-0">
// // //         <h1 className="text-3xl md:text-5xl font-black tracking-tighter uppercase text-white m-0">
// // //           Montessori TC Management System
// // //         </h1>
// // //         <p className="text-blue-200 mt-1 text-sm font-bold tracking-widest uppercase opacity-80 m-0">
// // //           Digital Record & Transfer Certificate Portal
// // //         </p>
// // //       </header>

// // //       {/* STICKY NAVIGATION BAR */}
// // //       <nav className="bg-white shadow-sm sticky top-0 z-30 w-full border-b border-gray-100 m-0 p-0">
// // //         <div className="w-full flex justify-center space-x-2 md:space-x-6 py-4 px-0 m-0">
// // //           {[
// // //             { id: 'admission', label: 'New Admission' },
// // //             { id: 'view', label: 'Database Records' },
// // //             { id: 'generatedTC', label: 'Generated TC Records' },
// // //             { id: 'import', label: 'Bulk Excel Import' }
// // //           ].map((tab) => (
// // //             <button
// // //               key={tab.id}
// // //               onClick={() => setActiveTab(tab.id)}
// // //               className={`px-6 md:px-12 py-2.5 rounded-full font-black uppercase text-[10px] md:text-xs tracking-[0.2em] transition-all duration-300 ${
// // //                 activeTab === tab.id
// // //                   ? 'bg-blue-700 text-white shadow-lg scale-105'
// // //                   : 'text-gray-400 hover:text-blue-800 hover:bg-blue-50'
// // //               }`}
// // //             >
// // //               {tab.label}
// // //             </button>
// // //           ))}
// // //         </div>
// // //       </nav>

// // //       {/* DASHBOARD WORKSPACE - REMOVED ALL SPACER MARGINS/PADDINGS */}
// // //       <main className="w-full flex-grow m-0 p-0 bg-gray-50 flex flex-col">

// // //         {activeTab === 'admission' && (
// // //           <section className="w-full m-0 p-0 animate-fadeIn flex-grow">
// // //             <AdmissionForm />
// // //           </section>
// // //         )}

// // //         {activeTab === 'view' && (
// // //           <section className="w-full m-0 p-0 animate-fadeIn bg-white flex-grow">
// // //             <StudentTable />
// // //           </section>
// // //         )}

// // //         {activeTab === 'generatedTC' && (
// // //           <section className="w-full m-0 p-0 animate-fadeIn bg-white flex-grow">
// // //             <GeneratedTCList />
// // //           </section>
// // //         )}

// // //         {activeTab === 'import' && (
// // //           <section className="w-full m-0 p-0 animate-fadeIn flex-grow">
// // //             <ExcelImport />
// // //           </section>
// // //         )}

// // //       </main>

// // //       {/* FOOTER BAR */}
// // //       <footer className="py-8 bg-white text-center text-gray-300 text-[10px] font-black uppercase tracking-[0.5em] border-t border-gray-100 w-full m-0">
// // //         &copy; {new Date().getFullYear()} Montessori School Management Data Pipeline
// // //       </footer>
// // //     </div>
// // //   );
// // // }

// // // export default App;






// // import React, { useState } from 'react';
// // import AdmissionForm from './components/AdmissionForm';
// // import ExcelImport from './components/ExcelImport';
// // import StudentTable from './components/StudentTable';
// // import GeneratedTCList from './components/GeneratedTCList';

// // function App() {
// //   const [activeTab, setActiveTab] = useState('admission');

// //   return (
// //     <div className="min-h-screen bg-white w-full m-0 p-0 overflow-x-hidden flex flex-col antialiased">

// //       {/* HEADER BAR */}
// //       <header className="bg-[#1e3a8a] py-6 w-full text-center shadow-md m-0 border-b border-blue-900/50">
// //         <h1 className="text-3xl md:text-5xl font-black tracking-tighter uppercase text-white m-0 leading-tight">
// //           Montessori TC Management System
// //         </h1>
// //         <p className="text-blue-200 mt-2 text-xs md:text-sm font-bold tracking-widest uppercase opacity-90 m-0">
// //           Digital Record & Transfer Certificate Portal
// //         </p>
// //       </header>

// //       {/* STICKY NAVIGATION BAR */}
// //       <nav className="bg-white shadow-sm sticky top-0 z-30 w-full border-b border-gray-100 m-0 p-0">
// //         <div className="w-full flex justify-center flex-wrap gap-2 md:gap-6 py-4 px-4 m-0">
// //           {[
// //             { id: 'admission', label: 'New Admission' },
// //             { id: 'view', label: 'Database Records' },
// //             { id: 'generatedTC', label: 'Generated TC Records' },
// //             { id: 'import', label: 'Bulk Excel Import' }
// //           ].map((tab) => (
// //             <button
// //               key={tab.id}
// //               onClick={() => setActiveTab(tab.id)}
// //               className={`px-5 md:px-10 py-2.5 rounded-full font-black uppercase text-[10px] md:text-xs tracking-[0.2em] transition-all duration-300 ${
// //                 activeTab === tab.id
// //                   ? 'bg-blue-700 text-white shadow-lg scale-105'
// //                   : 'text-gray-400 hover:text-blue-800 hover:bg-blue-50'
// //               }`}
// //             >
// //               {tab.label}
// //             </button>
// //           ))}
// //         </div>
// //       </nav>

// //       {/* DASHBOARD WORKSPACE */}
// //       <main className="w-full flex-grow m-0 p-0 bg-gray-50 flex flex-col">

// //         {activeTab === 'admission' && (
// //           <section className="w-full m-0 p-0 flex-grow">
// //             <AdmissionForm />
// //           </section>
// //         )}

// //         {activeTab === 'view' && (
// //           <section className="w-full m-0 p-0 bg-white flex-grow">
// //             <StudentTable />
// //           </section>
// //         )}

// //         {activeTab === 'generatedTC' && (
// //           <section className="w-full m-0 p-0 bg-white flex-grow">
// //             <GeneratedTCList />
// //           </section>
// //         )}

// //         {activeTab === 'import' && (
// //           <section className="w-full m-0 p-0 flex-grow">
// //             <ExcelImport />
// //           </section>
// //         )}

// //       </main>

// //       {/* FOOTER BAR */}
// //       <footer className="py-8 bg-white text-center text-gray-300 text-[10px] font-black uppercase tracking-[0.5em] border-t border-gray-100 w-full m-0">
// //         &copy; {new Date().getFullYear()} Montessori School Management Data Pipeline
// //       </footer>
// //     </div>
// //   );
// // }

// // export default App;





// import React, { useState } from 'react';
// import AdmissionForm from './components/AdmissionForm';
// import ExcelImport from './components/ExcelImport';
// import StudentTable from './components/StudentTable';
// import GeneratedTCList from './components/GeneratedTCList';
// import { GraduationCap, Database, FileSpreadsheet, Layers } from 'lucide-react';

// function App() {
//   const [activeTab, setActiveTab] = useState('admission');

//   const navigationTabs = [
//     { id: 'admission', label: 'New Admission', icon: <GraduationCap size={18} /> },
//     { id: 'view', label: 'Database Records', icon: <Database size={18} /> },
//     { id: 'generatedTC', label: 'Generated TC Records', icon: <Layers size={18} /> },
//     { id: 'import', label: 'Bulk Excel Import', icon: <FileSpreadsheet size={18} /> }
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50 w-full m-0 p-0 overflow-x-hidden flex antialiased">
      
//       {/* --- SIDEBAR NAVIGATION --- */}
//       <aside className="w-80 bg-white border-r border-gray-200 flex flex-col shrink-0 min-h-screen sticky top-0 hidden md:flex">
        
//         {/* BRAND LOGO AREA */}
//         <div className="bg-[#1e3a8a] p-6 text-left border-b border-blue-900/50">
//           <h1 className="text-xl font-black tracking-tight uppercase text-white m-0 leading-tight">
//             Montessori TC
//           </h1>
//                   </div>

//         {/* SIDEBAR NAVIGATION LINKS */}
//         <nav className="flex-grow p-4 space-y-2 mt-4">
//           {navigationTabs.map((tab) => {
//             const isActive = activeTab === tab.id;
//             return (
//               <button
//                 key={tab.id}
//                 onClick={() => setActiveTab(tab.id)}
//                 className={`w-full flex items-center gap-4 px-5 py-3.5 rounded-xl font-black uppercase text-[11px] tracking-wider text-left transition-all duration-200 ${
//                   isActive
//                     ? 'bg-blue-700 text-white shadow-md translate-x-1'
//                     : 'text-gray-400 hover:text-blue-800 hover:bg-blue-50/60'
//                 }`}
//               >
//                 <span className={isActive ? 'text-white' : 'text-gray-400 group-hover:text-blue-800'}>
//                   {tab.icon}
//                 </span>
//                 {tab.label}
//               </button>
//             );
//           })}
//         </nav>

//         {/* SIDEBAR FOOTER */}
//         <div className="p-4 border-t border-gray-100">
//           <p className="text-[9px] font-black uppercase tracking-widest text-gray-300 text-center m-0 leading-relaxed">
//             &copy; {new Date().getFullYear()}<br />
//             Montessori Data Pipeline
//           </p>
//         </div>
//       </aside>

//       {/* --- MAIN APP INTERFACE CONTAINER --- */}
//       <div className="flex-grow flex flex-col min-w-0 min-h-screen">
        
//         {/* MOBILE VIEW COMPACT HEADER LAYOUT */}
//         <header className="bg-[#1e3a8a] py-4 px-4 text-center shadow-sm block md:hidden w-full">
//           <h1 className="text-xl font-black uppercase text-white m-0 tracking-tight">
//             Montessori TC System
//           </h1>
          
//           {/* MOBILE NAV BUTTONS */}
//           <div className="flex justify-center flex-wrap gap-1 mt-3">
//             {navigationTabs.map((tab) => (
//               <button
//                 key={tab.id}
//                 onClick={() => setActiveTab(tab.id)}
//                 className={`px-3 py-1.5 rounded-full font-black uppercase text-[9px] tracking-wider transition-all ${
//                   activeTab === tab.id
//                     ? 'bg-white text-blue-900 shadow-sm'
//                     : 'text-blue-200 hover:bg-blue-800'
//                 }`}
//               >
//                 {tab.label.replace('Records', '').replace('Bulk', '')}
//               </button>
//             ))}
//           </div>
//         </header>

//         {/* DASHBOARD WORKSPACE ACTIVE RENDER CONTAINER */}
//         <main className="w-full flex-grow m-0 p-0 flex flex-col">
//           {activeTab === 'admission' && (
//             <section className="w-full m-0 p-0 flex-grow">
//               <AdmissionForm />
//             </section>
//           )}

//           {activeTab === 'view' && (
//             <section className="w-full m-0 p-0 bg-white flex-grow">
//               <StudentTable />
//             </section>
//           )}

//           {activeTab === 'generatedTC' && (
//             <section className="w-full m-0 p-0 bg-white flex-grow">
//               <GeneratedTCList />
//             </section>
//           )}

//           {activeTab === 'import' && (
//             <section className="w-full m-0 p-0 flex-grow">
//               <ExcelImport />
//             </section>
//           )}
//         </main>
//       </div>
//     </div>
//   );
// }

// export default App;










// 21-20-2026





import React, { useState } from 'react';
import AdmissionForm from './components/AdmissionForm';
import ExcelImport from './components/ExcelImport';
import StudentTable from './components/StudentTable';
import GeneratedTCList from './components/GeneratedTCList';
import { GraduationCap, Database, FileSpreadsheet, Layers } from 'lucide-react';
import logo from './assets/logoonly.png';
import LoginPage from "./components/LoginPage";

function App() {
 const [isLoggedIn, setIsLoggedIn] = useState(
  !!localStorage.getItem("token")
);
  const [activeTab, setActiveTab] = useState('admission');

  const navigationTabs = [
    { id: 'admission', label: 'New Admission', icon: <GraduationCap size={18} /> },
    { id: 'view', label: 'Database Records', icon: <Database size={18} /> },
    { id: 'generatedTC', label: 'Generated TC Records', icon: <Layers size={18} /> },
    { id: 'import', label: 'Bulk Excel Import', icon: <FileSpreadsheet size={18} /> }
  ];
if (!isLoggedIn) {
  return <LoginPage onLogin={() => setIsLoggedIn(true)} />;
}
  return (
    <div className="h-screen w-screen bg-gray-50 m-0 p-0 overflow-hidden flex antialiased">
      
      {/* --- FIXED SIDEBAR NAVIGATION --- */}
      <aside className="w-80 bg-white border-r border-gray-200 flex flex-col shrink-0 h-full hidden md:flex">
        
        {/* BRAND LOGO AREA */}
        <div className="bg-blue-900 border-b border-blue-900/50 px-6 py-8 flex flex-col items-center justify-center">

  {/* LOGO */}
  <img
      src={logo}
      alt="Montessori Logo"
      className="h-26 w-50 object-contain"
    />
 

  {/* TITLE */}
  <h1 className="text-2xl font-black tracking-tight uppercase text-white text-center leading-tight">
    Montessori 
  </h1>

  {/* SUBTITLE */}
  <p className="text-blue-200 text-[10px] uppercase tracking-[0.25em] mt-2 font-bold">
     Data Management System
  </p>
</div>

        {/* SIDEBAR NAVIGATION LINKS */}
        <nav className="flex-grow p-4 space-y-2 mt-4 overflow-y-auto ">
          {navigationTabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center gap-4 px-5 py-3.5 rounded-xl font-black uppercase text-[11px] tracking-wider text-left transition-all duration-200 ${
                  isActive
                    ? 'bg-blue-900 text-white shadow-md translate-x-1'
                    : 'text-gray-400 hover:text-slate-900 hover:bg-blue-50/60'
                }`}
              >
                <span className={isActive ? 'text-white' : 'text-gray-400 group-hover:text-blue-800'}>
                  {tab.icon}
                </span>
                {tab.label}
              </button>
            );
          })}
        </nav>

        {/* SIDEBAR FOOTER */}
       {/* SIDEBAR FOOTER */}
<div className="p-4 border-t border-gray-100">

  

  {/* LOGOUT BUTTON */}
  <button
    onClick={() => {
      localStorage.removeItem("token");
      setIsLoggedIn(false);
    }}
    className="w-full mt-4 bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg text-xs font-black uppercase tracking-wider"
  >
    Logout
  </button>

</div>
      </aside>

      {/* --- MAIN APP INTERFACE CONTAINER --- */}
      <div className="flex-grow flex flex-col min-w-0 h-full overflow-hidden">
        
        {/* MOBILE VIEW COMPACT HEADER LAYOUT */}
        <header className="bg-[#1e3a8a] py-4 px-4 text-center shadow-sm block md:hidden w-full shrink-0">
          <h1 className="text-xl font-black uppercase text-white m-0 tracking-tight">
            Montessori TC System
          </h1>
          
          {/* MOBILE NAV BUTTONS */}
          <div className="flex justify-center flex-wrap gap-1 mt-3">
            {navigationTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3 py-1.5 rounded-full font-black uppercase text-[9px] tracking-wider transition-all ${
                  activeTab === tab.id
                    ? 'bg-white text-blue-900 shadow-sm'
                    : 'text-blue-200 hover:bg-blue-800'
                }`}
              >
                {tab.label.replace('Records', '').replace('Bulk', '')}
              </button>
            ))}
          </div>
        </header>

        {/* DASHBOARD WORKSPACE ACTIVE RENDER CONTAINER */}
        <main className="w-full flex-grow m-0 p-0 flex flex-col overflow-y-auto">
          {activeTab === 'admission' && (
            <section className="w-full m-0 p-0 flex-grow">
              <AdmissionForm />
            </section>
          )}

          {activeTab === 'view' && (
            <section className="w-full m-0 p-0 bg-white flex-grow">
              <StudentTable />
            </section>
          )}

          {activeTab === 'generatedTC' && (
            <section className="w-full m-0 p-0 bg-white flex-grow">
              <GeneratedTCList />
            </section>
          )}

          {activeTab === 'import' && (
            <section className="w-full m-0 p-0 flex-grow">
              <ExcelImport />
            </section>
          )}
        </main>
      </div>
    </div>
  );
}

export default App;