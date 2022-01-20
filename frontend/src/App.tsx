import React from 'react';
import './App.css';
import AppProvider from './hooks';
import Home from './pages/Home';

const App: React.FC = () => {
  return (
    <AppProvider>
      <Home />
    </AppProvider>
  );
}

export default App;
