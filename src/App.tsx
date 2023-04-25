import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import ChatRoom from './pages/ChatRoom';
import Dashboard from './pages/Dashboard';
import AdminLogin from './pages/AdminLogin';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/chat-room" element={<ChatRoom />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admin_login" element={<AdminLogin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
