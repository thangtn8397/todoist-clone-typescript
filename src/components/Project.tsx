import React from 'react';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import { ProjectProps } from '../types';
import { useSelectedProject } from '../context/selected-project-context';

export const Project: React.FC<ProjectProps> = ({
  name,
  docId,
}: ProjectProps) => {
  const { selectedProject, setSelectedProject } = useSelectedProject();
  return (
    <li
      role="menuitem"
      className={
        docId === selectedProject
          ? 'active sidebar__project'
          : 'sidebar__project'
      }
      onClick={() => {
        setSelectedProject(String(docId));
      }}
      onKeyDown={() => {
        setSelectedProject(String(docId));
      }}
    >
      <span>
        <FiberManualRecordIcon />
      </span>
      {name}
    </li>
  );
};
