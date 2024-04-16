import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";

const Read = () => {
  const [data, setData] = useState([]);
  function getData() {
    axios
      .get("https://661eaef616358961cd9294c1.mockapi.io/crud-api")
      .then((res) => {
        setData(res.data);
      });
  }

  useEffect(() => {
    getData();
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`https://661eaef616358961cd9294c1.mockapi.io/crud-api/${id}`)
      .then(() => {
        getData();
      });
  };

  return (
    <>
      <h2>All Data</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((eachdata, index) => {
            return (
              <tr key={index}>
                <th scope="row">{eachdata.id}</th>
                <td>{eachdata.name}</td>
                <td>{eachdata.email}</td>
                <td>
                  <button type="button" className="btn btn-secondary me-2">
                    Edit
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => handleDelete(eachdata.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Read;
