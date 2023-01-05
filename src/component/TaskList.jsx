import React, { useState } from 'react';

// INTERNAL IMPORT
import Button from './Button';

const TaskList = ({ task, deleteTask, updateTask }) => {
  const [updateData, setUpdateData] = useState('');

  const cancelUpdate = () => {
    setUpdateData('');
  };

  const changeTask = (e) => {
    let newEntry = {
      id: updateData.id,
      message: e.target.value,
    };

    setUpdateData(newEntry);
  };

  const updateSelectedTask = () => {
    updateTask(updateData);
    setUpdateData('');
  };

  return (
    <div className='main-header overflow-hidden'>
      <h2>Task List</h2>

      {/* LOADING SPINNER */}
      {task.length === 0 && (
        <div className='grid place-content-center h-full w-full'>
          <div className=' animate-spin h-20 w-20 md:h-48 md:w-48 border-b-4 border-green-800 rounded-full '></div>
        </div>
      )}

      {/* Task update */}
      <div className='flex justify-between mb-5 p-5 text-start'>
        <input
          type='text'
          value={updateData && updateData.message}
          onChange={changeTask}
          className='p-5'
        />
        <div className='flex gap-2'>
          <Button onClick={updateSelectedTask} type='button' buttonType='Edit'>
            Update
          </Button>
          <Button
            onClick={() => cancelUpdate()}
            type='button'
            buttonType='Cancel'
          >
            Cancel
          </Button>
        </div>
      </div>

      {/* Task list */}
      <div className='flex flex-col items-start pl-5 space-y-5 h-full overflow-scroll'>
        {task?.map((item, i) => (
          <div key={i} className='w-full flex bg-slate-200 justify-between '>
            <li className='text-gray-700 p-5  rounded-md flex self-start'>
              {item.message}
            </li>

            {/* Button container */}
            <div className='flex gap-2'>
              <Button
                onClick={() =>
                  setUpdateData({
                    id: item.id,
                    message: item.message,
                  })
                }
                type='button'
                buttonType='Edit'
              >
                Edit
              </Button>

              <Button
                type='button'
                buttonType='Delete'
                onClick={() => deleteTask(item.id)}
              >
                Delete
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList;
