import React, { useState, useEffect } from 'react';

import './App.css';

function App() {
  const [test, setTest] = useState([]);

  useEffect

  // function Test() {
  //   setTest
  // }
  return (
    <div className="App">
      <p>{!test ? "Loading..." : test}</p>
    </div>
  );
}

export default App;
