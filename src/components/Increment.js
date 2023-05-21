import React from "react";

const Increment = ({ i, i1, increase }) => {
  const handleIncrement = () => {
    i1(i + 1);
    increase(true);
  };
  return (
    <div className="border-2 border-[#000] text-[18px] bg-transparent px-3 py-2 cursor-pointer rounded-md hover:bg-[#000] hover:text-[#FAEBD7]">
      <button onClick={handleIncrement}>INCREMENT</button>
    </div>
  );
};

export default Increment;
