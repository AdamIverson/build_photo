import React, { useState, useEffect } from "react";
import { Image, Transformation } from "cloudinary-react";
function Google() {
  const [test, setTest] = useState([]);

  useEffect(() => {
    callCloudinary();
  }, []);

  const callCloudinary = async () => {
    try {
      const res = await fetch("/api/google");
      const data = await res.json();
      setTest(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>google</h1>
      <div className="container">
        <ul>
          {test?.map((imageId, index) => {
            return (
              <li className="gallery-image" key={index}>
                <Image
                  key={index}
                  cloudName="aiphoto"
                  publicId={imageId}
                >
                </Image>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Google;
