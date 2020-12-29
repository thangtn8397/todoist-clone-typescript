/* eslint-disable no-unused-vars */
/* eslint-disable indent */
import React from 'react';
import { useProjectsContext } from '../contexts/projects-context';

type ProjectOverlayProps = {
  setProject: (projectId: string) => void;
  showProjectOverlay: boolean;
  setShowProjectOverlay: (show: boolean) => void;
  setProjectName: (name: string) => void;
};
const ProjectOverlay = ({
  setProject,
  showProjectOverlay,
  setShowProjectOverlay,
  setProjectName,
}: ProjectOverlayProps) => {
  const { projects } = useProjectsContext();

  const projectOverlay = showProjectOverlay ? (
    <ul className="project-overlay">
      {projects.map((project) => {
        return (
          <li
            role="menuitem"
            key={project.projectId}
            onClick={() => {
              setShowProjectOverlay(false);
              setProject(project.projectId);
              setProjectName(project.name);
            }}
            onKeyDown={(e) => {
              if (e.type === 'Enter') {
                setShowProjectOverlay(false);
                setProject(project.projectId);
                setProjectName(project.name);
              }
            }}
          >
            {project.name}
          </li>
        );
      })}
    </ul>
  ) : null;
  return <>{projectOverlay}</>;
};

export default ProjectOverlay;
