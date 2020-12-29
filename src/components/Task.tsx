/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/role-supports-aria-props */
import React from 'react';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import { TaskProps } from '../types';
import { firebase } from '../firebase';

export type CombineProps = TaskProps & {
  id: string;
};

const Task: React.FC<CombineProps> = ({ id, task }: CombineProps) => {
  const archiveTask = () => {
    firebase.firestore().collection('tasks').doc(id).update({
      archived: true,
    });
  };
  return (
    <div className="task">
      <div className="task__content">
        <div
          className="task__content-checkbox"
          role="button"
          aria-checked="mixed"
          onClick={() => {
            archiveTask();
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              archiveTask();
            }
          }}
        >
          <span />
        </div>
        <p className="task__content-text">{task}</p>
      </div>
      <div className="task__options">
        <span>
          <EditOutlinedIcon />
        </span>
        <span>
          <DeleteOutlineOutlinedIcon />
        </span>
      </div>
    </div>
  );
};

export default Task;
