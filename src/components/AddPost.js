import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addPost, editPost, findById } from "../redux/slices";
import Navbar from "./Navbar";

export default function AddPost() {
  const navigate = useNavigate();
  const initialData = { Title: "", Category: "", Description: "" };
  const [inputError, setInputError] = useState({});
  const [inputData, setInputData] = useState(initialData);
  const [isSubmit, setIsSubmit] = useState(false);
  const [buttonText, setButtonText] = useState("Add");
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(findById(id));
  }, [id]);

  const editablePost = useSelector((state) => {
    const selectedId = parseInt(state.posts.selectedPostId, 10);
    return state.posts.posts.find((post) => post.Id === selectedId);
  });

  useEffect(() => {
    if (editablePost && id) {
      setInputData(editablePost);
      setButtonText("Update");
    }
  }, [editablePost]);

  function changeHandler(e) {
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
  }

  function submitHandler(e) {
    e.preventDefault();
    setInputError(validateInput(inputData));
    setIsSubmit(true);
  }

  function validateInput(inputData) {
    const error = {};
    if (!inputData.Title) {
      error.Title = "Title cannot be empty";
    }
    if (!inputData.Category) {
      error.Category = "Category cannot be empty";
    }
    if (!inputData.Description) {
      error.Description = "Description cannot be empty";
    }
    return error;
  }

  useEffect(() => {
    if (Object.keys(inputError).length === 0 && isSubmit === true) {
      setIsSubmit(false);
      if (!editablePost) {
        dispatch(addPost(inputData));
      } else {
        dispatch(editPost(inputData));
      }
      navigate("/dashboard");
    }
  }, [inputError]);
  const formStyle = {
    backgroundImage: `url('https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmxvZyUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D&w=1000&q=80')`,
    backgroundSize: "cover", // Adjust this based on your preferences
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    minHeight: "100vh", // Ensure the background covers the entire viewport height
  };
  return (
    <>
     <Navbar></Navbar>
      <div className="d-flex justify-content-center align-items-center vh-100" style={formStyle}>
        <form onSubmit={submitHandler} className="w-50">
        <h1 style={{color:"white"}}>{buttonText} Post</h1>
          <div className="mb-3">
            <label htmlFor="inputTitle" className="form-label"  style={{color:"white"}}>
              Title
            </label>
            <input
              type="text"
              name="Title"
              value={inputData.Title}
              onChange={changeHandler}
              className="form-control"
              id="inputTitle"
              aria-describedby="titleHelp"
            />
            <span className="text-danger">{inputError.Title}</span>
          </div>
          <div className="mb-3">
            <label htmlFor="inputCategory" className="form-label"  style={{color:"white"}}>
              Category
            </label>
            <input
              type="text"
              name="Category"
              value={inputData.Category}
              onChange={changeHandler}
              className="form-control"
              id="inputCategory"
            />
            <span className="text-danger">{inputError.Category}</span>
          </div>
          <div className="mb-3">
            <label htmlFor="inputDescription" className="form-label"  style={{color:"white"}}>
              Description
            </label>
            <textarea
              name="Description"
              value={inputData.Description}
              onChange={changeHandler}
              className="form-control"
              id="inputDescription"
            ></textarea>
            <span className="text-danger">{inputError.Description}</span>
          </div>
          <button type="submit" className="btn btn-primary">
            {buttonText} Post
          </button>
        </form>
      </div>
    </>
  );
}
