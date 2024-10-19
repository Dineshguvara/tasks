import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, deletePost } from "../../redux/postSlice";
import { Link } from "react-router-dom";

const UserList = () => {
  const dispatch = useDispatch();
  const { posts, status } = useSelector((state) => state.users);

  // Fetch posts when the component mounts
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchUsers());
    }
  }, [dispatch, status]);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  // Calculate indexes for pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Handle delete action
  const handleDelete = (id) => {
    dispatch(deletePost(id));
  };

  // Handle next/previous page actions
  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : 1));
  };

  // Display loading or error state
  if (status === "loading") return <p>Loading...</p>;
  if (status === "failed") return <p>Error loading posts...</p>;

  return (
    <div className="w-full max-w-6xl mx-auto mt-8">
      <table className="min-w-full bg-white border">
        <thead>
          <tr>
            <th className="px-4 py-2 border">ID</th>
            <th className="px-4 py-2 border">name</th>
            <th className="px-4 py-2 border">email</th>
            <th className="px-4 py-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentPosts.map((post) => (
            <tr key={post.id} className="bg-gray-100 border-b">
              <td className="px-4 py-2 border">{post.id}</td>
              <td className="px-4 py-2 border">{post.name}</td>
              <td className="px-4 py-2 border">{post.email}</td>
              <td className="px-4 py-2 border space-x-4">
                <Link
                  to={`/edit/${post.id}`}
                  className="text-blue-500 hover:underline"
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(post.id)}
                  className="text-red-500 hover:underline"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination Controls */}
      <div className="flex justify-between mt-4">
        <button
          onClick={handlePreviousPage}
          className="px-4 py-2 bg-gray-300 hover:bg-gray-400 text-gray-700"
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className="text-gray-700">Page {currentPage}</span>
        <button
          onClick={handleNextPage}
          className="px-4 py-2 bg-gray-300 hover:bg-gray-400 text-gray-700"
          disabled={indexOfLastPost >= posts.length}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default UserList;
