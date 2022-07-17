import React, { useState } from "react";
import axios from "axios";

function Uploader() {
  const [fileInputState, setFileInputState] = useState("");
  const [previewSource, setPreviewSource] = useState("");
  const [altText, setAltText] = useState("");
  const [poem, setPoem] = useState("");

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    previewFile(file);
  };

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };

  const uploadImage = async (jazz) => {
    console.log(altText);
    await axios
      .post("/api/upload", {
        method: "POST",
        data: jazz,
        altText: altText,
        poem: poem
      })
      .then(console.log("axios.post upload"))
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSubmitFile = (e) => {
    e.preventDefault();
    if (!previewSource) return;
    uploadImage(previewSource);
  };

  const handleAltTextChange = (e) => {
    setAltText(e.target.value);
  };

  const handlePoemChange = (e) => {
    setPoem(e.target.value);
  }

  return (
    <div>
      <h1>uploader</h1>
      <div className="container">
        <form onSubmit={handleSubmitFile}>
          <ul>
            <li>
              <input
                type="file"
                name="image"
                onChange={handleFileInputChange}
                value={fileInputState}
              />
            </li>
            <li>
              <label htmlFor="altText">enter alt text</label>
              <input
                type="textarea"
                name="altText"
                value={altText}
                onChange={handleAltTextChange}
              />
            </li>
            <li>
              <label htmlFor="poem">poem</label>
              <input type="textarea"
              name="poem"
              value={poem}
              onChange={handlePoemChange}
              />
            </li>
            <button type="submit">SUBMIT</button>
          </ul>
        </form>
        {previewSource && <img src={previewSource} alt="chosen" />}
      </div>
    </div>
  );
}

export default Uploader;
