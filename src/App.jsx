import React from 'react';
import './App.css'
import DefaultLayout from './components/layout/DefaultLayout';
import AppRoutes from './routes/AppRoutes';
import { ToastContainer } from 'react-toastify';
function App() {

  return (
    <>
    
    <AppRoutes />
    <ToastContainer />
    </>
  )
}

export default App;
