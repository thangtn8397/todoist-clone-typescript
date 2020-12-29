/* eslint-disable indent */
/* eslint-disable operator-linebreak */
import React, { useState } from 'react';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import AddIcon from '@material-ui/icons/Add';
import Modal from './UI/Modal';
import { useProjectsContext } from '../contexts/projects-context';
import { Project } from './Project';
import { firebase } from '../firebase';
import { generatePushId } from '../helper';

export const Projects: React.FC = () => {
  const { projects, setProjects } = useProjectsContext();
  const [showProjects, setShowProjects] = useState(true);
  const [projectName, setProjectName] = useState('');
  const [showAddProject, setShowAddProject] = useState(false);
  const projectId = generatePushId();

  const toggleProjects = () => {
    setShowProjects(!showProjects);
  };

  const addProject = () => {
    firebase
      .firestore()
      .collection('projects')
      .add({
        projectId,
        name: projectName,
        userId: '2yb5pB8U4lkfaopj9unJ',
      })
      .then(() => {
        setProjects([...projects]);
        setProjectName('');
        setShowAddProject(false);
      });
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

  const addProjectModal = showAddProject ? (
    <Modal
      showModal={showAddProject}
      closeModal={() => {
        setShowAddProject(false);
      }}
    >
      <input
        type="text"
        placeholder="Project name"
        onChange={(e) => {
          setProjectName(e.target.value);
        }}
      />
      <button
        type="button"
        onClick={() => {
          addProject();
        }}
      >
        Add
      </button>
      <button
        type="button"
        onClick={() => {
          setShowAddProject(false);
        }}
      >
        Add
      </button>
    </Modal>
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
        <button
          className="btn sidebar__btn--add"
          type="button"
          onClick={() => {
            setShowAddProject(true);
          }}
        >
          <AddIcon />
        </button>
        {addProjectModal}
      </div>
      {projectList}
    </div>
  );
};
