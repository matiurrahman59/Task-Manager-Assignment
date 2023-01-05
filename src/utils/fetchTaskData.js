import axios from 'axios';

const getTaskList = async () => {
  const res = await axios({
    method: 'GET',
    url: 'https://devza.com/tests/tasks/list',
    headers: {
      AuthToken: 'UrM4YHgb1FcqEf1tuKwmAMMX5MxFZ12a',
    },
  });

  return res.data.tasks;
};

export default getTaskList;
