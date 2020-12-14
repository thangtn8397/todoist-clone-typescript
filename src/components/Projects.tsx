import React from 'react';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import AddIcon from '@material-ui/icons/Add';
import { useProjects } from '../hooks';
import { Project } from './Project';

export const Projects: React.FC = () => {
  const { projects } = useProjects();
  return (
    <div className="sidebar__projects">
      <div className="sidebar__expansion-toggle">
        <button type="button" className="btn sidebar__btn--toggle">
          <span>
            <ArrowForwardIosIcon />
          </span>
          Projects
        </button>
        <button className="btn sidebar__btn--add" type="button">
          <AddIcon />
        </button>
      </div>
      <ul className="sidebar__projects-list">
        {projects.map((project) => {
          return (
            <Project
              name={project.name}
              userId={project.userId}
              projectId={project.projectId}
            />
          );
        })}
      </ul>
    </div>
  );
};
