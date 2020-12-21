import React from 'react';
import Sidebar from './Sidebar';
import Tasks from '../Tasks';

function Content() {
  return (
    <div className="content">
      <Sidebar />
      <Tasks />
    </div>
  );
}

export default Content;
