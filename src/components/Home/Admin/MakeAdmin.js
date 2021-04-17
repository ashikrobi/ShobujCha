import React from "react";
import Sidebar from "./SideBar";

const MakeAdmin = () => {
  return (
    <div>
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
        <h3 className="text-white">Make Admin</h3>
      </div>
    </div>
  );
};

export default MakeAdmin;
