/* eslint-disable operator-linebreak */
/* eslint-disable no-nested-ternary */
/* eslint-disable indent */
import { useState, useEffect } from 'react';
import moment from 'moment';
import { ProjectProps, GenericProject, TaskProps } from '../types/index';
import { firebase } from '../firebase';
import { collatedTasksExist } from '../helper/index';
import { CombineProps } from '../components/Task';

export const useProjects = () => {
  const [projects, setProjects] = useState<ProjectProps[]>([]);

  useEffect(() => {
    firebase
      .firestore()
      .collection('projects')
      .where('userId', '==', '2yb5pB8U4lkfaopj9unJ')
      .orderBy('projectId')
      .get()
      .then((snapshot) => {
        const newProjects = snapshot.docs.map((project) => {
          return {
            name: project.data().name,
            userId: project.data().userId,
            projectId: project.data().projectId,
            docId: project.id,
          };
        });
        if (JSON.stringify(newProjects) !== JSON.stringify(projects)) {
          setProjects(newProjects);
        }
      });
  }, [projects]);
  return { projects, setProjects };
};

export const useTasks = (selectedProject: string) => {
  const [tasks, setTasks] = useState<CombineProps[]>([]);
  const [archivedTasks, setArchivedTasks] = useState([]);
  useEffect(() => {
    let unsubcribe: any;
    unsubcribe = firebase
      .firestore()
      .collection('tasks')
      .where('userId', '==', '2yb5pB8U4lkfaopj9unJ');

    unsubcribe = !collatedTasksExist(selectedProject)
      ? unsubcribe.where('projectId', '==', selectedProject)
      : selectedProject === GenericProject.TODAY
      ? unsubcribe.where('date', '==', moment().format('DD/MM/YYYY'))
      : selectedProject === GenericProject.INBOX
      ? unsubcribe.where('date', '==', '')
      : unsubcribe;
    unsubcribe = unsubcribe.onSnapshot((snapshot: any) => {
      const newTasks = snapshot.docs.map((task: any) => {
        return {
          id: task.id,
          ...task.data(),
        };
      });
      setTasks(
        selectedProject === GenericProject.UPCOMING
          ? newTasks.filter((task: TaskProps) => {
              return (
                moment(task.date, 'DD-MM-YYYY').diff(moment(), 'days') <= 7 &&
                task.archived === false
              );
            })
          : newTasks.filter((task: TaskProps) => {
              return task.archived !== true;
            }),
      );
      setArchivedTasks(
        newTasks.filter((task: TaskProps) => {
          return task.archived !== false;
        }),
      );
    });
    return () => {
      unsubcribe();
    };
  }, [selectedProject]);
  return { tasks, archivedTasks };
};
