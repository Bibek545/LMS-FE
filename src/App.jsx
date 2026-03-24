import React, { useEffect, useState } from 'react';
import './App.css'
import DefaultLayout from './components/layout/DefaultLayout';
import AppRoutes from './routes/AppRoutes';
import { ToastContainer } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { fetchAllPublicBooksAction } from './features/book/bookAction';
import { Button } from 'react-bootstrap';
import { ModalWrapper } from './components/modalWrapper/ModalWrapper';
import { setModalShow } from './features/system/systemSlice';
// import AppRoutes from './routes/AppRoutes';
function App() {

  // const [modalShow, setModalShow] = useState(true);
    // const [state, setState] = useState

  const dispatch = useDispatch();
   useEffect (()=> {
     // fetch all the data and mount it in the redux
     dispatch(fetchAllPublicBooksAction())
   }, [dispatch])
  return (
    <>
    
    <AppRoutes />
    <ToastContainer />
    
          <ModalWrapper />
    </>
  )
}

export default App;
