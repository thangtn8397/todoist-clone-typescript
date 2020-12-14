import { useState, useEffect } from 'react';
import { firebase } from '../firebase';
import { ProjectProps } from '../types';

export const useProjects = () => {
  const [projects, setProjects] = useState<ProjectProps[]>([]);

  useEffect(() => {
    firebase
      .firestore()
      .collection('projects')
      .where('userId', '==', 'giNWHTADl74VIo2u77Wu')
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
        setProjects(newProjects);
      });
  }, []);
  return { projects, useProjects };
};
