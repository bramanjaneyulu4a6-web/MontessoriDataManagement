// // // // ================================
// // // // FILE: client/src/pages/LoginPage.jsx
// // // // ================================

// // // import React, { useState } from "react";
// // // import axios from "axios";
// // // import {
// // //   Lock,
// // //   Mail,
// // //   User,
// // //   Eye,
// // //   EyeOff,
// // //   GraduationCap
// // // } from "lucide-react";

// // // import bgImage from "../assets/login-bg.jpeg";

// // // const LoginPage = () => {
// // //   const [activeTab, setActiveTab] = useState("login");

// // //   const [showPassword, setShowPassword] = useState(false);

// // //   const [formData, setFormData] = useState({
// // //     name: "",
// // //     email: "",
// // //     password: ""
// // //   });

// // //   const handleChange = (e) => {
// // //     setFormData((prev) => ({
// // //       ...prev,
// // //       [e.target.name]: e.target.value
// // //     }));
// // //   };

// // //   const handleSubmit = async () => {
// // //     try {
// // //       let endpoint = "";

// // //       if (activeTab === "login") {
// // //         endpoint = "http://localhost:5000/api/auth/login";
// // //       }

// // //       if (activeTab === "register") {
// // //         endpoint = "http://localhost:5000/api/auth/register";
// // //       }

// // //       if (activeTab === "forgot") {
// // //         endpoint = "http://localhost:5000/api/auth/forgot-password";
// // //       }

// // //       const response = await axios.post(endpoint, formData);

// // //       alert(response.data.message);

// // //       // SAVE TOKEN
// // //       if (response.data.token) {
// // //         localStorage.setItem("token", response.data.token);
// // //       }

// // //     } catch (error) {
// // //       alert(error.response?.data?.message || "Something went wrong");
// // //     }
// // //   };

// // //   return (
// // //     <div
// // //       className="min-h-screen w-full bg-cover bg-center flex items-center justify-center p-6"
// // //       style={{
// // //         backgroundImage: `url(${bgImage})`
// // //       }}
// // //     >
// // //       {/* DARK OVERLAY */}
// // //       <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

// // //       {/* CARD */}
// // //       <div className="relative z-10 w-full max-w-md bg-white/95 backdrop-blur-xl rounded-[2rem] shadow-2xl border border-white/30 overflow-hidden">

// // //         {/* HEADER */}
// // //         <div className="bg-blue-700 px-8 py-10 text-center">

// // //           <div className="h-20 w-20 rounded-3xl bg-white/10 mx-auto flex items-center justify-center border border-white/20 shadow-lg mb-4">
// // //             <GraduationCap className="text-white" size={42} />
// // //           </div>

// // //           <h1 className="text-3xl font-black uppercase text-white tracking-tight">
// // //             Montessori TC
// // //           </h1>

// // //           <p className="text-blue-100 uppercase text-xs tracking-[0.3em] mt-2 font-bold">
// // //             Management System
// // //           </p>
// // //         </div>

// // //         {/* TABS */}
// // //         <div className="flex border-b border-gray-100">

// // //           {["login", "register", "forgot"].map((tab) => (
// // //             <button
// // //               key={tab}
// // //               onClick={() => setActiveTab(tab)}
// // //               className={`flex-1 py-4 text-xs uppercase font-black tracking-widest transition-all ${
// // //                 activeTab === tab
// // //                   ? "bg-blue-50 text-blue-700"
// // //                   : "text-gray-400 hover:bg-gray-50"
// // //               }`}
// // //             >
// // //               {tab === "forgot" ? "Forgot Password" : tab}
// // //             </button>
// // //           ))}
// // //         </div>

// // //         {/* FORM */}
// // //         <div className="p-8 space-y-5">

// // //           {/* NAME */}
// // //           {activeTab === "register" && (
// // //             <div>
// // //               <label className="text-xs uppercase font-black text-gray-400 tracking-widest mb-2 block">
// // //                 Full Name
// // //               </label>

// // //               <div className="relative">
// // //                 <User
// // //                   className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
// // //                   size={18}
// // //                 />

// // //                 <input
// // //                   type="text"
// // //                   name="name"
// // //                   value={formData.name}
// // //                   onChange={handleChange}
// // //                   placeholder="Enter full name"
// // //                   className="w-full pl-12 pr-4 py-4 rounded-2xl bg-gray-100 border-none outline-none focus:ring-2 focus:ring-blue-500 text-sm font-medium"
// // //                 />
// // //               </div>
// // //             </div>
// // //           )}

// // //           {/* EMAIL */}
// // //           <div>
// // //             <label className="text-xs uppercase font-black text-gray-400 tracking-widest mb-2 block">
// // //               Email Address
// // //             </label>

// // //             <div className="relative">
// // //               <Mail
// // //                 className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
// // //                 size={18}
// // //               />

// // //               <input
// // //                 type="email"
// // //                 name="email"
// // //                 value={formData.email}
// // //                 onChange={handleChange}
// // //                 placeholder="Enter email"
// // //                 className="w-full pl-12 pr-4 py-4 rounded-2xl bg-gray-100 border-none outline-none focus:ring-2 focus:ring-blue-500 text-sm font-medium"
// // //               />
// // //             </div>
// // //           </div>

// // //           {/* PASSWORD */}
// // //           {activeTab !== "forgot" && (
// // //             <div>
// // //               <label className="text-xs uppercase font-black text-gray-400 tracking-widest mb-2 block">
// // //                 Password
// // //               </label>

// // //               <div className="relative">
// // //                 <Lock
// // //                   className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
// // //                   size={18}
// // //                 />

// // //                 <input
// // //                   type={showPassword ? "text" : "password"}
// // //                   name="password"
// // //                   value={formData.password}
// // //                   onChange={handleChange}
// // //                   placeholder="Enter password"
// // //                   className="w-full pl-12 pr-12 py-4 rounded-2xl bg-gray-100 border-none outline-none focus:ring-2 focus:ring-blue-500 text-sm font-medium"
// // //                 />

// // //                 <button
// // //                   type="button"
// // //                   onClick={() => setShowPassword(!showPassword)}
// // //                   className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
// // //                 >
// // //                   {showPassword ? (
// // //                     <EyeOff size={18} />
// // //                   ) : (
// // //                     <Eye size={18} />
// // //                   )}
// // //                 </button>
// // //               </div>
// // //             </div>
// // //           )}

// // //           {/* BUTTON */}
// // //           <button
// // //             onClick={handleSubmit}
// // //             className="w-full bg-blue-700 hover:bg-blue-800 text-white py-4 rounded-2xl uppercase tracking-widest font-black text-sm shadow-lg transition-all"
// // //           >
// // //             {activeTab === "login"
// // //               ? "Login"
// // //               : activeTab === "register"
// // //               ? "Create Account"
// // //               : "Reset Password"}
// // //           </button>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default LoginPage;











// // import React, { useState } from "react";
// // import axios from "axios";
// // import {
// //   Lock,
// //   Mail,
// //   User,
// //   Eye,
// //  EyeOff,
// //   GraduationCap
// // } from "lucide-react";

// // import bgImage from "../assets/login-bg.jpeg";

// // const LoginPage = () => {
// //   const [activeTab, setActiveTab] = useState("login");

// //   const [showPassword, setShowPassword] = useState(false);

// //   const [formData, setFormData] = useState({
// //     name: "",
// //     email: "",
// //     password: ""
// //   });

// //   const handleChange = (e) => {
// //     setFormData((prev) => ({
// //       ...prev,
// //       [e.target.name]: e.target.value
// //     }));
// //   };

// //   const handleSubmit = async () => {
// //     try {
// //       let endpoint = "";

// //       if (activeTab === "login") {
// //         endpoint = "http://localhost:5000/api/auth/login";
// //       }

// //       if (activeTab === "register") {
// //         endpoint = "http://localhost:5000/api/auth/register";
// //       }

// //       if (activeTab === "forgot") {
// //         endpoint = "http://localhost:5000/api/auth/forgot-password";
// //       }

// //       const response = await axios.post(endpoint, formData);

// //       alert(response.data.message);

// //       if (response.data.token) {
// //         localStorage.setItem("token", response.data.token);
// //       }

// //     } catch (error) {
// //       alert(error.response?.data?.message || "Something went wrong");
// //     }
// //   };

// //   return (
// //     <div
// //       className="h-screen w-screen overflow-hidden relative flex items-center justify-end"
// //       style={{
// //         backgroundImage: `url(${bgImage})`,
// //         backgroundSize: "cover",
// //         backgroundPosition: "center"
// //       }}
// //     >
// //       {/* DARK OVERLAY */}
// //       <div className="absolute inset-0 bg-black/70 backdrop-blur-md"></div>

// //       {/* LEFT CONTENT */}
// //       <div className="hidden lg:flex relative z-10 flex-1 h-full items-center px-20">
// //         <div className="max-w-xl text-white">

// //           <div className="flex items-center gap-5 mb-8">
// //             <div className="h-24 w-24 rounded-3xl bg-blue-600/20 border border-white/20 flex items-center justify-center backdrop-blur-xl shadow-2xl">
// //               <GraduationCap size={48} />
// //             </div>

// //             <div>
// //               <h1 className="text-6xl font-black leading-tight">
// //                 Montessori TC
// //               </h1>

// //               <p className="uppercase tracking-[0.4em] text-blue-200 text-sm mt-3 font-bold">
// //                 Digital Management System
// //               </p>
// //             </div>
// //           </div>

// //           <p className="text-white/70 text-lg leading-relaxed">
// //             Smart Transfer Certificate Management Platform
// //             for schools with student records, document tracking,
// //             certificate generation and secure access control.
// //           </p>
// //         </div>
// //       </div>

// //       {/* RIGHT LOGIN CARD */}
// //       {/* RIGHT SIDE FULL PANEL */}
// // <div className="relative z-10 w-full lg:w-[35%] h-screen">

// //   <div className="bg-white/96 backdrop-blur-2xl h-full overflow-y-auto shadow-2xl border-l border-white/20 flex flex-col justify-center px-10 lg:px-16">
// //           {/* TOP HEADER */}
// //           <div className="bg-blue-700 px-10 py-10 text-center">

// //             <div className="h-20 w-20 rounded-3xl bg-white/10 mx-auto flex items-center justify-center border border-white/20 shadow-lg mb-5">
// //               <GraduationCap className="text-white" size={42} />
// //             </div>

// //             <h1 className="text-3xl font-black uppercase text-white">
// //               Montessori TC
// //             </h1>

// //             <p className="text-blue-100 uppercase text-xs tracking-[0.35em] mt-3 font-bold">
// //               Management System
// //             </p>
// //           </div>

// //           {/* TABS */}
// //           <div className="grid grid-cols-3 border-b border-gray-100">

// //             {["login", "register", "forgot"].map((tab) => (
// //               <button
// //                 key={tab}
// //                 onClick={() => setActiveTab(tab)}
// //                 className={`py-5 text-[11px] uppercase font-black tracking-[0.2em] transition-all ${
// //                   activeTab === tab
// //                     ? "bg-blue-50 text-blue-700 border-b-2 border-blue-700"
// //                     : "text-gray-400 hover:bg-gray-50"
// //                 }`}
// //               >
// //                 {tab === "forgot"
// //                   ? "Forgot"
// //                   : tab}
// //               </button>
// //             ))}
// //           </div>

// //           {/* FORM */}
// //          {/* FORM */}
// // <div className="p-8 space-y-5 min-h-[520px] flex flex-col justify-center">

// //             {/* REGISTER NAME */}
// //             {activeTab === "register" && (
// //               <div>
// //                 <label className="text-[11px] uppercase font-black text-gray-400 tracking-[0.2em] mb-2 block">
// //                   Full Name
// //                 </label>

// //                 <div className="relative">
// //                   <User
// //                     className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
// //                     size={18}
// //                   />

// //                   <input
// //                     type="text"
// //                     name="name"
// //                     value={formData.name}
// //                     onChange={handleChange}
// //                     placeholder="Enter full name"
// //                     className="w-full pl-12 pr-4 py-4 rounded-2xl bg-gray-100 border-none outline-none focus:ring-2 focus:ring-blue-600 text-sm font-medium"
// //                   />
// //                 </div>
// //               </div>
// //             )}

// //             {/* EMAIL */}
// //             <div>
// //               <label className="text-[11px] uppercase font-black text-gray-400 tracking-[0.2em] mb-2 block">
// //                 Email Address
// //               </label>

// //               <div className="relative">
// //                 <Mail
// //                   className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
// //                   size={18}
// //                 />

// //                 <input
// //                   type="email"
// //                   name="email"
// //                   value={formData.email}
// //                   onChange={handleChange}
// //                   placeholder="Enter email"
// //                   className="w-full pl-12 pr-4 py-4 rounded-2xl bg-gray-100 border-none outline-none focus:ring-2 focus:ring-blue-600 text-sm font-medium"
// //                 />
// //               </div>
// //             </div>

// //             {/* PASSWORD */}
// //             {activeTab !== "forgot" && (
// //               <div>
// //                 <label className="text-[11px] uppercase font-black text-gray-400 tracking-[0.2em] mb-2 block">
// //                   Password
// //                 </label>

// //                 <div className="relative">
// //                   <Lock
// //                     className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
// //                     size={18}
// //                   />

// //                   <input
// //                     type={showPassword ? "text" : "password"}
// //                     name="password"
// //                     value={formData.password}
// //                     onChange={handleChange}
// //                     placeholder="Enter password"
// //                     className="w-full pl-12 pr-12 py-4 rounded-2xl bg-gray-100 border-none outline-none focus:ring-2 focus:ring-blue-600 text-sm font-medium"
// //                   />

// //                   <button
// //                     type="button"
// //                     onClick={() => setShowPassword(!showPassword)}
// //                     className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
// //                   >
// //                     {showPassword ? (
// //                       <EyeOff size={18} />
// //                     ) : (
// //                       <Eye size={18} />
// //                     )}
// //                   </button>
// //                 </div>
// //               </div>
// //             )}

// //             {/* BUTTON */}
// //             <button
// //               onClick={handleSubmit}
// //               className="w-full bg-blue-700 hover:bg-blue-800 text-white py-4 rounded-2xl uppercase tracking-[0.2em] font-black text-sm shadow-xl transition-all duration-300"
// //             >
// //               {activeTab === "login"
// //                 ? "Login"
// //                 : activeTab === "register"
// //                 ? "Create Account"
// //                 : "Reset Password"}
// //             </button>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default LoginPage;











// import React, { useState } from "react";
// import axios from "axios";
// import {
//   Lock,
//   Mail,
//   User,
//   Eye,
//   EyeOff,
//   GraduationCap,
//   ShieldCheck,
//   Sparkles
// } from "lucide-react";

// import bgImage from "../assets/login-bg.jpeg";
// import logo from "../assets/logoonly.png";

// const LoginPage = () => {
//   const [activeTab, setActiveTab] = useState("login");

//   const [showPassword, setShowPassword] = useState(false);

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: ""
//   });

//   const handleChange = (e) => {
//     setFormData((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value
//     }));
//   };

//   const handleSubmit = async () => {
//     try {
//       let endpoint = "";

//       if (activeTab === "login") {
//         endpoint = "http://localhost:5000/api/auth/login";
//       }

//       if (activeTab === "register") {
//         endpoint = "http://localhost:5000/api/auth/register";
//       }

//       if (activeTab === "forgot") {
//         endpoint = "http://localhost:5000/api/auth/forgot-password";
//       }

//       const response = await axios.post(endpoint, formData);

//       alert(response.data.message);

//       if (response.data.token) {
//         localStorage.setItem("token", response.data.token);
//       }

//     } catch (error) {
//       alert(error.response?.data?.message || "Something went wrong");
//     }
//   };

//   return (
//     <div
//       className="h-screen w-screen overflow-hidden flex"
//       style={{
//         backgroundImage: `url(${bgImage})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center"
//       }}
//     >
//       {/* DARK OVERLAY */}
//       <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>

//       {/* LEFT SECTION */}
//       <div className="hidden lg:flex relative z-10 w-[58%] h-full flex-col justify-between p-16 text-white">

//         {/* TOP */}
//         <div>

//           <div className="flex items-center gap-5">

//             <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-5 shadow-2xl">
//               <img
//                 src={logo}
//                 alt="logo"
//                 className="h-25 w-25 object-contain"
//               />
//             </div>

//             <div>
//               <h1 className="text-6xl font-black leading-tight tracking-tight">
//                 Montessori 
//               </h1>

//               <p className="uppercase tracking-[0.4em] text-blue-200 text-sm mt-3 font-bold">
//                 Digital Management System
//               </p>
//             </div>
//           </div>

//           <div className="mt-16 max-w-2xl">

//             <p className="mt-6 text-white/70 text-lg leading-relaxed">
//               Centralized student database, secure certificate generation,
//               document verification, academic management and intelligent
//               transfer certificate workflow system.
//             </p>
//           </div>
//         </div>

//       </div>

//       {/* RIGHT AUTH SECTION */}
//       <div className="relative z-10 w-full lg:w-[42%] h-full bg-white flex flex-col justify-center px-8 lg:px-20">

        
//         {/* HEADER */}
//         <div className="mb-10">

          

//           <h2 className="text-5xl font-black text-slate-900 leading-tight">
//             {activeTab === "login" && "Sign In"}
//             {activeTab === "register" && "Create Account"}
//             {activeTab === "forgot" && "Reset Password"}
//           </h2>

          
//         </div>

//         {/* TABS */}
//         <div className="flex gap-3 mb-10">

//           {["login", "register", "forgot"].map((tab) => (

//             <button
//               key={tab}
//               onClick={() => setActiveTab(tab)}
//               className={`px-6 py-3 rounded-2xl uppercase text-xs font-black tracking-[0.2em] transition-all duration-300 ${
//                 activeTab === tab
//                   ? "bg-blue-700 text-white shadow-lg"
//                   : "bg-slate-100 text-slate-500 hover:bg-slate-200"
//               }`}
//             >
//               {tab === "forgot"
//                 ? "Forgot Password"
//                 : tab}
//             </button>

//           ))}
//         </div>

//         {/* FORM */}
//         <div className="space-y-6 min-h-[420px]">

//           {/* REGISTER NAME */}
//           {activeTab === "register" && (

//             <div>
//               <label className="block text-xs uppercase tracking-[0.2em] text-slate-500 font-black mb-3">
//                 Full Name
//               </label>

//               <div className="relative">

//                 <User
//                   size={18}
//                   className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400"
//                 />

//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   placeholder="Enter your full name"
//                   className="w-full h-16 rounded-2xl bg-slate-100 border border-slate-200 pl-14 pr-5 text-sm font-medium outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition-all"
//                 />
//               </div>
//             </div>

//           )}

//           {/* EMAIL */}
//           <div>

//             <label className="block text-xs uppercase tracking-[0.2em] text-slate-500 font-black mb-3">
//               Email Address
//             </label>

//             <div className="relative">

//               <Mail
//                 size={18}
//                 className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400"
//               />

//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 placeholder="Enter your email"
//                 className="w-full h-16 rounded-2xl bg-slate-100 border border-slate-200 pl-14 pr-5 text-sm font-medium outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition-all"
//               />
//             </div>

//           </div>

//           {/* PASSWORD */}
//           {activeTab !== "forgot" && (

//             <div>

//               <label className="block text-xs uppercase tracking-[0.2em] text-slate-500 font-black mb-3">
//                 Password
//               </label>

//               <div className="relative">

//                 <Lock
//                   size={18}
//                   className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400"
//                 />

//                 <input
//                   type={showPassword ? "text" : "password"}
//                   name="password"
//                   value={formData.password}
//                   onChange={handleChange}
//                   placeholder="Enter your password"
//                   className="w-full h-16 rounded-2xl bg-slate-100 border border-slate-200 pl-14 pr-14 text-sm font-medium outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition-all"
//                 />

//                 <button
//                   type="button"
//                   onClick={() => setShowPassword(!showPassword)}
//                   className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400"
//                 >
//                   {showPassword ? (
//                     <EyeOff size={18} />
//                   ) : (
//                     <Eye size={18} />
//                   )}
//                 </button>

//               </div>

//             </div>

//           )}

//           {/* BUTTON */}
//           <button
//             onClick={handleSubmit}
//             className="w-full h-16 rounded-2xl bg-blue-700 hover:bg-blue-800 text-white uppercase tracking-[0.25em] font-black text-sm shadow-2xl transition-all duration-300"
//           >
//             {activeTab === "login" && "Login"}
//             {activeTab === "register" && "Create Account"}
//             {activeTab === "forgot" && "Reset Password"}
//           </button>

//         </div>

//       </div>
//     </div>
//   );
// };

// export default LoginPage;














// import React, { useState } from "react";
// import axios from "axios";
// import {
//   Lock,
//   Mail,
//   User,
//   Eye,
//   EyeOff
// } from "lucide-react";

// import bgImage from "../assets/login-bg.jpeg";
// import logo from "../assets/logoonly.png";

// const LoginPage = ({ onLogin }) => {
//   const [activeTab, setActiveTab] = useState("login");

//   const [showPassword, setShowPassword] = useState(false);
//   const [successMessage, setSuccessMessage] = useState("");

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: ""
//   });

//   const handleChange = (e) => {
//     setFormData((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value
//     }));
//   };

//   const handleSubmit = async () => {
//     try {
//       let endpoint = "";

//       if (activeTab === "login") {
//         endpoint = "http://localhost:5000/api/auth/login";
//       }

//       if (activeTab === "register") {
//         endpoint = "http://localhost:5000/api/auth/register";
//       }

//       if (activeTab === "forgot") {
//         endpoint = "http://localhost:5000/api/auth/forgot-password";
//       }

//       const response = await axios.post(endpoint, formData);

// /**
//  * LOGIN OR REGISTER
//  */
// if (response.data.token) {
//   localStorage.setItem("token", response.data.token);

//   onLogin();
// }

// /**
//  * FORGOT PASSWORD
//  */
// if (activeTab === "forgot") {
//   setSuccessMessage("Password reset request successful");
// }

//     } catch (error) {
//       alert(error.response?.data?.message || "Something went wrong");
//     }
//   };

//   return (
//     <div className="h-screen w-screen overflow-hidden flex bg-white">

//       {/* ================= LEFT SIDE ================= */}
//       <div
//         className="hidden lg:flex w-[58%] h-full relative"
//         style={{
//           backgroundImage: `url(${bgImage})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center"
//         }}
//       >

//         {/* DARK OVERLAY */}
//         <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>

//         {/* CONTENT */}
//         <div className="relative z-10 flex flex-col justify-between h-full w-full p-16 text-white">

//           {/* TOP */}
//           <div>

//             {/* LOGO */}
//             <div className="flex items-center gap-5">

//                <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-5 shadow-2xl">
//                 <img
//                   src={logo}
//                   alt="logo"
//                   className="h-24 w-24 object-contain"
//                 />
//               </div>

//               <div>

//                 <h1 className="text-6xl font-black leading-tight tracking-tight">
//                   Montessori
//                 </h1>

//                 <p className="uppercase tracking-[0.35em] text-blue-200 text-sm mt-3 font-bold">
//                   Digital Data Management System
//                 </p>

//               </div>
//             </div>

//             {/* DESCRIPTION */}
//             <div className="mt-20 max-w-2xl">

//                <p className="mt-8 text-white/75 text-lg leading-relaxed max-w-xl">
//                 Manage admissions, student records, transfer certificates,
//                 document verification, and academic workflows through one
//                 centralized digital platform.
//               </p>

//             </div>

//           </div>

          

//         </div>
//       </div>

//       {/* ================= RIGHT SIDE ================= */}
//       <div className="w-full lg:w-[42%] h-full bg-white flex items-center justify-center px-8 lg:px-20">

//         <div className="w-full max-w-md">

//           {/* MOBILE LOGO */}
//           <div className="lg:hidden flex justify-center mb-10">
//             <img
//               src={logo}
//               alt="logo"
//               className="h-24 object-contain"
//             />
//           </div>

//           {/* TITLE */}
//           <div className="mb-10">

           

//             <h2 className="text-5xl font-black text-slate-900 leading-tight">

//               {activeTab === "login" && "Sign In"}

//               {activeTab === "register" && "Create Account"}

//               {activeTab === "forgot" && "Reset Password"}

//             </h2>

//           </div>

//           {/* TABS */}
//           <div className="flex mb-10 bg-slate-100 p-2">

//             {["login", "register", "forgot"].map((tab) => (

//               <button
//                 key={tab}
//                 onClick={() => setActiveTab(tab)}
//                 className={`flex-1 h-12 text-xs uppercase font-black tracking-[0.2em] transition-all duration-300 ${
//                   activeTab === tab
//                     ? "bg-blue-700 text-white shadow-lg"
//                     : "text-slate-500 hover:bg-slate-200"
//                 }`}
//               >
//                 {tab === "forgot"
//                   ? "Forgot"
//                   : tab}
//               </button>

//             ))}

//           </div>

//           {/* FORM */}
//           <div className="space-y-6 min-h-[360px]">

//             {/* NAME */}
//             <div
//               className={`transition-all duration-300 overflow-hidden ${
//                 activeTab === "register"
//                   ? "max-h-40 opacity-100"
//                   : "max-h-0 opacity-0"
//               }`}
//             >

//               <label className="block text-xs uppercase tracking-[0.2em] text-slate-500 font-black mb-3">
//                 Full Name
//               </label>

//               <div className="relative">

//                 <User
//                   size={18}
//                   className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400"
//                 />

//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   placeholder="Enter full name"
//                   className="w-full h-16 bg-slate-100 border border-slate-200 pl-14 pr-5 text-sm font-medium outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition-all"
//                 />

//               </div>

//             </div>

//             {/* EMAIL */}
//             <div>

//               <label className="block text-xs uppercase tracking-[0.2em] text-slate-500 font-black mb-3">
//                 Email Address
//               </label>

//               <div className="relative">

//                 <Mail
//                   size={18}
//                   className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400"
//                 />

//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   placeholder="Enter email address"
//                   className="w-full h-16 bg-slate-100 border border-slate-200 pl-14 pr-5 text-sm font-medium outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition-all"
//                 />

//               </div>

//             </div>

//             {/* PASSWORD */}
//             <div
//               className={`transition-all duration-300 overflow-hidden ${
//                 activeTab !== "forgot"
//                   ? "max-h-40 opacity-100"
//                   : "max-h-0 opacity-0"
//               }`}
//             >

//               <label className="block text-xs uppercase tracking-[0.2em] text-slate-500 font-black mb-3">
//                 Password
//               </label>

//               <div className="relative">

//                 <Lock
//                   size={18}
//                   className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400"
//                 />

//                 <input
//                   type={showPassword ? "text" : "password"}
//                   name="password"
//                   value={formData.password}
//                   onChange={handleChange}
//                   placeholder="Enter password"
//                   className="w-full h-16 bg-slate-100 border border-slate-200 pl-14 pr-14 text-sm font-medium outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition-all"
//                 />

//                 <button
//                   type="button"
//                   onClick={() => setShowPassword(!showPassword)}
//                   className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400"
//                 >
//                   {showPassword ? (
//                     <EyeOff size={18} />
//                   ) : (
//                     <Eye size={18} />
//                   )}
//                 </button>

//               </div>

//             </div>
//             {successMessage && (
//   <div className="bg-green-100 border border-green-300 text-green-700 px-4 py-3 rounded-lg text-sm font-semibold">
//     {successMessage}
//   </div>
// )}

//             {/* BUTTON */}
//             <button
//               onClick={handleSubmit}
//               className="w-full h-16 bg-blue-700 hover:bg-blue-800 text-white uppercase tracking-[0.25em] font-black text-sm shadow-2xl transition-all duration-300"
//             >

//               {activeTab === "login" && "Login"}

//               {activeTab === "register" && "Create Account"}

//               {activeTab === "forgot" && "Reset Password"}

//             </button>

//           </div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;









// ok












// import React, { useState } from "react";
// import axios from "axios";
// import {
//   Lock,
//   Mail,
//   User,
//   Eye,
//   EyeOff
// } from "lucide-react";

// import bgImage from "../assets/login-bg.jpeg";
// import logo from "../assets/logoonly.png";

// const LoginPage = ({ onLogin }) => {
//   const [activeTab, setActiveTab] = useState("login");

//   const [showPassword, setShowPassword] = useState(false);
//   const [successMessage, setSuccessMessage] = useState("");

//   const [formData, setFormData] = useState({
//   name: "",
//   email: "",
//   password: "",
//   newPassword: ""
// });

//   const handleChange = (e) => {
//     setFormData((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value
//     }));
//   };

//   const handleSubmit = async () => {
//     try {
//       let endpoint = "";

//       if (activeTab === "login") {
//         endpoint = "http://localhost:5000/api/auth/login";
//       }

//       if (activeTab === "register") {
//         endpoint = "http://localhost:5000/api/auth/register";
//       }

//       if (activeTab === "forgot") {
//         endpoint = "http://localhost:5000/api/auth/forgot-password";

//       }

//       const response = await axios.post(endpoint, formData);

// /**
//  * LOGIN / REGISTER
//  */
// if (response.data.token) {
//   localStorage.setItem("token", response.data.token);

//   // LOGIN SUCCESS
//   onLogin();
// }

// /**
//  * FORGOT PASSWORD SUCCESS
//  */
// if (activeTab === "forgot") {
//   alert("Password updated successfully");
// }
// /**
//  * FORGOT PASSWORD
//  */
// if (activeTab === "forgot") {
//   setSuccessMessage("Password reset request successful");
// }

//     } catch (error) {
//       alert(error.response?.data?.message || "Something went wrong");
//     }
//   };

//   return (
//     <div className="h-screen w-screen overflow-hidden flex bg-white">

//       {/* ================= LEFT SIDE ================= */}
//       <div
//         className="hidden lg:flex w-[58%] h-full relative"
//         style={{
//           backgroundImage: `url(${bgImage})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center"
//         }}
//       >

//         {/* DARK OVERLAY */}
//         <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>

//         {/* CONTENT */}
//         <div className="relative z-10 flex flex-col justify-between h-full w-full p-16 text-white">

//           {/* TOP */}
//           <div>

//             {/* LOGO */}
//             <div className="flex items-center gap-5">

//                <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-5 shadow-2xl">
//                 <img
//                   src={logo}
//                   alt="logo"
//                   className="h-24 w-24 object-contain"
//                 />
//               </div>

//               <div>

//                 <h1 className="text-6xl font-black leading-tight tracking-tight">
//                   Montessori
//                 </h1>

//                 <p className="uppercase tracking-[0.35em] text-blue-200 text-sm mt-3 font-bold">
//                   Digital Data Management System
//                 </p>

//               </div>
//             </div>

//             {/* DESCRIPTION */}
//             <div className="mt-20 max-w-2xl">

//                <p className="mt-8 text-white/75 text-lg leading-relaxed max-w-xl">
//                 Manage admissions, student records, transfer certificates,
//                 document verification, and academic workflows through one
//                 centralized digital platform.
//               </p>

//             </div>

//           </div>

          

//         </div>
//       </div>

//       {/* ================= RIGHT SIDE ================= */}
//       <div className="w-full lg:w-[42%] h-full bg-white flex items-center justify-center px-8 lg:px-20">

//         <div className="w-full max-w-md">

//           {/* MOBILE LOGO */}
//           <div className="lg:hidden flex justify-center mb-10">
//             <img
//               src={logo}
//               alt="logo"
//               className="h-24 object-contain"
//             />
//           </div>

//           {/* TITLE */}
//           <div className="mb-10">

           

//             <h2 className="text-5xl font-black text-slate-900 leading-tight">

//               {activeTab === "login" && "Sign In"}

//               {activeTab === "register" && "Create Account"}

//               {activeTab === "forgot" && "Reset Password"}

//             </h2>

//           </div>

//           {/* TABS */}
//           <div className="flex mb-10 bg-slate-100 p-2">

//             {["login", "register", "forgot"].map((tab) => (

//               <button
//                 key={tab}
//                 onClick={() => setActiveTab(tab)}
//                 className={`flex-1 h-12 text-xs uppercase font-black tracking-[0.2em] transition-all duration-300 ${
//                   activeTab === tab
//                     ? "bg-blue-700 text-white shadow-lg"
//                     : "text-slate-500 hover:bg-slate-200"
//                 }`}
//               >
//                 {tab === "forgot"
//                   ? "Forgot"
//                   : tab}
//               </button>

//             ))}

//           </div>

//           {/* FORM */}
//           <div className="space-y-6 min-h-[360px]">

//             {/* NAME */}
//             <div
//               className={`transition-all duration-300 overflow-hidden ${
//                 activeTab === "register"
//                   ? "max-h-40 opacity-100"
//                   : "max-h-0 opacity-0"
//               }`}
//             >

//               <label className="block text-xs uppercase tracking-[0.2em] text-slate-500 font-black mb-3">
//                 Full Name
//               </label>

//               <div className="relative">

//                 <User
//                   size={18}
//                   className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400"
//                 />

//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   placeholder="Enter full name"
//                   className="w-full h-16 bg-slate-100 border border-slate-200 pl-14 pr-5 text-sm font-medium outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition-all"
//                 />

//               </div>

//             </div>

//             {/* EMAIL */}
//             <div>

//               <label className="block text-xs uppercase tracking-[0.2em] text-slate-500 font-black mb-3">
//                 Email Address
//               </label>

//               <div className="relative">

//                 <Mail
//                   size={18}
//                   className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400"
//                 />

//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   placeholder="Enter email address"
//                   className="w-full h-16 bg-slate-100 border border-slate-200 pl-14 pr-5 text-sm font-medium outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition-all"
//                 />

//               </div>

//             </div>

//             {/* PASSWORD */}
//             <div
//               className={`transition-all duration-300 overflow-hidden ${
//                 activeTab !== "forgot"
//                   ? "max-h-40 opacity-100"
//                   : "max-h-0 opacity-0"
//               }`}
//             >

//               <label className="block text-xs uppercase tracking-[0.2em] text-slate-500 font-black mb-3">
//                 Password
//               </label>

//               <div className="relative">

//                 <Lock
//                   size={18}
//                   className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400"
//                 />

//                 <input
//                   type={showPassword ? "text" : "password"}
//                   name="password"
//                   value={formData.password}
//                   onChange={handleChange}
//                   placeholder="Enter password"
//                   className="w-full h-16 bg-slate-100 border border-slate-200 pl-14 pr-14 text-sm font-medium outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition-all"
//                 />

//                 <button
//                   type="button"
//                   onClick={() => setShowPassword(!showPassword)}
//                   className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400"
//                 >
//                   {showPassword ? (
//                     <EyeOff size={18} />
//                   ) : (
//                     <Eye size={18} />
//                   )}
//                 </button>

//               </div>

//             </div>
//           {/* NEW PASSWORD FOR FORGOT */}
// <div
//   className={`transition-all duration-300 overflow-hidden ${
//     activeTab === "forgot"
//       ? "max-h-40 opacity-100"
//       : "max-h-0 opacity-0"
//   }`}
// >

//   <label className="block text-xs uppercase tracking-[0.2em] text-slate-500 font-black mb-3">
//     New Password
//   </label>

//   <div className="relative">

//     <Lock
//       size={18}
//       className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400"
//     />

//     <input
//       type="password"
//       name="newPassword"
//       value={formData.newPassword}
//       onChange={handleChange}
//       placeholder="Enter new password"
//       className="w-full h-16 bg-slate-100 border border-slate-200 pl-14 pr-5 text-sm font-medium outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition-all"
//     />

//   </div>

// </div>

//             {/* BUTTON */}
//             <button
//               onClick={handleSubmit}
//               className="w-full h-16 bg-blue-700 hover:bg-blue-800 text-white uppercase tracking-[0.25em] font-black text-sm shadow-2xl transition-all duration-300"
//             >

//               {activeTab === "login" && "Login"}

//               {activeTab === "register" && "Create Account"}

//               {activeTab === "forgot" && "Reset Password"}

//             </button>

//           </div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;







// the above is reset password directly
















import React, { useState } from "react";
import axios from "axios";
import {
  Lock,
  Mail,
  User,
  Eye,
  EyeOff
} from "lucide-react";

import bgImage from "../assets/login-bg.jpg";
import logo from "../assets/logoonly.png";

const LoginPage = ({ onLogin }) => {
  const [activeTab, setActiveTab] = useState("login");

  const [showPassword, setShowPassword] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

 const [formData, setFormData] = useState({
  name: "",
  email: "",
  password: ""
});

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async () => {
    try {
      const baseURL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";
      let endpoint = "";

      if (activeTab === "login") {
        endpoint = `${baseURL}/api/auth/login`;
        // endpoint = "http://localhost:5000/api/auth/login";
      }

      if (activeTab === "register") {
        endpoint = `${baseURL}/api/auth/register`;
        // endpoint = "http://localhost:5000/api/auth/register";
      }

      if (activeTab === "forgot") {
        endpoint = `${baseURL}/api/auth/forgot-password`;
        // endpoint = "http://localhost:5000/api/auth/forgot-password";

      }

     const response = await axios.post(endpoint, formData);

/**
 * LOGIN / REGISTER
 */
if (response.data.token) {
  localStorage.setItem("token", response.data.token);

  onLogin();
}

/**
 * FORGOT PASSWORD EMAIL SENT
 */
if (activeTab === "forgot") {
  setSuccessMessage(
    "Password reset link sent to your email"
  );
}
    } catch (error) {
      alert(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="h-screen w-screen overflow-hidden flex bg-white">

      {/* ================= LEFT SIDE ================= */}
      <div
        className="hidden lg:flex w-[80%] h-full relative"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>

        {/* CONTENT */}
        <div className="relative z-10 flex flex-col justify-between h-full w-full p-16 text-white">

          {/* TOP */}
          <div>

            {/* LOGO */}
            <div className="flex items-center gap-5">

               <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-5 shadow-2xl">
                <img
                  src={logo}
                  alt="logo"
                  className="h-24 w-24 object-contain"
                />
              </div>

              <div>

                <h1 className="text-6xl font-black leading-tight tracking-tight">
                  Montessori
                </h1>

                <p className="uppercase tracking-[0.35em] text-blue-200 text-sm mt-3 font-bold">
                  Data Management System
                </p>

              </div>
            </div>

            {/* DESCRIPTION */}
            <div className="mt-20 max-w-2xl">

               <p className="mt-8 text-white/75 text-lg leading-relaxed max-w-xl">
                Manage admissions, student records, transfer certificates,
                document verification, and academic workflows through one
                centralized digital platform.
              </p>

            </div>

          </div>

          

        </div>
      </div>

      {/* ================= RIGHT SIDE ================= */}
      <div className="w-full lg:w-[42%] h-full bg-white flex items-center justify-center px-8 lg:px-20">

        <div className="w-full max-w-md">

          {/* MOBILE LOGO */}
          <div className="lg:hidden flex justify-center mb-10">
            <img
              src={logo}
              alt="logo"
              className="h-24 object-contain"
            />
          </div>

          {/* TITLE */}
          <div className="mb-10">

           

            <h2 className="text-5xl font-black text-slate-900 leading-tight">

              {activeTab === "login" && "Sign In"}

              {activeTab === "register" && "Create Account"}

              {activeTab === "forgot" && "Reset Password"}

            </h2>

          </div>

          {/* TABS */}
          <div className="flex mb-10 bg-slate-100 p-2">

            {["login", "register", "forgot"].map((tab) => (

              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 h-12 text-xs uppercase font-black tracking-[0.2em] transition-all duration-300 ${
                  activeTab === tab
                    ? "bg-blue-700 text-white shadow-lg"
                    : "text-slate-500 hover:bg-slate-200"
                }`}
              >
                {tab === "forgot"
                  ? "Forgot"
                  : tab}
              </button>

            ))}

          </div>

          {/* FORM */}
          <div className="space-y-6 min-h-[360px]">

            {/* NAME */}
            <div
              className={`transition-all duration-300 overflow-hidden ${
                activeTab === "register"
                  ? "max-h-40 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >

              <label className="block text-xs uppercase tracking-[0.2em] text-slate-500 font-black mb-3">
                Full Name
              </label>

              <div className="relative">

                <User
                  size={18}
                  className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter full name"
                  className="w-full h-16 bg-slate-100 border border-slate-200 pl-14 pr-5 text-sm font-medium outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition-all"
                />

              </div>

            </div>

            {/* EMAIL */}
            <div>

              <label className="block text-xs uppercase tracking-[0.2em] text-slate-500 font-black mb-3">
                Email Address
              </label>

              <div className="relative">

                <Mail
                  size={18}
                  className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter email address"
                  className="w-full h-16 bg-slate-100 border border-slate-200 pl-14 pr-5 text-sm font-medium outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition-all"
                />

              </div>

            </div>

            {/* PASSWORD */}
            <div
              className={`transition-all duration-300 overflow-hidden ${
                activeTab !== "forgot"
                  ? "max-h-40 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >

              <label className="block text-xs uppercase tracking-[0.2em] text-slate-500 font-black mb-3">
                Password
              </label>

              <div className="relative">

                <Lock
                  size={18}
                  className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter password"
                  className="w-full h-16 bg-slate-100 border border-slate-200 pl-14 pr-14 text-sm font-medium outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition-all"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400"
                >
                  {showPassword ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </button>

              </div>

            </div>
          {/* SUCCESS MESSAGE */}
{successMessage && (
  <div className="bg-green-100 border border-green-300 text-green-700 px-4 py-3 rounded-lg text-sm font-semibold">
    {successMessage}
  </div>
)}
            {/* BUTTON */}
            <button
              onClick={handleSubmit}
              className="w-full h-16 bg-blue-700 hover:bg-blue-800 text-white uppercase tracking-[0.25em] font-black text-sm shadow-2xl transition-all duration-300"
            >

              {activeTab === "login" && "Login"}

              {activeTab === "register" && "Create Account"}

              {activeTab === "forgot" && "Reset Password"}

            </button>

          </div>

        </div>
      </div>
    </div>
  );
};

export default LoginPage;