
// // // // // import express from 'express';
// // // // // import Student from '../models/Student.js';

// // // // // const router = express.Router();

// // // // // /**
// // // // //  * GET: Live Duplicate Search / Student Database Fetch
// // // // //  * Optimized to return full student documents for frontend preview and edit modals.
// // // // //  */
// // // // // router.get('/search', async (req, res) => {
// // // // //   try {
// // // // //     const { name, fatherName } = req.query;

// // // // //     // Build the initial Match stage
// // // // //     let matchQuery = {};

// // // // //     if (name && name.trim().length >= 2) {
// // // // //       matchQuery.name = { $regex: name.trim(), $options: 'i' };
// // // // //     }

// // // // //     if (fatherName && fatherName.trim() !== "") {
// // // // //       matchQuery["parentDetails.fatherName"] = { 
// // // // //         $regex: fatherName.trim(), 
// // // // //         $options: 'i' 
// // // // //       };
// // // // //     }

// // // // //     // Execute Aggregation to bubble exact matches to the top
// // // // //     const students = await Student.aggregate([
// // // // //       { $match: matchQuery },
// // // // //       {
// // // // //         $addFields: {
// // // // //           exactMatch: {
// // // // //             $cond: [
// // // // //               { $eq: [{ $toLower: "$name" }, (name || "").toLowerCase().trim()] },
// // // // //               1,
// // // // //               0
// // // // //             ]
// // // // //           }
// // // // //         }
// // // // //       },
// // // // //       { $sort: { exactMatch: -1, name: 1 } },
// // // // //       { $limit: 50 } // Increased limit for general browsing
// // // // //     ]);

// // // // //     res.json(students);
// // // // //   } catch (err) {
// // // // //     res.status(500).json({ message: "Search Error: " + err.message });
// // // // //   }
// // // // // });

// // // // // /**
// // // // //  * PUT: Update Student Record (CRITICAL FOR EDITING)
// // // // //  * This is the missing link that was causing your "Failed to update record" error.
// // // // //  */
// // // // // router.put('/:id', async (req, res) => {
// // // // //   try {
// // // // //     const { id } = req.params;
// // // // //     const updateData = req.body;

// // // // //     // Find student and update with new data, returning the newly updated document
// // // // //     const updatedStudent = await Student.findByIdAndUpdate(
// // // // //       id, 
// // // // //       { $set: updateData }, 
// // // // //       { new: true, runValidators: true }
// // // // //     );

// // // // //     if (!updatedStudent) {
// // // // //       return res.status(404).json({ message: "Student record not found." });
// // // // //     }

// // // // //     res.status(200).json(updatedStudent);
// // // // //   } catch (err) {
// // // // //     if (err.code === 11000) {
// // // // //       return res.status(400).json({ message: "Duplicate Admission Number detected." });
// // // // //     }
// // // // //     res.status(500).json({ message: "Update Error: " + err.message });
// // // // //   }
// // // // // });

// // // // // /**
// // // // //  * POST: Save Single New Student Admission
// // // // //  */
// // // // // router.post('/admission', async (req, res) => {
// // // // //   try {
// // // // //     const newStudent = new Student(req.body);
// // // // //     await newStudent.save();
// // // // //     res.status(201).json({ message: "Record saved successfully!" });
// // // // //   } catch (err) {
// // // // //     if (err.code === 11000) {
// // // // //       return res.status(400).json({ 
// // // // //         message: "Admission Number already exists in the database!" 
// // // // //       });
// // // // //     }
// // // // //     res.status(500).json({ message: err.message });
// // // // //   }
// // // // // });

// // // // // /**
// // // // //  * POST: Bulk Excel Import
// // // // //  * Handles massive data ingestion with sanitation.
// // // // //  */
// // // // // router.post('/bulk-admission', async (req, res) => {
// // // // //   try {
// // // // //     const { students } = req.body;

// // // // //     if (!students || !Array.isArray(students)) {
// // // // //       return res.status(400).json({ message: "No student data provided." });
// // // // //     }

// // // // //     // Sanitize data: remove placeholders and filter out truly empty records
// // // // //     const sanitizedData = students
// // // // //       .map(s => {
// // // // //         const doc = { ...s };
// // // // //         // Clean "N/A" strings back to undefined for Mongoose
// // // // //         if (doc.dob === "N/A") delete doc.dob;
// // // // //         if (doc.parentDetails?.motherName === "N/A") doc.parentDetails.motherName = "Not Provided";
// // // // //         return doc;
// // // // //       })
// // // // //       .filter(s => s.name && s.name !== "N/A"); // Must have a name

// // // // //     if (sanitizedData.length === 0) {
// // // // //       return res.status(400).json({ message: "No valid records found after sanitation." });
// // // // //     }

// // // // //     // ordered: false ensures that if one row fails (duplicate), the rest continue
// // // // //     const result = await Student.insertMany(sanitizedData, { ordered: false });
// // // // //     res.status(200).json({ count: result.length });
// // // // //   } catch (err) {
// // // // //     // Handling partial successes (Partial inserts with some duplicates)
// // // // //     if (err.writeErrors || err.insertedDocs) {
// // // // //       const count = err.result?.nInserted || 0;
// // // // //       return res.status(207).json({ 
// // // // //         message: `Imported ${count} records. Some duplicates were skipped.`,
// // // // //         count 
// // // // //       });
// // // // //     }
// // // // //     res.status(500).json({ message: err.message });
// // // // //   }
// // // // // });

// // // // // export default router;



// // // // // 15


// // // // import express from 'express';
// // // // import multer from 'multer';
// // // // import Student from '../models/Student.js';
// // // // import { uploadToCloudinary } from '../utils/cloudinary.js';

// // // // const router = express.Router();

// // // // // Configure Multer for memory storage (suitable for small school docs)
// // // // const upload = multer({ storage: multer.memoryStorage() });

// // // // /**
// // // //  * POST: Save Single New Student Admission
// // // //  * Handles both JSON data and File uploads
// // // //  */
// // // // router.post('/admission', upload.any(), async (req, res) => {
// // // //   try {
// // // //     // 1. Parse the stringified 'data' field sent from Frontend
// // // //     if (!req.body.data) {
// // // //       return res.status(400).json({ message: "No student data provided." });
// // // //     }
    
// // // //     const studentData = JSON.parse(req.body.data);

// // // //     // 2. Handle Files (Attach file metadata or buffers to the student object if needed)
// // // //     // For now, we assume your Schema handles paths. You can process req.files here.
// // // //     // Example: if (req.files) { ... handle saving to Cloudinary/S3/Local ... }

// // // //     const newStudent = new Student(studentData);
// // // //     await newStudent.save();
    
// // // //     res.status(201).json({ message: "Admission Record Saved Successfully!" });
// // // //   } catch (err) {
// // // //     console.error("Save Error:", err);
// // // //     if (err.code === 11000) {
// // // //       return res.status(400).json({ message: "Admission Number already exists!" });
// // // //     }
// // // //     // This catches the Mongoose validation errors shown in your screenshot
// // // //     res.status(400).json({ message: err.message });
// // // //   }
// // // // });

// // // // /**
// // // //  * GET: Live Duplicate Search
// // // //  */
// // // // router.get('/search', async (req, res) => {
// // // //   try {
// // // //     const { name, fatherName } = req.query;
// // // //     let matchQuery = {};

// // // //     if (name?.trim().length >= 2) {
// // // //       matchQuery.name = { $regex: name.trim(), $options: 'i' };
// // // //     }
// // // //     if (fatherName?.trim()) {
// // // //       matchQuery["parentDetails.fatherName"] = { $regex: fatherName.trim(), $options: 'i' };
// // // //     }

// // // //     const students = await Student.aggregate([
// // // //       { $match: matchQuery },
// // // //       {
// // // //         $addFields: {
// // // //           exactMatch: {
// // // //             $cond: [{ $eq: [{ $toLower: "$name" }, (name || "").toLowerCase().trim()] }, 1, 0]
// // // //           }
// // // //         }
// // // //       },
// // // //       { $sort: { exactMatch: -1, name: 1 } },
// // // //       { $limit: 10 }
// // // //     ]);

// // // //     res.json(students);
// // // //   } catch (err) {
// // // //     res.status(500).json({ message: "Search Error: " + err.message });
// // // //   }
// // // // });

// // // // /**
// // // //  * PUT: Update Student Record
// // // //  */
// // // // router.put('/:id', async (req, res) => {
// // // //   try {
// // // //     const updatedStudent = await Student.findByIdAndUpdate(
// // // //       req.params.id, 
// // // //       { $set: req.body }, 
// // // //       { new: true, runValidators: true }
// // // //     );
// // // //     if (!updatedStudent) return res.status(404).json({ message: "Record not found." });
// // // //     res.json(updatedStudent);
// // // //   } catch (err) {
// // // //     res.status(500).json({ message: err.message });
// // // //   }
// // // // });

// // // // export default router;












// // // import express from 'express';
// // // import multer from 'multer';
// // // import Student from '../models/Student.js';
// // // import { uploadToCloudinary } from '../utils/cloudinary.js';

// // // const router = express.Router();

// // // // Configure Multer for memory storage
// // // const upload = multer({ 
// // //   storage: multer.memoryStorage(),
// // //   limits: { fileSize: 5 * 1024 * 1024 } // 5MB limit per file
// // // });

// // // /**
// // //  * POST: Save Single New Student Admission
// // //  * Integrated with Cloudinary for file uploads
// // //  */
// // // router.post('/admission', upload.any(), async (req, res) => {
// // //   try {
// // //     // 1. Validate and Parse Data
// // //     if (!req.body.data) {
// // //       return res.status(400).json({ message: "No student data provided." });
// // //     }
    
// // //     const studentData = JSON.parse(req.body.data);
// // //     const files = req.files; 

// // //     // 2. Handle Cloudinary Uploads
// // //     const uploadedDocs = {};
// // //     if (files && files.length > 0) {
// // //       const uploadPromises = files.map(async (file) => {
// // //         // file.fieldname matches the key in your React state (e.g., 'tcFile')
// // //         const url = await uploadToCloudinary(file.buffer, 'student_admissions');
// // //         uploadedDocs[file.fieldname] = url;
// // //       });
      
// // //       await Promise.all(uploadPromises);
// // //     }

// // //     // 3. Merge Cloudinary URLs into Student Data
// // //     const finalStudentData = {
// // //       ...studentData,
// // //       documents: {
// // //         ...studentData.documents,
// // //         ...uploadedDocs // Merges Cloudinary links (tcFile, conductFile, etc.)
// // //       }
// // //     };

// // //     // 4. Save to MongoDB
// // //     const newStudent = new Student(finalStudentData);
// // //     await newStudent.save();
    
// // //     res.status(201).json({ 
// // //       message: "Admission Record Saved Successfully!",
// // //       studentId: newStudent._id 
// // //     });

// // //   } catch (err) {
// // //     console.error("Save Error:", err);
// // //     if (err.code === 11000) {
// // //       return res.status(400).json({ message: "Admission Number already exists!" });
// // //     }
// // //     res.status(400).json({ message: err.message });
// // //   }
// // // });

// // // /**
// // //  * GET: Live Duplicate Search
// // //  * Used by the sidebar in the React frontend
// // //  */
// // // router.get('/search', async (req, res) => {
// // //   try {
// // //     const { name, fatherName } = req.query;
// // //     let matchQuery = {};

// // //     if (name?.trim().length >= 2) {
// // //       matchQuery.name = { $regex: name.trim(), $options: 'i' };
// // //     }
// // //     if (fatherName?.trim()) {
// // //       matchQuery["parentDetails.fatherName"] = { $regex: fatherName.trim(), $options: 'i' };
// // //     }

// // //     // Returns potential matches to prevent double entry
// // //     const students = await Student.aggregate([
// // //       { $match: Object.keys(matchQuery).length > 0 ? matchQuery : { _id: null } },
// // //       {
// // //         $addFields: {
// // //           exactMatch: {
// // //             $cond: [{ $eq: [{ $toLower: "$name" }, (name || "").toLowerCase().trim()] }, 1, 0]
// // //           }
// // //         }
// // //       },
// // //       { $sort: { exactMatch: -1, name: 1 } },
// // //       { $limit: 10 }
// // //     ]);

// // //     res.json(students);
// // //   } catch (err) {
// // //     res.status(500).json({ message: "Search Error: " + err.message });
// // //   }
// // // });

// // // /**
// // //  * PUT: Update Student Record
// // //  */
// // // router.put('/:id', async (req, res) => {
// // //   try {
// // //     const updatedStudent = await Student.findByIdAndUpdate(
// // //       req.params.id, 
// // //       { $set: req.body }, 
// // //       { new: true, runValidators: true }
// // //     );
// // //     if (!updatedStudent) return res.status(404).json({ message: "Record not found." });
// // //     res.json({ message: "Record updated successfully", updatedStudent });
// // //   } catch (err) {
// // //     res.status(500).json({ message: err.message });
// // //   }
// // // });

// // // export default router;





// // import express from 'express';
// // import multer from 'multer';
// // import Student from '../models/Student.js';
// // import { uploadToCloudinary } from '../utils/cloudinary.js';

// // const router = express.Router();

// // /**
// //  * MULTER CONFIGURATION
// //  * Uses memory storage to avoid writing temporary files to the server disk.
// //  */
// // const upload = multer({ 
// //   storage: multer.memoryStorage(),
// //   limits: { fileSize: 10 * 1024 * 1024 } // 10MB limit per file
// // });

// // /**
// //  * POST: New Student Admission
// //  * Handles file uploads to Cloudinary and saves links to MongoDB.
// //  */
// // router.post('/admission', upload.any(), async (req, res) => {
// //   try {
// //     // 1. Validate incoming data
// //     if (!req.body.data) {
// //       return res.status(400).json({ message: "Student data is missing." });
// //     }

// //     const studentData = JSON.parse(req.body.data);
// //     const files = req.files;

// //     // 2. Process file uploads to Cloudinary concurrently
// //     const uploadedDocs = {};
// //     if (files && files.length > 0) {
// //       const uploadPromises = files.map(async (file) => {
// //         // 'file.fieldname' corresponds to the key used in your frontend FormData 
// //         // (e.g., 'tcFile', 'studentAadhaarFile', etc.)
// //         const url = await uploadToCloudinary(file.buffer, 'school_management/admissions');
// //         uploadedDocs[file.fieldname] = url;
// //       });
      
// //       await Promise.all(uploadPromises);
// //     }

// //     // 3. Merge Cloudinary secure URLs into the documents sub-object
// //     const finalStudentData = {
// //       ...studentData,
// //       documents: {
// //         ...studentData.documents,
// //         ...uploadedDocs 
// //       }
// //     };

// //     // 4. Create and Save the record
// //     const newStudent = new Student(finalStudentData);
// //     await newStudent.save();
    
// //     res.status(201).json({ 
// //       message: "Admission finalized and documents secured!",
// //       studentId: newStudent._id 
// //     });

// //   } catch (err) {
// //     console.error("Admission Error:", err);
// //     if (err.code === 11000) {
// //       return res.status(400).json({ message: "Admission Number already exists!" });
// //     }
// //     res.status(500).json({ message: "Internal Server Error: " + err.message });
// //   }
// // });

// // /**
// //  * GET: Live Duplicate Search
// //  * Uses an aggregation pipeline to handle case-insensitive searching and 
// //  * prioritizes exact matches for the frontend comparison sidebar.
// //  */
// // router.get('/search', async (req, res) => {
// //   try {
// //     const { name, fatherName } = req.query;
// //     let matchQuery = {};

// //     if (name?.trim().length >= 2) {
// //       matchQuery.name = { $regex: name.trim(), $options: 'i' };
// //     }
// //     if (fatherName?.trim()) {
// //       matchQuery["parentDetails.fatherName"] = { $regex: fatherName.trim(), $options: 'i' };
// //     }

// //     // If no search parameters, return empty to save resources
// //     if (Object.keys(matchQuery).length === 0) return res.json([]);

// //     const students = await Student.aggregate([
// //       { $match: matchQuery },
// //       {
// //         $addFields: {
// //           exactMatch: {
// //             $cond: [{ $eq: [{ $toLower: "$name" }, (name || "").toLowerCase().trim()] }, 1, 0]
// //           }
// //         }
// //       },
// //       { $sort: { exactMatch: -1, name: 1 } },
// //       { $limit: 10 }
// //     ]);

// //     res.json(students);
// //   } catch (err) {
// //     console.error("Search Error:", err);
// //     res.status(500).json({ message: "Search Error: " + err.message });
// //   }
// // });

// // /**
// //  * PUT: Update Existing Student Record
// //  */
// // router.put('/:id', async (req, res) => {
// //   try {
// //     const updatedStudent = await Student.findByIdAndUpdate(
// //       req.params.id, 
// //       { $set: req.body }, 
// //       { new: true, runValidators: true }
// //     );

// //     if (!updatedStudent) {
// //       return res.status(404).json({ message: "Student record not found." });
// //     }

// //     res.json({ 
// //       message: "Record updated successfully", 
// //       updatedStudent 
// //     });
// //   } catch (err) {
// //     console.error("Update Error:", err);
// //     res.status(500).json({ message: err.message });
// //   }
// // });

// // export default router;







// import express from 'express';
// import multer from 'multer';
// import Student from '../models/Student.js';
// import { uploadToCloudinary } from '../utils/cloudinary.js';

// const router = express.Router();

// /**
//  * MULTER CONFIGURATION
//  * Uses memory storage to avoid writing temporary files to the server disk.
//  */
// const upload = multer({ 
//   storage: multer.memoryStorage(),
//   limits: { fileSize: 10 * 1024 * 1024 } // 10MB limit per file
// });

// /**
//  * POST: New Student Admission
//  * Handles file uploads to Cloudinary and saves links to MongoDB.
//  */
// router.post('/admission', upload.any(), async (req, res) => {
//   try {
//     // 1. Validate incoming data
//     if (!req.body.data) {
//       return res.status(400).json({ message: "Student data is missing." });
//     }

//     const studentData = JSON.parse(req.body.data);
//     const files = req.files;

//     // 2. Process file uploads to Cloudinary concurrently
//     const uploadedDocs = {
//   studentAadhaarFile: "",
//   fatherAadhaarFile: "",
//   motherAadhaarFile: "",
//   guardianAadhaarFile: "",
//   tcFile: "",
//   conductFile: "",
//   marksMemoFile: ""
// };

// if (files && files.length > 0) {
//   const uploadPromises = files.map(async (file) => {
//     const url = await uploadToCloudinary(
//       file.buffer,
//       `school_management/admissions/${file.fieldname}`
//     );

//     // Save exact field mapping
//     uploadedDocs[file.fieldname] = url;
//   });

//   await Promise.all(uploadPromises);
// }

//     // 3. Merge Cloudinary secure URLs into the documents sub-object
//     const finalStudentData = {
//   ...studentData,
//   documents: {
//     hasTC: studentData.documents?.hasTC || false,
//     hasConduct: studentData.documents?.hasConduct || false,
//     hasMarksMemo: studentData.documents?.hasMarksMemo || false,

//     studentAadhaarFile: uploadedDocs.studentAadhaarFile,
//     fatherAadhaarFile: uploadedDocs.fatherAadhaarFile,
//     motherAadhaarFile: uploadedDocs.motherAadhaarFile,
//     guardianAadhaarFile: uploadedDocs.guardianAadhaarFile,

//     tcFile: uploadedDocs.tcFile,
//     conductFile: uploadedDocs.conductFile,
//     marksMemoFile: uploadedDocs.marksMemoFile
//   }
// };

//     // 4. Create and Save the record
//     const newStudent = new Student(finalStudentData);
//     await newStudent.save();
    
//     res.status(201).json({ 
//       message: "Admission finalized and documents secured!",
//       studentId: newStudent._id 
//     });

//   } catch (err) {
//     console.error("Admission Error:", err);
//     if (err.code === 11000) {
//       return res.status(400).json({ message: "Admission Number already exists!" });
//     }
//     res.status(500).json({ message: "Internal Server Error: " + err.message });
//   }
// });

// router.get('/search', async (req, res) => {
//   try {
//     const { name, fatherName } = req.query;
//     let matchQuery = {};

//     // Apply regex filters only if parameters are provided
//     if (name && name.trim().length > 0) {
//       matchQuery.name = { $regex: name.trim(), $options: 'i' };
//     }
    
//     if (fatherName && fatherName.trim().length > 0) {
//       matchQuery["parentDetails.fatherName"] = { $regex: fatherName.trim(), $options: 'i' };
//     }

//     // If matchQuery is {} (empty), aggregate will return all students
//     const students = await Student.aggregate([
//       { $match: matchQuery },
//       {
//         $addFields: {
//           // Boost exact matches to the top
//           exactMatch: {
//             $cond: [
//               { $eq: [{ $toLower: "$name" }, (name || "").toLowerCase().trim()] }, 
//               1, 0
//             ]
//           }
//         }
//       },
//       { $sort: { exactMatch: -1, createdAt: -1 } }, // Newest first, with exact matches boosted
//       { $limit: 100 } 
//     ]);

//     res.json(students);
//   } catch (err) {
//     console.error("Fetch/Search Error:", err);
//     res.status(500).json({ message: "Internal Server Error: " + err.message });
//   }
// });

// /**
//  * PUT: Update Existing Student Record
//  */
// router.put('/:id', async (req, res) => {
//   try {
//     const updatedStudent = await Student.findByIdAndUpdate(
//       req.params.id, 
//       { $set: req.body }, 
//       { new: true, runValidators: true }
//     );

//     if (!updatedStudent) {
//       return res.status(404).json({ message: "Student record not found." });
//     }

//     res.json({ 
//       message: "Record updated successfully", 
//       updatedStudent 
//     });
//   } catch (err) {
//     console.error("Update Error:", err);
//     res.status(500).json({ message: err.message });
//   }
// });








// export default router;








// import express from 'express';
// import multer from 'multer';
// import Student from '../models/Student.js';
// import { uploadToCloudinary } from '../utils/cloudinary.js';

// const router = express.Router();

// /**
//  * MULTER CONFIGURATION
//  */
// const upload = multer({
//   storage: multer.memoryStorage(),
//   limits: { fileSize: 10 * 1024 * 1024 }
// });

// /**
//  * SINGLE ADMISSION
//  */
// router.post('/admission', upload.any(), async (req, res) => {
//   try {
//     if (!req.body.data) {
//       return res.status(400).json({ message: "Student data is missing." });
//     }

//     const studentData = JSON.parse(req.body.data);
//     const files = req.files;

//     const uploadedDocs = {
//       studentAadhaarFile: "",
//       fatherAadhaarFile: "",
//       motherAadhaarFile: "",
//       guardianAadhaarFile: "",
//       tcFile: "",
//       conductFile: "",
//       marksMemoFile: ""
//     };

//     if (files && files.length > 0) {
//       const uploadPromises = files.map(async (file) => {
//         const url = await uploadToCloudinary(
//           file.buffer,
//           `school_management/admissions/${file.fieldname}`
//         );

//         uploadedDocs[file.fieldname] = url;
//       });

//       await Promise.all(uploadPromises);
//     }

//     const finalStudentData = {
//       ...studentData,
//       documents: {
//         hasTC: studentData.documents?.hasTC || false,
//         hasConduct: studentData.documents?.hasConduct || false,
//         hasMarksMemo: studentData.documents?.hasMarksMemo || false,

//         studentAadhaarFile: uploadedDocs.studentAadhaarFile,
//         fatherAadhaarFile: uploadedDocs.fatherAadhaarFile,
//         motherAadhaarFile: uploadedDocs.motherAadhaarFile,
//         guardianAadhaarFile: uploadedDocs.guardianAadhaarFile,

//         tcFile: uploadedDocs.tcFile,
//         conductFile: uploadedDocs.conductFile,
//         marksMemoFile: uploadedDocs.marksMemoFile
//       }
//     };

//     const newStudent = new Student(finalStudentData);
//     await newStudent.save();

//     res.status(201).json({
//       message: "Admission finalized and documents secured!",
//       studentId: newStudent._id
//     });

//   } catch (err) {
//     console.error("Admission Error:", err);

//     if (err.code === 11000) {
//       return res.status(400).json({
//         message: "Admission Number already exists!"
//       });
//     }

//     res.status(500).json({
//       message: "Internal Server Error: " + err.message
//     });
//   }
// });

// // =============================
// // FIX ONLY THIS BULK ROUTE
// // Replace your current /bulk-admission route with this fully corrected version
// // =============================

// router.post('/bulk-admission', async (req, res) => {
//   try {
//     const { students } = req.body;

//     if (!students || !Array.isArray(students) || students.length === 0) {
//       return res.status(400).json({
//         message: "No student records received."
//       });
//     }

//     const validStudents = [];
//     const skippedRecords = [];

//     // STEP 1: Get all existing admission numbers from DB
//     const existingStudents = await Student.find(
//       {},
//       { "admissionInfo.admissionNo": 1 }
//     );

//     const existingAdmissionNos = new Set(
//       existingStudents.map(
//         s => String(s.admissionInfo?.admissionNo || "").trim()
//       )
//     );

//     // STEP 2: Track duplicates inside same Excel file
//     const excelAdmissionNos = new Set();

//     for (let i = 0; i < students.length; i++) {
//       const student = students[i];

//       const admissionNo = String(
//         student.admissionInfo?.admissionNo || ""
//       ).trim();

//       // REQUIRED FIELD CHECK
//       if (
//         !student.name ||
//         student.name === "N/A" ||
//         !student.dob ||
//         !student.parentDetails?.fatherName ||
//         student.parentDetails.fatherName === "N/A" ||
//         !student.parentDetails?.motherName ||
//         student.parentDetails.motherName === "N/A" ||
//         !admissionNo ||
//         admissionNo === "N/A"
//       ) {
//         skippedRecords.push({
//           row: i + 1,
//           name: student.name || "Unknown",
//           admissionNo,
//           reason: "Missing required fields"
//         });
//         continue;
//       }

//       // DUPLICATE IN DATABASE
//       if (existingAdmissionNos.has(admissionNo)) {
//         skippedRecords.push({
//           row: i + 1,
//           name: student.name,
//           admissionNo,
//           reason: "Already exists in database"
//         });
//         continue;
//       }

//       // DUPLICATE INSIDE EXCEL
//       if (excelAdmissionNos.has(admissionNo)) {
//         skippedRecords.push({
//           row: i + 1,
//           name: student.name,
//           admissionNo,
//           reason: "Duplicate in Excel file"
//         });
//         continue;
//       }

//       // Add to tracking
//       excelAdmissionNos.add(admissionNo);

//       // CLEAN DATA
//       validStudents.push({
//         ...student,
//         admissionInfo: {
//           ...student.admissionInfo,
//           admissionNo
//         },
//         documents: {
//           hasTC: false,
//           hasConduct: false,
//           hasMarksMemo: false,
//           studentAadhaarFile: "",
//           fatherAadhaarFile: "",
//           motherAadhaarFile: "",
//           guardianAadhaarFile: "",
//           tcFile: "",
//           conductFile: "",
//           marksMemoFile: ""
//         },
//         status: "ACTIVE"
//       });
//     }

//     // STEP 3: If nothing valid
//     if (validStudents.length === 0) {
//       return res.status(400).json({
//         message: "No valid student records found.",
//         skippedRecords
//       });
//     }

//     // STEP 4: Insert safely
//     let insertedStudents = [];

//     try {
//       insertedStudents = await Student.insertMany(validStudents, {
//         ordered: false
//       });
//     } catch (insertErr) {
//       // Partial success still possible
//       if (insertErr.insertedDocs) {
//         insertedStudents = insertErr.insertedDocs;
//       }

//       // Capture duplicate insert errors
//       if (insertErr.writeErrors) {
//         insertErr.writeErrors.forEach(err => {
//           skippedRecords.push({
//             row: err.index + 1,
//             admissionNo:
//               err.err.op?.admissionInfo?.admissionNo || "Unknown",
//             reason: "Duplicate detected during insert"
//           });
//         });
//       }
//     }

//     // STEP 5: Final Response
//     return res.status(201).json({
//       message: "Bulk admission completed successfully!",
//       count: insertedStudents.length,
//       skipped: skippedRecords.length,
//       skippedRecords
//     });

//   } catch (err) {
//     console.error("Bulk Admission Error:", err);

//     return res.status(500).json({
//       message: "Bulk import failed: " + err.message
//     });
//   }
// });

// /**
//  * SEARCH
//  */
// router.get('/search', async (req, res) => {
//   try {
//     const { name, fatherName } = req.query;
//     let matchQuery = {};

//     if (name && name.trim().length > 0) {
//       matchQuery.name = { $regex: name.trim(), $options: 'i' };
//     }

//     if (fatherName && fatherName.trim().length > 0) {
//       matchQuery["parentDetails.fatherName"] = {
//         $regex: fatherName.trim(),
//         $options: 'i'
//       };
//     }

//     const students = await Student.aggregate([
//       { $match: matchQuery },
//       {
//         $addFields: {
//           exactMatch: {
//             $cond: [
//               {
//                 $eq: [
//                   { $toLower: "$name" },
//                   (name || "").toLowerCase().trim()
//                 ]
//               },
//               1,
//               0
//             ]
//           }
//         }
//       },
//       { $sort: { exactMatch: -1, createdAt: -1 } },
//       { $limit: 100 }
//     ]);

//     res.json(students);

//   } catch (err) {
//     console.error("Fetch/Search Error:", err);

//     res.status(500).json({
//       message: "Internal Server Error: " + err.message
//     });
//   }
// });

// /**
//  * DOCUMENT DASHBOARD COUNTS
//  */
// router.get('/dashboard-counts', async (req, res) => {
//   try {
//     const totalStudents = await Student.countDocuments();

//     const tcSubmitted = await Student.countDocuments({
//       "documents.tcFile": { $exists: true, $ne: "" }
//     });

//     const conductSubmitted = await Student.countDocuments({
//       "documents.conductFile": { $exists: true, $ne: "" }
//     });

//     const marksMemoSubmitted = await Student.countDocuments({
//       "documents.marksMemoFile": { $exists: true, $ne: "" }
//     });

//     res.status(200).json({
//       totalStudents,

//       tcSubmitted,
//       tcNotSubmitted: totalStudents - tcSubmitted,

//       conductSubmitted,
//       conductNotSubmitted: totalStudents - conductSubmitted,

//       marksMemoSubmitted,
//       marksMemoNotSubmitted: totalStudents - marksMemoSubmitted
//     });

//   } catch (err) {
//     console.error("Dashboard Count Error:", err);

//     res.status(500).json({
//       message: "Failed to fetch dashboard counts"
//     });
//   }
// });

// /**
//  * UPDATE
//  */
// router.put('/:id', async (req, res) => {
//   try {
//     const updatedStudent = await Student.findByIdAndUpdate(
//       req.params.id,
//       { $set: req.body },
//       { new: true, runValidators: true }
//     );

//     if (!updatedStudent) {
//       return res.status(404).json({
//         message: "Student record not found."
//       });
//     }

//     res.json({
//       message: "Record updated successfully",
//       updatedStudent
//     });

//   } catch (err) {
//     console.error("Update Error:", err);

//     res.status(500).json({
//       message: err.message
//     });
//   }
// });

// router.post('/upload/:id/:fieldName', upload.single('file'), async (req, res) => {
//   try {
//     if (!req.file) {
//       return res.status(400).json({
//         error: "No file uploaded"
//       });
//     }

//     const { id, fieldName } = req.params;

//     const allowedFields = [
//       "studentAadhaarFile",
//       "fatherAadhaarFile",
//       "motherAadhaarFile",
//       "guardianAadhaarFile",
//       "tcFile",
//       "conductFile",
//       "marksMemoFile"
//     ];

//     if (!allowedFields.includes(fieldName)) {
//       return res.status(400).json({
//         error: "Invalid document field"
//       });
//     }

//     // Upload to Cloudinary
//     const fileUrl = await uploadToCloudinary(
//       req.file.buffer,
//       `school_management/student_documents/${fieldName}`
//     );

//     // Save directly into MongoDB
//     const updatedStudent = await Student.findByIdAndUpdate(
//       id,
//       {
//         $set: {
//           [`documents.${fieldName}`]: fileUrl
//         }
//       },
//       {
//         new: true,
//         runValidators: true
//       }
//     );

//     if (!updatedStudent) {
//       return res.status(404).json({
//         error: "Student not found"
//       });
//     }

//     res.status(200).json({
//       message: "File uploaded successfully",
//       updatedStudent
//     });

//   } catch (err) {
//     console.error("Upload Error:", err);

//     res.status(500).json({
//       error: "Upload failed: " + err.message
//     });
//   }
// });



// export default router;








// goood upto now



// import express from 'express';
// import multer from 'multer';
// import Student from '../models/Student.js';
// import { uploadToCloudinary } from '../utils/cloudinary.js';
// import ExcelJS from "exceljs";

// const router = express.Router();

// /**
//  * MULTER CONFIGURATION
//  */
// const upload = multer({
//   storage: multer.memoryStorage(),
//   limits: { fileSize: 10 * 1024 * 1024 }
// });

// /**
//  * SINGLE ADMISSION
//  */
// router.post('/admission', upload.any(), async (req, res) => {
//   try {
//     if (!req.body.data) {
//       return res.status(400).json({ message: "Student data is missing." });
//     }

//     const studentData = JSON.parse(req.body.data);
//     const files = req.files;

//     const uploadedDocs = {
//       studentAadhaarFile: "",
//       fatherAadhaarFile: "",
//       motherAadhaarFile: "",
//       guardianAadhaarFile: "",
//       tcFile: "",
//       conductFile: "",
//       marksMemoFile: ""
//     };

//     if (files && files.length > 0) {
//       const uploadPromises = files.map(async (file) => {
//         const url = await uploadToCloudinary(
//           file.buffer,
//           `school_management/admissions/${file.fieldname}`
//         );

//         uploadedDocs[file.fieldname] = url;
//       });

//       await Promise.all(uploadPromises);
//     }

//     const finalStudentData = {
//       ...studentData,
//       documents: {
//         hasTC: studentData.documents?.hasTC || false,
//         hasConduct: studentData.documents?.hasConduct || false,
//         hasMarksMemo: studentData.documents?.hasMarksMemo || false,

//         studentAadhaarFile: uploadedDocs.studentAadhaarFile,
//         fatherAadhaarFile: uploadedDocs.fatherAadhaarFile,
//         motherAadhaarFile: uploadedDocs.motherAadhaarFile,
//         guardianAadhaarFile: uploadedDocs.guardianAadhaarFile,

//         tcFile: uploadedDocs.tcFile,
//         conductFile: uploadedDocs.conductFile,
//         marksMemoFile: uploadedDocs.marksMemoFile
//       }
//     };

//     const newStudent = new Student(finalStudentData);
//     await newStudent.save();

//     res.status(201).json({
//       message: "Admission finalized and documents secured!",
//       studentId: newStudent._id
//     });

//   } catch (err) {
//     console.error("Admission Error:", err);

//     if (err.code === 11000) {
//       return res.status(400).json({
//         message: "Admission Number already exists!"
//       });
//     }

//     res.status(500).json({
//       message: "Internal Server Error: " + err.message
//     });
//   }
// });

// // =============================
// // FIX ONLY THIS BULK ROUTE
// // Replace your current /bulk-admission route with this fully corrected version
// // =============================

// router.post('/bulk-admission', async (req, res) => {
//   try {
//     const { students } = req.body;

//     if (!students || !Array.isArray(students) || students.length === 0) {
//       return res.status(400).json({
//         message: "No student records received."
//       });
//     }

//     const validStudents = [];
//     const skippedRecords = [];

//     // STEP 1: Get all existing admission numbers from DB
//     const existingStudents = await Student.find(
//       {},
//       { "admissionInfo.admissionNo": 1 }
//     );

//     const existingAdmissionNos = new Set(
//       existingStudents.map(
//         s => String(s.admissionInfo?.admissionNo || "").trim()
//       )
//     );

//     // STEP 2: Track duplicates inside same Excel file
//     const excelAdmissionNos = new Set();

//     for (let i = 0; i < students.length; i++) {
//       const student = students[i];

//       const admissionNo = String(
//         student.admissionInfo?.admissionNo || ""
//       ).trim();

//       // REQUIRED FIELD CHECK
//       if (
//         !student.name ||
//         student.name === "N/A" ||
//         !student.dob ||
//         !student.parentDetails?.fatherName ||
//         student.parentDetails.fatherName === "N/A" ||
//         !student.parentDetails?.motherName ||
//         student.parentDetails.motherName === "N/A" ||
//         !admissionNo ||
//         admissionNo === "N/A"
//       ) {
//         skippedRecords.push({
//           row: i + 1,
//           name: student.name || "Unknown",
//           admissionNo,
//           reason: "Missing required fields"
//         });
//         continue;
//       }

//       // DUPLICATE IN DATABASE
//       if (existingAdmissionNos.has(admissionNo)) {
//         skippedRecords.push({
//           row: i + 1,
//           name: student.name,
//           admissionNo,
//           reason: "Already exists in database"
//         });
//         continue;
//       }

//       // DUPLICATE INSIDE EXCEL
//       if (excelAdmissionNos.has(admissionNo)) {
//         skippedRecords.push({
//           row: i + 1,
//           name: student.name,
//           admissionNo,
//           reason: "Duplicate in Excel file"
//         });
//         continue;
//       }

//       // Add to tracking
//       excelAdmissionNos.add(admissionNo);

//       // CLEAN DATA
//       validStudents.push({
//         ...student,
//         admissionInfo: {
//           ...student.admissionInfo,
//           admissionNo
//         },
//         documents: {
//           hasTC: false,
//           hasConduct: false,
//           hasMarksMemo: false,
//           studentAadhaarFile: "",
//           fatherAadhaarFile: "",
//           motherAadhaarFile: "",
//           guardianAadhaarFile: "",
//           tcFile: "",
//           conductFile: "",
//           marksMemoFile: ""
//         },
//         status: "ACTIVE"
//       });
//     }

//     // STEP 3: If nothing valid
//     if (validStudents.length === 0) {
//       return res.status(400).json({
//         message: "No valid student records found.",
//         skippedRecords
//       });
//     }

//     // STEP 4: Insert safely
//     let insertedStudents = [];

//     try {
//       insertedStudents = await Student.insertMany(validStudents, {
//         ordered: false
//       });
//     } catch (insertErr) {
//       // Partial success still possible
//       if (insertErr.insertedDocs) {
//         insertedStudents = insertErr.insertedDocs;
//       }

//       // Capture duplicate insert errors
//       if (insertErr.writeErrors) {
//         insertErr.writeErrors.forEach(err => {
//           skippedRecords.push({
//             row: err.index + 1,
//             admissionNo:
//               err.err.op?.admissionInfo?.admissionNo || "Unknown",
//             reason: "Duplicate detected during insert"
//           });
//         });
//       }
//     }

//     // STEP 5: Final Response
//     return res.status(201).json({
//       message: "Bulk admission completed successfully!",
//       count: insertedStudents.length,
//       skipped: skippedRecords.length,
//       skippedRecords
//     });

//   } catch (err) {
//     console.error("Bulk Admission Error:", err);

//     return res.status(500).json({
//       message: "Bulk import failed: " + err.message
//     });
//   }
// });

// /**
//  * SEARCH
//  */
// router.get('/search', async (req, res) => {
//   try {
//     const { name, fatherName, pending } = req.query;
//     let matchQuery = {};

//     // NAME SEARCH
//     if (name && name.trim().length > 0) {
//       matchQuery.name = { $regex: name.trim(), $options: 'i' };
//     }

//     // FATHER NAME SEARCH
//     if (fatherName && fatherName.trim().length > 0) {
//       matchQuery["parentDetails.fatherName"] = {
//         $regex: fatherName.trim(),
//         $options: 'i'
//       };
//     }

//     // DOCUMENT PENDING FILTER
//     if (pending === "tc") {
//       matchQuery["documents.tcFile"] = { $in: ["", null] };
//     }

//     if (pending === "conduct") {
//       matchQuery["documents.conductFile"] = { $in: ["", null] };
//     }

//     if (pending === "marksmemo") {
//       matchQuery["documents.marksMemoFile"] = { $in: ["", null] };
//     }

//     const students = await Student.aggregate([
//       { $match: matchQuery },

//       {
//         $addFields: {
//           exactMatch: {
//             $cond: [
//               {
//                 $eq: [
//                   { $toLower: "$name" },
//                   (name || "").toLowerCase().trim()
//                 ]
//               },
//               1,
//               0
//             ]
//           }
//         }
//       },

//       { $sort: { exactMatch: -1, createdAt: -1 } },

//       { $limit: 500 }
//     ]);

//     res.json(students);

//   } catch (err) {
//     console.error("Fetch/Search Error:", err);

//     res.status(500).json({
//       message: "Internal Server Error: " + err.message
//     });
//   }
// });

// /**
//  * DOCUMENT DASHBOARD COUNTS
//  */
// router.get('/dashboard-counts', async (req, res) => {
//   try {
//     const totalStudents = await Student.countDocuments();

//     const tcSubmitted = await Student.countDocuments({
//       "documents.tcFile": { $exists: true, $ne: "" }
//     });

//     const conductSubmitted = await Student.countDocuments({
//       "documents.conductFile": { $exists: true, $ne: "" }
//     });

//     const marksMemoSubmitted = await Student.countDocuments({
//       "documents.marksMemoFile": { $exists: true, $ne: "" }
//     });

//     res.status(200).json({
//       totalStudents,

//       tcSubmitted,
//       tcNotSubmitted: totalStudents - tcSubmitted,

//       conductSubmitted,
//       conductNotSubmitted: totalStudents - conductSubmitted,

//       marksMemoSubmitted,
//       marksMemoNotSubmitted: totalStudents - marksMemoSubmitted
//     });

//   } catch (err) {
//     console.error("Dashboard Count Error:", err);

//     res.status(500).json({
//       message: "Failed to fetch dashboard counts"
//     });
//   }
// });

// /**
//  * UPDATE
//  */
// router.put('/:id', async (req, res) => {
//   try {
//     const updatedStudent = await Student.findByIdAndUpdate(
//       req.params.id,
//       { $set: req.body },
//       { new: true, runValidators: true }
//     );

//     if (!updatedStudent) {
//       return res.status(404).json({
//         message: "Student record not found."
//       });
//     }

//     res.json({
//       message: "Record updated successfully",
//       updatedStudent
//     });

//   } catch (err) {
//     console.error("Update Error:", err);

//     res.status(500).json({
//       message: err.message
//     });
//   }
// });

// router.post('/upload/:id/:fieldName', upload.single('file'), async (req, res) => {
//   try {
//     if (!req.file) {
//       return res.status(400).json({
//         error: "No file uploaded"
//       });
//     }

//     const { id, fieldName } = req.params;

//     const allowedFields = [
//       "studentAadhaarFile",
//       "fatherAadhaarFile",
//       "motherAadhaarFile",
//       "guardianAadhaarFile",
//       "tcFile",
//       "conductFile",
//       "marksMemoFile"
//     ];

//     if (!allowedFields.includes(fieldName)) {
//       return res.status(400).json({
//         error: "Invalid document field"
//       });
//     }

//     // Upload to Cloudinary
//     const fileUrl = await uploadToCloudinary(
//       req.file.buffer,
//       `school_management/student_documents/${fieldName}`
//     );

//     // Save directly into MongoDB
//     const updatedStudent = await Student.findByIdAndUpdate(
//       id,
//       {
//         $set: {
//           [`documents.${fieldName}`]: fileUrl
//         }
//       },
//       {
//         new: true,
//         runValidators: true
//       }
//     );

//     if (!updatedStudent) {
//       return res.status(404).json({
//         error: "Student not found"
//       });
//     }

//     res.status(200).json({
//       message: "File uploaded successfully",
//       updatedStudent
//     });

//   } catch (err) {
//     console.error("Upload Error:", err);

//     res.status(500).json({
//       error: "Upload failed: " + err.message
//     });
//   }
// });

// router.get("/export-excel", async (req, res) => {
//   try {
//     const { pending } = req.query;

//     let filter = {};

//     // FIXED FILTERS
//     if (pending === "tc") {
//       filter["documents.tcFile"] = { $in: ["", null] };
//     }

//     if (pending === "conduct") {
//       filter["documents.conductFile"] = { $in: ["", null] };
//     }

//     if (pending === "marksmemo") {
//       filter["documents.marksMemoFile"] = { $in: ["", null] };
//     }

//     const students = await Student.find(filter).sort({
//   "admissionInfo.classAdmittedTo": 1,
//   "admissionInfo.admissionNo": 1
// });

//     const workbook = new ExcelJS.Workbook();
//     const worksheet = workbook.addWorksheet("Students");

//     worksheet.columns = [
//   // STUDENT PERSONAL DETAILS
//   { header: "Full Name", key: "name", width: 25 },
//   { header: "Aadhaar No", key: "aadhaarNo", width: 22 },
//   { header: "Date of Birth", key: "dob", width: 18 },
//   { header: "Gender", key: "gender", width: 15 },
//   { header: "Nationality", key: "nationality", width: 18 },
//   { header: "Religion", key: "religion", width: 18 },
//   { header: "Caste", key: "caste", width: 18 },
//   { header: "Mother Tongue", key: "motherTongue", width: 18 },
//   { header: "State", key: "state", width: 18 },
//   { header: "UDISE Plus", key: "udisePlus", width: 20 },
//   { header: "Siblings Info", key: "siblings", width: 20 },
//   { header: "CWSN Status", key: "cwsn", width: 25 },
//   { header: "First Language", key: "firstLanguage", width: 18 },
//   { header: "Second Language", key: "secondLanguage", width: 18 },
//   { header: "Third Language", key: "thirdLanguage", width: 18 },

//   // FATHER DETAILS
//   { header: "Father Name", key: "fatherName", width: 25 },
//   { header: "Father Mobile", key: "fatherMobile", width: 18 },
//   { header: "Father Aadhaar", key: "fatherAadhaar", width: 22 },
//   { header: "Father Qualification", key: "fatherQualification", width: 20 },
//   { header: "Father Occupation", key: "fatherOccupation", width: 20 },
//   { header: "Father Annual Income", key: "fatherAnnualIncome", width: 20 },

//   // MOTHER DETAILS
//   { header: "Mother Name", key: "motherName", width: 25 },
//   { header: "Mother Mobile", key: "motherMobile", width: 18 },
//   { header: "Mother Aadhaar", key: "motherAadhaar", width: 22 },
//   { header: "Mother Qualification", key: "motherQualification", width: 20 },
//   { header: "Mother Occupation", key: "motherOccupation", width: 20 },
//   { header: "Mother Annual Income", key: "motherAnnualIncome", width: 20 },

//   // GUARDIAN DETAILS
//   { header: "Guardian Name", key: "guardianName", width: 25 },
//   { header: "Guardian Relation", key: "guardianRelation", width: 18 },
//   { header: "Guardian Mobile", key: "guardianMobile", width: 18 },
//   { header: "Guardian Aadhaar", key: "guardianAadhaar", width: 22 },
//   { header: "Guardian Occupation", key: "guardianOccupation", width: 20 },
//   { header: "Guardian Annual Income", key: "guardianAnnualIncome", width: 20 },

//   // ADDRESS
//   { header: "Residence Address", key: "residence", width: 40 },

//   // ADMISSION DETAILS
//   { header: "Admission No", key: "admissionNo", width: 18 },
//   { header: "Class Admitted To", key: "classAdmittedTo", width: 18 },
//   { header: "Previous School Name", key: "previousSchoolName", width: 30 },
//   { header: "Previous TC Number", key: "previousTCNumber", width: 20 },
//   { header: "Previous TC Date", key: "previousTCDate", width: 18 },

//   // DOCUMENT STATUS
//   { header: "Student Aadhaar File", key: "studentAadhaarFile", width: 20 },
//   { header: "Father Aadhaar File", key: "fatherAadhaarFile", width: 20 },
//   { header: "Mother Aadhaar File", key: "motherAadhaarFile", width: 20 },
//   { header: "Guardian Aadhaar File", key: "guardianAadhaarFile", width: 20 },
//   { header: "TC File", key: "tcFile", width: 20 },
//   { header: "Conduct File", key: "conductFile", width: 20 },
//   { header: "Marks Memo File", key: "marksMemoFile", width: 20 }
// ];
//     students.forEach(student => {
//      worksheet.addRow({
//   // PERSONAL
//   name: student.name || "",
//   aadhaarNo: student.aadhaarNo || "",
//   dob: student.dob ? new Date(student.dob).toLocaleDateString("en-GB") : "",
//   gender: student.gender || "",
//   nationality: student.nationality || "",
//   religion: student.religion || "",
//   caste: student.caste || "",
//   motherTongue: student.motherTongue || "",
//   state: student.state || "",
//   udisePlus: student.udisePlus || "",
//   siblings: student.siblings || "",
//   cwsn: student.cwsn || "",
//   firstLanguage: student.firstLanguage || "",
//   secondLanguage: student.secondLanguage || "",
//   thirdLanguage: student.thirdLanguage || "",

//   // FATHER
//   fatherName: student.parentDetails?.fatherName || "",
//   fatherMobile: student.parentDetails?.fatherMobile || "",
//   fatherAadhaar: student.parentDetails?.fatherAadhaar || "",
//   fatherQualification: student.parentDetails?.fatherQualification || "",
//   fatherOccupation: student.parentDetails?.fatherOccupation || "",
//   fatherAnnualIncome: student.parentDetails?.fatherAnnualIncome || "",

//   // MOTHER
//   motherName: student.parentDetails?.motherName || "",
//   motherMobile: student.parentDetails?.motherMobile || "",
//   motherAadhaar: student.parentDetails?.motherAadhaar || "",
//   motherQualification: student.parentDetails?.motherQualification || "",
//   motherOccupation: student.parentDetails?.motherOccupation || "",
//   motherAnnualIncome: student.parentDetails?.motherAnnualIncome || "",

//   // GUARDIAN
//   guardianName: student.parentDetails?.guardianName || "",
//   guardianRelation: student.parentDetails?.guardianRelation || "",
//   guardianMobile: student.parentDetails?.guardianMobile || "",
//   guardianAadhaar: student.parentDetails?.guardianAadhaar || "",
//   guardianOccupation: student.parentDetails?.guardianOccupation || "",
//   guardianAnnualIncome: student.parentDetails?.guardianAnnualIncome || "",

//   // ADDRESS
//   residence: student.parentDetails?.residence || "",

//   // ADMISSION
//   admissionNo: student.admissionInfo?.admissionNo || "",
//   classAdmittedTo: student.admissionInfo?.classAdmittedTo || "",
//   previousSchoolName: student.admissionInfo?.previousSchoolName || "",
//   previousTCNumber: student.admissionInfo?.previousTCNumber || "",
//   previousTCDate: student.admissionInfo?.previousTCDate
//     ? new Date(student.admissionInfo.previousTCDate).toLocaleDateString("en-GB")
//     : "",

//   // DOCUMENT STATUS
//   studentAadhaarFile: student.documents?.studentAadhaarFile ? "Uploaded" : "Not Uploaded",
//   fatherAadhaarFile: student.documents?.fatherAadhaarFile ? "Uploaded" : "Not Uploaded",
//   motherAadhaarFile: student.documents?.motherAadhaarFile ? "Uploaded" : "Not Uploaded",
//   guardianAadhaarFile: student.documents?.guardianAadhaarFile ? "Uploaded" : "Not Uploaded",
//   tcFile: student.documents?.tcFile ? "Uploaded" : "Not Uploaded",
//   conductFile: student.documents?.conductFile ? "Uploaded" : "Not Uploaded",
//   marksMemoFile: student.documents?.marksMemoFile ? "Uploaded" : "Not Uploaded"
// });
//     });

//     // HEADER STYLE
//     worksheet.getRow(1).font = { bold: true };

//     res.setHeader(
//       "Content-Type",
//       "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
//     );

//     res.setHeader(
//       "Content-Disposition",
//       "attachment; filename=students.xlsx"
//     );

//     await workbook.xlsx.write(res);

//     res.end();

//   } catch (error) {
//     console.error("Excel Export Error:", error);

//     res.status(500).json({
//       error: "Failed to export Excel"
//     });
//   }
// });

// export default router;









// 18-05-2026









// import express from 'express';
// import multer from 'multer';
// import Student from '../models/Student.js';
// import { uploadToCloudinary } from '../utils/cloudinary.js';
// import ExcelJS from "exceljs";

// const router = express.Router();

// /**
//  * MULTER CONFIGURATION
//  */
// const upload = multer({
//   storage: multer.memoryStorage(),
//   limits: { fileSize: 10 * 1024 * 1024 }
// });

// /**
//  * SINGLE ADMISSION
//  */
// router.post('/admission', upload.any(), async (req, res) => {
//   try {
//     if (!req.body.data) {
//       return res.status(400).json({ message: "Student data is missing." });
//     }

//     const studentData = JSON.parse(req.body.data);
//     const files = req.files;

//     const uploadedDocs = {
//       studentAadhaarFile: "",
//       fatherAadhaarFile: "",
//       motherAadhaarFile: "",
//       guardianAadhaarFile: "",
//       tcFile: "",
//       conductFile: "",
//       marksMemoFile: ""
//     };

//     if (files && files.length > 0) {
//       const uploadPromises = files.map(async (file) => {
//         const url = await uploadToCloudinary(
//           file.buffer,
//           `school_management/admissions/${file.fieldname}`
//         );

//         uploadedDocs[file.fieldname] = url;
//       });

//       await Promise.all(uploadPromises);
//     }

//     const finalStudentData = {
//       ...studentData,
//       documents: {
//         hasTC: studentData.documents?.hasTC || false,
//         hasConduct: studentData.documents?.hasConduct || false,
//         hasMarksMemo: studentData.documents?.hasMarksMemo || false,

//         studentAadhaarFile: uploadedDocs.studentAadhaarFile,
//         fatherAadhaarFile: uploadedDocs.fatherAadhaarFile,
//         motherAadhaarFile: uploadedDocs.motherAadhaarFile,
//         guardianAadhaarFile: uploadedDocs.guardianAadhaarFile,

//         tcFile: uploadedDocs.tcFile,
//         conductFile: uploadedDocs.conductFile,
//         marksMemoFile: uploadedDocs.marksMemoFile
//       }
//     };

//     const newStudent = new Student(finalStudentData);
//     await newStudent.save();

//     res.status(201).json({
//       message: "Admission finalized and documents secured!",
//       studentId: newStudent._id
//     });

//   } catch (err) {
//     console.error("Admission Error:", err);

//     if (err.code === 11000) {
//       return res.status(400).json({
//         message: "Admission Number already exists!"
//       });
//     }

//     res.status(500).json({
//       message: "Internal Server Error: " + err.message
//     });
//   }
// });

// // =============================
// // FIX ONLY THIS BULK ROUTE
// // Replace your current /bulk-admission route with this fully corrected version
// // =============================

// router.post('/bulk-admission', async (req, res) => {
//   try {
//     const { students } = req.body;

//     if (!students || !Array.isArray(students) || students.length === 0) {
//       return res.status(400).json({
//         message: "No student records received."
//       });
//     }

//     const validStudents = [];
//     const skippedRecords = [];

//     // STEP 1: Get all existing admission numbers from DB
//     const existingStudents = await Student.find(
//       {},
//       { "admissionInfo.admissionNo": 1 }
//     );

//     const existingAdmissionNos = new Set(
//       existingStudents.map(
//         s => String(s.admissionInfo?.admissionNo || "").trim()
//       )
//     );

//     // STEP 2: Track duplicates inside same Excel file
//     const excelAdmissionNos = new Set();

//     for (let i = 0; i < students.length; i++) {
//       const student = students[i];

//       const admissionNo = String(
//         student.admissionInfo?.admissionNo || ""
//       ).trim();

//       // REQUIRED FIELD CHECK
//       if (
//         !student.name ||
//         student.name === "N/A" ||
//         !student.dob ||
//         !student.parentDetails?.fatherName ||
//         student.parentDetails.fatherName === "N/A" ||
//         !student.parentDetails?.motherName ||
//         student.parentDetails.motherName === "N/A" ||
//         !admissionNo ||
//         admissionNo === "N/A"
//       ) {
//         skippedRecords.push({
//           row: i + 1,
//           name: student.name || "Unknown",
//           admissionNo,
//           reason: "Missing required fields"
//         });
//         continue;
//       }

//       // DUPLICATE IN DATABASE
//       if (existingAdmissionNos.has(admissionNo)) {
//         skippedRecords.push({
//           row: i + 1,
//           name: student.name,
//           admissionNo,
//           reason: "Already exists in database"
//         });
//         continue;
//       }

//       // DUPLICATE INSIDE EXCEL
//       if (excelAdmissionNos.has(admissionNo)) {
//         skippedRecords.push({
//           row: i + 1,
//           name: student.name,
//           admissionNo,
//           reason: "Duplicate in Excel file"
//         });
//         continue;
//       }

//       // Add to tracking
//       excelAdmissionNos.add(admissionNo);

//       // CLEAN DATA
//       validStudents.push({
//         ...student,
//         admissionInfo: {
//           ...student.admissionInfo,
//           admissionNo
//         },
//         documents: {
//           hasTC: false,
//           hasConduct: false,
//           hasMarksMemo: false,
//           studentAadhaarFile: "",
//           fatherAadhaarFile: "",
//           motherAadhaarFile: "",
//           guardianAadhaarFile: "",
//           tcFile: "",
//           conductFile: "",
//           marksMemoFile: ""
//         },
//         status: "ACTIVE"
//       });
//     }

//     // STEP 3: If nothing valid
//     if (validStudents.length === 0) {
//       return res.status(400).json({
//         message: "No valid student records found.",
//         skippedRecords
//       });
//     }

//     // STEP 4: Insert safely
//     let insertedStudents = [];

//     try {
//       insertedStudents = await Student.insertMany(validStudents, {
//         ordered: false
//       });
//     } catch (insertErr) {
//       // Partial success still possible
//       if (insertErr.insertedDocs) {
//         insertedStudents = insertErr.insertedDocs;
//       }

//       // Capture duplicate insert errors
//       if (insertErr.writeErrors) {
//         insertErr.writeErrors.forEach(err => {
//           skippedRecords.push({
//             row: err.index + 1,
//             admissionNo:
//               err.err.op?.admissionInfo?.admissionNo || "Unknown",
//             reason: "Duplicate detected during insert"
//           });
//         });
//       }
//     }

//     // STEP 5: Final Response
//     return res.status(201).json({
//       message: "Bulk admission completed successfully!",
//       count: insertedStudents.length,
//       skipped: skippedRecords.length,
//       skippedRecords
//     });

//   } catch (err) {
//     console.error("Bulk Admission Error:", err);

//     return res.status(500).json({
//       message: "Bulk import failed: " + err.message
//     });
//   }
// });

// /**
//  * SEARCH
//  */
// router.get('/search', async (req, res) => {
//   try {
//     const { name, fatherName, pending } = req.query;
//     let matchQuery = {};

//     // NAME SEARCH
//     if (name && name.trim().length > 0) {
//       matchQuery.name = { $regex: name.trim(), $options: 'i' };
//     }

//     // FATHER NAME SEARCH
//     if (fatherName && fatherName.trim().length > 0) {
//       matchQuery["parentDetails.fatherName"] = {
//         $regex: fatherName.trim(),
//         $options: 'i'
//       };
//     }

//     // DOCUMENT PENDING FILTER
//     if (pending === "tc") {
//       matchQuery["documents.tcFile"] = { $in: ["", null] };
//     }

//     if (pending === "conduct") {
//       matchQuery["documents.conductFile"] = { $in: ["", null] };
//     }

//     if (pending === "marksmemo") {
//       matchQuery["documents.marksMemoFile"] = { $in: ["", null] };
//     }

//     const students = await Student.aggregate([
//       { $match: matchQuery },

//       {
//         $addFields: {
//           exactMatch: {
//             $cond: [
//               {
//                 $eq: [
//                   { $toLower: "$name" },
//                   (name || "").toLowerCase().trim()
//                 ]
//               },
//               1,
//               0
//             ]
//           }
//         }
//       },

//       { $sort: { exactMatch: -1, createdAt: -1 } },

//       { $limit: 500 }
//     ]);

//     res.json(students);

//   } catch (err) {
//     console.error("Fetch/Search Error:", err);

//     res.status(500).json({
//       message: "Internal Server Error: " + err.message
//     });
//   }
// });

// /**
//  * DOCUMENT DASHBOARD COUNTS
//  */
// router.get('/dashboard-counts', async (req, res) => {
//   try {
//     const totalStudents = await Student.countDocuments();

//     const tcSubmitted = await Student.countDocuments({
//       "documents.tcFile": { $exists: true, $ne: "" }
//     });

//     const conductSubmitted = await Student.countDocuments({
//       "documents.conductFile": { $exists: true, $ne: "" }
//     });

//     const marksMemoSubmitted = await Student.countDocuments({
//       "documents.marksMemoFile": { $exists: true, $ne: "" }
//     });

//     res.status(200).json({
//       totalStudents,

//       tcSubmitted,
//       tcNotSubmitted: totalStudents - tcSubmitted,

//       conductSubmitted,
//       conductNotSubmitted: totalStudents - conductSubmitted,

//       marksMemoSubmitted,
//       marksMemoNotSubmitted: totalStudents - marksMemoSubmitted
//     });

//   } catch (err) {
//     console.error("Dashboard Count Error:", err);

//     res.status(500).json({
//       message: "Failed to fetch dashboard counts"
//     });
//   }
// });

// /**
//  * UPDATE
//  */
// router.put('/:id', async (req, res) => {
//   try {
//     const updatedStudent = await Student.findByIdAndUpdate(
//       req.params.id,
//       { $set: req.body },
//       { new: true, runValidators: true }
//     );

//     if (!updatedStudent) {
//       return res.status(404).json({
//         message: "Student record not found."
//       });
//     }

//     res.json({
//       message: "Record updated successfully",
//       updatedStudent
//     });

//   } catch (err) {
//     console.error("Update Error:", err);

//     res.status(500).json({
//       message: err.message
//     });
//   }
// });

// router.post('/upload/:id/:fieldName', upload.single('file'), async (req, res) => {
//   try {
//     if (!req.file) {
//       return res.status(400).json({
//         error: "No file uploaded"
//       });
//     }

//     const { id, fieldName } = req.params;

//     const allowedFields = [
//       "studentAadhaarFile",
//       "fatherAadhaarFile",
//       "motherAadhaarFile",
//       "guardianAadhaarFile",
//       "tcFile",
//       "conductFile",
//       "marksMemoFile"
//     ];

//     if (!allowedFields.includes(fieldName)) {
//       return res.status(400).json({
//         error: "Invalid document field"
//       });
//     }

//     // Upload to Cloudinary
//     const fileUrl = await uploadToCloudinary(
//       req.file.buffer,
//       `school_management/student_documents/${fieldName}`
//     );

//     // Save directly into MongoDB
//     const updatedStudent = await Student.findByIdAndUpdate(
//       id,
//       {
//         $set: {
//           [`documents.${fieldName}`]: fileUrl
//         }
//       },
//       {
//         new: true,
//         runValidators: true
//       }
//     );

//     if (!updatedStudent) {
//       return res.status(404).json({
//         error: "Student not found"
//       });
//     }

//     res.status(200).json({
//       message: "File uploaded successfully",
//       updatedStudent
//     });

//   } catch (err) {
//     console.error("Upload Error:", err);

//     res.status(500).json({
//       error: "Upload failed: " + err.message
//     });
//   }
// });

// router.get("/export-excel", async (req, res) => {
//   try {
//     const { pending } = req.query;

//     let filter = {};

//     // FIXED FILTERS
//     if (pending === "tc") {
//       filter["documents.tcFile"] = { $in: ["", null] };
//     }

//     if (pending === "conduct") {
//       filter["documents.conductFile"] = { $in: ["", null] };
//     }

//     if (pending === "marksmemo") {
//       filter["documents.marksMemoFile"] = { $in: ["", null] };
//     }

//     const students = await Student.find(filter).sort({
//   "admissionInfo.classAdmittedTo": 1,
//   "admissionInfo.admissionNo": 1
// });

//     const workbook = new ExcelJS.Workbook();
//     const worksheet = workbook.addWorksheet("Students");

//     worksheet.columns = [
//   // STUDENT PERSONAL DETAILS
//   { header: "Full Name", key: "name", width: 25 },
//   { header: "Aadhaar No", key: "aadhaarNo", width: 22 },
//   { header: "Date of Birth", key: "dob", width: 18 },
//   { header: "Gender", key: "gender", width: 15 },
//   { header: "Nationality", key: "nationality", width: 18 },
//   { header: "Religion", key: "religion", width: 18 },
//   { header: "Caste", key: "caste", width: 18 },
//   { header: "Mother Tongue", key: "motherTongue", width: 18 },
//   { header: "State", key: "state", width: 18 },
//   { header: "UDISE Plus", key: "udisePlus", width: 20 },
//   { header: "Siblings Info", key: "siblings", width: 20 },
//   { header: "CWSN Status", key: "cwsn", width: 25 },
//   { header: "First Language", key: "firstLanguage", width: 18 },
//   { header: "Second Language", key: "secondLanguage", width: 18 },
//   { header: "Third Language", key: "thirdLanguage", width: 18 },

//   // FATHER DETAILS
//   { header: "Father Name", key: "fatherName", width: 25 },
//   { header: "Father Mobile", key: "fatherMobile", width: 18 },
//   { header: "Father Aadhaar", key: "fatherAadhaar", width: 22 },
//   { header: "Father Qualification", key: "fatherQualification", width: 20 },
//   { header: "Father Occupation", key: "fatherOccupation", width: 20 },
//   { header: "Father Annual Income", key: "fatherAnnualIncome", width: 20 },

//   // MOTHER DETAILS
//   { header: "Mother Name", key: "motherName", width: 25 },
//   { header: "Mother Mobile", key: "motherMobile", width: 18 },
//   { header: "Mother Aadhaar", key: "motherAadhaar", width: 22 },
//   { header: "Mother Qualification", key: "motherQualification", width: 20 },
//   { header: "Mother Occupation", key: "motherOccupation", width: 20 },
//   { header: "Mother Annual Income", key: "motherAnnualIncome", width: 20 },

//   // GUARDIAN DETAILS
//   { header: "Guardian Name", key: "guardianName", width: 25 },
//   { header: "Guardian Relation", key: "guardianRelation", width: 18 },
//   { header: "Guardian Mobile", key: "guardianMobile", width: 18 },
//   { header: "Guardian Aadhaar", key: "guardianAadhaar", width: 22 },
//   { header: "Guardian Occupation", key: "guardianOccupation", width: 20 },
//   { header: "Guardian Annual Income", key: "guardianAnnualIncome", width: 20 },

//   // ADDRESS
//   { header: "Residence Address", key: "residence", width: 40 },

//   // ADMISSION DETAILS
//   { header: "Admission No", key: "admissionNo", width: 18 },
//   { header: "Class Admitted To", key: "classAdmittedTo", width: 18 },
//   { header: "Previous School Name", key: "previousSchoolName", width: 30 },
//   { header: "Previous TC Number", key: "previousTCNumber", width: 20 },
//   { header: "Previous TC Date", key: "previousTCDate", width: 18 },

//   // DOCUMENT STATUS
//   { header: "Student Aadhaar File", key: "studentAadhaarFile", width: 20 },
//   { header: "Father Aadhaar File", key: "fatherAadhaarFile", width: 20 },
//   { header: "Mother Aadhaar File", key: "motherAadhaarFile", width: 20 },
//   { header: "Guardian Aadhaar File", key: "guardianAadhaarFile", width: 20 },
//   { header: "TC File", key: "tcFile", width: 20 },
//   { header: "Conduct File", key: "conductFile", width: 20 },
//   { header: "Marks Memo File", key: "marksMemoFile", width: 20 }
// ];
//     students.forEach(student => {
//      worksheet.addRow({
//   // PERSONAL
//   name: student.name || "",
//   aadhaarNo: student.aadhaarNo || "",
//   dob: student.dob ? new Date(student.dob).toLocaleDateString("en-GB") : "",
//   gender: student.gender || "",
//   nationality: student.nationality || "",
//   religion: student.religion || "",
//   caste: student.caste || "",
//   motherTongue: student.motherTongue || "",
//   state: student.state || "",
//   udisePlus: student.udisePlus || "",
//   siblings: student.siblings || "",
//   cwsn: student.cwsn || "",
//   firstLanguage: student.firstLanguage || "",
//   secondLanguage: student.secondLanguage || "",
//   thirdLanguage: student.thirdLanguage || "",

//   // FATHER
//   fatherName: student.parentDetails?.fatherName || "",
//   fatherMobile: student.parentDetails?.fatherMobile || "",
//   fatherAadhaar: student.parentDetails?.fatherAadhaar || "",
//   fatherQualification: student.parentDetails?.fatherQualification || "",
//   fatherOccupation: student.parentDetails?.fatherOccupation || "",
//   fatherAnnualIncome: student.parentDetails?.fatherAnnualIncome || "",

//   // MOTHER
//   motherName: student.parentDetails?.motherName || "",
//   motherMobile: student.parentDetails?.motherMobile || "",
//   motherAadhaar: student.parentDetails?.motherAadhaar || "",
//   motherQualification: student.parentDetails?.motherQualification || "",
//   motherOccupation: student.parentDetails?.motherOccupation || "",
//   motherAnnualIncome: student.parentDetails?.motherAnnualIncome || "",

//   // GUARDIAN
//   guardianName: student.parentDetails?.guardianName || "",
//   guardianRelation: student.parentDetails?.guardianRelation || "",
//   guardianMobile: student.parentDetails?.guardianMobile || "",
//   guardianAadhaar: student.parentDetails?.guardianAadhaar || "",
//   guardianOccupation: student.parentDetails?.guardianOccupation || "",
//   guardianAnnualIncome: student.parentDetails?.guardianAnnualIncome || "",

//   // ADDRESS
//   residence: student.parentDetails?.residence || "",

//   // ADMISSION
//   admissionNo: student.admissionInfo?.admissionNo || "",
//   classAdmittedTo: student.admissionInfo?.classAdmittedTo || "",
//   previousSchoolName: student.admissionInfo?.previousSchoolName || "",
//   previousTCNumber: student.admissionInfo?.previousTCNumber || "",
//   previousTCDate: student.admissionInfo?.previousTCDate
//     ? new Date(student.admissionInfo.previousTCDate).toLocaleDateString("en-GB")
//     : "",

//   // DOCUMENT STATUS
//   studentAadhaarFile: student.documents?.studentAadhaarFile ? "Uploaded" : "Not Uploaded",
//   fatherAadhaarFile: student.documents?.fatherAadhaarFile ? "Uploaded" : "Not Uploaded",
//   motherAadhaarFile: student.documents?.motherAadhaarFile ? "Uploaded" : "Not Uploaded",
//   guardianAadhaarFile: student.documents?.guardianAadhaarFile ? "Uploaded" : "Not Uploaded",
//   tcFile: student.documents?.tcFile ? "Uploaded" : "Not Uploaded",
//   conductFile: student.documents?.conductFile ? "Uploaded" : "Not Uploaded",
//   marksMemoFile: student.documents?.marksMemoFile ? "Uploaded" : "Not Uploaded"
// });
//     });

//     // HEADER STYLE
//     worksheet.getRow(1).font = { bold: true };

//     res.setHeader(
//       "Content-Type",
//       "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
//     );

//     res.setHeader(
//       "Content-Disposition",
//       "attachment; filename=students.xlsx"
//     );

//     await workbook.xlsx.write(res);

//     res.end();

//   } catch (error) {
//     console.error("Excel Export Error:", error);

//     res.status(500).json({
//       error: "Failed to export Excel"
//     });
//   }
// });



// /**
//  * OPEN TC TEMPLATE ONLY (DO NOT FINALIZE)
//  */
// router.put('/generate-tc/:id', async (req, res) => {
//   try {

//     const student = await Student.findById(req.params.id);

//     if (!student) {
//       return res.status(404).json({
//         message: "Student not found"
//       });
//     }

//     const { tcNumber } = req.body;

// student.generatedTC = {
//   tcNumber: tcNumber || "",
//   bookNo: "",
//   slNo: tcNumber || "",

//   firstAdmissionDate:
//     student.admissionInfo?.firstAdmissionDate || "",

//   lastStudiedClass:
//     student.admissionInfo?.classAdmittedTo || "",

//   subjectsStudied: "Eng, Math, Sci, Soc, Hindi",

//   paidDuesMonth: "",

//   whetherSCST: student.caste || "",
//   feeConcession: "",
//   totalWorkingDays: "",
//   nccScoutGuide: "",
//   dateOfApplication: "",

//   dateOfIssue: new Date().toISOString().split("T")[0],

//   reasonForLeaving: "Completed Course / Parent Request",

//   lastAttendanceDate: "",
//   remarks: "",

//   conduct: "", // ✅ FIXED

//   isGenerated: false
// };

//     await student.save();

//     res.json({
//       message: "TC template opened successfully",
//       updatedStudent: student
//     });

//   } catch (err) {

//     console.error("Generate TC Error:", err);

//     res.status(500).json({
//       message: err.message
//     });
//   }
// });


// /**
//  * FINAL SAVE TC
//  */router.put('/finalize-tc/:id', async (req, res) => {
//   try {
//     const tcData = req.body;

//     const student = await Student.findById(req.params.id); // ✅ FIX ADDED

//     if (!student) {
//       return res.status(404).json({
//         message: "Student not found"
//       });
//     }

//     const updatedStudent = await Student.findByIdAndUpdate(
//       req.params.id,
//       {
//         $set: {
//           generatedTC: {
//             ...student.generatedTC,   // ✅ NOW VALID
//             ...tcData,
//             tcNumber: tcData.slNo || tcData.bookNo || "",
//             isGenerated: true,
//             generatedDate: new Date()
//           },
//           status: "TC_GENERATED"
//         }
//       },
//       { new: true }
//     );

//     res.json({
//       message: "TC finalized successfully",
//       updatedStudent
//     });

//   } catch (err) {
//     console.error("Finalize TC Error:", err);

//     res.status(500).json({
//       message: err.message
//     });
//   }
// });
// /**
//  * GENERATED TC RECORDS
//  */
// router.get('/generated-tc', async (req, res) => {
//   try {
//     const { name } = req.query;

//     let query = {
//       status: "TC_GENERATED"
//     };

//     if (name && name.trim()) {
//       query.name = {
//         $regex: name.trim(),
//         $options: "i"
//       };
//     }

//     const students = await Student.find(query).sort({
//       "generatedTC.generatedDate": -1
//     });

//     res.json(students);

//   } catch (err) {
//     console.error("Generated TC Fetch Error:", err);

//     res.status(500).json({
//       message: err.message
//     });
//   }
// });

// router.put("/save-generated-tc/:id", async (req, res) => {
//   try {

//     const student = await Student.findById(req.params.id);

//     if (!student) {
//       return res.status(404).json({
//         error: "Student not found"
//       });
//     }

//     student.generatedTC = {
//       ...req.body,
//       isGenerated: true
//     };

//     await student.save();

//     res.json({
//       success: true,
//       updatedStudent: student
//     });

//   } catch (error) {

//     console.error(error);

//     res.status(500).json({
//       error: "Failed to save TC"
//     });
//   }
// });




// router.get("/:id", async (req, res) => {
//   try {

//     const student = await Student.findById(req.params.id);

//     if (!student) {
//       return res.status(404).json({
//         message: "Student not found"
//       });
//     }

//     res.json(student);

//   } catch (error) {

//     console.error(error);

//     res.status(500).json({
//       message: "Server Error"
//     });
//   }
// });

// export default router;









// 20-05-2026












import express from 'express';
import multer from 'multer';
import Student from '../models/Student.js';
import { uploadToCloudinary } from '../utils/cloudinary.js';
import ExcelJS from "exceljs";

const router = express.Router();

/**
 * MULTER CONFIGURATION
 */
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 10 * 1024 * 1024 }
});

/**
 * SINGLE ADMISSION
 */
router.post('/admission', upload.any(), async (req, res) => {
  try {
    if (!req.body.data) {
      return res.status(400).json({ message: "Student data is missing." });
    }

    const studentData = JSON.parse(req.body.data);
    const files = req.files;

    const uploadedDocs = {
      studentAadhaarFile: "",
      fatherAadhaarFile: "",
      motherAadhaarFile: "",
      guardianAadhaarFile: "",
      tcFile: "",
      conductFile: "",
      marksMemoFile: ""
    };

    if (files && files.length > 0) {
      const uploadPromises = files.map(async (file) => {
        const url = await uploadToCloudinary(
          file.buffer,
          `school_management/admissions/${file.fieldname}`
        );

        uploadedDocs[file.fieldname] = url;
      });

      await Promise.all(uploadPromises);
    }

    const finalStudentData = {
      ...studentData,
      documents: {
        hasTC: studentData.documents?.hasTC || false,
        hasConduct: studentData.documents?.hasConduct || false,
        hasMarksMemo: studentData.documents?.hasMarksMemo || false,

        studentAadhaarFile: uploadedDocs.studentAadhaarFile,
        fatherAadhaarFile: uploadedDocs.fatherAadhaarFile,
        motherAadhaarFile: uploadedDocs.motherAadhaarFile,
        guardianAadhaarFile: uploadedDocs.guardianAadhaarFile,

        tcFile: uploadedDocs.tcFile,
        conductFile: uploadedDocs.conductFile,
        marksMemoFile: uploadedDocs.marksMemoFile
      }
    };

    const newStudent = new Student(finalStudentData);
    await newStudent.save();

    res.status(201).json({
      message: "Admission finalized and documents secured!",
      studentId: newStudent._id
    });

  } catch (err) {
    console.error("Admission Error:", err);

    if (err.code === 11000) {
      return res.status(400).json({
        message: "Admission Number already exists!"
      });
    }

    res.status(500).json({
      message: "Internal Server Error: " + err.message
    });
  }
});

// =============================
// FIX ONLY THIS BULK ROUTE
// Replace your current /bulk-admission route with this fully corrected version
// =============================

router.post('/bulk-admission', async (req, res) => {
  try {
    const { students } = req.body;

    if (!students || !Array.isArray(students) || students.length === 0) {
      return res.status(400).json({
        message: "No student records received."
      });
    }

    const validStudents = [];
    const skippedRecords = [];

    // STEP 1: Get all existing admission numbers from DB
    const existingStudents = await Student.find(
      {},
      { "admissionInfo.admissionNo": 1 }
    );

    const existingAdmissionNos = new Set(
      existingStudents.map(
        s => String(s.admissionInfo?.admissionNo || "").trim()
      )
    );

    // STEP 2: Track duplicates inside same Excel file
    const excelAdmissionNos = new Set();

    for (let i = 0; i < students.length; i++) {
      const student = students[i];

      const admissionNo = String(
        student.admissionInfo?.admissionNo || ""
      ).trim();

      // REQUIRED FIELD CHECK
      if (
        !student.name ||
        student.name === "N/A" ||
        !student.dob ||
        !student.parentDetails?.fatherName ||
        student.parentDetails.fatherName === "N/A" ||
        !student.parentDetails?.motherName ||
        student.parentDetails.motherName === "N/A" ||
        !admissionNo ||
        admissionNo === "N/A"
      ) {
        skippedRecords.push({
          row: i + 1,
          name: student.name || "Unknown",
          admissionNo,
          reason: "Missing required fields"
        });
        continue;
      }

      // DUPLICATE IN DATABASE
      if (existingAdmissionNos.has(admissionNo)) {
        skippedRecords.push({
          row: i + 1,
          name: student.name,
          admissionNo,
          reason: "Already exists in database"
        });
        continue;
      }

      // DUPLICATE INSIDE EXCEL
      if (excelAdmissionNos.has(admissionNo)) {
        skippedRecords.push({
          row: i + 1,
          name: student.name,
          admissionNo,
          reason: "Duplicate in Excel file"
        });
        continue;
      }

      // Add to tracking
      excelAdmissionNos.add(admissionNo);

      // CLEAN DATA
      validStudents.push({
        ...student,
        admissionInfo: {
          ...student.admissionInfo,
          admissionNo
        },
        documents: {
          hasTC: false,
          hasConduct: false,
          hasMarksMemo: false,
          studentAadhaarFile: "",
          fatherAadhaarFile: "",
          motherAadhaarFile: "",
          guardianAadhaarFile: "",
          tcFile: "",
          conductFile: "",
          marksMemoFile: ""
        },
        status: "ACTIVE"
      });
    }

    // STEP 3: If nothing valid
    if (validStudents.length === 0) {
      return res.status(400).json({
        message: "No valid student records found.",
        skippedRecords
      });
    }

    // STEP 4: Insert safely
    let insertedStudents = [];

    try {
      insertedStudents = await Student.insertMany(validStudents, {
        ordered: false
      });
    } catch (insertErr) {
      // Partial success still possible
      if (insertErr.insertedDocs) {
        insertedStudents = insertErr.insertedDocs;
      }

      // Capture duplicate insert errors
      if (insertErr.writeErrors) {
        insertErr.writeErrors.forEach(err => {
          skippedRecords.push({
            row: err.index + 1,
            admissionNo:
              err.err.op?.admissionInfo?.admissionNo || "Unknown",
            reason: "Duplicate detected during insert"
          });
        });
      }
    }

    // STEP 5: Final Response
    return res.status(201).json({
      message: "Bulk admission completed successfully!",
      count: insertedStudents.length,
      skipped: skippedRecords.length,
      skippedRecords
    });

  } catch (err) {
    console.error("Bulk Admission Error:", err);

    return res.status(500).json({
      message: "Bulk import failed: " + err.message
    });
  }
});

/**
 * SEARCH
 */
router.get('/search', async (req, res) => {
  try {
    const { name, fatherName, pending } = req.query;
    let matchQuery = {};

    // NAME SEARCH
    if (name && name.trim().length > 0) {
      matchQuery.name = { $regex: name.trim(), $options: 'i' };
    }

    // FATHER NAME SEARCH
    if (fatherName && fatherName.trim().length > 0) {
      matchQuery["parentDetails.fatherName"] = {
        $regex: fatherName.trim(),
        $options: 'i'
      };
    }

    // DOCUMENT PENDING FILTER
    if (pending === "tc") {
      matchQuery["documents.tcFile"] = { $in: ["", null] };
    }

    if (pending === "conduct") {
      matchQuery["documents.conductFile"] = { $in: ["", null] };
    }

    if (pending === "marksmemo") {
      matchQuery["documents.marksMemoFile"] = { $in: ["", null] };
    }

    const students = await Student.aggregate([
      { $match: matchQuery },

      {
        $addFields: {
          exactMatch: {
            $cond: [
              {
                $eq: [
                  { $toLower: "$name" },
                  (name || "").toLowerCase().trim()
                ]
              },
              1,
              0
            ]
          }
        }
      },

      { $sort: { exactMatch: -1, createdAt: -1 } },

      { $limit: 500 }
    ]);

    res.json(students);

  } catch (err) {
    console.error("Fetch/Search Error:", err);

    res.status(500).json({
      message: "Internal Server Error: " + err.message
    });
  }
});

/**
 * DOCUMENT DASHBOARD COUNTS
 */
router.get('/dashboard-counts', async (req, res) => {
  try {
    const totalStudents = await Student.countDocuments();

    const tcSubmitted = await Student.countDocuments({
      "documents.tcFile": { $exists: true, $ne: "" }
    });

    const conductSubmitted = await Student.countDocuments({
      "documents.conductFile": { $exists: true, $ne: "" }
    });

    const marksMemoSubmitted = await Student.countDocuments({
      "documents.marksMemoFile": { $exists: true, $ne: "" }
    });

    res.status(200).json({
      totalStudents,

      tcSubmitted,
      tcNotSubmitted: totalStudents - tcSubmitted,

      conductSubmitted,
      conductNotSubmitted: totalStudents - conductSubmitted,

      marksMemoSubmitted,
      marksMemoNotSubmitted: totalStudents - marksMemoSubmitted
    });

  } catch (err) {
    console.error("Dashboard Count Error:", err);

    res.status(500).json({
      message: "Failed to fetch dashboard counts"
    });
  }
});

/**
 * UPDATE
 */
router.put('/:id', async (req, res) => {
  try {
    const updatedStudent = await Student.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true, runValidators: true }
    );

    if (!updatedStudent) {
      return res.status(404).json({
        message: "Student record not found."
      });
    }

    res.json({
      message: "Record updated successfully",
      updatedStudent
    });

  } catch (err) {
    console.error("Update Error:", err);

    res.status(500).json({
      message: err.message
    });
  }
});

router.post('/upload/:id/:fieldName', upload.single('file'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        error: "No file uploaded"
      });
    }

    const { id, fieldName } = req.params;

    const allowedFields = [
      "studentAadhaarFile",
      "fatherAadhaarFile",
      "motherAadhaarFile",
      "guardianAadhaarFile",
      "tcFile",
      "conductFile",
      "marksMemoFile"
    ];

    if (!allowedFields.includes(fieldName)) {
      return res.status(400).json({
        error: "Invalid document field"
      });
    }

    // Upload to Cloudinary
    const fileUrl = await uploadToCloudinary(
      req.file.buffer,
      `school_management/student_documents/${fieldName}`
    );

    // Save directly into MongoDB
    const updatedStudent = await Student.findByIdAndUpdate(
      id,
      {
        $set: {
          [`documents.${fieldName}`]: fileUrl
        }
      },
      {
        new: true,
        runValidators: true
      }
    );

    if (!updatedStudent) {
      return res.status(404).json({
        error: "Student not found"
      });
    }

    res.status(200).json({
      message: "File uploaded successfully",
      updatedStudent
    });

  } catch (err) {
    console.error("Upload Error:", err);

    res.status(500).json({
      error: "Upload failed: " + err.message
    });
  }
});

router.get("/export-excel", async (req, res) => {
  try {
    const { pending } = req.query;

    let filter = {};

    // FIXED FILTERS
    if (pending === "tc") {
      filter["documents.tcFile"] = { $in: ["", null] };
    }

    if (pending === "conduct") {
      filter["documents.conductFile"] = { $in: ["", null] };
    }

    if (pending === "marksmemo") {
      filter["documents.marksMemoFile"] = { $in: ["", null] };
    }

    const students = await Student.find(filter).sort({
  "admissionInfo.classAdmittedTo": 1,
  "admissionInfo.admissionNo": 1
});

    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Students");

    worksheet.columns = [
  // STUDENT PERSONAL DETAILS
  { header: "Full Name", key: "name", width: 25 },
  { header: "Aadhaar No", key: "aadhaarNo", width: 22 },
  { header: "Date of Birth", key: "dob", width: 18 },
  { header: "Gender", key: "gender", width: 15 },
  { header: "Nationality", key: "nationality", width: 18 },
  { header: "Religion", key: "religion", width: 18 },
  { header: "Caste", key: "caste", width: 18 },
  { header: "Mother Tongue", key: "motherTongue", width: 18 },
  { header: "State", key: "state", width: 18 },
  { header: "UDISE Plus", key: "udisePlus", width: 20 },
  { header: "Siblings Info", key: "siblings", width: 20 },
  { header: "CWSN Status", key: "cwsn", width: 25 },
  { header: "First Language", key: "firstLanguage", width: 18 },
  { header: "Second Language", key: "secondLanguage", width: 18 },
  { header: "Third Language", key: "thirdLanguage", width: 18 },

  // FATHER DETAILS
  { header: "Father Name", key: "fatherName", width: 25 },
  { header: "Father Mobile", key: "fatherMobile", width: 18 },
  { header: "Father Aadhaar", key: "fatherAadhaar", width: 22 },
  { header: "Father Qualification", key: "fatherQualification", width: 20 },
  { header: "Father Occupation", key: "fatherOccupation", width: 20 },
  { header: "Father Annual Income", key: "fatherAnnualIncome", width: 20 },

  // MOTHER DETAILS
  { header: "Mother Name", key: "motherName", width: 25 },
  { header: "Mother Mobile", key: "motherMobile", width: 18 },
  { header: "Mother Aadhaar", key: "motherAadhaar", width: 22 },
  { header: "Mother Qualification", key: "motherQualification", width: 20 },
  { header: "Mother Occupation", key: "motherOccupation", width: 20 },
  { header: "Mother Annual Income", key: "motherAnnualIncome", width: 20 },

  // GUARDIAN DETAILS
  { header: "Guardian Name", key: "guardianName", width: 25 },
  { header: "Guardian Relation", key: "guardianRelation", width: 18 },
  { header: "Guardian Mobile", key: "guardianMobile", width: 18 },
  { header: "Guardian Aadhaar", key: "guardianAadhaar", width: 22 },
  { header: "Guardian Occupation", key: "guardianOccupation", width: 20 },
  { header: "Guardian Annual Income", key: "guardianAnnualIncome", width: 20 },

  // ADDRESS
  { header: "Residence Address", key: "residence", width: 40 },

  // ADMISSION DETAILS
  { header: "Admission No", key: "admissionNo", width: 18 },
  { header: "Class Admitted To", key: "classAdmittedTo", width: 18 },
  { header: "Previous School Name", key: "previousSchoolName", width: 30 },
  { header: "Previous TC Number", key: "previousTCNumber", width: 20 },
  { header: "Previous TC Date", key: "previousTCDate", width: 18 },

  // DOCUMENT STATUS
  { header: "Student Aadhaar File", key: "studentAadhaarFile", width: 20 },
  { header: "Father Aadhaar File", key: "fatherAadhaarFile", width: 20 },
  { header: "Mother Aadhaar File", key: "motherAadhaarFile", width: 20 },
  { header: "Guardian Aadhaar File", key: "guardianAadhaarFile", width: 20 },
  { header: "TC File", key: "tcFile", width: 20 },
  { header: "Conduct File", key: "conductFile", width: 20 },
  { header: "Marks Memo File", key: "marksMemoFile", width: 20 }
];
    students.forEach(student => {
     worksheet.addRow({
  // PERSONAL
  name: student.name || "",
  aadhaarNo: student.aadhaarNo || "",
  dob: student.dob ? new Date(student.dob).toLocaleDateString("en-GB") : "",
  gender: student.gender || "",
  nationality: student.nationality || "",
  religion: student.religion || "",
  caste: student.caste || "",
  motherTongue: student.motherTongue || "",
  state: student.state || "",
  udisePlus: student.udisePlus || "",
  siblings: student.siblings || "",
  cwsn: student.cwsn || "",
  firstLanguage: student.firstLanguage || "",
  secondLanguage: student.secondLanguage || "",
  thirdLanguage: student.thirdLanguage || "",

  // FATHER
  fatherName: student.parentDetails?.fatherName || "",
  fatherMobile: student.parentDetails?.fatherMobile || "",
  fatherAadhaar: student.parentDetails?.fatherAadhaar || "",
  fatherQualification: student.parentDetails?.fatherQualification || "",
  fatherOccupation: student.parentDetails?.fatherOccupation || "",
  fatherAnnualIncome: student.parentDetails?.fatherAnnualIncome || "",

  // MOTHER
  motherName: student.parentDetails?.motherName || "",
  motherMobile: student.parentDetails?.motherMobile || "",
  motherAadhaar: student.parentDetails?.motherAadhaar || "",
  motherQualification: student.parentDetails?.motherQualification || "",
  motherOccupation: student.parentDetails?.motherOccupation || "",
  motherAnnualIncome: student.parentDetails?.motherAnnualIncome || "",

  // GUARDIAN
  guardianName: student.parentDetails?.guardianName || "",
  guardianRelation: student.parentDetails?.guardianRelation || "",
  guardianMobile: student.parentDetails?.guardianMobile || "",
  guardianAadhaar: student.parentDetails?.guardianAadhaar || "",
  guardianOccupation: student.parentDetails?.guardianOccupation || "",
  guardianAnnualIncome: student.parentDetails?.guardianAnnualIncome || "",

  // ADDRESS
  residence: student.parentDetails?.residence || "",

  // ADMISSION
  admissionNo: student.admissionInfo?.admissionNo || "",
  classAdmittedTo: student.admissionInfo?.classAdmittedTo || "",
  previousSchoolName: student.admissionInfo?.previousSchoolName || "",
  previousTCNumber: student.admissionInfo?.previousTCNumber || "",
  previousTCDate: student.admissionInfo?.previousTCDate
    ? new Date(student.admissionInfo.previousTCDate).toLocaleDateString("en-GB")
    : "",

  // DOCUMENT STATUS
  studentAadhaarFile: student.documents?.studentAadhaarFile ? "Uploaded" : "Not Uploaded",
  fatherAadhaarFile: student.documents?.fatherAadhaarFile ? "Uploaded" : "Not Uploaded",
  motherAadhaarFile: student.documents?.motherAadhaarFile ? "Uploaded" : "Not Uploaded",
  guardianAadhaarFile: student.documents?.guardianAadhaarFile ? "Uploaded" : "Not Uploaded",
  tcFile: student.documents?.tcFile ? "Uploaded" : "Not Uploaded",
  conductFile: student.documents?.conductFile ? "Uploaded" : "Not Uploaded",
  marksMemoFile: student.documents?.marksMemoFile ? "Uploaded" : "Not Uploaded"
});
    });

    // HEADER STYLE
    worksheet.getRow(1).font = { bold: true };

    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );

    res.setHeader(
      "Content-Disposition",
      "attachment; filename=students.xlsx"
    );

    await workbook.xlsx.write(res);

    res.end();

  } catch (error) {
    console.error("Excel Export Error:", error);

    res.status(500).json({
      error: "Failed to export Excel"
    });
  }
});



/**
 * OPEN TC TEMPLATE ONLY (DO NOT FINALIZE)
 */
router.put('/generate-tc/:id', async (req, res) => {
  try {

    const student = await Student.findById(req.params.id);

    if (!student) {
      return res.status(404).json({
        message: "Student not found"
      });
    }

    const { tcNumber } = req.body;

student.generatedTC = {
  tcNumber: tcNumber || "",
  bookNo: "",
  slNo: tcNumber || "",

  firstAdmissionDate:
  student.createdAt
    ? new Date(student.createdAt).toISOString().split("T")[0]
    : "",

  lastStudiedClass:
    student.admissionInfo?.classAdmittedTo || "",

  subjectsStudied: "Eng, Math, Sci, Soc, Hindi",

  paidDuesMonth: "",

  whetherSCST: student.caste || "",
  feeConcession: "",
  totalWorkingDays: "",
  nccScoutGuide: "",
  dateOfApplication: "",

  dateOfIssue: new Date().toISOString().split("T")[0],

  reasonForLeaving: "Completed Course / Parent Request",

  lastAttendanceDate: "",
  remarks: "",

  conduct: "", // ✅ FIXED

  isGenerated: false
};

    await student.save();

    res.json({
      message: "TC template opened successfully",
      updatedStudent: student
    });

  } catch (err) {

    console.error("Generate TC Error:", err);

    res.status(500).json({
      message: err.message
    });
  }
});


/**
 * FINAL SAVE TC
 */router.put('/finalize-tc/:id', async (req, res) => {
  try {
    const tcData = req.body;

    const student = await Student.findById(req.params.id); // ✅ FIX ADDED

    if (!student) {
      return res.status(404).json({
        message: "Student not found"
      });
    }

    const updatedStudent = await Student.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          generatedTC: {
            ...student.generatedTC,   // ✅ NOW VALID
            ...tcData,
            tcNumber: tcData.slNo || tcData.bookNo || "",
            isGenerated: true,
            generatedDate: new Date()
          },
          status: "TC_GENERATED"
        }
      },
      { new: true }
    );

    res.json({
      message: "TC finalized successfully",
      updatedStudent
    });

  } catch (err) {
    console.error("Finalize TC Error:", err);

    res.status(500).json({
      message: err.message
    });
  }
});
/**
 * GENERATED TC RECORDS
 */
router.get('/generated-tc', async (req, res) => {
  try {
    const { name } = req.query;

    let query = {
      status: "TC_GENERATED"
    };

    if (name && name.trim()) {
      query.name = {
        $regex: name.trim(),
        $options: "i"
      };
    }

    const students = await Student.find(query).sort({
      "generatedTC.generatedDate": -1
    });

    res.json(students);

  } catch (err) {
    console.error("Generated TC Fetch Error:", err);

    res.status(500).json({
      message: err.message
    });
  }
});

router.put("/save-generated-tc/:id", async (req, res) => {
  try {

    const student = await Student.findById(req.params.id);

    if (!student) {
      return res.status(404).json({
        error: "Student not found"
      });
    }

    student.generatedTC = {
  ...student.generatedTC,
  ...req.body,
  isGenerated: true,
  generatedDate: new Date()
};

    await student.save();

    res.json({
      success: true,
      updatedStudent: student
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      error: "Failed to save TC"
    });
  }
});




router.get("/:id", async (req, res) => {
  try {

    const student = await Student.findById(req.params.id);

    if (!student) {
      return res.status(404).json({
        message: "Student not found"
      });
    }

    res.json(student);

  } catch (error) {

    console.error(error);

    res.status(500).json({
      message: "Server Error"
    });
  }
});

export default router;








// import express from 'express';
// import multer from 'multer';
// import Student from '../models/Student.js';
// import { uploadToCloudinary } from '../utils/cloudinary.js';
// import ExcelJS from "exceljs";

// const router = express.Router();

// /**
//  * MULTER CONFIGURATION
//  */
// const upload = multer({
//   storage: multer.memoryStorage(),
//   limits: { fileSize: 10 * 1024 * 1024 }
// });

// /**
//  * SINGLE ADMISSION
//  */
// router.post('/admission', upload.any(), async (req, res) => {
//   try {
//     if (!req.body.data) {
//       return res.status(400).json({ message: "Student data is missing." });
//     }

//     const studentData = JSON.parse(req.body.data);
//     const files = req.files;

//     const uploadedDocs = {
//       studentAadhaarFile: "",
//       fatherAadhaarFile: "",
//       motherAadhaarFile: "",
//       guardianAadhaarFile: "",
//       tcFile: "",
//       conductFile: "",
//       marksMemoFile: ""
//     };

//     if (files && files.length > 0) {
//       const uploadPromises = files.map(async (file) => {
//         const url = await uploadToCloudinary(
//           file.buffer,
//           `school_management/admissions/${file.fieldname}`
//         );

//         uploadedDocs[file.fieldname] = url;
//       });

//       await Promise.all(uploadPromises);
//     }

//     const finalStudentData = {
//       ...studentData,
//       documents: {
//   // AUTO BOOLEAN STATUS
//   hasTC: !!uploadedDocs.tcFile,
//   hasConduct: !!uploadedDocs.conductFile,
//   hasMarksMemo: !!uploadedDocs.marksMemoFile,

//   // FILE URLS
//   studentAadhaarFile: uploadedDocs.studentAadhaarFile,
//   fatherAadhaarFile: uploadedDocs.fatherAadhaarFile,
//   motherAadhaarFile: uploadedDocs.motherAadhaarFile,
//   guardianAadhaarFile: uploadedDocs.guardianAadhaarFile,

//   tcFile: uploadedDocs.tcFile,
//   conductFile: uploadedDocs.conductFile,
//   marksMemoFile: uploadedDocs.marksMemoFile
// }
//     };

//     const newStudent = new Student(finalStudentData);
//     await newStudent.save();

//     res.status(201).json({
//       message: "Admission finalized and documents secured!",
//       studentId: newStudent._id
//     });

//   } catch (err) {
//     console.error("Admission Error:", err);

//     if (err.code === 11000) {
//       return res.status(400).json({
//         message: "Admission Number already exists!"
//       });
//     }

//     res.status(500).json({
//       message: "Internal Server Error: " + err.message
//     });
//   }
// });

// // =============================
// // FIX ONLY THIS BULK ROUTE
// // Replace your current /bulk-admission route with this fully corrected version
// // =============================

// router.post('/bulk-admission', async (req, res) => {
//   try {
//     const { students } = req.body;

//     if (!students || !Array.isArray(students) || students.length === 0) {
//       return res.status(400).json({
//         message: "No student records received."
//       });
//     }

//     const validStudents = [];
//     const skippedRecords = [];

//     // STEP 1: Get all existing admission numbers from DB
//     const existingStudents = await Student.find(
//       {},
//       { "admissionInfo.admissionNo": 1 }
//     );

//     const existingAdmissionNos = new Set(
//       existingStudents.map(
//         s => String(s.admissionInfo?.admissionNo || "").trim()
//       )
//     );

//     // STEP 2: Track duplicates inside same Excel file
//     const excelAdmissionNos = new Set();

//     for (let i = 0; i < students.length; i++) {
//       const student = students[i];

//       const admissionNo = String(
//         student.admissionInfo?.admissionNo || ""
//       ).trim();

//       // REQUIRED FIELD CHECK
//       if (
//         !student.name ||
//         student.name === "N/A" ||
//         !student.dob ||
//         !student.parentDetails?.fatherName ||
//         student.parentDetails.fatherName === "N/A" ||
//         !student.parentDetails?.motherName ||
//         student.parentDetails.motherName === "N/A" ||
//         !admissionNo ||
//         admissionNo === "N/A"
//       ) {
//         skippedRecords.push({
//           row: i + 1,
//           name: student.name || "Unknown",
//           admissionNo,
//           reason: "Missing required fields"
//         });
//         continue;
//       }

//       // DUPLICATE IN DATABASE
//       if (existingAdmissionNos.has(admissionNo)) {
//         skippedRecords.push({
//           row: i + 1,
//           name: student.name,
//           admissionNo,
//           reason: "Already exists in database"
//         });
//         continue;
//       }

//       // DUPLICATE INSIDE EXCEL
//       if (excelAdmissionNos.has(admissionNo)) {
//         skippedRecords.push({
//           row: i + 1,
//           name: student.name,
//           admissionNo,
//           reason: "Duplicate in Excel file"
//         });
//         continue;
//       }

//       // Add to tracking
//       excelAdmissionNos.add(admissionNo);

//       // CLEAN DATA
//       validStudents.push({
//         ...student,
//         admissionInfo: {
//           ...student.admissionInfo,
//           admissionNo
//         },
//         documents: {
//           hasTC: false,
//           hasConduct: false,
//           hasMarksMemo: false,
//           studentAadhaarFile: "",
//           fatherAadhaarFile: "",
//           motherAadhaarFile: "",
//           guardianAadhaarFile: "",
//           tcFile: "",
//           conductFile: "",
//           marksMemoFile: ""
//         },
//         status: "ACTIVE"
//       });
//     }

//     // STEP 3: If nothing valid
//     if (validStudents.length === 0) {
//       return res.status(400).json({
//         message: "No valid student records found.",
//         skippedRecords
//       });
//     }

//     // STEP 4: Insert safely
//     let insertedStudents = [];

//     try {
//       insertedStudents = await Student.insertMany(validStudents, {
//         ordered: false
//       });
//     } catch (insertErr) {
//       // Partial success still possible
//       if (insertErr.insertedDocs) {
//         insertedStudents = insertErr.insertedDocs;
//       }

//       // Capture duplicate insert errors
//       if (insertErr.writeErrors) {
//         insertErr.writeErrors.forEach(err => {
//           skippedRecords.push({
//             row: err.index + 1,
//             admissionNo:
//               err.err.op?.admissionInfo?.admissionNo || "Unknown",
//             reason: "Duplicate detected during insert"
//           });
//         });
//       }
//     }

//     // STEP 5: Final Response
//     return res.status(201).json({
//       message: "Bulk admission completed successfully!",
//       count: insertedStudents.length,
//       skipped: skippedRecords.length,
//       skippedRecords
//     });

//   } catch (err) {
//     console.error("Bulk Admission Error:", err);

//     return res.status(500).json({
//       message: "Bulk import failed: " + err.message
//     });
//   }
// });

// /**
//  * SEARCH
//  */
// router.get('/search', async (req, res) => {
//   try {
//     const { name, fatherName, pending } = req.query;
//     let matchQuery = {};

//     // NAME SEARCH
//     if (name && name.trim().length > 0) {
//       matchQuery.name = { $regex: name.trim(), $options: 'i' };
//     }

//     // FATHER NAME SEARCH
//     if (fatherName && fatherName.trim().length > 0) {
//       matchQuery["parentDetails.fatherName"] = {
//         $regex: fatherName.trim(),
//         $options: 'i'
//       };
//     }

//     // DOCUMENT PENDING FILTER
//     if (pending === "tc") {
//       matchQuery["documents.tcFile"] = { $in: ["", null] };
//     }

//     if (pending === "conduct") {
//       matchQuery["documents.conductFile"] = { $in: ["", null] };
//     }

//     if (pending === "marksmemo") {
//       matchQuery["documents.marksMemoFile"] = { $in: ["", null] };
//     }

//     const students = await Student.aggregate([
//       { $match: matchQuery },

//       {
//         $addFields: {
//           exactMatch: {
//             $cond: [
//               {
//                 $eq: [
//                   { $toLower: "$name" },
//                   (name || "").toLowerCase().trim()
//                 ]
//               },
//               1,
//               0
//             ]
//           }
//         }
//       },

//       { $sort: { exactMatch: -1, createdAt: -1 } },

//       { $limit: 500 }
//     ]);

//     res.json(students);

//   } catch (err) {
//     console.error("Fetch/Search Error:", err);

//     res.status(500).json({
//       message: "Internal Server Error: " + err.message
//     });
//   }
// });

// /**
//  * DOCUMENT DASHBOARD COUNTS
//  */
// router.get('/dashboard-counts', async (req, res) => {
//   try {
//     const totalStudents = await Student.countDocuments();

//     const tcSubmitted = await Student.countDocuments({
//       "documents.tcFile": { $exists: true, $ne: "" }
//     });

//     const conductSubmitted = await Student.countDocuments({
//       "documents.conductFile": { $exists: true, $ne: "" }
//     });

//     const marksMemoSubmitted = await Student.countDocuments({
//       "documents.marksMemoFile": { $exists: true, $ne: "" }
//     });

//     res.status(200).json({
//       totalStudents,

//       tcSubmitted,
//       tcNotSubmitted: totalStudents - tcSubmitted,

//       conductSubmitted,
//       conductNotSubmitted: totalStudents - conductSubmitted,

//       marksMemoSubmitted,
//       marksMemoNotSubmitted: totalStudents - marksMemoSubmitted
//     });

//   } catch (err) {
//     console.error("Dashboard Count Error:", err);

//     res.status(500).json({
//       message: "Failed to fetch dashboard counts"
//     });
//   }
// });

// /**
//  * UPDATE
//  */
// router.put('/:id', async (req, res) => {
//   try {
//     const updatedStudent = await Student.findByIdAndUpdate(
//       req.params.id,
//       { $set: req.body },
//       { new: true, runValidators: true }
//     );

//     if (!updatedStudent) {
//       return res.status(404).json({
//         message: "Student record not found."
//       });
//     }

//     res.json({
//       message: "Record updated successfully",
//       updatedStudent
//     });

//   } catch (err) {
//     console.error("Update Error:", err);

//     res.status(500).json({
//       message: err.message
//     });
//   }
// });

// router.post('/upload/:id/:fieldName', upload.single('file'), async (req, res) => {
//   try {
//     if (!req.file) {
//       return res.status(400).json({
//         error: "No file uploaded"
//       });
//     }

//     const { id, fieldName } = req.params;

//     const allowedFields = [
//       "studentAadhaarFile",
//       "fatherAadhaarFile",
//       "motherAadhaarFile",
//       "guardianAadhaarFile",
//       "tcFile",
//       "conductFile",
//       "marksMemoFile"
//     ];

//     if (!allowedFields.includes(fieldName)) {
//       return res.status(400).json({
//         error: "Invalid document field"
//       });
//     }

//     // Upload to Cloudinary
//     const fileUrl = await uploadToCloudinary(
//       req.file.buffer,
//       `school_management/student_documents/${fieldName}`
//     );

//     // Save directly into MongoDB
//     // AUTO UPDATE DOCUMENT STATUS
// const updateData = {
//   [`documents.${fieldName}`]: fileUrl
// };

// // AUTO BOOLEAN UPDATE
// if (fieldName === "tcFile") {
//   updateData["documents.hasTC"] = true;
// }

// if (fieldName === "conductFile") {
//   updateData["documents.hasConduct"] = true;
// }

// if (fieldName === "marksMemoFile") {
//   updateData["documents.hasMarksMemo"] = true;
// }

// // SAVE TO DB
// const updatedStudent = await Student.findByIdAndUpdate(
//   id,
//   {
//     $set: updateData
//   },
//   {
//     new: true,
//     runValidators: true
//   }
// );
//     if (!updatedStudent) {
//       return res.status(404).json({
//         error: "Student not found"
//       });
//     }

//     res.status(200).json({
//       message: "File uploaded successfully",
//       updatedStudent
//     });

//   } catch (err) {
//     console.error("Upload Error:", err);

//     res.status(500).json({
//       error: "Upload failed: " + err.message
//     });
//   }
// });

// router.get("/export-excel", async (req, res) => {
//   try {
//     const { pending } = req.query;

//     let filter = {};

//     // FIXED FILTERS
//     if (pending === "tc") {
//       filter["documents.tcFile"] = { $in: ["", null] };
//     }

//     if (pending === "conduct") {
//       filter["documents.conductFile"] = { $in: ["", null] };
//     }

//     if (pending === "marksmemo") {
//       filter["documents.marksMemoFile"] = { $in: ["", null] };
//     }

//     const students = await Student.find(filter).sort({
//   "admissionInfo.classAdmittedTo": 1,
//   "admissionInfo.admissionNo": 1
// });

//     const workbook = new ExcelJS.Workbook();
//     const worksheet = workbook.addWorksheet("Students");

//     worksheet.columns = [
//   // STUDENT PERSONAL DETAILS
//   { header: "Full Name", key: "name", width: 25 },
//   { header: "Aadhaar No", key: "aadhaarNo", width: 22 },
//   { header: "Date of Birth", key: "dob", width: 18 },
//   { header: "Gender", key: "gender", width: 15 },
//   { header: "Nationality", key: "nationality", width: 18 },
//   { header: "Religion", key: "religion", width: 18 },
//   { header: "Caste", key: "caste", width: 18 },
//   { header: "Mother Tongue", key: "motherTongue", width: 18 },
//   { header: "State", key: "state", width: 18 },
//   { header: "UDISE Plus", key: "udisePlus", width: 20 },
//   { header: "Siblings Info", key: "siblings", width: 20 },
//   { header: "CWSN Status", key: "cwsn", width: 25 },
//   { header: "First Language", key: "firstLanguage", width: 18 },
//   { header: "Second Language", key: "secondLanguage", width: 18 },
//   { header: "Third Language", key: "thirdLanguage", width: 18 },

//   // FATHER DETAILS
//   { header: "Father Name", key: "fatherName", width: 25 },
//   { header: "Father Mobile", key: "fatherMobile", width: 18 },
//   { header: "Father Aadhaar", key: "fatherAadhaar", width: 22 },
//   { header: "Father Qualification", key: "fatherQualification", width: 20 },
//   { header: "Father Occupation", key: "fatherOccupation", width: 20 },
//   { header: "Father Annual Income", key: "fatherAnnualIncome", width: 20 },

//   // MOTHER DETAILS
//   { header: "Mother Name", key: "motherName", width: 25 },
//   { header: "Mother Mobile", key: "motherMobile", width: 18 },
//   { header: "Mother Aadhaar", key: "motherAadhaar", width: 22 },
//   { header: "Mother Qualification", key: "motherQualification", width: 20 },
//   { header: "Mother Occupation", key: "motherOccupation", width: 20 },
//   { header: "Mother Annual Income", key: "motherAnnualIncome", width: 20 },

//   // GUARDIAN DETAILS
//   { header: "Guardian Name", key: "guardianName", width: 25 },
//   { header: "Guardian Relation", key: "guardianRelation", width: 18 },
//   { header: "Guardian Mobile", key: "guardianMobile", width: 18 },
//   { header: "Guardian Aadhaar", key: "guardianAadhaar", width: 22 },
//   { header: "Guardian Occupation", key: "guardianOccupation", width: 20 },
//   { header: "Guardian Annual Income", key: "guardianAnnualIncome", width: 20 },

//   // ADDRESS
//   { header: "Residence Address", key: "residence", width: 40 },

//   // ADMISSION DETAILS
//   { header: "Admission No", key: "admissionNo", width: 18 },
//   { header: "Class Admitted To", key: "classAdmittedTo", width: 18 },
//   { header: "Previous School Name", key: "previousSchoolName", width: 30 },
//   { header: "Previous TC Number", key: "previousTCNumber", width: 20 },
//   { header: "Previous TC Date", key: "previousTCDate", width: 18 },

//   // DOCUMENT STATUS
//   { header: "Student Aadhaar File", key: "studentAadhaarFile", width: 20 },
//   { header: "Father Aadhaar File", key: "fatherAadhaarFile", width: 20 },
//   { header: "Mother Aadhaar File", key: "motherAadhaarFile", width: 20 },
//   { header: "Guardian Aadhaar File", key: "guardianAadhaarFile", width: 20 },
//   { header: "TC File", key: "tcFile", width: 20 },
//   { header: "Conduct File", key: "conductFile", width: 20 },
//   { header: "Marks Memo File", key: "marksMemoFile", width: 20 }
// ];
//     students.forEach(student => {
//      worksheet.addRow({
//   // PERSONAL
//   name: student.name || "",
//   aadhaarNo: student.aadhaarNo || "",
//   dob: student.dob ? new Date(student.dob).toLocaleDateString("en-GB") : "",
//   gender: student.gender || "",
//   nationality: student.nationality || "",
//   religion: student.religion || "",
//   caste: student.caste || "",
//   motherTongue: student.motherTongue || "",
//   state: student.state || "",
//   udisePlus: student.udisePlus || "",
//   siblings: student.siblings || "",
//   cwsn: student.cwsn || "",
//   firstLanguage: student.firstLanguage || "",
//   secondLanguage: student.secondLanguage || "",
//   thirdLanguage: student.thirdLanguage || "",

//   // FATHER
//   fatherName: student.parentDetails?.fatherName || "",
//   fatherMobile: student.parentDetails?.fatherMobile || "",
//   fatherAadhaar: student.parentDetails?.fatherAadhaar || "",
//   fatherQualification: student.parentDetails?.fatherQualification || "",
//   fatherOccupation: student.parentDetails?.fatherOccupation || "",
//   fatherAnnualIncome: student.parentDetails?.fatherAnnualIncome || "",

//   // MOTHER
//   motherName: student.parentDetails?.motherName || "",
//   motherMobile: student.parentDetails?.motherMobile || "",
//   motherAadhaar: student.parentDetails?.motherAadhaar || "",
//   motherQualification: student.parentDetails?.motherQualification || "",
//   motherOccupation: student.parentDetails?.motherOccupation || "",
//   motherAnnualIncome: student.parentDetails?.motherAnnualIncome || "",

//   // GUARDIAN
//   guardianName: student.parentDetails?.guardianName || "",
//   guardianRelation: student.parentDetails?.guardianRelation || "",
//   guardianMobile: student.parentDetails?.guardianMobile || "",
//   guardianAadhaar: student.parentDetails?.guardianAadhaar || "",
//   guardianOccupation: student.parentDetails?.guardianOccupation || "",
//   guardianAnnualIncome: student.parentDetails?.guardianAnnualIncome || "",

//   // ADDRESS
//   residence: student.parentDetails?.residence || "",

//   // ADMISSION
//   admissionNo: student.admissionInfo?.admissionNo || "",
//   classAdmittedTo: student.admissionInfo?.classAdmittedTo || "",
//   previousSchoolName: student.admissionInfo?.previousSchoolName || "",
//   previousTCNumber: student.admissionInfo?.previousTCNumber || "",
//   previousTCDate: student.admissionInfo?.previousTCDate
//     ? new Date(student.admissionInfo.previousTCDate).toLocaleDateString("en-GB")
//     : "",

//   // DOCUMENT STATUS
//   studentAadhaarFile: student.documents?.studentAadhaarFile ? "Uploaded" : "Not Uploaded",
//   fatherAadhaarFile: student.documents?.fatherAadhaarFile ? "Uploaded" : "Not Uploaded",
//   motherAadhaarFile: student.documents?.motherAadhaarFile ? "Uploaded" : "Not Uploaded",
//   guardianAadhaarFile: student.documents?.guardianAadhaarFile ? "Uploaded" : "Not Uploaded",
//   tcFile: student.documents?.tcFile ? "Uploaded" : "Not Uploaded",
//   conductFile: student.documents?.conductFile ? "Uploaded" : "Not Uploaded",
//   marksMemoFile: student.documents?.marksMemoFile ? "Uploaded" : "Not Uploaded"
// });
//     });

//     // HEADER STYLE
//     worksheet.getRow(1).font = { bold: true };

//     res.setHeader(
//       "Content-Type",
//       "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
//     );

//     res.setHeader(
//       "Content-Disposition",
//       "attachment; filename=students.xlsx"
//     );

//     await workbook.xlsx.write(res);

//     res.end();

//   } catch (error) {
//     console.error("Excel Export Error:", error);

//     res.status(500).json({
//       error: "Failed to export Excel"
//     });
//   }
// });



// /**
//  * OPEN TC TEMPLATE ONLY (DO NOT FINALIZE)
//  */
// router.put('/generate-tc/:id', async (req, res) => {
//   try {

//     const student = await Student.findById(req.params.id);

//     if (!student) {
//       return res.status(404).json({
//         message: "Student not found"
//       });
//     }

//     const { tcNumber } = req.body;

// student.generatedTC = {
//   tcNumber: tcNumber || "",
//   bookNo: "",
//   slNo: tcNumber || "",

//   firstAdmissionDate:
//   student.createdAt
//     ? new Date(student.createdAt).toISOString().split("T")[0]
//     : "",

//   lastStudiedClass:
//     student.admissionInfo?.classAdmittedTo || "",

//   subjectsStudied: "Eng, Math, Sci, Soc, Hindi",

//   paidDuesMonth: "",

//   whetherSCST: student.caste || "",
//   feeConcession: "",
//   totalWorkingDays: "",
//   nccScoutGuide: "",
//   dateOfApplication: "",

//   dateOfIssue: new Date().toISOString().split("T")[0],

//   reasonForLeaving: "Completed Course / Parent Request",

//   lastAttendanceDate: "",
//   remarks: "",

//   conduct: "", // ✅ FIXED

//   isGenerated: false
// };

//     await student.save();

//     res.json({
//       message: "TC template opened successfully",
//       updatedStudent: student
//     });

//   } catch (err) {

//     console.error("Generate TC Error:", err);

//     res.status(500).json({
//       message: err.message
//     });
//   }
// });


// /**
//  * FINAL SAVE TC
//  */router.put('/finalize-tc/:id', async (req, res) => {
//   try {
//     const tcData = req.body;

//     const student = await Student.findById(req.params.id); // ✅ FIX ADDED

//     if (!student) {
//       return res.status(404).json({
//         message: "Student not found"
//       });
//     }

//     const updatedStudent = await Student.findByIdAndUpdate(
//       req.params.id,
//       {
//         $set: {
//           generatedTC: {
//             ...student.generatedTC,   // ✅ NOW VALID
//             ...tcData,
//             tcNumber: tcData.slNo || tcData.bookNo || "",
//             isGenerated: true,
//             generatedDate: new Date()
//           },
//           status: "TC_GENERATED"
//         }
//       },
//       { new: true }
//     );

//     res.json({
//       message: "TC finalized successfully",
//       updatedStudent
//     });

//   } catch (err) {
//     console.error("Finalize TC Error:", err);

//     res.status(500).json({
//       message: err.message
//     });
//   }
// });
// /**
//  * GENERATED TC RECORDS
//  */
// router.get('/generated-tc', async (req, res) => {
//   try {
//     const { name } = req.query;

//     let query = {
//       status: "TC_GENERATED"
//     };

//     if (name && name.trim()) {
//       query.name = {
//         $regex: name.trim(),
//         $options: "i"
//       };
//     }

//     const students = await Student.find(query).sort({
//       "generatedTC.generatedDate": -1
//     });

//     res.json(students);

//   } catch (err) {
//     console.error("Generated TC Fetch Error:", err);

//     res.status(500).json({
//       message: err.message
//     });
//   }
// });

// router.put("/save-generated-tc/:id", async (req, res) => {
//   try {

//     const student = await Student.findById(req.params.id);

//     if (!student) {
//       return res.status(404).json({
//         error: "Student not found"
//       });
//     }

//     student.generatedTC = {
//   ...student.generatedTC,
//   ...req.body,
//   isGenerated: true,
//   generatedDate: new Date()
// };

//     await student.save();

//     res.json({
//       success: true,
//       updatedStudent: student
//     });

//   } catch (error) {

//     console.error(error);

//     res.status(500).json({
//       error: "Failed to save TC"
//     });
//   }
// });




// router.get("/:id", async (req, res) => {
//   try {

//     const student = await Student.findById(req.params.id);

//     if (!student) {
//       return res.status(404).json({
//         message: "Student not found"
//       });
//     }

//     res.json(student);

//   } catch (error) {

//     console.error(error);

//     res.status(500).json({
//       message: "Server Error"
//     });
//   }
// });

// export default router;





