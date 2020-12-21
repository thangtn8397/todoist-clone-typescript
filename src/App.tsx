import React from 'react';
import './styles/App.scss';
import Header from './components/layout/Header';
import { SelectedProjectProvider } from './contexts/selected-project-context';
import { ProjectsProvider } from './contexts/projects-context';
import Content from './components/layout/Content';

function App() {
  return (
    <SelectedProjectProvider>
      <ProjectsProvider>
        <div className="App">
          <Header />
          <Content />
        </div>
      </ProjectsProvider>
    </SelectedProjectProvider>
  );
}

export default App;
