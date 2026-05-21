// // // // import mongoose from 'mongoose';

// // // // const StudentSchema = new mongoose.Schema({
// // // //   name: { type: String, required: true },
// // // //   dob: { type: Date, required: true },
// // // //   gender: String,
// // // //   nationality: { type: String, default: 'Indian' },
// // // //   religion: String,
// // // //   caste: String,
// // // //   motherTongue: String,
// // // //   state: String,
// // // //   parentDetails: {
// // // //     fatherName: { type: String, required: true },
// // // //     motherName: { type: String, required: true },
// // // //     occupation: String,
// // // //     residence: String,
// // // //   },
// // // //   admissionInfo: {
// // // //     admissionNo: { type: String, required: true, unique: true },
// // // //     classAdmittedTo: String,
// // // //     previousSchoolName: String,
// // // //     previousTCNumber: String,
// // // //     previousTCDate: Date,
// // // //   },
// // // //   status: { type: String, default: 'ACTIVE' }, // ACTIVE or ALUMNI (after TC issue)
// // // //   createdAt: { type: Date, default: Date.now }
// // // // });

// // // // /* 🔥 ADD EXACTLY HERE */
// // // // StudentSchema.index({ name: 1 });
// // // // StudentSchema.index({ "parentDetails.fatherName": 1 });

// // // // export default mongoose.model('Student', StudentSchema);





// // // // 15







// // // import mongoose from 'mongoose';

// // // const StudentSchema = new mongoose.Schema({
// // //   name: { type: String, required: true },
// // //   dob: { type: Date, required: true },
// // //   gender: String,
// // //   aadhaarNo: String, // Added
// // //   nationality: { type: String, default: 'Indian' },
// // //   religion: String,
// // //   caste: String,
// // //   motherTongue: String,
// // //   state: String,
  
// // //   parentDetails: {
// // //     // Father's Profile
// // //     fatherName: { type: String, required: true },
// // //     fatherMobile: String, // Added
// // //     fatherAadhaar: String, // Added
// // //     fatherQualification: String, // Added
// // //     fatherOccupation: String, // Renamed from occupation to match frontend
// // //     fatherAnnualIncome: String, // Added
    
// // //     // Mother's Profile
// // //     motherName: { type: String, required: true },
// // //     motherMobile: String, // Added
// // //     motherAadhaar: String, // Added
// // //     motherQualification: String, // Added
// // //     motherOccupation: String, // Added
// // //     motherAnnualIncome: String, // Added

// // //     // Guardian Profile
// // //     guardianName: String, // Added
// // //     guardianRelation: String, // Added
// // //     guardianMobile: String, // Added
// // //     guardianAadhaar: String, // Added
// // //     guardianOccupation: String, // Added
// // //     guardianAnnualIncome: String, // Added
    
// // //     residence: String,
// // //   },

// // //   admissionInfo: {
// // //     admissionNo: { type: String, required: true, unique: true },
// // //     classAdmittedTo: String,
// // //     previousSchoolName: String,
// // //     previousTCNumber: String,
// // //     previousTCDate: Date,
// // //   },

// // //   // Document paths (to store file URLs/filenames)
// // //   documents: {
// // //     tcFile: String,
// // //     conductFile: String,
// // //     marksMemoFile: String,
// // //     studentAadhaarFile: String,
// // //     fatherAadhaarFile: String,
// // //     motherAadhaarFile: String,
// // //     guardianAadhaarFile: String,
// // //   },

// // //   status: { type: String, default: 'ACTIVE' },
// // //   createdAt: { type: Date, default: Date.now }
// // // }, {
// // //   // This helps format dates automatically when sending to JSON (frontend)
// // //   toJSON: { getters: true },
// // //   toObject: { getters: true }
// // // });

// // // // Indexing for faster search
// // // StudentSchema.index({ name: 1 });
// // // StudentSchema.index({ "parentDetails.fatherName": 1 });
// // // StudentSchema.index({ "admissionInfo.admissionNo": 1 });

// // // export default mongoose.model('Student', StudentSchema);


















// // import mongoose from 'mongoose';

// // const StudentSchema = new mongoose.Schema({
// //   name: { type: String, required: true },
// //   dob: { type: Date, required: true },
// //   gender: String,
// //   aadhaarNo: String, 
// //   nationality: { type: String, default: 'Indian' },
// //   religion: String,
// //   caste: String,
// //   motherTongue: String,
// //   state: String,
  
// //   parentDetails: {
// //     // Father's Profile
// //     fatherName: { type: String, required: true },
// //     fatherMobile: String, 
// //     fatherAadhaar: String, 
// //     fatherQualification: String, 
// //     fatherOccupation: String, 
// //     fatherAnnualIncome: String, 
    
// //     // Mother's Profile
// //     motherName: { type: String, required: true },
// //     motherMobile: String, 
// //     motherAadhaar: String, 
// //     motherQualification: String, 
// //     motherOccupation: String, 
// //     motherAnnualIncome: String, 

// //     // Guardian Profile
// //     guardianName: String, 
// //     guardianRelation: String, 
// //     guardianMobile: String, 
// //     guardianAadhaar: String, 
// //     guardianOccupation: String, 
// //     guardianAnnualIncome: String, 
    
// //     residence: String,
// //   },

// //   admissionInfo: {
// //     // unique: true already creates an index, so we don't need to call it later
// //     admissionNo: { type: String, required: true, unique: true },
// //     classAdmittedTo: String,
// //     previousSchoolName: String,
// //     previousTCNumber: String,
// //     previousTCDate: Date,
// //   },

// //   // Stores Cloudinary secure_urls
// //   documents: {
// //     tcFile: String,
// //     conductFile: String,
// //     marksMemoFile: String,
// //     studentAadhaarFile: String,
// //     fatherAadhaarFile: String,
// //     motherAadhaarFile: String,
// //     guardianAadhaarFile: String,
// //   },

// //   status: { type: String, default: 'ACTIVE' },
// //   createdAt: { type: Date, default: Date.now }
// // }, {
// //   toJSON: { getters: true },
// //   toObject: { getters: true }
// // });

// // /** 
// //  * INDEXING
// //  * We remove the duplicate index for admissionNo here.
// //  * We keep name and fatherName indexes for the duplicate search feature.
// //  */
// // StudentSchema.index({ name: 1 });
// // StudentSchema.index({ "parentDetails.fatherName": 1 });

// // export default mongoose.model('Student', StudentSchema);













// // 18-05-2026











// import mongoose from 'mongoose';

// const StudentSchema = new mongoose.Schema({
//   // Base Core Personal Fields
//   name: { type: String, required: true },
//   dob: { type: Date, required: true },
//   gender: { type: String },
//   aadhaarNo: { type: String }, 
//   nationality: { type: String, default: 'Indian' },
//   religion: { type: String },
//   caste: { type: String },
//   motherTongue: { type: String },
//   state: { type: String },
  
//   // NEW STUDENT CONFIGURATIONS REQUESTED
//   siblings: { type: String },           // Detailed text field or simple configuration count text
//   cwsn: { type: String },               // Children With Special Needs status parameters
//   firstLanguage: { type: String },
//   secondLanguage: { type: String },
//   thirdLanguage: { type: String },
//   udisePlus: { type: String },          // UDISE+ identifier tracking for government platforms

//   parentDetails: {
//     // Father's Profile
//     fatherName: { type: String, required: true },
//     fatherMobile: { type: String }, 
//     fatherAadhaar: { type: String }, 
//     fatherQualification: { type: String }, 
//     fatherOccupation: { type: String }, 
//     fatherAnnualIncome: { type: String }, 
    
//     // Mother's Profile
//     motherName: { type: String, required: true },
//     motherMobile: { type: String }, 
//     motherAadhaar: { type: String }, 
//     motherQualification: { type: String }, 
//     motherOccupation: { type: String }, 
//     motherAnnualIncome: { type: String }, 

//     // Guardian Profile
//     guardianName: { type: String }, 
//     guardianRelation: { type: String }, 
//     guardianMobile: { type: String }, 
//     guardianAadhaar: { type: String }, 
//     guardianOccupation: { type: String }, 
//     guardianAnnualIncome: { type: String }, 
    
//     residence: { type: String },
//   },

//   admissionInfo: {
//     admissionNo: { type: String, required: true, unique: true },
//     classAdmittedTo: { type: String },
//     previousSchoolName: { type: String },
//     previousTCNumber: { type: String },
//     previousTCDate: { type: Date },
//   },

//   // Secure URL references for digital document systems (e.g. Cloudinary storage paths)
//   documents: {
//     tcFile: { type: String },
//     conductFile: { type: String },
//     marksMemoFile: { type: String },
//     studentAadhaarFile: { type: String },
//     fatherAadhaarFile: { type: String },
//     motherAadhaarFile: { type: String },
//     guardianAadhaarFile: { type: String },
//   },

//   status: { type: String, default: 'ACTIVE' },
//   createdAt: { type: Date, default: Date.now }
// }, {
//   toJSON: { getters: true },
//   toObject: { getters: true }
// });

// /** 
//  * INDEXING OPTIMIZATIONS
//  * Speed optimization targets for the automated multi-field background search engine queries.
//  */
// StudentSchema.index({ name: 1 });
// StudentSchema.index({ "parentDetails.fatherName": 1 });

// export default mongoose.model('Student', StudentSchema);


















// import mongoose from 'mongoose';

// const StudentSchema = new mongoose.Schema({
//   // Base Core Personal Fields
//   name: { type: String, required: true },
//   dob: { type: Date, required: true },
//   gender: { type: String },
//   aadhaarNo: { type: String }, 
//   nationality: { type: String, default: 'Indian' },
//   religion: { type: String },
//   caste: { type: String },
//   motherTongue: { type: String },
//   state: { type: String },
  
//   // NEW STUDENT CONFIGURATIONS REQUESTED
//   siblings: { type: String },           // Detailed text field or simple configuration count text
//   cwsn: { type: String },               // Children With Special Needs status parameters
//   firstLanguage: { type: String },
//   secondLanguage: { type: String },
//   thirdLanguage: { type: String },
//   udisePlus: { type: String },          // UDISE+ identifier tracking for government platforms

//   parentDetails: {
//     // Father's Profile
//     fatherName: { type: String, required: true },
//     fatherMobile: { type: String }, 
//     fatherAadhaar: { type: String }, 
//     fatherQualification: { type: String }, 
//     fatherOccupation: { type: String }, 
//     fatherAnnualIncome: { type: String }, 
    
//     // Mother's Profile
//     motherName: { type: String, required: true },
//     motherMobile: { type: String }, 
//     motherAadhaar: { type: String }, 
//     motherQualification: { type: String }, 
//     motherOccupation: { type: String }, 
//     motherAnnualIncome: { type: String }, 

//     // Guardian Profile
//     guardianName: { type: String }, 
//     guardianRelation: { type: String }, 
//     guardianMobile: { type: String }, 
//     guardianAadhaar: { type: String }, 
//     guardianOccupation: { type: String }, 
//     guardianAnnualIncome: { type: String }, 
    
//     residence: { type: String },
//   },

//   admissionInfo: {
//     admissionNo: { type: String, required: true, unique: true },
//     classAdmittedTo: { type: String },
//     previousSchoolName: { type: String },
//     previousTCNumber: { type: String },
//     previousTCDate: { type: Date },
//   },

//   // Secure URL references for digital document systems (e.g. Cloudinary storage paths)
//   documents: {
//     tcFile: { type: String },
//     conductFile: { type: String },
//     marksMemoFile: { type: String },
//     studentAadhaarFile: { type: String },
//     fatherAadhaarFile: { type: String },
//     motherAadhaarFile: { type: String },
//     guardianAadhaarFile: { type: String },
//   },

//     status: {
//     type: String,
//     enum: ["ACTIVE", "TC_GENERATED"],
//     default: "ACTIVE"
//   },

//   generatedTC: {
//   isGenerated: {
//     type: Boolean,
//     default: false
//   },

//   generatedDate: {
//     type: Date,
//     default: null
//   },

//   tcNumber: {
//     type: String,
//     default: ""
//   },

//   bookNo: String,
//   slNo: String,
//   firstAdmissionDate: String,
//   lastStudiedClass: String,
//   subjectsStudied: String,
//   paidDuesMonth: String,
//   conduct: String,
//   dateOfIssue: String,
//   reasonForLeaving: String
// },
  

//   createdAt: {
//     type: Date,
//     default: Date.now
//   }

// }, {
//   toJSON: { getters: true },
//   toObject: { getters: true }
// });

// /** 
//  * INDEXING OPTIMIZATIONS
//  * Speed optimization targets for the automated multi-field background search engine queries.
//  */
// StudentSchema.index({ name: 1 });
// StudentSchema.index({ "parentDetails.fatherName": 1 });

// export default mongoose.model('Student', StudentSchema);









// 19-05-2026






// import mongoose from 'mongoose';

// const StudentSchema = new mongoose.Schema({
//   // Base Core Personal Fields
//   name: { type: String, required: true },
//   dob: { type: Date, required: true },
//   gender: { type: String },
//   aadhaarNo: { type: String }, 
//   nationality: { type: String, default: 'Indian' },
//   religion: { type: String },
//   caste: { type: String },
//   motherTongue: { type: String },
//   state: { type: String },
  
//   // NEW STUDENT CONFIGURATIONS REQUESTED
//   siblings: { type: String },           // Detailed text field or simple configuration count text
//   cwsn: { type: String },               // Children With Special Needs status parameters
//   firstLanguage: { type: String },
//   secondLanguage: { type: String },
//   thirdLanguage: { type: String },
//   udisePlus: { type: String },          // UDISE+ identifier tracking for government platforms

//   parentDetails: {
//     // Father's Profile
//     fatherName: { type: String, required: true },
//     fatherMobile: { type: String }, 
//     fatherAadhaar: { type: String }, 
//     fatherQualification: { type: String }, 
//     fatherOccupation: { type: String }, 
//     fatherAnnualIncome: { type: String }, 
    
//     // Mother's Profile
//     motherName: { type: String, required: true },
//     motherMobile: { type: String }, 
//     motherAadhaar: { type: String }, 
//     motherQualification: { type: String }, 
//     motherOccupation: { type: String }, 
//     motherAnnualIncome: { type: String }, 

//     // Guardian Profile
//     guardianName: { type: String }, 
//     guardianRelation: { type: String }, 
//     guardianMobile: { type: String }, 
//     guardianAadhaar: { type: String }, 
//     guardianOccupation: { type: String }, 
//     guardianAnnualIncome: { type: String }, 
    
//     residence: { type: String },
//   },

//   admissionInfo: {
//     admissionNo: { type: String, required: true, unique: true },
//     classAdmittedTo: { type: String },
//     previousSchoolName: { type: String },
//     previousTCNumber: { type: String },
//     previousTCDate: { type: Date },
//   },

//   // Secure URL references for digital document systems (e.g. Cloudinary storage paths)
//   documents: {
//     tcFile: { type: String },
//     conductFile: { type: String },
//     marksMemoFile: { type: String },
//     studentAadhaarFile: { type: String },
//     fatherAadhaarFile: { type: String },
//     motherAadhaarFile: { type: String },
//     guardianAadhaarFile: { type: String },
//   },

//     status: {
//     type: String,
//     enum: ["ACTIVE", "TC_GENERATED"],
//     default: "ACTIVE"
//   },

//   generatedTC: {
//   isGenerated: {
//     type: Boolean,
//     default: false
//   },

//   generatedDate: {
//     type: Date,
//     default: null
//   },

//   tcNumber: {
//     type: String,
//     default: ""
//   },

//   bookNo: String,
//   slNo: String,
//   firstAdmissionDate: String,
//   lastStudiedClass: String,
//   subjectsStudied: String,
//   paidDuesMonth: String,
//   conduct: String,
//   dateOfIssue: String,
//   reasonForLeaving: String
// },
  

//   createdAt: {
//     type: Date,
//     default: Date.now
//   }

// }, {
//   toJSON: { getters: true },
//   toObject: { getters: true }
// });

// /** 
//  * INDEXING OPTIMIZATIONS
//  * Speed optimization targets for the automated multi-field background search engine queries.
//  */
// StudentSchema.index({ name: 1 });
// StudentSchema.index({ "parentDetails.fatherName": 1 });

// export default mongoose.model('Student', StudentSchema);








// 20-05-2025








import mongoose from 'mongoose';

const StudentSchema = new mongoose.Schema({
  // Base Core Personal Fields
  name: { type: String, required: true },
  dob: { type: Date, required: true },
  gender: { type: String },
  aadhaarNo: { type: String }, 
  nationality: { type: String, default: 'Indian' },
  religion: { type: String },
  caste: { type: String },
  motherTongue: { type: String },
  state: { type: String },
  
  // NEW STUDENT CONFIGURATIONS REQUESTED
  siblings: { type: String },           // Detailed text field or simple configuration count text
  cwsn: { type: String },               // Children With Special Needs status parameters
  firstLanguage: { type: String },
  secondLanguage: { type: String },
  thirdLanguage: { type: String },
  udisePlus: { type: String },          // UDISE+ identifier tracking for government platforms

  parentDetails: {
    // Father's Profile
    fatherName: { type: String, required: true },
    fatherMobile: { type: String }, 
    fatherAadhaar: { type: String }, 
    fatherQualification: { type: String }, 
    fatherOccupation: { type: String }, 
    fatherAnnualIncome: { type: String }, 
    
    // Mother's Profile
    motherName: { type: String, required: true },
    motherMobile: { type: String }, 
    motherAadhaar: { type: String }, 
    motherQualification: { type: String }, 
    motherOccupation: { type: String }, 
    motherAnnualIncome: { type: String }, 

    // Guardian Profile
    guardianName: { type: String }, 
    guardianRelation: { type: String }, 
    guardianMobile: { type: String }, 
    guardianAadhaar: { type: String }, 
    guardianOccupation: { type: String }, 
    guardianAnnualIncome: { type: String }, 
    
    residence: { type: String },
  },

  admissionInfo: {
    admissionNo: { type: String, required: true, unique: true },
    classAdmittedTo: { type: String },
    previousSchoolName: { type: String },
    previousTCNumber: { type: String },
    previousTCDate: { type: Date },
  },

  // Secure URL references for digital document systems (e.g. Cloudinary storage paths)
  documents: {
    tcFile: { type: String },
    conductFile: { type: String },
    marksMemoFile: { type: String },
    studentAadhaarFile: { type: String },
    fatherAadhaarFile: { type: String },
    motherAadhaarFile: { type: String },
    guardianAadhaarFile: { type: String },
  },

    status: {
    type: String,
    enum: ["ACTIVE", "TC_GENERATED"],
    default: "ACTIVE"
  },

  generatedTC: {

  isGenerated: {
    type: Boolean,
    default: false
  },

  generatedDate: {
    type: Date,
    default: null
  },

  tcNumber: {
    type: String,
    default: ""
  },

  // BASIC TC
  bookNo: String,
  slNo: String,

  // STUDENT ACADEMIC
  firstAdmissionDate: String,
  lastStudiedClass: String,
  subjectsStudied: String,

  // FEES & RECORDS
  paidDuesMonth: String,
  conduct: String,

  // NEW TC FIELDS
  whetherSCST: String,
  feeConcession: String,
  totalWorkingDays: String,
  nccScoutGuide: String,
  dateOfApplication: String,
  dateOfIssue: String,
  reasonForLeaving: String,
  lastAttendanceDate: String,
  remarks: String,

  // OPTIONAL EXTRA
  schoolBoardResult: String,
  whetherFailed: String,
  qualifiedPromotion: String,
  totalWorkingDaysPresent: String,
gamesPlayed: String
},
  

  createdAt: {
    type: Date,
    default: Date.now
  }

}, {
  toJSON: { getters: true },
  toObject: { getters: true }
});

/** 
 * INDEXING OPTIMIZATIONS
 * Speed optimization targets for the automated multi-field background search engine queries.
 */
StudentSchema.index({ name: 1 });
StudentSchema.index({ "parentDetails.fatherName": 1 });

export default mongoose.model('Student', StudentSchema);