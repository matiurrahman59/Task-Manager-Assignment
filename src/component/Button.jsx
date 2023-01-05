import React from 'react';

const BUTTON_TYPE_CLASSES = {
  Edit: 'bg-green-500  px-5 hover:bg-green-800 ',
  Delete: 'bg-red-500  px-5 hover:bg-red-800',
  Submit: 'bg-green-500  px-10 py-2 rounded-full hover:bg-green-800',
  Cancel: 'bg-yellow-500 px-5',
};

const Button = ({ children, buttonType, ...otherProps }) => {
  return (
    <button
      className={`cursor-pointer transition-all text-white
       ${BUTTON_TYPE_CLASSES[buttonType]}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
