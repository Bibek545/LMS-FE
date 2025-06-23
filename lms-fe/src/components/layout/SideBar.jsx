import React from "react";
import Stack from "react-bootstrap/Stack";
import { Link } from "react-router-dom";

// icons
import { RxDashboard } from "react-icons/rx";
import { GiBookshelf } from "react-icons/gi";
import { FaUsers } from "react-icons/fa";
import { PiBooksFill } from "react-icons/pi";
import { CgProfile } from "react-icons/cg";
const SideBar = () => {
  return (
    <Stack gap={3}>
      <div className="p-2">
        <Link className="nav-link" to="/user">
        <RxDashboard className="m-1" />
           Dashboard
        </Link>
      </div>
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
          <PiBooksFill className="m-1" />Borrow history
        </Link>
      </div>
      <div className="p-2">
        <Link className="nav-link" to="/user/profile">
         <CgProfile /> My Profile
        </Link>
      </div>
    </Stack>
  );
};
export default SideBar;
