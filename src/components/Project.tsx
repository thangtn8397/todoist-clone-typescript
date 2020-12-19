import React, { useState } from 'react';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import Modal from './UI/Modal';
import { ProjectProps } from '../types';
import { useSelectedProject } from '../contexts/selected-project-context';
import { useProjectsContext } from '../contexts/projects-context';
import { firebase } from '../firebase';

export const Project: React.FC<ProjectProps> = ({
  name,
  docId,
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
        docId === selectedProject
          ? 'active sidebar__project'
          : 'sidebar__project'
      }
    >
      <div
        role="button"
        tabIndex={-10}
        className="sidebar__project-title"
        onClick={() => {
          setSelectedProject(docId);
        }}
        onKeyDown={(event: React.KeyboardEvent) => {
          if (event.key === 'Enter') {
            setSelectedProject(docId);
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
          setConfirmDelete(true);
        }}
      >
        <span>
          <DeleteOutlineOutlinedIcon />
        </span>
      </button>

      <Modal
        showModal={confirmDelete}
        onCloseModal={() => {
          setConfirmDelete(false);
        }}
      >
        <div>
          <p>Are you sure you want to delete {name}?</p>
          <button
            type="button"
            onClick={() => {
              deleteProject(docId);
              setConfirmDelete(false);
            }}
          >
            delete
          </button>
        </div>
      </Modal>
    </li>
  );
};
