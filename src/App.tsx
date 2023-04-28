import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { slice } from './useStore';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthLayout from './components/AuthLayout';
import UserLayout from './components/UserLayout';
import Login from './pages/Login';
import Register from './pages/Register';
import ChatRoom from './pages/ChatRoom';
import Dashboard from './pages/Dashboard';
import AdminLogin from './pages/AdminLogin';

const store = configureStore({ reducer: slice.reducer });

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AuthLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/admin_login" element={<AdminLogin />} />
          </Route>
          <Route path="/user" element={<UserLayout />}>
            <Route path="/user/chatting" element={<ChatRoom />} />
          </Route>
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
