import React, { Fragment, useState } from 'react';
import moment from 'moment';
import { firebase } from '../firebase';
import { useSelectedProject } from '../contexts/selected-project-context';
import ProjectOverlay from './ProjectOverlay';
import Modal from './UI/Modal';
import { useQuickAddTaskContext } from '../contexts/quick-add-task-context';

const AddTask = () => {
  const [task, setTask] = useState('');
  const [showEditor, setShowEditor] = useState(false);
  const [showProjectOverlay, setShowProjectOverlay] = useState(false);
  const [project, setProject] = useState('');
  const [projectName, setProjectName] = useState('Inbox');

  const { showQuickAddTask, setShowQuickAddTask } = useQuickAddTaskContext();
  const { selectedProject } = useSelectedProject();

  let collatedDate = '';
  const projectId = project || selectedProject;

  const setInitState = () => {
    setShowQuickAddTask(false);
    setProjectName('Inbox');
    setShowProjectOverlay(false);
    setTask('');
    setShowEditor(false);
  };

  const addTask = () => {
    if (selectedProject === 'today') {
      collatedDate = moment().format('DD/MM/YYYY');
    } else if (selectedProject === 'upcoming') {
      collatedDate = moment().add(7, 'days').format('DD/MM/YYYY');
    }

    firebase
      .firestore()
      .collection('tasks')
      .add({
        archived: false,
        projectId,
        task,
        date: collatedDate,
        userId: '2yb5pB8U4lkfaopj9unJ',
      })
      .then(() => {
        setInitState();
      });
  };

  const editor = (
    <>
      <div className="add-task__editor">
        <input
          onChange={(e) => {
            setTask(e.target.value);
          }}
          value={task}
          type="text"
          name="task-input"
          placeholder="enter task"
        />
        <button type="button">Today</button>
        <button
          type="button"
          onClick={() => {
            setShowProjectOverlay(!showProjectOverlay);
          }}
        >
          {projectName}
        </button>
        <ProjectOverlay
          setProject={(proj) => {
            setProject(proj);
          }}
          setProjectName={setProjectName}
          showProjectOverlay={showProjectOverlay}
          setShowProjectOverlay={(show: boolean) => {
            setShowProjectOverlay(show);
          }}
        />
      </div>
      <div className="add-task__actions">
        <button
          className="btn add-task__actions-add"
          onClick={addTask}
          type="button"
          disabled={!task.length}
        >
          Add task
        </button>

        <button
          className="btn add-task__actions-cancel"
          type="button"
          onClick={() => {
            setInitState();
          }}
        >
          Cancel
        </button>
      </div>
    </>
  );

  return (
    <div className="add-task">
      {showQuickAddTask ? (
        <Modal
          showModal={showQuickAddTask}
          closeModal={() => {
            setShowQuickAddTask(false);
          }}
        >
          {editor}
        </Modal>
      ) : null}
      {showEditor ? editor : null}
      <button
        onClick={() => {
          setShowEditor(true);
        }}
        type="button"
        className="btn add-task__btn"
        style={showEditor ? { display: 'none' } : {}}
      >
        <span>+</span>Add task
      </button>
    </div>
  );
};

export default AddTask;
