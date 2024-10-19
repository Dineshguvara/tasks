import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updatePost } from "../../redux/postSlice";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../../components/Header";

const EditUser = () => {
  const { id } = useParams(); // Get the user id from the URL
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Fetch the existing user data from Redux store
  const user = useSelector((state) =>
    state.users.posts.find((post) => post.id === parseInt(id))
  );

  const [data, setData] = useState({
    name: user ? user.name : "",
    email: user ? user.email : "",
  });

  useEffect(() => {
    if (user) {
      setData({
        name: user.name,
        email: user.email,
      });
    }
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedPost = {
      id: user.id,
      name: data.name,
      email: data.email,
    };
    dispatch(updatePost(updatedPost));
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
      <Header title="Edit User" buttonName="Cancel" routeURL="/user" />

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
          Update
        </button>
      </form>
    </div>
  );
};

export default EditUser;
