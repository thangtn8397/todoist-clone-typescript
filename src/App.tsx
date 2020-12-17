import React from 'react';
import './styles/App.scss';
import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';
import { SelectedProjectProvider } from './context/selected-project-context';

function App() {
  return (
    <SelectedProjectProvider>
      <div className="App">
        <Header />
        <Sidebar />
      </div>
    </SelectedProjectProvider>
  );
}

export default App;
