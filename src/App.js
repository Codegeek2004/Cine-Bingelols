import React from 'react';
import './App.css';
import Header from './components/header/header';
import SimpleBottomNavigation from './components/mainnav';

function App() {
  return (
    <>
      <Header />
      <div className = "app">feff</div>
      <div style={{ marginBottom: '60px' }}> {/* To avoid overlap */}</div>
      <SimpleBottomNavigation />
    </>
  );
}

export default App;
