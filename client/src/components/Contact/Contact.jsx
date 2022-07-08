import React, { useState } from "react";
import axios from "axios";

export default function Contact() {
  const [from, setFrom] = useState("");
  const [message, setMessage] = useState("");

  // const uploadMessage = (e) => {
  // const data = { from: email, message: msg };
  // axios.post("/api/contact_form", data)
  // .then(response => {
  //   console.log("Status: ", response.status);
  //   console.log("Data: ", response.data);
  // }).catch(error => {
  //   console.error('Something went wrong!', error);
  // });
  // };

  const sendMessage = async (e) => {
    console.log("from:", from);
    console.log("message:", message);
    e.preventDefault();

    axios
      .post("/api/contact_form", {
        method: "POST",
        data: { from: from, message: message },
      })
      .then(console.log("dot then!"))
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h1>Contact</h1>
      <div className="form-container">
        <form onSubmit={(e) => sendMessage(e)}>
          <ul>
            <li key="1">
              <label htmlFor="email">enter email address: </label>
              <input
                type="email"
                id="email"
                name="from"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
              ></input>
            </li>
            <li key="2">
              <label htmlFor="message">enter message:</label>
              <textarea
                id="message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </li>
            <li key="3">
              <button type="submit">SUBMIT BUTTON</button>
            </li>
          </ul>
        </form>
      </div>
    </div>
  );
}
