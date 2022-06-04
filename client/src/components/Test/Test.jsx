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
    <div>
        <h1>adam iverson photography</h1>
    <div className="container">
      <ul className="imageList">
        {test?.map((unit) => {
          return (
              <li key={unit.id} className="imageComponent">
                <img src={unit.url} alt={unit.testData} />
              </li>
          );
        })}
      </ul>
    </div>
    </div>
  );
}

export default Test;
