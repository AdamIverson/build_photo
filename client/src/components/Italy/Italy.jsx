import React, { useState, useEffect } from "react";
import { Image, Transformation } from "cloudinary-react";
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
        <ul className="imageList">
          {test?.map((imageId, index) => {
            return (
              <Image
                key={index}
                cloudName="aiphoto"
                publicId={imageId}
                className="image"
              >
                <Transformation crop="scale" width="500"/>
                <Transformation radius="20"/>
                <Transformation object-fit="contain"/>
              </Image>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Italy;
