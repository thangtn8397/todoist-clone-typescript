import React from 'react';
import './styles/App.scss';
import Header from './components/layout/Header';
import { SelectedProjectProvider } from './contexts/selected-project-context';
import { ProjectsProvider } from './contexts/projects-context';
import Content from './components/layout/Content';
import { QuickAddTaskProvider } from './contexts/quick-add-task-context';

function App() {
  return (
    <SelectedProjectProvider>
      <QuickAddTaskProvider>
        <ProjectsProvider>
          <div className="App">
            <Header />
            <Content />
          </div>
        </ProjectsProvider>
      </QuickAddTaskProvider>
    </SelectedProjectProvider>
  );
}

export default App;
