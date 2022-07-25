import React, { useState, useEffect } from "react";
import { Image } from "cloudinary-react";
// require("dotenv").config({
//   path: "../../../server/.env",
// });

function Home() {
  const [test, setTest] = useState([]);

  // const cloudAPI = process.env.CLOUDINARY_URL

  useEffect(() => {
    callCloudinary();
  }, []);

  const callCloudinary = async () => {
    try {
      const res = await fetch(`/api/testFolder1000`);
      const data = await res.json();
      setTest(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>adam iverson photography</h1>
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
