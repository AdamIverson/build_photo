import React from "react";
import { BrowserRouter, Redirect, Route, Routes } from "react-router-dom";
import Test from "../Test/Test";
import Nav from "../Nav/Nav";
import About from "../About/About";
import Contact from "../Contact/Contact";
import MyDropzone from "../Uploader/Uploader";

import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Test />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
          <Route exact path="/uploader" element={<MyDropzone />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
