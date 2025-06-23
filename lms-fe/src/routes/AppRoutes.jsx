import React from 'react'
import DefaultLayout from '../components/layout/DefaultLayout'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {HomePage, DashboardPage} from "../pages"
// import HomePage from "../pages/home/HomePage.jsx"
// import DashboardPage from "../pages/dashboard/DashboardPage.jsx"

const AppRoutes = () => {
  return (
      <Routes>
        {/* public pages */}
        <Route path="/" element={
            <DefaultLayout>
                < HomePage />
                </DefaultLayout>
            } ></Route>

        {/* private pages */}
        <Route path="/user" element = { <DashboardPage />}/>
      </Routes>
  )
};

export default AppRoutes;
