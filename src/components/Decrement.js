import React from "react";

const Decrement = ({ d, d1 }) => {
  const handleDecrement = () => {
    d1(d - 1);
  };
  return (
    <div>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default Decrement;
