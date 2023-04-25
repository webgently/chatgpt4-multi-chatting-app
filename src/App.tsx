import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthLayout from './components/AuthLayout';
import Login from './pages/Login';
import Register from './pages/Register';
import ChatRoom from './pages/ChatRoom';
import Dashboard from './pages/Dashboard';
import AdminLogin from './pages/AdminLogin';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin_login" element={<AdminLogin />} />
        </Route>
        <Route path="/chat-room" element={<ChatRoom />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
