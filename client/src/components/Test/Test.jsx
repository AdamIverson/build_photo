import React, { useState, useEffect } from "react";
import axios from "axios";

function Test() {
  const [test, setTest] = useState([]);

  useEffect(() => {
    callAPI();
  }, []);

  function callAPI() {
    console.log('in callAPI()');
    axios({
      method: "GET",
      url: "/api/test",
    })
      .then((response) => {
        console.log('response.data:', response.data);
        console.log('response.status:', response.status);
        console.log('response.header:', response.header);
        setTest(response.data);
      })
      .catch((err) => {
        console.log(err);
        console.log(err.response);
        console.log(err.request);
        // console.log(err.headers);
      });
  }

  return (
    <div>
      <h1>TEST</h1>
      <ul>
        {test?.map((unit) => {
          return (
            <li key={unit.id}>{unit.message}</li>
          )
        })}
      </ul>
    </div>
  );
}

export default Test;
