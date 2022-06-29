import React, { useState, useEffect } from "react";
import {Image} from 'cloudinary-react';
function Test() {
  const [test, setTest] = useState([]);

  useEffect(() => {
    // callAPI();
    callCloudinary();
  }, []);

  const callCloudinary = async () => {
    try {
        const res = await fetch('/api/testFolder1000');
        const data = await res.json();
        setTest(data);
      
    } catch (error) {
      console.error(error);
    }
  }

  // function callAPI() {
  //   console.log("in callAPI()");
  //   axios({
  //     method: "GET",
  //     url: "/api/test",
  //   })
  //     .then((response) => {
  //       setTest(response.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }

  return (
    <div>
        <h1>adam iverson photography</h1>
    <div className="container">
      <ul className="imageList">
        {test?.map((imageId, index) => {
          return (
              <Image 
                key={index}
                cloudName="aiphoto"
                publicId={imageId}
                width="300"
                crop="scale"
              />
          );
        })}
      </ul>
    </div>
    </div>
  );
}

export default Test;
