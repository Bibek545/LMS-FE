import React from "react";
import Stack from "react-bootstrap/Stack";
import { Link } from "react-router-dom";

// icons
import { RxDashboard } from "react-icons/rx";
import { GiBookshelf } from "react-icons/gi";
import { FaUsers } from "react-icons/fa";
import { PiBooksFill } from "react-icons/pi";
import { CgProfile } from "react-icons/cg";
import { useSelector } from "react-redux";
const SideBar = () => {
    const { user } = useSelector((state) => state.userInfo);
  const isAdmin = user.role === "admin";
  return (
    <Stack gap={3}>
      <div className="p-2">
        <Link className="nav-link" to="/user">
        <RxDashboard className="m-1" />
           Dashboard
        </Link>
      </div>

            <div className="p-2">
        <Link className="nav-link" to="/user/my-borrow">
          <PiBooksFill className="m-1" />My Borrow List
        </Link>
      </div>
      <div className="p-2">
        <Link className="nav-link" to="/user/profile">
         <CgProfile /> My Profile
        </Link>
      </div>

      {
        isAdmin && <>
              <div className="p-2">
        <Link className="nav-link" to="/user/books">
         <GiBookshelf /> Books
        </Link>
        </div>
        <div className="p-2">
        <Link className="nav-link" to="/user/reviews">
         <GiBookshelf /> Reviews
        </Link>
      </div>
      <div className="p-2">
        <Link className="nav-link" to="/user/all">
         <FaUsers /> Student
        </Link>
      </div>
      <div className="p-2">
        <Link className="nav-link" to="/user/borrow-history">
          <PiBooksFill className="m-1" />All Borrow history
        </Link>
      </div>
        </>
      }
    </Stack>
  );
};
export default SideBar;
