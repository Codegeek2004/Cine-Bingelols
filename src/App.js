import React from 'react';
import './App.css';
import Header from './components/header/header';
import SimpleBottomNavigation from './components/mainnav';

function App() {
  return (
    <>
      <Header />
      <div style={{ marginBottom: '60px' }}> {/* To avoid overlap */}
        Your content goes here
      </div>
      <SimpleBottomNavigation />
    </>
  );
}

export default App;
