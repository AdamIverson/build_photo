import React, { useState, useEffect } from "react";
import { BrowserRouter, Redirect, Route, Routes } from "react-router-dom";
import Test from "../Test/Test";

import "./App.css";

function App() {

  return (
    <div className="App">
      <Test />
    </div>
  );
}

export default App;
