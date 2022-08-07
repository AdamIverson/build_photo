import React, { useState, useEffect } from "react";
import { Image } from "cloudinary-react";
import axios from "axios";
require("dotenv").config({
  path: "../../../server/.env",
});

function Home() {
  const [test, setTest] = useState([]);

  // const cloudAPI = process.env.CLOUDINARY_URL

  useEffect(() => {
    callCloudinary();
  }, []);

  const callCloudinary = async () => {
    
    // cloudinary.v2.api.resources({
    //   type: 'upload',
    //   prefix: 'testFolder1000' // add your folder
    // },
    //   function(error, result) { console.log(result, error) });

    try {
      // const res = await fetch(`/api/testFolder1000`);
      const res = await axios.get('/api/italy')
      const data = await res.json();
      setTest(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>adam c iverson photography</h1>
      <div className="container">
        <ul className="picture-list">
          {test?.map((imageId, index) => {
            return (
              <li className="gallery-image" key={index}>
                <Image cloudName="aiphoto" publicId={imageId}></Image>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Home;
