/* eslint-disable no-unused-vars */
import React, { FC, useContext, useState } from 'react';

interface selectedProjectContextInterface {
  selectedProject: string;
  setSelectedProject(project: string): void;
}
const initialContextValue = {
  selectedProject: 'INBOX ',
  setSelectedProject: (selectedProject: string) => {
    return undefined;
  },
};
export const SelectedProjectContext = React.createContext<selectedProjectContextInterface>(
  initialContextValue,
);

export const SelectedProjectProvider: FC = ({ children }: any) => {
  const [selectedProject, setSelectedProject] = useState('inbox');
  const value: selectedProjectContextInterface = {
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
