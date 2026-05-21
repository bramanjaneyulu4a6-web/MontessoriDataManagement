// // ============================
// // FILE: server/models/User.js
// // ============================

// import mongoose from "mongoose";

// const userSchema = new mongoose.Schema(
//   {
//     name: String,

//     email: {
//       type: String,
//       unique: true
//     },

//     password: String
//   },
//   {
//     timestamps: true
//   }
// );

// export default mongoose.model("User", userSchema);









import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: String,

    email: {
      type: String,
      unique: true
    },

    password: String,

    resetPasswordToken: String,

    resetPasswordExpire: Date
  },
  {
    timestamps: true
  }
);

export default mongoose.model("User", userSchema);