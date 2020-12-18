import React from 'react';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import { ProjectProps } from '../types';
import { useSelectedProject } from '../contexts/selected-project-context';
import { useProjects } from '../hooks';
import { firebase } from '../firebase';

export const Project: React.FC<ProjectProps> = ({
  name,
  docId,
}: ProjectProps) => {
  const { selectedProject, setSelectedProject } = useSelectedProject();
  const { projects, setProjects } = useProjects();
  const deleteProject = (id: string | undefined) => {
    firebase.firestore().collection('projects').doc(id).delete();
    setProjects(projects);
  };
  return (
    <li
      className={
        docId === selectedProject
          ? 'active sidebar__project'
          : 'sidebar__project'
      }
    >
      <div
        role="button"
        tabIndex={-10}
        onClick={() => {
          console.log('clicked');
          setSelectedProject(docId);
        }}
        onKeyDown={(event: React.KeyboardEvent) => {
          if (event.key === 'Enter') {
            setSelectedProject(docId);
          }
        }}
        className="sidebar__project-title"
      >
        <span>
          <FiberManualRecordIcon />
        </span>
        {name}
      </div>
      <button
        type="button"
        className="btn sidebar__btn--delete"
        onClick={() => {
          deleteProject(docId);
        }}
      >
        <span>
          <DeleteOutlineOutlinedIcon />
        </span>
      </button>
    </li>
  );
};
