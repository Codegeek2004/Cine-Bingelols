import React from 'react';
import './App.css';
import Header from './components/header/header';
import SimpleBottomNavigation from './components/mainnav';
import { BrowserRouter } from 'react-router-dom';
import Container from '@mui/material/Container'; // For Material-UI
import { Favorite } from '@mui/icons-material';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className = "app">
      <Container>
        <Switch>
          <Route path ='/' component={Trending}exact/>
          <Route path ='/search' component={Search}/>
          <Route path ='/movies' component={Movies}/>
          <Route path ='/series' component={Series}/>
          <Route path ='/favourites' component={Favorites}/>
        </Switch>
      </Container>
      </div>
      <div style={{ marginBottom: '60px' }}> {/* To avoid overlap */}</div>
      <SimpleBottomNavigation />
    </BrowserRouter>
  );
}

export default App;
