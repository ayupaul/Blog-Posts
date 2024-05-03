import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./PostList.css";
import { deletePost } from "../redux/slices";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash, faThumbsUp } from "@fortawesome/free-solid-svg-icons";

export default function PostList() {
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Use state to track the number of likes
  const [likes, setLikes] = useState({});

  // Function to handle like button click
  const handleLikeClick = (postId) => {
    // Update the number of likes in the state

    setLikes({ ...likes, [postId]: (likes[postId] || 0) + 1 });
  };

  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Category</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {posts.posts.map((post, index) => (
            <tr key={index}>
              <td>{post.Title}</td>
              <td>{post.Category}</td>
              <td>{post.Description}</td>
              <td>
                <button
                  className="btn btn-primary"
                  onClick={() => navigate(`/dashboard/editPost/${post.Id}`)}
                >
                  <FontAwesomeIcon icon={faEdit} />
                </button>
                <span style={{ margin: "0 10px" }}></span>
                <button
                  className="btn btn-danger"
                  onClick={() => dispatch(deletePost(post.Id))}
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
                <span style={{ margin: "0 10px" }}></span>
                <button
                  className="btn btn-success"
                  onClick={() => handleLikeClick(post.Id)}
                  style={{ backgroundColor: likes[post.Id] ? "blue" : "black" }}
                >
                  <FontAwesomeIcon icon={faThumbsUp} />{" "}
                  {/* this is for space between like and icon*/}
                  {likes[post.Id] ? likes[post.Id] : "Like"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
