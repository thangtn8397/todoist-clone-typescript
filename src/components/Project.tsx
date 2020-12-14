import React from 'react';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import { ProjectProps } from '../types';

export const Project: React.FC<ProjectProps> = ({ name }: ProjectProps) => {
  return (
    <li className="sidebar__project">
      <span>
        <FiberManualRecordIcon />
      </span>
      {name}
    </li>
  );
};
