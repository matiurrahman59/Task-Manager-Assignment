import { useEffect, useState } from 'react';
import axios from 'axios';

// INTERNAL IMPORTS
import './App.css';
import TaskList from './component/TaskList';
import TaskManager from './component/TaskManager';
import getTaskList from './utils/fetchTaskData';

function App() {
  const [taskList, setTaskList] = useState([]);

  console.log(taskList);

  // getting tasklist from api
  useEffect(() => {
    const getTaskList = async () => {
      const res = await axios({
        method: 'GET',
        url: 'https://devza.com/tests/tasks/list',
        headers: {
          AuthToken: 'UrM4YHgb1FcqEf1tuKwmAMMX5MxFZ12a',
        },
      });
      setTaskList(res.data.tasks);
    };

    getTaskList();
  }, []);

  // delete selected task
  const deleteTask = async (id) => {
    const formData = new FormData();
    formData.append('taskid', id);

    try {
      const res = await axios({
        method: 'POST',
        url: 'https://devza.com/tests/tasks/delete',
        headers: {
          AuthToken: 'UrM4YHgb1FcqEf1tuKwmAMMX5MxFZ12a',
          ContentType: 'multipart/form-data',
        },
        data: formData,
      });

      const newTask = taskList.filter((task) => task.id !== id);
      setTaskList(newTask);
    } catch (err) {
      console.log(err);
    }
  };

  // update task
  const updateTask = async (updateTask) => {
    const formData = new FormData();
    formData.append('message', updateTask.message);
    formData.append('taskid', updateTask.id);

    try {
      const res = await axios({
        method: 'POST',
        url: 'https://devza.com/tests/tasks/update',
        headers: {
          AuthToken: 'UrM4YHgb1FcqEf1tuKwmAMMX5MxFZ12a',
          ContentType: 'multipart/form-data',
        },
        data: formData,
      });

      if (res.data.status === 'success') {
        const res = await getTaskList();
        setTaskList(res);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='App'>
      <div className='flex flex-col md:flex-row gap-2 h-4/5'>
        <TaskManager setTaskList={setTaskList} />
        <TaskList
          task={taskList}
          deleteTask={deleteTask}
          updateTask={updateTask}
        />
      </div>
    </div>
  );
}

export default App;
