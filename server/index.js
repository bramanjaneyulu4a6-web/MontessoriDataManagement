// // import express from 'express';
// // import mongoose from 'mongoose';
// // import cors from 'cors';
// // import dotenv from 'dotenv';
// // import studentRoutes from './routes/studentRoutes.js'; // Ensure the path is correct

// // dotenv.config();
// // const app = express();

// // // Middleware
// // app.use(cors());
// // app.use(express.json());

// // // Integrated Routes
// // app.use('/api/students', studentRoutes);

// // const PORT = process.env.PORT || 5000;
// // const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/school_db';

// // mongoose.connect(MONGO_URI)
// //   .then(() => {
// //     console.log("✅ MongoDB Connected");
// //     app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
// //   })
// //   .catch((err) => {
// //     console.error("❌ Database connection error:", err.message);
// //     process.exit(1); // Stop server if DB fails
// //   });





// import express from 'express';
// import cors from 'cors';
// import dotenv from 'dotenv';
// import mongoose from 'mongoose';
// import studentRoutes from './routes/studentRoutes.js';

// dotenv.config();
// const app = express();

// // MIDDLEWARE
// app.use(cors());
// app.use(express.json());

// // ROUTE LINKING
// app.use('/api/students', studentRoutes);

// // DB CONNECTION (Replace with your actual URI)
// const PORT = process.env.PORT || 5000;
// mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/school_db')
//   .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
//   .catch((err) => console.log("DB Connection Error: ", err));














import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import studentRoutes from './routes/studentRoutes.js';
import authRoutes from "./routes/authRoutes.js";

// 1. Load Environment Variables
dotenv.config();

const app = express();

// 2. Middleware & Increased Payload Limits
// This resolves the 'PayloadTooLargeError' for large Excel imports
app.use(cors());
app.use(express.json({ limit: '50mb' })); 
app.use(express.urlencoded({ limit: '50mb', extended: true }));






app.use("/api/auth", authRoutes);


// 3. Route Linking
app.use('/api/students', studentRoutes);

// 4. Database Connection & Server Start
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/school_db';

mongoose.connect(MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected Successfully");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.error("DB Connection Error: ", err);
  });