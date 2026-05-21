import React, { useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const ResetPassword = () => {

  const { token } = useParams();

  const navigate = useNavigate();

  const [password, setPassword] = useState("");

  const handleReset = async () => {
    try {

      await axios.post(
        `http://localhost:5000/api/auth/reset-password/${token}`,
        { password }
      );

      alert("Password reset successful");

      navigate("/");

    } catch (error) {

      alert(
        error.response?.data?.message ||
        "Something went wrong"
      );

    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-md">

        <h1 className="text-3xl font-black mb-6">
          Reset Password
        </h1>

        <input
          type="password"
          placeholder="Enter new password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full h-14 border border-gray-300 px-4 rounded-lg mb-5"
        />

        <button
          onClick={handleReset}
          className="w-full h-14 bg-blue-700 text-white rounded-lg font-bold"
        >
          Update Password
        </button>

      </div>

    </div>
  );
};

export default ResetPassword;