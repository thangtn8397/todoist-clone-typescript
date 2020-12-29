/* eslint-disable no-unused-vars */
/* eslint-disable indent */
import React from 'react';
import { useTasks } from '../hooks';
import { useSelectedProject } from '../contexts/selected-project-context';
import Task from './Task';
import AddTask from './AddTask';
import { collatedTasksExist, getTitle, getCollatedTitle } from '../helper';
import { useProjectsContext } from '../contexts/projects-context';

const Tasks = () => {
  let projectName = 'Inbox';
  const { selectedProject } = useSelectedProject();
  const { tasks } = useTasks(selectedProject);
  const { projects } = useProjectsContext();
  if (!collatedTasksExist(selectedProject)) {
    const project = getTitle(projects, selectedProject);
    if (project) {
      projectName = project.name;
    }
  } else {
    const project = getCollatedTitle(selectedProject);
    if (project) {
      projectName = project.name;
    }
  }

  const taskList = tasks
    ? tasks.map((task) => {
        return (
          <Task
            key={task.id}
            id={task.id}
            userId={task.userId}
            projectId={task.projectId}
            archived={task.archived}
            task={task.task}
          />
        );
      })
    : null;
  return (
    <div className="tasks">
      <div className="tasks__header">
        <div className="tasks__header-content">
          <h1>{projectName}</h1>
          <p>edit</p>
        </div>
      </div>
      <ul className="tasks__view-content">{taskList}</ul>
      <AddTask />
    </div>
  );
};

export default Tasks;
