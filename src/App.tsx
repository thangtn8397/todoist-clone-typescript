import React from 'react';
import './styles/App.scss';
import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';
import { SelectedProjectProvider } from './contexts/selected-project-context';
import { ProjectsProvider } from './contexts/projects-context';

function App() {
  return (
    <SelectedProjectProvider>
      <ProjectsProvider>
        <div className="App">
          <Header />
          <Sidebar />
        </div>
      </ProjectsProvider>
    </SelectedProjectProvider>
  );
}

export default App;
