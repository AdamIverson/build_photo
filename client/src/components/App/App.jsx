import React, { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [test, setTest] = useState([]);

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setTest(data.message));
  }, []);

  return (
    <div className="App">
      <p>{!test ? "Loading..." : test}</p>
    </div>
  );
}

export default App;
