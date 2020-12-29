/* eslint-disable no-unused-vars */
import React, { FC, useContext, useState } from 'react';

interface SelectedProjectContextInterface {
  selectedProject: string;
  setSelectedProject(project: string): void;
}
const initialContextValue = {
  selectedProject: 'inbox',
  setSelectedProject: (selectedProject = 'inbox') => {
    return undefined;
  },
};
export const SelectedProjectContext = React.createContext<SelectedProjectContextInterface>(
  initialContextValue,
);

export const SelectedProjectProvider: FC = ({ children }: any) => {
  const [selectedProject, setSelectedProject] = useState<string>('inbox');
  const value: SelectedProjectContextInterface = {
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
