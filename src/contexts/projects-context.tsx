/* eslint-disable no-unused-vars */
import React from 'react';
import { useProjects } from '../hooks';
import { ProjectProps } from '../types';

interface IProjectContext {
  projects: ProjectProps[];
  setProjects(projects: ProjectProps[]): void;
}
const initialContextValue = {
  projects: [],
  setProjects: (projects: ProjectProps[]) => {
    return [];
  },
};
export const ProjectsContext = React.createContext<IProjectContext>(
  initialContextValue,
);

export const ProjectsProvider: React.FC = ({ children }: any) => {
  const { projects, setProjects } = useProjects();
  return (
    <ProjectsContext.Provider value={{ projects, setProjects }}>
      {children}
    </ProjectsContext.Provider>
  );
};

export const useProjectsContext = () => {
  return React.useContext(ProjectsContext);
};
