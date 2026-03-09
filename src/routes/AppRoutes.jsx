import React, { use } from "react";
import DefaultLayout from "../components/layout/DefaultLayout";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  HomePage,
  DashboardPage,
  SignInPage,
  SignUpPage,
  VerifyUser,
  ForgetPasswordPage,
  BookLandingPage,
  Books,
  NewBookPage,
  EditBookPage,
  ReviewPage,
  UserPage,
  Profile,
  BorrowPage,
} from "../pages";
import UserLayout from "../components/layout/UserLayout";
import AllBooks from "../pages/books/AllBooks";
import Search from "../pages/books/Search";
import Cart from "../components/cart/Cart";
import ThankYou from "../pages/dashboard/ThankyouPage";
import { useSelector } from "react-redux";

// import SignInPage from '../pages/auth/SignInPage';
// import HomePage from "../pages/home/HomePage.jsx"
// import DashboardPage from "../pages/dashboard/DashboardPage.jsx"
const noAccess = < h1> You dont have permission to access this page</h1>
const AppRoutes = () => {
  const { user } = useSelector((state) => state.userInfo);
  const isAdmin = user.role === "admin";
  return (
    <Routes>
      {/* public pages */}
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<HomePage />}></Route>
        <Route path="all-books" element={<AllBooks />} />
        <Route path="search" element={<Search />} />
        <Route path="book/:slug" element={<BookLandingPage />}></Route>
        <Route path="signup" element={<SignInPage />}></Route>
        <Route path="activate-user" element={<VerifyUser />}></Route>
        <Route path="login" element={<SignUpPage />}></Route>
        <Route path="forgot-password" element={<ForgetPasswordPage />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="*" element={<h1>404 page not found</h1>}></Route>
      </Route>

      {/* private pages */}
      <Route path="/user" element={<UserLayout />}>
        {/* all users */}
        <Route index element={<DashboardPage />}></Route>
        <Route path="my-borrow" element={<BorrowPage isAdmin={false}/>}></Route>
        <Route path="profile" element={<Profile />}></Route>
        <Route path="thank-you" element={<ThankYou />}></Route>

        {/* only admin access pages  */}
        <Route path="books" element={ isAdmin ? <Books /> : noAccess }></Route>
        <Route path="new-book" element={isAdmin ? <NewBookPage /> : noAccess}></Route>
        <Route path="edit-book/:_id" element={ isAdmin ? <EditBookPage /> : noAccess }></Route>
        <Route path="borrow-history" element={isAdmin ? <BorrowPage isAdmin={true} /> : noAccess }></Route>
        <Route path="all" element={isAdmin ? <UserPage /> : noAccess}></Route>
        <Route path="reviews" element={isAdmin ? <ReviewPage/> : noAccess}></Route>


      </Route>
    </Routes>
  );
};

export default AppRoutes;
