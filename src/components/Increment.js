import React from "react";

const Increment = ({ i, i1 }) => {
  const handleIncrement = () => {
    i1(i + 1);
  };
  return (
    <div>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
};

export default Increment;
