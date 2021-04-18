import React, { useState } from "react";
import Sidebar from "./SideBar";

const MakeAdmin = () => {
  const [admin, setAdmin] = useState({});
  const handleBlur = (e) => {
    const newAdmin = { ...admin };
    newAdmin[e.target.name] = e.target.value;
    setAdmin(newAdmin);
  };
  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("email", admin.email);

    fetch("http://localhost:5000/addAdmin", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {})
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <section className="container-fluid row">
      <Sidebar></Sidebar>
      <div
        className="col-md-10 p-4 pr-5"
        style={{
          position: "absolute",
          right: 0,
          backgroundColor: "#CD6858",
          height: "100%",
        }}
      >
        <h5 className="text-brand text-white">Make Admin</h5>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              onBlur={handleBlur}
              type="email"
              className="form-control"
              name="email"
              placeholder="Enter User's E-mail To Make Admin"
            />
          </div>
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default MakeAdmin;
