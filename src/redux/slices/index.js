import { createSlice } from "@reduxjs/toolkit";
import PostDb from "../../data/PostDb";

export const postSlices = createSlice({
  initialState: {
    posts: JSON.parse(localStorage.getItem('posts')) || PostDb,
    selectedPostId: null,
  },
  name: "posts",
  reducers: {
    addPost: (state, action) => {
      state.posts.push({ ...action.payload, Id: state.posts.length + 1 });
      savePostsToLocalStorage(state.posts);
    },
    deletePost: (state, action) => {
      console.log(action.payload);
      state.posts = state.posts.filter((post) => post.Id !== action.payload);
      savePostsToLocalStorage(state.posts);
    },
    findById: (state, action) => {
      state.selectedPostId = action.payload;
    },
    editPost: (state,action)=>{
       const updatedPost=action.payload;
       const updatedPosts=state.posts.map((post)=>
        post.Id===updatedPost.Id? updatedPost :post
       );
       state.posts=updatedPosts;
       savePostsToLocalStorage(state.posts);
    }
  },
});
const savePostsToLocalStorage = (posts) => {
  localStorage.setItem('posts', JSON.stringify(posts));
};
export const { addPost, deletePost, findById,editPost } = postSlices.actions;

export default postSlices.reducer;
