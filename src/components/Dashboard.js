import React, { useEffect, useState } from "react";
import PostDb from "../data/PostDb";
import PostList from "./PostList";
import Navbar from "./Navbar";



export default function Dashboard() {
  const dashboardStyle = {
    backgroundImage: `url('https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmxvZyUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D&w=1000&q=80')`,
    backgroundSize: "cover", // Adjust this based on your preferences
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    minHeight: "100vh", // Ensure the background covers the entire viewport height
  };

  return (
    <div style={dashboardStyle}>
      <Navbar />
      <PostList />
    </div>
  );
}

