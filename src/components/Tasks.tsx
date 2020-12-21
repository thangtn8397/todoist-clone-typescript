import React from 'react';
/* eslint-disable no-unused-vars */
import { useTasks } from '../hooks';

const Tasks = () => {
  const { tasks } = useTasks('7064rYDXBiL4I4u7jszI');
  console.log(tasks);
  return <div className="tasks">Tasks</div>;
};

export default Tasks;
