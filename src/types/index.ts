/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
export type ProjectProps = {
  docId?: string;
  name: string;
  userId: string;
  projectId: string;
};

export type TaskProps = {
  archived: boolean;
  date?: string;
  projectId: string;
  task: string;
  userId: string;
};

export enum GenericProject {
  INBOX = 'inbox',
  TODAY = 'today',
  UPCOMING = 'upcoming',
}
