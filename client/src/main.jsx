// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css' // <--- ENSURE THIS LINE IS HERE

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )









import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import App from './App.jsx'
import ResetPassword from "./components/ResetPassword";

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <BrowserRouter>
      <Routes>

        {/* MAIN APP */}
        <Route path="/*" element={<App />} />

        {/* RESET PASSWORD PAGE */}
        <Route
          path="/reset-password/:token"
          element={<ResetPassword />}
        />

      </Routes>
    </BrowserRouter>

  </React.StrictMode>,
)