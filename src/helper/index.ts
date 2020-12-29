/* eslint-disable operator-linebreak */
/* eslint-disable no-plusplus */

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

export const generatePushId = (() => {
  const PUSH_CHARS =
    '-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz';

  const lastRandChars: number[] = [];

  return function () {
    let now = new Date().getTime();

    const timeStampChars = new Array(8);
    for (let i = 7; i >= 0; --i) {
      timeStampChars[i] = PUSH_CHARS.charAt(now % 64);
      now = Math.floor(now / 64);
    }

    let id = timeStampChars.join('');

    for (let i = 0; i < 12; i++) {
      id += PUSH_CHARS.charAt(lastRandChars[i]);
    }

    return id;
  };
})();
