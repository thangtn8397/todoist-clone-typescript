import { collatedTasks } from '../constant';

export const collatedTasksExist = (project: string) => {
  return collatedTasks.find((task) => {
    return task.key === project;
  });
};
