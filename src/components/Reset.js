import React from "react";

const Reset = ({ r1 }) => {
  const handleReset = () => {
    r1(0);
  };
  return (
    <div>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Reset;
