/* eslint-disable no-unused-vars */
import React, { FC, useContext, useState } from 'react';

interface SelectedProjectContextInterface {
  selectedProject: string | undefined;
  setSelectedProject(project: string | undefined): void;
}
const initialContextValue = {
  selectedProject: 'inbox',
  setSelectedProject: (selectedProject: string | undefined) => {
    return undefined;
  },
};
export const SelectedProjectContext = React.createContext<SelectedProjectContextInterface>(
  initialContextValue,
);

export const SelectedProjectProvider: FC = ({ children }: any) => {
  const [selectedProject, setSelectedProject] = useState<string | undefined>(
    'inbox',
  );
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
