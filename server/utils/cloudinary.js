// // import { v2 as cloudinary } from 'cloudinary';

// // cloudinary.config({
// //   cloud_name: 'your_cloud_name',
// //   api_key: 'your_api_key',
// //   api_secret: 'your_api_secret'
// // });

// // export const uploadToCloudinary = (fileBuffer, folder) => {
// //   return new Promise((resolve, reject) => {
// //     const uploadStream = cloudinary.uploader.upload_stream(
// //       { folder: folder },
// //       (error, result) => {
// //         if (error) return reject(error);
// //         resolve(result.secure_url); // This is the link we save to Mongo
// //       }
// //     );
// //     uploadStream.end(fileBuffer);
// //   });
// // };











// import { v2 as cloudinary } from 'cloudinary';
// import dotenv from 'dotenv';

// dotenv.config();

// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET
// });

// /**
//  * Uploads a file buffer directly to Cloudinary
//  * @param {Buffer} fileBuffer - The file buffer from multer
//  * @param {string} folder - The destination folder in Cloudinary
//  */
// export const uploadToCloudinary = (fileBuffer, folder) => {
//   return new Promise((resolve, reject) => {
//     const uploadStream = cloudinary.uploader.upload_stream(
//       { 
//         folder: folder,
//         resource_type: "auto" // Automatically detects if it's an image or PDF
//       },
//       (error, result) => {
//         if (error) {
//           console.error("Cloudinary Upload Error:", error);
//           return reject(error);
//         }
//         resolve(result.secure_url);
//       }
//     );
//     uploadStream.end(fileBuffer);
//   });
// };














import { v2 as cloudinary } from 'cloudinary';
import dotenv from 'dotenv';
import streamifier from 'streamifier';

dotenv.config();

// CLOUDINARY CONFIG
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

/**
 * Upload file buffer directly to Cloudinary
 * @param {Buffer} fileBuffer
 * @param {string} folder
 * @returns {Promise<string>}
 */
export const uploadToCloudinary = (fileBuffer, folder = "school_management") => {
  return new Promise((resolve, reject) => {
    // FILE CHECK
    if (!fileBuffer) {
      return reject(new Error("No file buffer received"));
    }

    const stream = cloudinary.uploader.upload_stream(
      {
        folder,
        resource_type: "auto",
unique_filename: true,
overwrite: true
      },
      (error, result) => {
        if (error) {
          console.error("Cloudinary Upload Error:", error);
          return reject(error);
        }

        if (!result || !result.secure_url) {
          return reject(new Error("Cloudinary upload failed"));
        }

        resolve(result.secure_url);
      }
    );

    // BUFFER → STREAM
    streamifier.createReadStream(fileBuffer).pipe(stream);
  });
};