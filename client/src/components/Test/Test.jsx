import React, { useState, useEffect } from "react";
import axios from "axios";

function Test() {
  const [test, setTest] = useState([]);

  useEffect(() => {
    callAPI();
  }, []);

  function callAPI() {
    console.log("in callAPI()");
    axios({
      method: "GET",
      url: "/api/test",
    })
      .then((response) => {
        setTest(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="container">
      <h1>TEST</h1>
      <ul>
        {test?.map((unit) => {
          return (
              <li key={unit.id}>
                <img src={unit.url} alt={unit.testData} />
              </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Test;
