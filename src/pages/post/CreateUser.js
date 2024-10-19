import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../../redux/postSlice";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";

const CreateUser = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      id: Date.now(),
      name: data.name,
      email: data.email,
    };
    dispatch(addPost(newPost));
    navigate("/user");
  };

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <Header title="Create User" buttonName="Cancel" routeURL="/user" />

      <form onSubmit={handleSubmit} className="p-4">
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={data.name}
          onChange={handleChange}
          className="border px-2 py-1 w-full mb-4"
        />
        <input
          type="text"
          name="email"
          placeholder="Enter Email Here"
          value={data.email}
          onChange={handleChange}
          className="border px-2 py-1 w-full mb-4"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2">
          Create
        </button>
      </form>
    </div>
  );
};

export default CreateUser;
