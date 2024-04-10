import React from "react";
import './style/style.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar/sideBar";
import Hr from "./pages/HR";
import Students from "./pages/Students";
import HOD from "./pages/HOD";
import Loginuser from "./components/HR/Loginuser";
import FakePaymentForm from "./components/Payment/Payment"



export default function App() {
  return (
    <BrowserRouter>
        
        
      <div className="MainContainer"> 
        <Sidebar />
        
        <div className="Main"> 
          <Routes>
            <Route path="/" element={<Hr />} /> 
            <Route path="/Hr" element={<Hr />} /> 
            <Route path="/Loginuser" element={<Loginuser />} />
            <Route path="/Students" element={<Students />} />
            <Route path="/hod" element={<HOD />} /> 
            <Route path="/FakePaymentForm" element={<FakePaymentForm/>}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
