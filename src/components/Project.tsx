import React, { useState } from 'react';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import Modal from './UI/Modal';
import { ProjectProps } from '../types';
import { useSelectedProject } from '../contexts/selected-project-context';
import { useProjectsContext } from '../contexts/projects-context';
import { firebase } from '../firebase';

export const Project: React.FC<ProjectProps> = ({
  docId,
  projectId = 'inbox',
  name,
}: ProjectProps) => {
  const [confirmDelete, setConfirmDelete] = useState(false);
  const { selectedProject, setSelectedProject } = useSelectedProject();
  const { projects, setProjects } = useProjectsContext();
  const deleteProject = (id: string | undefined) => {
    firebase
      .firestore()
      .collection('projects')
      .doc(id)
      .delete()
      .then(() => {
        setProjects([...projects]);
        setSelectedProject('inbox');
      });
  };
  return (
    <li
      className={
        projectId === selectedProject
          ? 'active sidebar__project'
          : 'sidebar__project'
      }
    >
      <div
        role="button"
        tabIndex={0}
        className="sidebar__project-title"
        onClick={() => {
          setSelectedProject(projectId);
        }}
        onKeyDown={(event: React.KeyboardEvent) => {
          if (event.key === 'Enter') {
            setSelectedProject(projectId);
          }
        }}
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
          setConfirmDelete(!confirmDelete);
        }}
      >
        <span>
          <DeleteOutlineOutlinedIcon />
        </span>
      </button>

      <Modal
        showModal={confirmDelete}
        closeModal={() => {
          setConfirmDelete(!confirmDelete);
        }}
      >
        <div>
          <p>
            Are you sure you want to delete
            <span style={{ fontWeight: 'bold' }}> {name}</span>?
          </p>
          <button
            className="btn modal__btn--success"
            type="button"
            onClick={() => {
              deleteProject(docId);
              setConfirmDelete(!confirmDelete);
            }}
          >
            Delete
          </button>
          <button
            className="btn modal__btn--cancel"
            type="button"
            onClick={() => {
              setConfirmDelete(!confirmDelete);
            }}
          >
            Cancel
          </button>
        </div>
      </Modal>
    </li>
  );
};
