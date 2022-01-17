// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import '@devexpress/dx-react-chart-bootstrap4/dist/dx-react-chart-bootstrap4.css';
import AppProvider from './hooks';
import Home from './pages/Home';

function App() {
  return (
    <AppProvider>
      <Home />
    </AppProvider>
  );
}

export default App;
