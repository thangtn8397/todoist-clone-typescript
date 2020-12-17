/* eslint-disable no-unused-vars */
import React, { createContext, useState, FC, useContext } from 'react';

export interface ISelectedProjectcContext {
  selectedProject: string;
  setSelectedProject(selectedProject: string): void;
}

const initialContext = {
  selectedProject: 'INBOX',
  setSelectedProject: (selectedProject: string) => {
    return undefined;
  },
};
export const SelectedProjectContext = createContext<ISelectedProjectcContext>(
  initialContext,
);

export const SelectedProjectProvider: FC = ({ children }: any) => {
  const [selectedProject, setSelectedProject] = useState('INBOX');

  const value: ISelectedProjectcContext = {
    selectedProject,
    setSelectedProject,
  };

  return (
    <SelectedProjectContext.Provider value={value}>
      {children}
    </SelectedProjectContext.Provider>
  );
};

export const useSelectedProject = () => {
  return useContext(SelectedProjectContext);
};
