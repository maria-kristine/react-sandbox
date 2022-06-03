import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./component/Contact";
import App from "./App";
import About from "./component/About";
import Home from "./component/Home";
import MessageSend from "./component/Message-send";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/home" element={<Home/>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/thanks" element={<MessageSend />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
