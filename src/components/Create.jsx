import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const history = useNavigate();

  const header = { "Access-Control-Allow-Origin": "" };
  const handleOnSubmit = (e) => {
    e.preventDefault();

    console.log("Clicked");
    axios
      .post("https://661eaef616358961cd9294c1.mockapi.io/crud-api", {
        name: name,
        email: email,
        header,
      })
      .then(() => {
        history("/read");
      });
  };
  return (
    <>
      <h2>Create</h2>

      <div className="mb-3">
        <label htmlFor="formGroupExampleInput" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          id="formGroupExampleInput"
          placeholder="Enter Name"
          onChange={(e) => {
            setName(e.target.value);
          }}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="formGroupExampleInput2" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-control"
          id="formGroupExampleInput2"
          placeholder="Enter Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          required
        />
      </div>

      <div className="col-12">
        <button
          type="submit"
          onClick={handleOnSubmit}
          className="btn btn-primary"
        >
          Create
        </button>
      </div>
    </>
  );
};

export default Create;
