import React from 'react'
import DefaultLayout from '../components/layout/DefaultLayout'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {HomePage, DashboardPage, SignInPage, SignUpPage, ForgetPasswordPage} from "../pages"
import UserLayout from '../components/layout/UserLayout';
// import SignInPage from '../pages/auth/SignInPage';
// import HomePage from "../pages/home/HomePage.jsx"
// import DashboardPage from "../pages/dashboard/DashboardPage.jsx"

const AppRoutes = () => {
  return (
     
      <Routes>
         {/* public pages */}
          <Route path='/' element={ <DefaultLayout/>} >
            <Route index element={< HomePage />
            } ></Route>
            <Route path='signup' element={< SignInPage />
            } ></Route>
             <Route path='login' element={< SignUpPage />
            } ></Route>
             <Route path='forgot-password' element={< ForgetPasswordPage />
            } ></Route>
           </Route>
       
       

        {/* private pages */}
        <Route path='/user' element={<UserLayout/>}>
         <Route index element={<DashboardPage />}>
         </Route> 
        </Route>
       
      </Routes>
  )
};

export default AppRoutes;
