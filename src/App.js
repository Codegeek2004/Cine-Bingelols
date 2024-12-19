import React from 'react';
import './App.css';
import Header from './components/header/header';
import SimpleBottomNavigation from './components/mainnav';
import { BrowserRouter } from 'react-router-dom';
import Container from '@mui/material/Container'; // For Material-UI


function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className = "app">
      <Container>Movie App</Container>
      </div>
      <div style={{ marginBottom: '60px' }}> {/* To avoid overlap */}</div>
      <SimpleBottomNavigation />
    </BrowserRouter>
  );
}

export default App;
