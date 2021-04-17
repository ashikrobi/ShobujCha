import React from "react";
import SideBar from "./SideBar";

const Admin = () => {
  return (
    <main>
      <SideBar></SideBar>
      <section className="container-fluid row">
        <div
          className="col-md-10 p-4 pr-5"
          style={{
            position: "absolute",
            right: 0,
            backgroundColor: "#CD6858",
            height: "100%",
          }}
        >
          <h5 className="text-brand text-white">Admin You Are Welcome</h5>
        </div>
      </section>
    </main>
  );
};

export default Admin;
