import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import FilesList from "../Pages/FilesList";
const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Signup/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/dashboard" element={<Dashboard/>}></Route>
        <Route path="/lists" element={<FilesList/>}></Route>
      </Routes>
    </div>
  );
};

export default AllRoutes;
