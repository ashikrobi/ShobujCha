import React, { useState } from "react";
import Sidebar from "./SideBar";

const AddTeaVariant = () => {
  const [variantInfo, setVariantInfo] = useState({});
  const [file, setFile] = useState(null);
  const handleBlur = (e) => {
    const newVariantInfo = { ...variantInfo };
    newVariantInfo[e.target.name] = e.target.value;
    setVariantInfo(newVariantInfo);
  };
  const handleFileChange = (e) => {
    const newFile = e.target.files[0];
    setFile(newFile);
  };
  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("variant", variantInfo.variant);
    formData.append("price", variantInfo.price);

    fetch("https://secret-fjord-76461.herokuapp.com/addTeaVariant", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
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
        <h5 className="text-brand text-white">Add Tea Variant</h5>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="variant">Variant Name</label>
            <input
              onBlur={handleBlur}
              type="text"
              className="form-control"
              name="variant"
              placeholder="Enter Variant"
            />
          </div>
          <div className="form-group">
            <label htmlFor="price">Price</label>
            <input
              onBlur={handleBlur}
              type="number"
              className="form-control"
              name="price"
              placeholder="Enter Price In Number"
            />
          </div>
          <div className="form-group">
            <label htmlFor="upload">Upload Image</label>
            <input
              onChange={handleFileChange}
              type="file"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Picture"
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

export default AddTeaVariant;
