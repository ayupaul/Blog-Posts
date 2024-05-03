import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import AddPost from "./components/AddPost";
import { store } from '../src/redux/store'
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
     <Provider store={store}>
    
<Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/add-post" element={<AddPost />} />
        <Route path="/dashboard/editPost/:id" element={<AddPost/>}/>
      </Routes>
    </Router>
  </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
