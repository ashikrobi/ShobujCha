import React, { useEffect, useState } from "react";
import TeaVariantCards from "./TeaVariantCards";
import { useSpring, animated } from "react-spring";

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1,
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const TeaVariants = () => {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }));
  const [teaVariants, setTeaVariants] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/teaCollection")
      .then((res) => res.json())
      .then((data) => setTeaVariants(data));
  }, []);
  return (
    <animated.div
      className="d-flex justify-content-center"
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: props.xys.interpolate(trans) }}
    >
      <div className="w-75 row mt-5 pt-5 pb-5 mb-5">
        {teaVariants.map((product) => (
          <TeaVariantCards product={product}></TeaVariantCards>
        ))}
      </div>
    </animated.div>
  );
};

export default TeaVariants;
