import React, { useState, useEffect } from "react";
import { Image, Transformation } from "cloudinary-react";
function Home() {
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
      <h1>adam iverson photography</h1>
        <div className="container">
          <ul>
            {test?.map((imageId, index) => {
              return (
                <Image
                  key={index}
                  cloudName="aiphoto"
                  publicId={imageId}
                >
                  <Transformation crop="scale"/>
                  <Transformation object-fit="contain" />
                </Image>
              );
            })}
          </ul>
        </div>
      </div>
  );
}

export default Home;
