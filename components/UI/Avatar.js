import React from "react";

const Avatar = ({ url, className }) => {
  return (
    <img
      loading='lazy'
      className={`h-10 rounded-full cursor-pointer transition duration-150 transforn hover:scale-110 ${className}`}
      src={url}
      alt='profile'
    />
  );
};

export default Avatar;
