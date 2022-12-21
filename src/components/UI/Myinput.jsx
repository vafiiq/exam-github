import React from "react";

const Myinput = ({ ...props }) => {
  return (
    <div>
      <input {...props} />
    </div>
  );
};

export default Myinput;
