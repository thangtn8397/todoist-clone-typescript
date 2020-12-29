/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

interface IQuickAddTask {
  showQuickAddTask: boolean;
  setShowQuickAddTask: (show: boolean) => void;
}
const initialContextValue = {
  showQuickAddTask: false,
  setShowQuickAddTask: (show = false) => {
    return undefined;
  },
};
export const QuickAddTaskContext = React.createContext<IQuickAddTask>(
  initialContextValue,
);

export const QuickAddTaskProvider: React.FC = ({ children }: any) => {
  const [showQuickAddTask, setShowQuickAddTask] = useState<boolean>(false);

  const value: IQuickAddTask = {
    showQuickAddTask,
    setShowQuickAddTask,
  };
  return (
    <QuickAddTaskContext.Provider value={value}>
      {children}
    </QuickAddTaskContext.Provider>
  );
};

export const useQuickAddTaskContext = () => {
  return React.useContext(QuickAddTaskContext);
};
