import React from 'react'
import Stack from 'react-bootstrap/Stack';
import { Link } from 'react-router-dom';
const SideBar = () => {
  return (

    <Stack gap={3}>
      <div className="p-2">
        <Link className="nav-link" to = "/user" >Dashboard</Link>
        <Link className="nav-link" to = "/user/books" >Book</Link>
        <Link className="nav-link" to = "/user/user-list" >Student</Link>
        <Link className="nav-link" to = "/borrow" >Borrow history</Link>
        <Link className="nav-link" to = "/profile" >My Profile</Link>
      </div>
   
    </Stack>
  );
}
export default SideBar;
