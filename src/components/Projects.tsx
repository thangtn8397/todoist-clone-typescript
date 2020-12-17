import React, { useState } from 'react';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import AddIcon from '@material-ui/icons/Add';
import { useProjects } from '../hooks';
import { Project } from './Project';

export const Projects: React.FC = () => {
  const { projects } = useProjects();
  const [showProjects, setShowProjects] = useState(true);
  const toggleProjects = () => {
    setShowProjects(!showProjects);
  };
  return (
    <div
      className={
        showProjects
          ? 'sidebar__projects'
          : 'sidebar__projects--hidden sidebar__projects'
      }
    >
      <div className="sidebar__expansion-toggle">
        <button
          type="button"
          className="btn sidebar__btn--toggle"
          onClick={() => {
            toggleProjects();
          }}
        >
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
              docId={project.docId}
            />
          );
        })}
      </ul>
    </div>
  );
};
