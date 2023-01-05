import React, { useState } from 'react';
import FormInput from './FormInput';

const defaultFormFields = {
  message: '',
  date: '',
  priority: '',
  assignedTo: '',
};

const TaskManager = () => {
  const [formData, setFormData] = useState(defaultFormFields);
  const { message, date, assignedTo, priority } = formData;

  const resetFormFields = () => {
    setFormData(defaultFormFields);
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    console.log('working');
  };

  return (
    <div className='bg-slate-100 p-3 rounded w-1/2'>
      <form
        onSubmit={onSubmit}
        className='flex flex-col items-start space-y-5 my-4'
      >
        <FormInput
          label='Message'
          type='text'
          required
          onChange={onChange}
          name='message'
          value={message}
        />

        <FormInput
          label='Date'
          type='date'
          required
          onChange={onChange}
          name='date'
          value={date}
          min='2023-01-01'
        />

        <FormInput
          label='Priority'
          type='number'
          name='priority'
          id='priority'
          min='1'
          onChange={onChange}
          value={priority}
        />

        <FormInput
          label='Assigned To'
          type='number'
          name='assignedTo'
          id='number'
          min='1'
          onChange={onChange}
          value={assignedTo}
        />

        <button type='submit' className='bg-green-300 px-10 py-2 rounded-full'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default TaskManager;
