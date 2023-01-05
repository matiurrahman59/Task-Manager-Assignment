import React, { useState } from 'react';
import axios from 'axios';

// INTERNAL IMPORTS
import getTaskList from '../utils/fetchTaskData';
import FormInput from './FormInput';
import Button from './Button';

const defaultFormFields = {
  assignedName: '',
  assignedTo: '',
  date: '',
  message: '',
  priority: '',
};

const TaskManager = ({ setTaskList }) => {
  const [taskFormData, setTaskFormData] = useState(defaultFormFields);
  const { message, date, assignedTo, priority, assignedName } = taskFormData;

  const resetFormFields = () => {
    setTaskFormData(defaultFormFields);
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setTaskFormData({ ...taskFormData, [name]: value });
  };

  // Add task
  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append('message', message);
    formData.append('priority', priority);
    formData.append('assigned_to', assignedTo);
    formData.append('due_date', date);
    formData.append('assigned_name', assignedName);

    try {
      const res = await axios({
        method: 'POST',
        url: 'https://devza.com/tests/tasks/create',
        headers: {
          AuthToken: 'UrM4YHgb1FcqEf1tuKwmAMMX5MxFZ12a',
          ContentType: 'multipart/form-data',
        },
        data: formData,
      });

      if (res.data.status === 'success') {
        const res = await getTaskList();
        setTaskList(res);
        resetFormFields();
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='main-header'>
      <h2>Create Task</h2>
      <form
        onSubmit={onSubmit}
        className='flex flex-col items-start space-y-5 my-4 px-4'
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
          label='Assigned Name'
          type='text'
          name='assignedName'
          id='number'
          min='1'
          onChange={onChange}
          value={assignedName}
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

        <Button type='submit' buttonType='Submit'>
          Submit
        </Button>
      </form>
    </div>
  );
};

export default TaskManager;
