import React from "react";

const Button = ({ buttonText, search }) => {
  return (
    <button onClick={search} className='btn'>
      {buttonText}
    </button>
  );
};

export default Button;
