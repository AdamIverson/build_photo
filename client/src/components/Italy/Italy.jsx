import React, { useState, useEffect } from "react";
import { Image } from "cloudinary-react";
function Italy() {
  const [test, setTest] = useState([]);

  useEffect(() => {
    callCloudinary();
  }, []);

  const callCloudinary = async () => {
    try {
      const res = await fetch("/api/testFolder1000");
      const data = await res.json();
      setTest(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>italy</h1>
      <div className="container">
        <ul>
          {test?.map((imageId, index) => {
            return (
              <li key={index} className="gallery-image">
                <Image
                  key={index}
                  cloudName="aiphoto"
                  publicId={imageId}
                ></Image>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Italy;
