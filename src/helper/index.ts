import { collatedTasks } from '../constant';
import { ProjectProps } from '../types';

export const collatedTasksExist = (project: string | undefined) => {
  return collatedTasks.find((t) => {
    return t.key === project;
  });
};

export const getTitle = (projects: ProjectProps[], projectId: string) => {
  return projects.find((proj) => {
    return proj.projectId === projectId;
  });
};

export const getCollatedTitle = (projectName: string | undefined) => {
  return collatedTasks.find((task) => {
    return task.key === projectName;
  });
};
