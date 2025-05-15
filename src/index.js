// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
// import ConsultationDashboard from "./Consultation";
// import { BrowserRouter, Route, Routes } from "react-router-dom";

// const Main = () => {
//   return (
//     <div>

//     <Routes>
//       <Route path="/" index element={<App />} />
//       <Route path="/consultations" element={<ConsultationDashboard />} />
//     </Routes>
//     </div>
//   );
// };

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <Main />
//     </BrowserRouter>
//   </React.StrictMode>
// );

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);