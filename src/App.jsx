import React, { useEffect } from 'react';
import './App.css'
import DefaultLayout from './components/layout/DefaultLayout';
import AppRoutes from './routes/AppRoutes';
import { ToastContainer } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { fetchAllPublicBooksAction } from './features/book/bookAction';
// import AppRoutes from './routes/AppRoutes';
function App() {
  const dispatch = useDispatch();
   useEffect (()=> {
     // fetch all the data and mount it in the redux
     dispatch(fetchAllPublicBooksAction())
   }, [dispatch])
  return (
    <>
    
    <AppRoutes />
    <ToastContainer />
    </>
  )
}

export default App;
