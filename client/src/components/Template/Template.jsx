import React, { useState, useEffect } from "react";
import { Image, Transformation } from "cloudinary-react";
function Test() {
  const [test, setTest] = useState([]);

  useEffect(() => {
    callCloudinary();
  }, []);

  const callCloudinary = async () => {
    try {
      const res = await fetch("/api/test");
      const data = await res.json();
      setTest(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>template</h1>
      <div className="container">
        <ul>
          {test?.map((imageId, index) => {
            return (
              <li key={index} className="gallery-image">
                <Image cloudName="aiphoto" publicId={imageId}></Image>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Test;
