import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import User from "../pages/post/user";
import CreateUser from "../pages/post/CreateUser";
import EditUser from "../pages/post/EditUser";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/user" element={<User />} />
      <Route path="/user/create_user" element={<CreateUser />} />
      <Route path="/edit/:id" element={<EditUser />} />
    </Routes>
  );
}

export default AppRoutes;
