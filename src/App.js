import React from 'react';
import './style.css';
import { Routes, Route } from 'react-router';
import { Registration, Login, Dashboard } from './pages/index';
export default function App() {
  return (
    <div>
      <Routes>
        <Route path="dashboard" element={<Dashboard />}></Route>
        <Route path="registration" element={<Registration />}></Route>
        <Route path="registration" element={<Registration />}></Route>
        <Route path="registration" element={<Registration />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="/*" element={<Login />}></Route>
      </Routes>
    </div>
  );
}
