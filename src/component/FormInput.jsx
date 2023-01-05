import React from 'react';

const FormInput = ({ label, ...otherProps }) => {
  return (
    <div className='flex flex-col items-start w-full'>
      <label htmlFor='text' className='text-gray-900'>
        {label}:
      </label>
      <input {...otherProps} />
      {/* <textarea
        name='message'
        id='text'
        cols='auto'
        rows='auto'
        onChange={onChange}
        value={message}
      /> */}
    </div>
  );
};

export default FormInput;
