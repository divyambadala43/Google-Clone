import React from "react";

const Avatar = (props) => {
  return (
    <img
      loading='lazy'
      className='h-10 rounded-full cursor-pointer transition duration-150 transforn hover:scale-110'
      src={props.url}
      alt='profile'
    />
  );
};

export default Avatar;
