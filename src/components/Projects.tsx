/* eslint-disable indent */
/* eslint-disable operator-linebreak */
import React, { useState } from 'react';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import AddIcon from '@material-ui/icons/Add';
import { useProjectsContext } from '../contexts/projects-context';
import { Project } from './Project';

export const Projects: React.FC = () => {
  const { projects } = useProjectsContext();
  const [showProjects, setShowProjects] = useState(true);
  const toggleProjects = () => {
    setShowProjects(!showProjects);
  };
  const projectList =
    showProjects && projects ? (
      <ul className="sidebar__projects-list">
        {projects.map((project) => {
          return (
            <Project
              key={project.docId}
              name={project.name}
              userId={project.userId}
              projectId={project.projectId}
              docId={project.docId}
            />
          );
        })}
      </ul>
    ) : null;
  return (
    <div className="sidebar__projects">
      <div className="sidebar__expansion-toggle">
        <button
          type="button"
          className="btn sidebar__btn--toggle"
          onClick={() => {
            toggleProjects();
          }}
        >
          <span
            style={
              showProjects
                ? { transform: 'rotate(90deg)' }
                : { transform: 'rotate(0)' }
            }
          >
            <ArrowForwardIosIcon />
          </span>
          Projects
        </button>
        <button className="btn sidebar__btn--add" type="button">
          <AddIcon />
        </button>
      </div>
      {projectList}
    </div>
  );
};
