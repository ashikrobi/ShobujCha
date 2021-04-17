import React, { useEffect, useState } from "react";
import TeaVariantCards from "./TeaVariantCards";

const TeaVariants = () => {
  const [teaVariants, setTeaVariants] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/teaCollection")
      .then((res) => res.json())
      .then((data) => setTeaVariants(data));
  }, []);
  return (
    <div className="d-flex justify-content-center">
      <div className="w-75 row mt-5 pt-5 pb-5 mb-5">
        {teaVariants.map((product) => (
          <TeaVariantCards product={product}></TeaVariantCards>
        ))}
      </div>
    </div>
  );
};

export default TeaVariants;
