// Main.jsx
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Header from "../../components/Header";
import UserList from "../../pages/post/UserList";

const Main = () => {
  return (
    <div>
      <Header title="POST PAGE" buttonName="Create" routeURL="create_user" />
      <div className="p-4">
        <UserList />
      </div>
    </div>
  );
};

export default Main;
