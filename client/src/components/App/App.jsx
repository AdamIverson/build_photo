import React, { useState, useEffect } from "react";
import { BrowserRouter, Redirect, Route, Routes } from "react-router-dom";
import Test from "../Test/Test";
import Nav from "../Nav/Nav";

import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Nav />
        <Routes>
          <Route path="/" element={ <Test /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
